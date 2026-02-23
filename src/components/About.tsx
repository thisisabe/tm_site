"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Abe Ghani",
    role: "Founder, Strategic Design Specialist",
    bio: "Strategist–builder who helps organisations move from intent to execution. He's the person teams bring in when strategic direction is unclear—Abe shapes the path forward then stays close to the work until there's a clean plan and real output in the world. He blends product thinking, design craft, modern tooling and AI-driven automation to remove friction, tighten operations, and unlock growth.",
    photo: "/ag_bw.png",
    photoLeft: true,
  },
  {
    name: "Lydie Petit",
    role: "Strategic Design Specialist",
    bio: "Lydie works with business at the point where ambition needs to meet reality: when everyone agrees the experience needs to improve, but the problem isn't yet clear. She leads the strategic and service design phase—combining qualitative and quantitative insight, sharp synthesis, and high-quality craft—to define what matters, why it matters, and what to do next.",
    photo: "/lp_bw.png",
    photoLeft: false,
  },
];

export default function About() {
  return (
    <section className="border-t border-white/[0.06] mx-auto max-w-6xl px-6 md:px-12 lg:px-16 py-24 md:py-32">
      {/* Section heading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-display text-white/35 mb-16 text-center"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
      >
        The founders
      </motion.p>

      {/* Founder rows */}
      <div className="flex flex-col">
        {founders.map((founder, i) => (
          <div key={founder.name}>
            {/* Divider between rows */}
            {i > 0 && <div className="border-t border-white/[0.06] my-16 md:my-20" />}

            <div
              className={`flex flex-col ${founder.photoLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
            >
              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full md:w-[42%] shrink-0"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover object-top transition-opacity duration-500 group-hover:opacity-100"
                    style={{ filter: "grayscale(1)", opacity: 0.82 }}
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  {/* Subtle vignette */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-5 md:py-8"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-white leading-snug" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {founder.name}
                  </h3>
                  <p className="text-xs font-medium tracking-widest uppercase text-white/30">
                    {founder.role}
                  </p>
                </div>
                <p className="text-sm text-white/50 leading-relaxed max-w-lg">
                  {founder.bio}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
