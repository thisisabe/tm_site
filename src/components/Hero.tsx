"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  onVisibilityChange: (inView: boolean) => void;
  onContactClick: () => void;
}

export default function Hero({ onVisibilityChange, onContactClick }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [onVisibilityChange]);

  return (
    <section
      ref={heroRef}
      className="flex flex-col px-8 md:px-16 lg:px-24"
      style={{ minHeight: "max(75vh, 600px)" }}
    >
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24 shrink-0" />

      {/* Vertically centred content */}
      <div className="flex-1 flex flex-col justify-center pb-16 md:pb-24">
        <h1
          className="font-black leading-[0.88] tracking-tight max-w-5xl"
          style={{ fontSize: "clamp(2.75rem, 7vw, 7rem)" }}
        >
          Turn &ldquo;we should&rdquo;
          <br />
          into &ldquo;it&rsquo;s done.&rdquo;
        </h1>

        <div className="mt-10 md:mt-14">
          <button
            onClick={onContactClick}
            className="border-2 border-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
