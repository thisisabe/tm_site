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

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

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

const portableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { asset: { _ref: string }; alt?: string; caption?: string };
    }) => (
      <figure className="my-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value.alt || ""}
            fill
            className="object-cover brightness-90"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-3 text-center text-xs text-white/35 tracking-wide">
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
      <h2 className="font-display text-3xl mt-12 mb-4 leading-tight">
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
      <blockquote className="border-l-2 border-white/20 pl-6 my-8 text-white/55 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/65 leading-relaxed mb-5">{children}</p>
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

      <article className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/35 hover:text-white/60 border border-white/[0.07] rounded-full px-4 py-2 transition-colors duration-200 mb-10"
        >
          ← Back to blog
        </Link>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.categories.map(
              (cat: { title: string; slug: { current: string } }) => (
                <span
                  key={cat.slug.current}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/40"
                >
                  {cat.title}
                </span>
              )
            )}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl mb-5 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-white/35 mb-10 pb-8 border-b border-white/[0.06]">
          {post.author?.image && (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full opacity-70"
            />
          )}
          {post.author?.name && <span>{post.author.name}</span>}
          {post.publishedAt && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/20 inline-block" />
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
          <div className="relative aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-white/5">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(675).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover brightness-90"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        {/* Body */}
        {post.body && (
          <PortableText
            value={post.body}
            components={portableTextComponents}
          />
        )}
      </article>

      <Footer />
    </>
  );
}
