// src/app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import ScrambledText from "@/components/ScrambledText";
import { ArrowRight } from "lucide-react"; // optional: npm install lucide-react
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      number: "(01)",
      title: "BRAND STRATEGY",
      list: [
        "RESEARCH & COMPETITOR ANALYSIS",
        "BRAND AUDIT",
        "VALUE PROPOSITION",
        "BRAND BEHAVIOUR",
        "TONE OF VOICE",
        "MANIFESTO",
        "BRAND AI TRAINING",
        "MOODBOARDING",
      ],
      description1:
        "CLARITY IS A RADICAL ACT. WE DIVE DEEP TOGETHER TO UNCOVER WHAT YOUR BRAND TRULY STANDS FOR — NOT JUST TO SAY IT, BUT TO LIVE IT.",
      description2:
        "FROM POSITIONING TO PURPOSE, WE BUILD THE FOUNDATION FOR INTENTIONAL GROWTH.",
    },
    {
      number: "(02)",
      title: "VISUAL IDENTITY",
      list: [
        "LOGO DESIGN",
        "TYPOGRAPHY & COLOR PALETTES",
        "VISUAL SYSTEMS",
        "BRAND GUIDELINES",
        "SOCIAL, DIGITAL & PRINT ASSETS",
        "WEB DESIGN & UI",
        "PITCH DECK DESIGN",
      ],
      description1:
        "IN A WORLD OF NOISE, YOUR IDENTITY SHOULD SPEAK WITH PRECISION. WE CRAFT VISUAL SYSTEMS THAT ARE BOLD, INTENTIONAL, AND BUILT TO CARRY MEANING — NOT JUST STYLE.",
      description2:
        "FROM LOGO TO ROLLOUT, EVERY ELEMENT IS MADE TO LAST — AND DRIVE GROWTH.",
    },
    {
      number: "(03)",
      title: "CREATIVE CONSULTING",
      list: [
        "CREATIVE DIAGNOSIS",
        "ON-DEMAND CONSULTING",
        "CREATIVE PIVOTS",
        "NAMING & MESSAGING",
        "CREATIVE & ART DIRECTION",
        "BRAND IMPLEMENTATION SESSIONS",
      ],
      description1:
        "WE PARTNER WITH FOUNDERS AND TEAMS IN MOMENTS OF CHANGE — BLENDING STRATEGY WITH HANDS-ON CREATIVE AND ART DIRECTION.",
      description2:
        "THESE AREN’T PASSIVE SESSIONS, BUT FAST, FOCUSED, AND AI POWERED SPRINTS THAT UNLOCK CLARITY AND GUIDE BOLD EXECUTION.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#f2f0ec] text-[#ff0000] font-['Barlow','Helvetica_Neue',Arial,sans-serif] antialiased">
      {/* Fixed Navbar – assuming your existing one from previous messages */}
      <Navbar />

      {/* Hero / Opening Statement – very valiente-like purposeful minimal */}
      <main className="pt-48 md:pt-64 pb-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {/* Very large, bold opening */}
          <h1 className="text-5xl font-light text-lighter md:text-3xl lg:text-5xl text-center uppercase leading-none tracking-tight">
            Purpose-led Software Development
          </h1>

          {/* Full-bleed video – no side gaps on any screen */}
          <div className="relative w-full">
            {/* This wrapper uses vw to always span the full viewport width */}
            <div className="-mx-[calc(50vw-50%)] w-screen">
              <div className="aspect-video w-full overflow-hidden bg-black/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/happy-devices.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg max-w-3xl font-medium leading-tight uppercase text-center mx-auto">
            <ScrambledText
              text="“The function of good software is to make the complex appear to be simple.”"
              as="span"
              scrambleDelay={400}
              scrambleDuration={900}
            />
            <br />
            <ScrambledText
              text="- Grady Booch"
              as="span"
              className="italic mt-4"
              scrambleDelay={1200}
              scrambleDuration={600}
            />
          </p>
        </div>
      </main>

      {/* About Me */}
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
              I don’t just ship code
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
            {/* <p className="font-black tracking-[-0.04em] text-4xl  mb-4 md:mb-6 font-medium">
              FULL-STACK CRAFTSMAN
              <br />
              BUILDING TOOLS THAT LAST.
            </p> */}
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
      <section
        id="services"
        className="py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 border-t border-red-600/20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-center md:text-left">
            <ScrambledText
              text="HOW WE’LL SHINE — TOGETHER"
              as="span"
              scrambleDelay={300}
              scrambleDuration={1200}
            />
          </h2>

          {/* Carousel Container */}
          <div className="relative min-h-[600px] md:min-h-[500px]">
            {/* Cards – only one visible at a time */}
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
                  {/* Left: Number + Title + List */}
                  <div className="md:w-5/12">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-[-0.04em]">
                      <ScrambledText
                        text={service.number}
                        as="span"
                        scrambleDelay={600 + index * 400}
                        scrambleDuration={800}
                      />
                      <br />
                      <ScrambledText
                        text={service.title}
                        as="span"
                        scrambleDelay={900 + index * 400}
                        scrambleDuration={1100}
                      />
                    </div>

                    <ul className="mt-10 space-y-3 md:space-y-4 text-base md:text-lg uppercase font-medium opacity-90">
                      {service.list.map((item, i) => (
                        <li key={i}>
                          <ScrambledText
                            text={`→ ${item}`}
                            as="span"
                            scrambleDelay={1200 + index * 400 + i * 80}
                            scrambleDuration={700}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Description */}
                  <div className="md:w-7/12 text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90">
                    <ScrambledText
                      text={service.description1}
                      as="p"
                      scrambleDelay={1500 + index * 400}
                      scrambleDuration={1400}
                    />
                    <br />
                    <br />
                    <ScrambledText
                      text={service.description2}
                      as="p"
                      scrambleDelay={2200 + index * 400}
                      scrambleDuration={1000}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Controls – bottom left */}
            <div className="absolute bottom-0 left-0 flex items-center gap-6 text-lg uppercase tracking-wider opacity-80 z-10">
              <span>{String(activeIndex + 1).padStart(2, "0")} — 03</span>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + 3) % 3)}
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
      </section>
      {/* Selected Work – minimal cards / list */}
      <section
        id="work"
        className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20"
      >
        <div className="max-w-5xl mx-auto space-y-24">
          <h2 className="text-4xl font-light md:text-5xl lg:text-6xl font-black uppercase">
            Selected Work
          </h2>

          <div className="space-y-32">
            {/* Project 1 */}
            <article className="group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase group-hover:text-red-700 transition-colors">
                  FinTrack — Personal Finance OS
                </h3>
                <span className="text-xl md:text-2xl opacity-70">
                  2024 – 2025
                </span>
              </div>
              <p className="mt-6 text-lg md:text-xl max-w-3xl">
                Privacy-first finance dashboard built with Next.js, tRPC,
                Drizzle ORM & React Server Components. Focus: radical simplicity
                + offline-first architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm uppercase tracking-wider opacity-80">
                <span>Next.js 14</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
                <span>PostgreSQL</span>
                <span>React Query</span>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase group-hover:text-red-700 transition-colors">
                  DocuMind — AI Document Companion
                </h3>
                <span className="text-xl md:text-2xl opacity-70">2025</span>
              </div>
              <p className="mt-6 text-lg md:text-xl max-w-3xl">
                Semantic search + context-aware chat over PDFs & markdown files.
                RAG pipeline with embeddings, Groq + Supabase Vector.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm uppercase tracking-wider opacity-80">
                <span>Next.js</span>
                <span>LangChain</span>
                <span>Supabase</span>
                <span>Groq API</span>
              </div>
            </article>

            {/* Add 1–2 more if desired – keep very sparse */}
          </div>
        </div>
      </section>

      {/* Values / Approach – purpose-led section */}
      <section
        id="values"
        className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20 bg-red-600/5"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">
            Core Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                Clarity first
              </h3>
              <p className="text-lg md:text-xl">
                Code should read like a manifesto. No clever tricks — only
                necessary ones.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                Long-term thinking
              </h3>
              <p className="text-lg md:text-xl">
                Build for five years from now, not next sprint.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                Human-centered
              </h3>
              <p className="text-lg md:text-xl">
                Tools exist for people — not the other way around.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                Bravery in restraint
              </h3>
              <p className="text-lg md:text-xl">
                Say no to 90% of features so the 10% can shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-ish closing – valiente-style affirmation */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase max-w-4xl mx-auto leading-tight">
          Code isn’t just instructions.
          <br />
          It’s a promise.
        </p>

        <a
          href="#contact"
          className="mt-16 inline-flex items-center gap-4 text-xl md:text-2xl uppercase tracking-wider group"
        >
          <span>Get in touch</span>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 group-hover:rotate-[-90deg] transition-transform">
            <ArrowRight />
          </div>
        </a>
      </section>
    </div>
  );
}
