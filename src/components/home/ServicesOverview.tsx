import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_TIERS } from "@/lib/constants";

const icons = [
  // Strategy / target icon
  <svg key="boot" viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-text-muted">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.7" />
  </svg>,
  // Flow / workflow icon
  <svg key="flow" viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-text-muted">
    <path d="M8 32 Q16 20 24 28 Q32 36 40 24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <circle cx="8" cy="32" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="24" cy="28" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="24" r="2" fill="currentColor" opacity="0.4" />
  </svg>,
  // Network / transformation icon
  <svg key="net" viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-text-muted">
    <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="32" cy="16" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="24" cy="32" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="28" r="2" fill="currentColor" opacity="0.2" />
    <line x1="16" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="16" y1="16" x2="24" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="32" y1="16" x2="24" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>,
];

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading>Three ways we work with you</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_TIERS.map((tier, i) => (
            <Link
              key={tier.slug}
              href={`/services/${tier.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-8 sm:p-10 transition-colors hover:border-border-light"
            >
              <div className="mb-8">{icons[i]}</div>
              <h3 className="text-xl sm:text-2xl font-medium mb-3">
                {tier.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                {tier.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
