"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { NavLink } from "./NavLink";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import ScrambledText from "./ScrambledText";
import ScrambledTextHover from "./ScrambledTextHover";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoHidden, setLogoHidden] = useState(false);

  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCollapsed(latest > 100);

    // Hide logo when scrolling down, show when scrolling up
    if (latest > lastScrollY) {
      setLogoHidden(true);
    } else {
      setLogoHidden(false);
    }

    setLastScrollY(latest);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 w-full flex justify-between items-start px-6 pt-6 pb-4 bg-transparent z-50 md:px-12 md:pt-8"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Mobile Logo - left side */}
      <motion.div
        className="md:hidden text-[#ff0000] text-2xl font-bold uppercase tracking-tight italic"
        initial={{ opacity: 1 }}
        animate={{
          y: logoHidden ? -60 : 0,
          opacity: logoHidden ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        JEREMIAH<sup className="text-sm ">®</sup>
      </motion.div>

      {/* Desktop Nav - vertical items that collapse to bars */}
      <nav className="hidden md:flex flex-col space-y-3">
        <ul className="list-none p-0 m-0">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              className="relative h-7 w-32 mb-1 group"
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: isCollapsed ? -12 : 0,
                opacity: isCollapsed ? 0 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <NavLink
                href={item.href}
                className={`text-[#ff0000] uppercase text-base font-medium transition-all duration-500 block ${
                  isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <ScrambledTextHover text={item.label} className="block" />
              </NavLink>

              {/* Red bar that appears when collapsed */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#ff0000] origin-left"
                initial={{ width: 0 }}
                animate={{ width: isCollapsed ? 24 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Collapsed state hover reveal - bars disappear on hover */}
      {isCollapsed && (
        <div className="hidden md:block absolute left-12 top-8 group z-10">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                className="relative h-7 w-32 mb-1"
                whileHover={{ scale: 1.02 }}
              >
                <NavLink
                  href={item.href}
                  className="text-[#ff0000] uppercase text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-400 block"
                >
                  <ScrambledTextHover text={item.label} className="block" />
                </NavLink>

                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#ff0000] group-hover:opacity-0 transition-all duration-400"
                  animate={{ width: isCollapsed ? 24 : 0 }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop centered logo - hides on scroll down */}
      <motion.div
        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-[#ff0000] text-4xl md:text-5xl font-bold uppercase tracking-tighter italic"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: logoHidden ? -60 : 0,
          opacity: logoHidden ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        JEREMIAH<sup className="text-xl md:text-2xl">®</sup>
      </motion.div>

      {/* Desktop "GET IN TOUCH" button */}
      <motion.a
        href="#contact"
        className="hidden md:flex flex-col items-center text-[#ff0000] uppercase text-base font-medium group relative"
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: isCollapsed ? -40 : 0,
          scale: isCollapsed ? 0.9 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span
          className={`
      transition-opacity duration-500
      ${isCollapsed ? "opacity-0" : "opacity-100"}
      group-hover:opacity-100
    `}
        >
          GET IN TOUCH
        </span>

        <motion.div
          className="
      mt-1 w-10 h-10 border-2 border-[#ff0000] rounded-full 
      flex items-center justify-center text-[#ff0000] text-xl 
      group-hover:rotate-[-90deg] transition-transform duration-400
    "
        >
          <ArrowRight />
        </motion.div>
      </motion.a>

      {/* Mobile toggle button - top right */}
      <motion.button
        className={`md:hidden text-5xl font-medium relative z-50 w-10 h-10 flex items-center justify-center ${
          isMobileMenuOpen ? "text-white" : "text-[#ff0000]"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isMobileMenuOpen ? "×" : "+"}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#ff0000] text-white flex flex-col justify-between p-8 md:p-12 z-40 md:hidden overflow-y-auto"
          >
            {/* Nav links */}
            <ul className="list-none p-0 m-0 mt-20 space-y-2 md:space-y-12 text-xl uppercase w-full font-medium tracking-tight">
              {navItems.map((item, index) => (
                <li key={item.label} className="w-full">
                  <NavLink
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 hover:opacity-80 transition-opacity duration-300"
                  >
                    <ScrambledText
                      text={item.label}
                      scrambleDelay={200 + index * 120} // stagger effect: each item starts a bit later
                      scrambleDuration={700}
                    />
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Bottom full-bleed logo */}
            <div className="text-white text-6xl font-black uppercase tracking-[-0.04em] leading-none text-center pb-2 italic">
              Jeremiah
              <sup className="text-6xl ">®</sup>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
