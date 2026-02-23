"use client";

import { useEffect, useState } from "react";

// Placeholder client logos – replace with real SVG imports when assets are available
const logos = [
  { id: 1, name: "NEXUS", style: { fontWeight: 900, letterSpacing: "0.3em", fontSize: "1.1rem" } },
  { id: 2, name: "ATLAS", style: { fontWeight: 700, letterSpacing: "0.2em", fontSize: "1.25rem" } },
  { id: 3, name: "VERTEX", style: { fontWeight: 300, letterSpacing: "0.15em", fontSize: "1.4rem" } },
  { id: 4, name: "MERIDIAN", style: { fontWeight: 900, letterSpacing: "0.05em", fontSize: "1rem" } },
  { id: 5, name: "SIGNAL", style: { fontWeight: 700, letterSpacing: "0.35em", fontSize: "0.85rem" } },
  { id: 6, name: "APEX", style: { fontWeight: 900, letterSpacing: "0.1em", fontSize: "1.4rem" } },
  { id: 7, name: "FORGE", style: { fontWeight: 500, letterSpacing: "0.25em", fontSize: "1.1rem" } },
  { id: 8, name: "PRISM", style: { fontWeight: 900, letterSpacing: "0.2em", fontSize: "1rem" } },
];

function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <span
      className="select-none whitespace-nowrap text-black"
      style={logo.style}
    >
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
      <div className="py-14 border-t-2 border-b-2 border-black px-8 md:px-16 lg:px-24">
        <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
          {logos.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="py-14 border-t-2 border-b-2 border-black overflow-hidden"
      aria-label="Client logos"
    >
      {/* Duplicated track for seamless infinite loop */}
      <div className="carousel-track items-center gap-16 px-8">
        {logos.map((logo) => (
          <LogoItem key={logo.id} logo={logo} />
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo) => (
          <LogoItem key={`dup-${logo.id}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
