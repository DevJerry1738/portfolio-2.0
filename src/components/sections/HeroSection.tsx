// src/components/sections/HeroSection.tsx
import ScrambledText from "@/components/ScrambledText";

export default function HeroSection() {
  return (
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
            text='"The function of good software is to make the complex appear to be simple."'
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
  );
}
