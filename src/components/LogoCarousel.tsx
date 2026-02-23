"use client";

import { useEffect, useState } from "react";

const logos = [
  { id: 1, name: "NEXUS", style: { fontWeight: 900, letterSpacing: "0.3em", fontSize: "1rem" } },
  { id: 2, name: "ATLAS", style: { fontWeight: 700, letterSpacing: "0.2em", fontSize: "1.15rem" } },
  { id: 3, name: "VERTEX", style: { fontWeight: 300, letterSpacing: "0.15em", fontSize: "1.3rem" } },
  { id: 4, name: "MERIDIAN", style: { fontWeight: 900, letterSpacing: "0.05em", fontSize: "0.95rem" } },
  { id: 5, name: "SIGNAL", style: { fontWeight: 700, letterSpacing: "0.35em", fontSize: "0.8rem" } },
  { id: 6, name: "APEX", style: { fontWeight: 900, letterSpacing: "0.1em", fontSize: "1.3rem" } },
  { id: 7, name: "FORGE", style: { fontWeight: 500, letterSpacing: "0.25em", fontSize: "1rem" } },
  { id: 8, name: "PRISM", style: { fontWeight: 900, letterSpacing: "0.2em", fontSize: "0.95rem" } },
];

function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <span className="select-none whitespace-nowrap text-white/25" style={logo.style}>
      {logo.name}
    </span>
  );
}

export default function LogoCarousel() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return (
      <div className="border-y border-white/[0.06] px-6 md:px-12 lg:px-16 py-14 md:py-16 flex items-center justify-center">
        <div className="flex flex-wrap gap-x-14 gap-y-8 items-center justify-center">
          {logos.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative border-y border-white/[0.06] overflow-hidden py-14 md:py-16"
      aria-label="Client logos"
    >
      <div className="carousel-track items-center gap-16 px-8">
        {logos.map((logo) => (
          <LogoItem key={logo.id} logo={logo} />
        ))}
        {logos.map((logo) => (
          <LogoItem key={`dup-${logo.id}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
