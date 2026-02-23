"use client";

import { motion } from "framer-motion";

interface ContactCTAProps {
  onContactClick: () => void;
}

export default function ContactCTA({ onContactClick }: ContactCTAProps) {
  return (
    <section
      className="relative border-t border-white/[0.06] overflow-hidden flex items-center justify-center"
      style={{ minHeight: "max(80vh, 580px)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(255,255,255,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 md:px-12 text-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-white/80 mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Whether you&rsquo;re launching a new idea, or on the cusp of a
          transformation &mdash; Let&rsquo;s talk
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={onContactClick}
            className="rounded-full bg-white text-black px-10 py-4 text-sm font-semibold transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          >
            Contact Abe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
