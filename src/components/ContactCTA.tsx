"use client";

interface ContactCTAProps {
  onContactClick: () => void;
}

export default function ContactCTA({ onContactClick }: ContactCTAProps) {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t-2 border-black">
      <div className="max-w-3xl">
        <p
          className="font-light leading-snug mb-12 md:mb-16"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
        >
          Whether you&rsquo;re launching a new idea, or on the cusp of a
          transformation &mdash; Let&rsquo;s talk
        </p>
        <button
          onClick={onContactClick}
          className="border-2 border-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          Contact Abe
        </button>
      </div>
    </section>
  );
}
