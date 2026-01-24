// src/components/sections/WorkSection.tsx
import { motion } from "framer-motion";

export default function WorkSection() {
  const projects = [
    {
      title: "PhishGuard NG",
      year: "2026",
      description:
        "PhishGuard NG is a phishing simulation and cybersecurity awareness platform designed for organizations to test and improve employee resilience against phishing attacks. Inspired by enterprise-grade tools, the system includes an admin dashboard, campaign builder, realistic phishing templates, analytics, and interactive training modules.",
      techs: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          label: "GitHub Repo",
          url: "https://github.com/DevJerry1738/phishing-simulator",
        },
      ],
    },
    {
      title: "Leave Approval System",
      year: "2026",
      description:
        "A role-based Leave Request & Approval System built with Next.js, TypeScript, and Supabase. Staff can submit leave requests, while admins can review, approve, or reject them in real time.",
      techs: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      links: [
        { label: "Live Site", url: "https://leave-approval-system.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/DevJerry1738/leave-approval-system" },
      ],
    },
    {
      title: "Capital Connect",
      year: "2025",
      description:
        "Abuja Connect is a modern React + TypeScript web app that helps users discover trusted local service providers across Abuja. It features smart search and filters, verified provider badges, interactive maps, and clean, responsive UI. Designed as a scalable, portfolio-ready solution to a real local problem.",
      techs: ["React", "TypeScript", "Tailwind CSS"],
      links: [
        { label: "Live Site", url: "https://capital-connect-5fjc.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/DevJerry1738/capital-connect" },
      ],
    },
    {
      title: "Volunteers4Cause Abuja Chapter",
      year: "2025",
      description:
        "Volunteers4Cause Abuja Chapter – Official Website. Modern React 19 + TypeScript landing page with hero carousel, animated stats, campaign gallery, direct WhatsApp volunteer form, About & Team pages. Fully responsive, no backend, mobile-first. Empowering youth-led impact in Abuja. Made with love for Nigeria.",
      techs: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        { label: "Live Site", url: "https://v4c-abuja.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/DevJerry1738/v4c-abuja" },
      ],
    },
  ];

  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-red-600/20"
    >
      <div className="max-w-5xl mx-auto space-y-24">
        <h2 className="font-black text-4xl leading-[0.95] tracking-[-0.04em] font-medium uppercase">
          Selected Work
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase group-hover:text-red-700 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl opacity-70"
                >
                  {project.year}
                </motion.span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg md:text-xl max-w-3xl font-lighter"
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4 text-sm uppercase tracking-wider opacity-80"
              >
                {project.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex gap-4"
              >
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#ff0000] text-[#ff0000] uppercase text-sm font-medium hover:bg-[#ff0000]/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
