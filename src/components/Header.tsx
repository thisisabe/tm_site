"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  heroInView: boolean;
}

export default function Header({ heroInView }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between transition-all duration-300"
      style={
        heroInView
          ? { background: "transparent" }
          : {
              background: "rgba(8,8,8,0.80)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }
      }
    >
      {/* Desktop: morphing logo */}
      <Link
        href="/"
        aria-label="Thinker Maker – home"
        className="relative hidden md:block focus:outline-none"
        style={{ height: 52, width: 192 }}
      >
        {/* Wordmark */}
        <div
          className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "scale(1) translateY(0)" : "scale(0.88) translateY(-4px)",
            pointerEvents: heroInView ? "auto" : "none",
          }}
          aria-hidden={!heroInView}
        >
          <Image
            src="/TM_wordmark_wht.svg"
            alt="Thinker Maker"
            width={192}
            height={30}
            priority
          />
        </div>

        {/* Venn logomark */}
        <div
          className="absolute inset-0 flex items-center transition-all duration-300 ease-in-out"
          style={{
            opacity: heroInView ? 0 : 1,
            transform: heroInView ? "scale(0.88) translateY(4px)" : "scale(1) translateY(0)",
            pointerEvents: heroInView ? "none" : "auto",
          }}
          aria-hidden={heroInView}
        >
          <Image
            src="/TM_logomark_wht.svg"
            alt="Thinker Maker"
            width={64}
            height={43}
            priority
          />
        </div>
      </Link>

      {/* Mobile: always Venn logomark */}
      <Link href="/" aria-label="Thinker Maker – home" className="md:hidden focus:outline-none">
        <Image
          src="/TM_logomark_wht.svg"
          alt="Thinker Maker"
          width={50}
          height={34}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <Link
          href="/blog"
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-xs uppercase tracking-[0.15em] text-white/50 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.04)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/50 transition-colors duration-300 group-hover:bg-white/80" />
          </span>
          Blog
        </Link>
      </nav>
    </header>
  );
}
