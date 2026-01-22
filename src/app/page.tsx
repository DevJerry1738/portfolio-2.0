// src/app/page.tsx
import Navbar from '@/components/Navbar';
import ScrambledText from '@/components/ScrambledText';
import {   ArrowRight } from 'lucide-react'; // optional: npm install lucide-react

export default function Home() {
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
  <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl font-medium leading-tight">
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

  {/* Scroll prompt */}
  <div className="flex items-center gap-3 text-lg md:text-xl uppercase tracking-wider">
    <span>About Me</span>
    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
  </div>
  {/* <div className="flex items-center gap-3 text-lg md:text-xl uppercase tracking-wider opacity-70 animate-pulse">
    <span>Scroll to explore</span>
    <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
  </div> */}
</div>
      </main>

      {/* Selected Work – minimal cards / list */}
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20">
        <div className="max-w-5xl mx-auto space-y-24">
          <h2 className="text-4xl font-light md:text-5xl lg:text-6xl font-black uppercase">Selected Work</h2>

          <div className="space-y-32">
            {/* Project 1 */}
            <article className="group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase group-hover:text-red-700 transition-colors">
                  FinTrack — Personal Finance OS
                </h3>
                <span className="text-xl md:text-2xl opacity-70">2024 – 2025</span>
              </div>
              <p className="mt-6 text-lg md:text-xl max-w-3xl">
                Privacy-first finance dashboard built with Next.js, tRPC, Drizzle ORM & React Server Components. 
                Focus: radical simplicity + offline-first architecture.
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
      <section id="values" className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20 bg-red-600/5">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">Core Principles</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Clarity first</h3>
              <p className="text-lg md:text-xl">Code should read like a manifesto. No clever tricks — only necessary ones.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Long-term thinking</h3>
              <p className="text-lg md:text-xl">Build for five years from now, not next sprint.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Human-centered</h3>
              <p className="text-lg md:text-xl">Tools exist for people — not the other way around.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Bravery in restraint</h3>
              <p className="text-lg md:text-xl">Say no to 90% of features so the 10% can shine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-ish closing – valiente-style affirmation */}
      <section className="py-40 px-6 md:px-12 lg:px-24 text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase max-w-4xl mx-auto leading-tight">
          Code isn’t just instructions.<br />
          It’s a promise.
        </p>

        <a
          href="#contact"
          className="mt-16 inline-flex items-center gap-4 text-xl md:text-2xl uppercase tracking-wider group"
        >
          <span>Get in touch</span>
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 group-hover:rotate-[-90deg] transition-transform">
           <ArrowRight/>
          </div>
        </a>
      </section>
    </div>
  );
}