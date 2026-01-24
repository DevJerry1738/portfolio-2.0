// src/components/sections/ValuesSection.tsx
export default function ValuesSection() {
  const principles = [
  {
    title: "Intentional simplicity",
    description: "Every line exists for a reason. If it does not serve the user, it does not stay.",
  },
  {
    title: "Thoughtful craft",
    description: "Quality shows up in the small decisions most people never notice.",
  },
  {
    title: "Performance awareness",
    description: "Speed, responsiveness, and efficiency are part of good design.",
  },
  {
    title: "Trust by design",
    description: "Security and privacy are built into the system, not added later.",
  },
];


  return (
    <section
      id="values"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20 bg-red-600/5"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* <h2 className="font-black text-4xl leading-[0.95] tracking-[-0.04em] font-medium uppercase">
          Core Values
        </h2> */}

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3 className="font-black text-4xl leading-[0.95] tracking-[-0.04em] font-medium uppercase">
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
