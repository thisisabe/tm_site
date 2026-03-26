import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Thinker Maker — Let\u2019s Talk AI",
  description:
    "Book a conversation about AI strategy, automation, or transformation. No pitch, no pressure — just a chat about what\u2019s possible.",
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
              Let&rsquo;s talk
            </h1>
            <div className="space-y-4 text-text-body leading-relaxed mb-10">
              <p>
                Whether you&rsquo;ve got a specific project in mind or just want
                to explore what AI could do for your business, we&rsquo;re happy
                to chat. No pitch. No pressure. Just a conversation.
              </p>
              <p>
                Typically, a 30-minute call is enough to figure out if
                we&rsquo;re the right fit and what the next step looks like.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm">
                <span className="text-text-label">Email: </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-text-heading hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-sm">
                <span className="text-text-label">Location: </span>
                <span className="text-text-body">Sydney, Australia</span>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
