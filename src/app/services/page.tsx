import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProcessStep } from "@/components/services/ProcessStep";
import { SERVICE_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Services — Boot Camp, Workflow Automation, Transformation",
  description:
    "Three ways to bring AI into your business. From executive boot camps to enterprise-scale transformation, grounded in human-centred design.",
};

const process = [
  {
    title: "Understand",
    description:
      "We listen first. What\u2019s the real problem? Where\u2019s the friction? What does success look like? No assumptions.",
  },
  {
    title: "Design",
    description:
      "We map the opportunity, prototype solutions, and test what works — before committing to build. Human-centred, always.",
  },
  {
    title: "Build & Embed",
    description:
      "We implement alongside your team. AI that integrates into your operations, not bolted on from the outside.",
  },
  {
    title: "Support & Scale",
    description:
      "We don\u2019t disappear after launch. Ongoing support, iteration, and scaling as your AI maturity grows.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-4xl mx-auto">
            AI services built around how you actually work
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-body leading-relaxed">
            Every business is different. That&rsquo;s why we offer three ways to
            work together — from a focused two-day intensive to a full-scale
            transformation programme.
          </p>
        </Container>
      </section>

      {/* Service tiers */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="space-y-8">
            {SERVICE_TIERS.map((tier, i) => (
              <div
                key={tier.slug}
                className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16"
              >
                <div className="max-w-3xl">
                  <p className="text-xs tracking-[0.2em] uppercase text-text-label font-sans mb-4">
                    Tier {i + 1}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-medium mb-3">
                    {tier.title}
                  </h2>
                  <p className="text-lg text-text-heading font-serif italic mb-6">
                    {tier.tagline}
                  </p>
                  <p className="text-text-body leading-relaxed mb-8">
                    {tier.description}
                  </p>
                  <Link
                    href={`/services/${tier.slug}`}
                    className="text-sm text-text-heading font-sans hover:text-white transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-center mb-16">
            How we work
          </h2>
          <div className="max-w-2xl mx-auto space-y-10">
            {process.map((step, i) => (
              <ProcessStep
                key={step.title}
                number={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-3xl mx-auto">
            Not sure which track is right?
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Let&rsquo;s figure it out together. A 30-minute conversation is all
            it takes.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to Abe</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
