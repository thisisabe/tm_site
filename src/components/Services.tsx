"use client";

import { motion } from "framer-motion";

// ─── Animated service icons ──────────────────────────────────────────────────

function StrategyIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {/* Crosshair lines */}
      <motion.line x1="26" y1="2" x2="26" y2="50" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.line x1="2" y1="26" x2="50" y2="26" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      {/* Expanding rings */}
      <motion.circle cx="26" cy="26" r="6" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"
        animate={{ r: [5, 8, 5], opacity: [0.7, 0.2, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }} />
      <motion.circle cx="26" cy="26" r="13" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="none"
        animate={{ r: [12, 18, 12], opacity: [0.5, 0.1, 0.5] }}
        transition={{ duration: 3.5, delay: 0.7, repeat: Infinity, ease: "easeOut" }} />
      <motion.circle cx="26" cy="26" r="21" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none"
        animate={{ r: [20, 26, 20], opacity: [0.3, 0.06, 0.3] }}
        transition={{ duration: 3.5, delay: 1.4, repeat: Infinity, ease: "easeOut" }} />
      {/* Center dot */}
      <circle cx="26" cy="26" r="2" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {/* Drawing bezier path */}
      <motion.path
        d="M 6 38 C 14 18, 24 46, 34 26 C 40 14, 46 22, 46 22"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0.3, 0.8, 0.6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.8, 1] }}
      />
      {/* Trailing origin dot */}
      <motion.circle cx="6" cy="38" r="2" fill="rgba(255,255,255,0.4)"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.8, 1] }} />
      {/* Leading tip dot */}
      <motion.circle cx="46" cy="22" r="2" fill="rgba(255,255,255,0.55)"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 1] }} />
      {/* Faint grid reference lines */}
      <line x1="6" y1="6" x2="6" y2="46" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="46" y1="6" x2="46" y2="46" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <line x1="6" y1="26" x2="46" y2="26" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
    </svg>
  );
}

function AIIcon() {
  const nodes = [
    { cx: 10, cy: 10, delay: 0 },
    { cx: 42, cy: 10, delay: 0.5 },
    { cx: 10, cy: 42, delay: 1.0 },
    { cx: 42, cy: 42, delay: 1.5 },
  ];

  return (
    <svg width="68" height="68" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {/* Connecting lines */}
      {nodes.map((n, i) => (
        <motion.line key={i} x1={26} y1={26} x2={n.cx} y2={n.cy}
          stroke="rgba(255,255,255,0.15)" strokeWidth="0.7"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2.8, delay: n.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <motion.circle key={i} cx={n.cx} cy={n.cy} r="3"
          fill="rgba(255,255,255,0.28)"
          animate={{ opacity: [0.2, 0.75, 0.2], r: [2.5, 3.5, 2.5] }}
          transition={{ duration: 2.8, delay: n.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {/* Centre node pulse */}
      <motion.circle cx="26" cy="26" r="5" fill="rgba(255,255,255,0.0)"
        stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"
        animate={{ r: [4, 7, 4], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} />
      <motion.circle cx="26" cy="26" r="4" fill="rgba(255,255,255,0.4)"
        animate={{ r: [3.5, 5, 3.5], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

const services = [
  {
    number: "01",
    name: "Strategy",
    description: "Clarify the problem, align the room, and define the path forward.",
    Icon: StrategyIcon,
  },
  {
    number: "02",
    name: "Experience Design",
    description: "Design exceptional experiences for customers and teams.",
    Icon: DesignIcon,
  },
  {
    number: "03",
    name: "AI",
    description: "Identify where AI can deliver value in your business.",
    Icon: AIIcon,
  },
];

export default function Services() {
  return (
    <section
      className="flex items-center justify-center"
      style={{ minHeight: "max(80vh, 580px)" }}
    >
      <div className="w-full mx-auto max-w-6xl px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Heading — serif, same scale as mission text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-white/35 mb-14 text-center"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
        >
          Services
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/[0.08] p-10 flex flex-col gap-6 transition-colors duration-300 hover:border-white/[0.16]"
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

              {/* Animated icon */}
              <service.Icon />

              <div className="flex flex-col gap-3 mt-auto">
                <h3 className="font-display text-white text-xl leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
