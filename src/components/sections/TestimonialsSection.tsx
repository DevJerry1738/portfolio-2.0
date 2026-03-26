"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-[#d90429]/20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div style={{ y }} className="space-y-12">
          <p className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight text-[#d90429]">
            &quot;Jeremiah transformed our vision into a digital reality. His attention to detail and ability to blend design with robust engineering is simply unmatched.&quot;
          </p>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#d90429]">
              Elena Rossi
            </span>
            <span className="text-sm md:text-base uppercase tracking-widest opacity-70 mt-2">
              Founder, Minimalist Studio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
