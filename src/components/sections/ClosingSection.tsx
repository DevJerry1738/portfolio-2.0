// src/components/sections/ClosingSection.tsx
import { ArrowDown } from "lucide-react";

export default function ClosingSection() {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 text-center">
      <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase max-w-4xl mx-auto leading-tight">
        CALL THIS A SIGN, OR JUST GOOD TIMING.
      </p>

      <a
        href="#contact"
        className="mt-16 inline-flex items-center gap-4 text-xl md:text-2xl uppercase tracking-wider group"
      >
        <span>Let's talk</span>
        <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 group-hover:rotate-[-90deg] transition-transform">
          <ArrowDown />
        </div>
      </a>
    </section>
  );
}
