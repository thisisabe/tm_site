function getApiUrl(): string {
  const url = process.env.WORDPRESS_API_URL;
  if (!url) {
    throw new Error("WORDPRESS_API_URL environment variable is not set");
  }
  return url;
}

// --- Types ---

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
}

interface WPAuthor {
  name: string;
  avatar_urls?: Record<string, string>;
}

interface WPMedia {
  source_url: string;
  alt_text?: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}

interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

// --- Normalized types used by the blog pages ---

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  featuredImage?: { url: string; alt: string; width: number; height: number };
  author?: { name: string; avatar?: string };
  categories: { title: string; slug: string }[];
}

// --- Helpers ---

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function normalizePost(wp: WPPost): Post {
  const media = wp._embedded?.["wp:featuredmedia"]?.[0];
  const author = wp._embedded?.author?.[0];
  const terms = wp._embedded?.["wp:term"]?.flat() ?? [];
  const categories = terms
    .filter((t) => t.taxonomy === "category")
    .map((t) => ({ title: t.name, slug: t.slug }));

  return {
    id: wp.id,
    title: wp.title.rendered,
    slug: wp.slug,
    excerpt: stripHtml(wp.excerpt.rendered),
    content: wp.content.rendered,
    publishedAt: wp.date,
    featuredImage: media
      ? {
          url: media.source_url,
          alt: media.alt_text || wp.title.rendered,
          width: media.media_details?.width ?? 1200,
          height: media.media_details?.height ?? 675,
        }
      : undefined,
    author: author
      ? { name: author.name, avatar: author.avatar_urls?.["96"] }
      : undefined,
    categories,
  };
}

// --- API functions ---

async function wpFetch<T>(endpoint: string): Promise<T> {
  // WordPress.com sites use the public API proxy
  const site = getApiUrl().replace(/^https?:\/\//, "");
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/${site}${endpoint}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await wpFetch<WPPost[]>(
    "/posts?_embed&per_page=100&orderby=date&order=desc"
  );
  return posts.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await wpFetch<WPPost[]>(`/posts?_embed&slug=${encodeURIComponent(slug)}`);
  if (posts.length === 0) return null;
  return normalizePost(posts[0]);
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await wpFetch<WPPost[]>("/posts?per_page=100&_fields=slug");
  return posts.map((p) => p.slug);
}
