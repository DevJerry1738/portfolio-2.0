// src/components/sections/AboutSection.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20"
    >
      <div
        className="
        flex flex-col md:flex-row 
        gap-8 md:gap-12 lg:gap-20 
        justify-between items-center md:items-start
        max-w-7xl mx-auto 
        px-6 sm:px-10 lg:px-16 
        py-20 md:py-28 lg:py-36
        font-mono uppercase 
        text-[#ff1a00] 
        tracking-[-0.03em] leading-[1.15] 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        antialiased
      "
        style={{
          textShadow: "0 0 1px transparent",
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {/* Left: Main bold headline / mission statement */}
        <div className="md:w-1/2 lg:w-6/12">
          <h2 className="font-black text-4xl leading-[0.95] tracking-[-0.04em] font-medium">
            At my core,
            <br />
            I don't just ship code
            <br />
            — I build systems
            <br />
            that endure
            <br />
            and empower.
          </h2>
          <p className="mt-6 text-lg">
            I partner with founders, teams, and visionaries who refuse
            average.
          </p>
        </div>

        {/* Right: Descriptive / value-driven copy */}
        <div className="md:w-1/2 lg:w-7/12 text-lg  leading-tight">
          <p className="mb-6 md:mb-8">
            My work lives at the intersection of clean architecture,
            meaningful user experiences, and relentless focus on clarity.
          </p>
          <p className="mb-4"></p>
          Where strategy meets execution
          <br />
          and code becomes a force for better thinking, faster iteration,
          <br />
          and real, lasting impact.
        </div>
      </div>
    </section>
  );
}
