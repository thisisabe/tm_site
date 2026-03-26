import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudies() {
  const visibleStudies = CASE_STUDIES.filter(
    (cs) => cs.headline !== "Coming soon"
  );

  if (visibleStudies.length === 0) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading>What it looks like in practice</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleStudies.map((study) => (
            <div
              key={study.client}
              className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-text-label font-sans mb-4">
                {study.client}
              </p>
              <h3 className="text-xl sm:text-2xl font-medium mb-4">
                {study.headline}
              </h3>
              <p className="text-text-body text-sm leading-relaxed mb-6">
                {study.summary}
              </p>
              {study.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {study.link && (
                <a
                  href={study.link}
                  className="text-sm text-text-heading hover:text-white transition-colors font-sans"
                >
                  Read the full story &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
