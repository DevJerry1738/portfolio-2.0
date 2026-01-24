// src/app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ClosingSection from "@/components/sections/ClosingSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f0ec] text-[#ff0000] font-['Barlow','Helvetica_Neue',Arial,sans-serif] antialiased">
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

      {/* Values Section */}
      <ValuesSection />

      {/* Closing Section */}
      {/* <ClosingSection /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
