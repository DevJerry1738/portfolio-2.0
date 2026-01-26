// src/components/sections/ContactSection.tsx
"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-40 px-6 md:px-12 lg:px-24"
    >
      {/* Closing Statement */}
      <div className="text-center mb-32">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase max-w-4xl mx-auto leading-tight">
          CALL THIS A SIGN, OR JUST GOOD TIMING.
        </p>
        <a
        href="#contact"
        className="mt-16 inline-flex items-center gap-4 text-xl md:text-2xl uppercase tracking-wider group"
      >
        <span>Let's talk</span>
      </a>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-2xl">
            <Image
              src="/images/developer.jpg" // replace with your image path
              alt="Developer portrait"
              fill
              className="object-cover grayscale "
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-center lg:text-left">

          {/* Contact links */}
          <div className="mt-16 flex flex-col gap-6 items-center lg:items-start">
            {/** Email link with copy button */}
            <EmailContactLink email="devjerry1738@gmail.com" />
            <ContactLink label="LinkedIn" href="https://linkedin.com/in/yourprofile" />
            <ContactLink label="Schedule a call" href="https://calendly.com/devjerry1738/30min" />
            <ContactLink label="WhatsApp" href="https://wa.me/2349011448616" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailContactLink({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-4 text-lg md:text-xl uppercase tracking-wider hover:text-red-600 transition-colors"
    >
      <span>{copied ? "Copied!" : "Email"}</span>
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        {copied ? <Check size={20} /> : <ArrowUpRight />}
      </span>
    </button>
  );
}

function ContactLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-4 text-lg md:text-xl uppercase tracking-wider"
    >
      <span>{label}</span>
      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight />
      </span>
    </a>
  );
}
