const services = [
  {
    name: "Strategy",
    description: "Clarify the problem, align the room, and define the path forward.",
  },
  {
    name: "Experience Design",
    description: "Design exceptional experiences for customers and teams.",
  },
  {
    name: "AI",
    description: "Identify where AI can deliver value in your business.",
  },
];

export default function Services() {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-12 md:mb-16">
        Services
      </h2>

      <div className="border-t-2 border-black">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col md:flex-row border-b-2 border-black py-8 md:py-10 gap-3 md:gap-0"
          >
            <div className="md:w-1/3">
              <h3 className="text-base font-bold tracking-tight">{service.name}</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-base leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
