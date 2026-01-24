// src/components/sections/ValuesSection.tsx
export default function ValuesSection() {
  const principles = [
    {
      title: "Clarity first",
      description:
        "Code should read like a manifesto. No clever tricks — only necessary ones.",
    },
    {
      title: "Long-term thinking",
      description: "Build for five years from now, not next sprint.",
    },
    {
      title: "Human-centered",
      description: "Tools exist for people — not the other way around.",
    },
    {
      title: "Bravery in restraint",
      description: "Say no to 90% of features so the 10% can shine.",
    },
  ];

  return (
    <section
      id="values"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20 bg-red-600/5"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">
          Core Values
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                {principle.title}
              </h3>
              <p className="text-lg md:text-xl">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
