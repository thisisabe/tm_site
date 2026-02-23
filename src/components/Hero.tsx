"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

// ─── Abstract particle background ────────────────────────────────────────────

const DOTS = [
  { cx: "7%",  cy: "18%", delay: 0 },
  { cx: "14%", cy: "62%", delay: 1.2 },
  { cx: "22%", cy: "35%", delay: 2.6 },
  { cx: "36%", cy: "10%", delay: 0.6 },
  { cx: "44%", cy: "75%", delay: 1.9 },
  { cx: "58%", cy: "22%", delay: 3.1 },
  { cx: "65%", cy: "55%", delay: 0.3 },
  { cx: "74%", cy: "14%", delay: 2.0 },
  { cx: "80%", cy: "70%", delay: 1.5 },
  { cx: "89%", cy: "38%", delay: 0.9 },
  { cx: "93%", cy: "82%", delay: 2.4 },
  { cx: "28%", cy: "52%", delay: 3.6 },
  { cx: "51%", cy: "88%", delay: 1.1 },
  { cx: "70%", cy: "90%", delay: 2.8 },
];

const LINES = [
  { x1: "7%",  y1: "18%", x2: "22%", y2: "35%", delay: 0.5 },
  { x1: "36%", y1: "10%", x2: "58%", y2: "22%", delay: 1.3 },
  { x1: "65%", y1: "55%", x2: "80%", y2: "70%", delay: 1.8 },
  { x1: "74%", y1: "14%", x2: "89%", y2: "38%", delay: 0.8 },
  { x1: "22%", y1: "35%", x2: "28%", y2: "52%", delay: 2.2 },
  { x1: "44%", y1: "75%", x2: "51%", y2: "88%", delay: 1.6 },
];

function HeroParticles() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      {LINES.map((l, i) => (
        <motion.line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.6"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 4.5, delay: l.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {DOTS.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx} cy={d.cy} r="1.5"
          fill="rgba(255,255,255,0.22)"
          animate={{ opacity: [0.15, 0.65, 0.15], r: [1.2, 2.2, 1.2] }}
          transition={{ duration: 3.8, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

interface HeroProps {
  onVisibilityChange: (inView: boolean) => void;
  onContactClick: () => void;
}

export default function Hero({ onVisibilityChange, onContactClick }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => onVisibilityChange(entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [onVisibilityChange]);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "max(85vh, 640px)" }}
    >
      {/* Particle constellation */}
      <HeroParticles />

      {/* Mesh gradient background */}
      <MeshGradient
        colors={["#000000", "#141414", "#000000", "#050505"]}
        distortion={0.8}
        swirl={0.1}
        speed={1}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        aria-hidden
      />

      {/* Header spacer */}
      <div className="h-24 shrink-0" />

      {/* Content */}
      <div className="relative flex flex-col items-center px-6 md:px-12 pb-20">
        {/* Pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50 tracking-widest uppercase backdrop-blur-sm"
        >
          Strategy
          <span className="h-1 w-1 rounded-full bg-white/40 inline-block" />
          Design
          <span className="h-1 w-1 rounded-full bg-white/40 inline-block" />
          AI
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display max-w-3xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)", lineHeight: 1.1 }}
        >
          Turn &ldquo;we should&rdquo;
          <br />
          into &ldquo;it&rsquo;s done.&rdquo;
        </motion.h1>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <button
            onClick={onContactClick}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
