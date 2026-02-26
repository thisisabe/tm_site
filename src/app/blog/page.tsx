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

// Revalidate every 60 seconds
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

      <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl mb-4">
          Blog
        </h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Insights on strategy, design, AI, and building ventures that matter.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/40 text-lg">
            Nothing published yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <article>
                  {post.featuredImage?.asset && (
                    <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-white/5">
                      <Image
                        src={urlFor(post.featuredImage)
                          .width(800)
                          .height(450)
                          .url()}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  {post.categories && post.categories.length > 0 && (
                    <div className="flex gap-2 mb-2">
                      {post.categories.map((cat) => (
                        <span
                          key={cat.slug.current}
                          className="text-xs uppercase tracking-wider text-white/40"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="font-[family-name:var(--font-display)] text-2xl mb-2 group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-3 flex items-center gap-2 text-xs text-white/30">
                    {post.author?.name && <span>{post.author.name}</span>}
                    {post.author?.name && post.publishedAt && (
                      <span>&middot;</span>
                    )}
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-AU",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
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
