import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI strategy, workflow automation, and digital transformation from the Thinker Maker team.",
};

export default function BlogPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <h1 className="text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight mb-6">
          Blog
        </h1>
        <p className="text-lg text-text-body max-w-xl mx-auto">
          We&rsquo;re working on something. Check back soon for insights on AI
          strategy, automation, and transformation.
        </p>
      </Container>
    </section>
  );
}
