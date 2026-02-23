"use client";

import { motion } from "framer-motion";

const founders = [
  {
    initials: "AG",
    name: "Abe Ghani",
    role: "Founder, Strategic Design Specialist",
    bio: "Strategist–builder who helps organisations move from intent to execution. He's the person teams bring in when strategic direction is unclear—Abe shapes the path forward then stays close to the work until there's a clean plan and real output in the world. He blends product thinking, design craft, modern tooling and AI-driven automation to remove friction, tighten operations, and unlock growth.",
  },
  {
    initials: "LP",
    name: "Lydie Petit",
    role: "Strategic Design Specialist",
    bio: "Lydie works with business at the point where ambition needs to meet reality: when everyone agrees the experience needs to improve, but the problem isn't yet clear. She leads the strategic and service design phase—combining qualitative and quantitative insight, sharp synthesis, and high-quality craft—to define what matters, why it matters, and what to do next.",
  },
];

export default function About() {
  return (
    <section className="border-t border-white/[0.06] mx-auto max-w-6xl px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-display text-white/35 mb-14 text-center"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
      >
        The founders
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6 transition-colors duration-300 hover:border-white/[0.16]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
            }}
          >
            {/* Top glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.04), transparent)" }}
              aria-hidden="true"
            />

            {/* Photo / initials placeholder */}
            <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
              <span className="font-display text-white/50 text-base">{founder.initials}</span>
            </div>

            {/* Name + role */}
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display text-white text-xl leading-snug">
                {founder.name}
              </h3>
              <p className="text-xs font-medium tracking-widest uppercase text-white/30">
                {founder.role}
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm text-white/45 leading-relaxed">
              {founder.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
