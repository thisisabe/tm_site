"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative border-y border-white/[0.06] overflow-hidden">
      {/* Gradient fill */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(104deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative mx-auto max-w-4xl px-6 md:px-12 lg:px-16 flex items-center justify-center"
        style={{ minHeight: "max(80vh, 580px)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-white/80 text-center"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          We help ambitious teams cut through noise, make better
          decisions, and turn complex ideas into real progress &mdash; combining
          strategy, design, and AI to move from uncertainty to real world solutions.
        </motion.p>
      </div>
    </section>
  );
}
