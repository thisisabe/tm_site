export default function Mission() {
  return (
    <section
      className="bg-black text-white flex items-center px-8 md:px-16 lg:px-24 py-24 md:py-32"
      style={{ minHeight: "max(55vh, 400px)" }}
    >
      <div className="max-w-4xl">
        <p
          className="font-light leading-relaxed"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
        >
          Thinker Maker helps ambitious teams cut through noise, make sharper
          decisions, and turn complex ideas into real progress &mdash; combining
          strategy, design, and AI to move from uncertainty to momentum.
        </p>
      </div>
    </section>
  );
}
