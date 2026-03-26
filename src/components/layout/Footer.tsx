import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-sans font-medium text-text-heading mb-4 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ai-boot-camp" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  AI Boot Camp
                </Link>
              </li>
              <li>
                <Link href="/services/ai-workflows" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  AI Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/ai-transformation" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  AI Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-sans font-medium text-text-heading mb-4 tracking-wide uppercase">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#abe" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  Abe Ghani
                </Link>
              </li>
              <li>
                <Link href="/about#lydie" className="text-sm text-text-muted hover:text-text-body transition-colors">
                  Lydie Petit
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-sans font-medium text-text-heading mb-4 tracking-wide uppercase">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-text-muted hover:text-text-body transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-sm text-text-muted">Sydney, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xl tracking-tight">
              <span className="font-serif font-bold text-text-heading">Thinker</span>
              <span className="font-sans font-light text-text-heading">Maker</span>
            </span>
          </div>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Thinker Maker. ABN 90 479 833 494.
          </p>
        </div>
      </Container>
    </footer>
  );
}
