import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FOUNDERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Thinker Maker — Abe Ghani & Lydie Petit",
  description:
    "40 years combined experience in product design, service design, digital strategy, and AI. Founder-led, hands-on, outcome-driven.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-4xl">
            Strategy, design, and AI — applied.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-body leading-relaxed">
            We&rsquo;re Abe and Lydie. Between us, 40 years of building
            products, services, and experiences that work. Now we embed AI into
            organisations with the same rigour.
          </p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">
              Our story
            </h2>
            <div className="space-y-6 text-text-body leading-relaxed">
              <p>
                Thinker Maker exists because we kept seeing the same problem:
                businesses know AI matters, but they&rsquo;re stuck. Stuck in
                hype cycles, stuck with consultants who deliver slide decks
                instead of outcomes, stuck with tools that don&rsquo;t
                integrate.
              </p>
              <p>
                We built Thinker Maker to fix that. We bring deep experience in
                product design, service design, digital strategy, and venture
                building — and we apply it to AI. Every engagement is hands-on,
                founder-led, and outcome-driven.
              </p>
              <p className="text-text-heading font-serif text-lg italic">
                We don&rsquo;t do theory. We do the work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center mb-16">
            The founders
          </h2>
          <div className="space-y-24">
            {FOUNDERS.map((founder, i) => (
              <div
                key={founder.name}
                id={i === 0 ? "abe" : "lydie"}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Photo */}
                <div className="aspect-[4/5] rounded-2xl bg-surface-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-text-muted text-sm font-sans">
                      Photo
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-medium mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-text-label font-sans mb-6">
                    {founder.role}
                  </p>
                  <p className="text-text-body leading-relaxed mb-8">
                    {founder.bio}
                  </p>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-text-label font-sans mb-3">
                      Key expertise
                    </p>
                    <ul className="space-y-2">
                      {founder.specialisations.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 text-text-body text-sm"
                        >
                          <span className="text-text-muted mt-1">&#8226;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight">
            Want to work with us?
          </h2>
          <div className="mt-10">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
