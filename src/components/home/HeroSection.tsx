import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-10 inline-flex items-center rounded-full border border-border-light px-5 py-2">
          <span className="text-xs tracking-[0.25em] uppercase text-text-label font-sans font-medium">
            Strategy &bull; Design &bull; AI
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] tracking-tight max-w-4xl">
          AI that works in your business.
          <br />
          Not theory. Not hype.
        </h1>

        {/* Subheadline */}
        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-text-body leading-relaxed">
          We embed AI into your operations — grounded in 40 years of designing
          products, services, and experiences people actually use.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button href="/contact">Talk to Abe</Button>
        </div>
      </Container>
    </section>
  );
}
