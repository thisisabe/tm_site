import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { postsQuery } from "@/sanity/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Thinker Maker",
  description:
    "Insights on strategy, design, AI, and building ventures that matter.",
};

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  featuredImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author?: { name: string };
  categories?: { title: string; slug: { current: string } }[];
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <>
      <Header heroInView={false} />

      <main className="min-h-screen pb-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        {/* Page header */}
        <div className="pt-36 pb-12 mb-12 border-b border-white/[0.06]">
          <p className="text-xs uppercase tracking-widest text-white/35 mb-4">
            Thinker Maker
          </p>
          <h1
            className="font-display bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.08 }}
          >
            Ideas worth sharing
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Insights on strategy, design, AI, and building ventures that matter.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-white/35 text-base">
            Nothing published yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.045]"
              >
                <article>
                  {post.featuredImage?.asset && (
                    <div className="relative aspect-[16/9] mb-5 rounded-xl overflow-hidden bg-white/5">
                      <Image
                        src={urlFor(post.featuredImage)
                          .width(800)
                          .height(450)
                          .url()}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((cat) => (
                        <span
                          key={cat.slug.current}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs uppercase tracking-widest text-white/40"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="font-display text-xl md:text-2xl mb-2 leading-snug group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                    {post.author?.name && <span>{post.author.name}</span>}
                    {post.author?.name && post.publishedAt && (
                      <span className="h-1 w-1 rounded-full bg-white/20 inline-block" />
                    )}
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
