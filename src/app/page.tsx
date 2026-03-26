// src/app/page.tsx
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import TechMarquee from "@/components/sections/TechMarquee";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ClosingSection from "@/components/sections/ClosingSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <ReactLenis root>
      <CustomCursor />
      <main className="min-h-screen">
        {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section with Carousel */}
      <ServicesSection />

      {/* Work Section */}
      <WorkSection />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Closing Section */}
      {/* <ClosingSection /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
    </ReactLenis>
  );
}
