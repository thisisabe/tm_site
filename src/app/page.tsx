import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { Founders } from "@/components/home/Founders";
import { BottomCTA } from "@/components/home/BottomCTA";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Mission statement — full-width serif text */}
      <section className="py-20 sm:py-28 border-t border-border">
        <Container className="text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-text-heading leading-[1.4] max-w-4xl mx-auto font-medium">
            We help ambitious teams cut through noise, make better decisions, and
            turn complex ideas into real progress — combining strategy, design,
            and AI to move from uncertainty to real world solutions.
          </p>
        </Container>
      </section>

      <ServicesOverview />
      <CaseStudies />
      <ClientLogos />
      <Testimonials />
      <Founders />
      <BottomCTA />
    </>
  );
}
