import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ServiceDetailProps {
  title: string;
  tagline: string;
  whoItsFor: string[];
  whatYouGet: string[];
  howItWorks: { title: string; description: string }[];
  format?: string[];
  cta: string;
  ctaParam: string;
}

export function ServiceDetailPage({
  title,
  tagline,
  whoItsFor,
  whatYouGet,
  howItWorks,
  format,
  cta,
  ctaParam,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-4xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-text-heading font-serif italic max-w-2xl">
            {tagline}
          </p>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium mb-8">
                Who it&rsquo;s for
              </h2>
              <ul className="space-y-3">
                {whoItsFor.map((item) => (
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
                What you get
              </h2>
              <ul className="space-y-3">
                {whatYouGet.map((item) => (
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

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-medium mb-12">
            How it works
          </h2>
          <div className="space-y-10 max-w-3xl">
            {howItWorks.map((step) => (
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

      {/* Format options */}
      {format && format.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <Container>
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">
              Format options
            </h2>
            <ul className="space-y-3">
              {format.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-body text-sm"
                >
                  <span className="text-text-muted mt-1">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-2xl mx-auto">
            Ready to get started?
          </h2>
          <div className="mt-10">
            <Button href={`/contact?service=${ctaParam}`}>{cta}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
