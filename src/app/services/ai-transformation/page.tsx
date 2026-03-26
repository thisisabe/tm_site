import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Transformation Programme",
  description:
    "Full-scale process redesign and AI platform builds for enterprise. We\u2019ve automated millions of annual interactions at scale.",
};

export default function AITransformationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-4xl">
            AI Transformation
          </h1>
          <p className="mt-4 text-xl text-text-heading font-serif italic max-w-2xl">
            Redesign how your organisation works.
          </p>
        </Container>
      </section>

      {/* Who & What */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium mb-8">
                Who it&rsquo;s for
              </h2>
              <ul className="space-y-3">
                {[
                  "Enterprise organisations with complex, multi-department operations",
                  "Businesses processing high volumes (thousands to millions of interactions per year)",
                  "Leadership teams with a mandate to modernise but no clear path",
                  "Organisations replacing legacy systems or overhauling service delivery",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-body text-sm leading-relaxed"
                  >
                    <span className="text-text-muted mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-medium mb-8">
                What this looks like
              </h2>
              <ul className="space-y-3">
                {[
                  "Strategic roadmap with business case and executive alignment",
                  "End-to-end process redesign \u2014 not just patching what exists",
                  "Platform architecture \u2014 selecting, integrating, and orchestrating AI vendors and tools across your stack",
                  "Multi-channel automation \u2014 live chat, email, phone/voice, internal workflows",
                  "Organisational change management \u2014 because technology only works if people adopt it",
                  "Outcomes measurement \u2014 tracked, reported, iterated",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-body text-sm leading-relaxed"
                  >
                    <span className="text-text-muted mt-1">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-medium mb-8">Proof</h2>
          <div className="max-w-3xl space-y-6 text-text-body leading-relaxed">
            <p>
              We&rsquo;ve done this at scale. At TFE Hotels, we redesigned guest
              communications orchestration across the hotel group and overhauled a
              service desk handling 3 million+ contacts per year — automating
              reservations, customer service, live chat, email, and voice.
            </p>
            <p>
              At Chapter, we built an autonomous clinic platform from scratch —
              removing administrative friction from every touchpoint in an
              integrative medicine practice.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-medium mb-12">
            How it works
          </h2>
          <div className="space-y-10 max-w-3xl">
            {[
              {
                title: "Month 1\u20132: Discovery & Strategy",
                description:
                  "Deep dive into your operations, stakeholder alignment, opportunity mapping, and strategic roadmap development.",
              },
              {
                title: "Month 3\u20136: Design & Build",
                description:
                  "Process redesign, platform architecture, vendor integration, and phased implementation.",
              },
              {
                title: "Month 6\u201312+: Scale & Optimise",
                description:
                  "Rollout across departments, change management, training, performance measurement, and continuous improvement.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="text-lg font-medium font-serif text-text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
            Ready to get started?
          </h2>
          <div className="mt-10">
            <Button href="/contact?service=transformation">
              Discuss Your Transformation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
