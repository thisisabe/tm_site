import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BottomCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-3xl mx-auto">
          Whether you&rsquo;re launching a new idea, or on the cusp of a
          transformation — Let&rsquo;s talk
        </h2>
        <div className="mt-10">
          <Button href="/contact">Contact Abe</Button>
        </div>
      </Container>
    </section>
  );
}
