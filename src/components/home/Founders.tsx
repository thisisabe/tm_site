import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOUNDERS } from "@/lib/constants";

export function Founders() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading>Who you&rsquo;ll work with</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {FOUNDERS.map((founder) => (
            <div key={founder.name}>
              {/* Photo placeholder — shows a grey rectangle until real photos are added */}
              <div className="aspect-[4/5] rounded-2xl bg-surface-light mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-text-muted text-sm font-sans">
                    Photo
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium mb-1">
                {founder.name}
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-text-label font-sans mb-4">
                {founder.role}
              </p>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                {founder.bio}
              </p>
              <p className="text-xs text-text-muted font-sans">
                <span className="text-text-label">Specialises in:</span>{" "}
                {founder.specialisations.join(", ")}.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
