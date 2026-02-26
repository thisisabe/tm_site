import { groq } from "next-sanity";

// All published posts, newest first
export const postsQuery = groq`*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featuredImage,
  "author": author->{ name, image },
  "categories": categories[]->{ title, slug }
}`;

// Single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  featuredImage,
  "author": author->{ name, image, bio },
  "categories": categories[]->{ title, slug }
}`;

// All post slugs (for static generation)
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
