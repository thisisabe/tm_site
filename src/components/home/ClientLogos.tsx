import { Container } from "@/components/ui/Container";

const clients = ["TFE Hotels", "Chapter"];

export function ClientLogos() {
  if (clients.length < 4) {
    // Show a simple row when fewer than 4 logos available
    return (
      <section className="py-16 sm:py-20">
        <Container>
          <p className="text-center text-xs tracking-[0.25em] uppercase text-text-muted font-sans mb-10">
            Trusted by
          </p>
          <div className="flex items-center justify-center gap-12 sm:gap-16">
            {clients.map((name) => (
              <span
                key={name}
                className="text-lg sm:text-xl font-serif text-text-muted/50"
              >
                {name}
              </span>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return null;
}
