import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for known posts
export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata from the post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return { title: "Post Not Found | Thinker Maker" };
  }

  return {
    title: `${post.title} | Thinker Maker`,
    description: post.excerpt || "",
  };
}

// Portable Text components for rendering rich content
const portableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { asset: { _ref: string }; alt?: string; caption?: string };
    }) => (
      <figure className="my-8">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-white/5">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value.alt || ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-2 text-center text-sm text-white/40">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-[family-name:var(--font-display)] text-3xl mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-semibold text-xl mt-10 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="font-semibold text-lg mt-8 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-white/20 pl-6 my-6 text-white/60 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/70 leading-relaxed mb-5">{children}</p>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header heroInView={false} />

      <article className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/60 transition-colors mb-8"
        >
          &larr; Back to blog
        </Link>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.categories.map(
              (cat: { title: string; slug: { current: string } }) => (
                <span
                  key={cat.slug.current}
                  className="text-xs uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1"
                >
                  {cat.title}
                </span>
              )
            )}
          </div>
        )}

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-white/40 mb-8">
          {post.author?.image && (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          {post.author?.name && <span>{post.author.name}</span>}
          {post.publishedAt && (
            <>
              <span>&middot;</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </>
          )}
        </div>

        {/* Featured image */}
        {post.featuredImage?.asset && (
          <div className="relative aspect-[16/9] mb-10 rounded-lg overflow-hidden bg-white/5">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(675).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        {/* Body */}
        {post.body && (
          <div className="prose-invert">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        )}
      </article>

      <Footer />
    </>
  );
}
