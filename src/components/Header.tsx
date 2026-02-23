"use client";

import Image from "next/image";

interface HeaderProps {
  heroInView: boolean;
}

export default function Header({ heroInView }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-6 flex items-center transition-all duration-300"
      style={{
        backgroundColor: heroInView ? "transparent" : "#ffffff",
        borderBottom: heroInView ? "none" : "2px solid #000000",
      }}
    >
      {/* Desktop: morphing logo area */}
      <div className="relative hidden md:block" style={{ height: 32, width: 120 }}>
        {/* Wordmark – visible when hero is in view */}
        <div
          className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "scale(1)" : "scale(0.85)",
            pointerEvents: heroInView ? "auto" : "none",
          }}
          aria-hidden={!heroInView}
        >
          <Image
            src="/TM_wordmark_blk.svg"
            alt="Thinker Maker"
            width={120}
            height={19}
            priority
          />
        </div>

        {/* Venn logomark – visible after scroll */}
        <div
          className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: heroInView ? 0 : 1,
            transform: heroInView ? "scale(0.85)" : "scale(1)",
            pointerEvents: heroInView ? "none" : "auto",
          }}
          aria-hidden={heroInView}
        >
          <Image
            src="/TM_logomark_blk.svg"
            alt="Thinker Maker"
            width={48}
            height={32}
            priority
          />
        </div>
      </div>

      {/* Mobile: always show Venn logomark */}
      <div className="md:hidden">
        <Image
          src="/TM_logomark_blk.svg"
          alt="Thinker Maker"
          width={40}
          height={27}
          priority
        />
      </div>
    </header>
  );
}
