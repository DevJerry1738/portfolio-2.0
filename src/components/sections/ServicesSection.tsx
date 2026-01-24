// src/components/sections/ServicesSection.tsx
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrambledText from "@/components/ScrambledText";

interface Service {
  number: string;
  title: string;
  list: string[];
  description1: string;
  description2: string;
}

const services: Service[] = [
  {
    number: "(01) ",
    title: "WEB DEVELOPMENT",
    list: [
      "FULL-STACK APPLICATIONS",
      "RESPONSIVE UI/UX DESIGN",
      "API INTEGRATION & DEVELOPMENT",
      "DATABASE ARCHITECTURE",
      "PROGRESSIVE WEB APPS",
      "E-COMMERCE SOLUTIONS",
    ],
    description1:
      "I CRAFT WEB SOLUTIONS THAT ARE CLEAN, FAST, AND BUILT TO SCALE. TURNING IDEAS INTO ROBUST PLATFORMS THAT DRIVE USER ENGAGEMENT AND BUSINESS GROWTH.",
    description2:
      "EVERY ELEMENT FOCUSES ON CODE THAT'S MAINTAINABLE, SECURE, AND ALIGNED WITH YOUR VISION FOR LONG-TERM SUCCESS.",
  },
  {
    number: "(02) ",
    title: "BRAND STRATEGY",
    list: [
      "RESEARCH & COMPETITOR ANALYSIS",
      "BRAND AUDIT",
      "BRAND BEHAVIOUR",
      "TONE OF VOICE",
      "MANIFESTO",
      "MOODBOARDING",
    ],
    description1:
      "CLARITY IS A RADICAL ACT. I DIVE DEEP TO UNCOVER WHAT YOUR BRAND TRULY STANDS FOR. NOT JUST TO SAY IT, BUT TO LIVE IT.",
    description2:
      "POSITIONING TO PURPOSE BUILDS THE FOUNDATION FOR INTENTIONAL GROWTH.",
  },
  {
    number: "(03) ",
    title: "IT CONSULTING",
    list: [
      "CREATIVE DIAGNOSIS",
      "ON-DEMAND CONSULTING",
      "CREATIVE PIVOTS",
      "NAMING & MESSAGING",
      "CREATIVE & ART DIRECTION",
      "AI INTEGRATION GUIDANCE",
    ],
    description1:
      "I PARTNER WITH FOUNDERS AND TEAMS IN MOMENTS OF CHANGE. BLENDING CREATIVE STRATEGY WITH HANDS-ON TECHNICAL EXPERTISE AND ART DIRECTION.",
    description2:
      "FAST, FOCUSED, AND AI-POWERED SESSIONS THAT UNLOCK CLARITY, RESOLVE TECHNICAL ROADBLOCKS, AND GUIDE BOLD EXECUTION.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 border-t border-red-600/20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
        {/* Header */}
        <h2 className="font-black text-4xl leading-[0.95] tracking-[-0.04em] font-medium w-50">
          <ScrambledText
            text="HOW WE'LL  GROW — TOGETHER"
            as="span"
            scrambleDelay={300}
            scrambleDuration={1200}
          />
        </h2>

        {/* Carousel Container */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-4">
          <motion.div
            className="relative min-h-[700px] sm:min-h-[700px] md:min-h-[500px]"
          >
            {/* AnimatePresence for smooth enter/exit */}
            <AnimatePresence mode="wait">
              {services.map((service, index) =>
                activeIndex === index ? (
                  <motion.div
                    key={service.number}
                    className="absolute inset-0 pointer-events-auto"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      className="flex flex-col gap-8 sm:gap-12 md:gap-16"
                      variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {/* Top: Number + Title + Description */}
                      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* Left: Number + Title */}
                        <motion.div
                          className="md:w-5/12"
                          variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <div className="text-5xl font-medium uppercase leading-none tracking-[-0.04em] w-20">
                            <span>{service.number}</span>
                            <span>{service.title}</span>
                          </div>
                        </motion.div>

                        {/* Right: Description */}
                        <motion.div
                          className="md:w-7/12 text-lg leading-relaxed opacity-90 leading-[1.6]"
                          variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <p className="mb-1">{service.description1}</p>
                          <br />
                          <p className="mb-1">{service.description2}</p>
                        </motion.div>
                      </div>

                      {/* Bottom: List */}
                      <motion.ul
                        className="w-full space-y-0.5 text-base md:text-lg uppercase font-medium opacity-90"
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: { staggerChildren: 0.05 },
                          },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        {service.list.map((item, i) => (
                          <motion.li
                            key={i}
                            variants={{
                              hidden: { y: 10, opacity: 0 },
                              visible: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            → {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls – bottom */}
          <div className="flex md:justify-end">
            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 md:gap-8 text-lg uppercase tracking-wider opacity-80">
              <span className="md:order-2 md:ml-6">
                {String(activeIndex + 1).padStart(2, "0")} — 03
              </span>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + 3) % 3)
                  }
                  className="w-10 h-10 flex items-center justify-center border border-[#ff0000]/30 rounded-full hover:bg-[#ff0000]/10 transition-colors disabled:opacity-30"
                  disabled={activeIndex === 0}
                  aria-label="Previous service"
                >
                  <svg
                    className="w-5 h-5 text-[#ff0000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % 3)}
                  className="w-10 h-10 flex items-center justify-center border border-[#ff0000]/30 rounded-full hover:bg-[#ff0000]/10 transition-colors disabled:opacity-30"
                  disabled={activeIndex === 2}
                  aria-label="Next service"
                >
                  <svg
                    className="w-5 h-5 text-[#ff0000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
