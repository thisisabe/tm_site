"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LiquidMetal } from "@paper-design/shaders-react";

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
      {/* Header spacer */}
      <div className="h-24 shrink-0" />

      {/* Content */}
      <div className="relative flex flex-col items-center px-6 md:px-12 pb-20">
        {/* LiquidMetal visual mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
          style={{ width: 120, height: 80 }}
        >
          <LiquidMetal
            image="/TM_logomark_wht.svg"
            colorBack="#000000"
            colorTint="#ffffff"
            shape="none"
            repetition={2}
            softness={0.1}
            shiftRed={0.3}
            shiftBlue={0.3}
            distortion={0.07}
            contour={0.4}
            angle={70}
            speed={1}
            scale={0.6}
            rotation={0}
            offsetX={0}
            offsetY={0}
            fit="contain"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              mixBlendMode: "screen",
            }}
            aria-hidden
          />
        </motion.div>

        {/* Pill tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
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
