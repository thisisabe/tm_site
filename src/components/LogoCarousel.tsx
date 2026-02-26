"use client";

import { useEffect, useState } from "react";

const ALL_LOGOS = [
  { id: "001", src: "/001_cba.svg",            alt: "CBA" },
  { id: "002", src: "/002_qantas.svg",          alt: "Qantas" },
  { id: "003", src: "/003_scentre.svg",         alt: "Scentre" },
  { id: "004", src: "/004_toga.svg",            alt: "Toga" },
  { id: "005", src: "/005_chapter.svg",         alt: "Chapter" },
  { id: "006", src: "/006_yahoo.svg",           alt: "Yahoo" },
  { id: "007", src: "/007_nab.svg",             alt: "NAB" },
  { id: "008", src: "/008_eve.svg",             alt: "Eve" },
  { id: "009", src: "/009_icare.svg",           alt: "iCare" },
  { id: "010", src: "/010_searchfit.svg",       alt: "Searchfit" },
  { id: "011", src: "/011_oss.svg",             alt: "OSS" },
  { id: "012", src: "/012_nsw.svg",             alt: "NSW" },
  { id: "013", src: "/013_westfield.svg",       alt: "Westfield" },
  { id: "014", src: "/014_adina.svg",           alt: "Adina" },
  { id: "015", src: "/015_abyadina.svg",        alt: "Aby Adina" },
  { id: "016", src: "/016_liquidandlarder.svg", alt: "Liquid and Larder" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Logo = (typeof ALL_LOGOS)[0];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <img
      src={logo.src}
      alt={logo.alt}
      draggable={false}
      style={{
        height: "28px",
        width: "auto",
        opacity: 0.3,
        userSelect: "none",
        flexShrink: 0,
      }}
    />
  );
}

export default function LogoCarousel() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setLogos(shuffleArray(ALL_LOGOS));

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!logos.length) return null;

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
      <div className="carousel-track items-center gap-24 px-8">
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
