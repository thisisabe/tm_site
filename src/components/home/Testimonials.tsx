import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/types";

// Placeholder — section is hidden until at least 2 testimonials are available
const testimonials: Testimonial[] = [];

export function Testimonials() {
  if (testimonials.length < 2) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading>What our clients say</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
            >
              <blockquote className="text-lg font-serif text-text-heading leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-sans font-medium text-text-heading">
                  {t.name}
                </p>
                <p className="text-xs text-text-muted font-sans">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
