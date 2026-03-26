"use client";
import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Supabase", "PostgreSQL", "React Native", "GraphQL"
];

export default function TechMarquee() {
  return (
    <section className="py-24 overflow-hidden border-t border-b border-[#d90429]/20">
      <div className="flex w-full">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex flex-nowrap min-w-max items-center"
        >
          {/* Double array for seamless loop */}
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <span
              key={index}
              className="text-7xl md:text-9xl font-black uppercase text-transparent mx-8 px-4"
              style={{
                WebkitTextStroke: "2px #d90429",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
