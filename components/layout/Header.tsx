"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#about" },
  { name: "MISSION", href: "#mission" },
  { name: "PROGRAMS", href: "#programs" },
  { name: "WAYS TO GIVE", href: "#give" },
  { name: "CONTACT", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToHref = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    window.requestAnimationFrame(() => scrollToHref(href));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 px-0",
        isScrolled ? "pt-0" : "pt-4"
      )}
    >
      <div 
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full",
          isScrolled 
            ? "bg-[var(--color-navy-900)] border-b border-white/10 shadow-[0_8px_32px_rgba(0,23,47,0.28)] py-1.5 px-6 lg:px-10" 
            : "bg-transparent py-4 px-6 lg:px-10 border-transparent"
        )}
      >
        {/* Left: Logo */}
        <Link href="#" className="flex-shrink-0 z-50" onClick={(event) => handleNavClick(event, "#")}>
          <Logo 
            className="w-[82px] h-[82px] md:w-[100px] md:h-[100px] transition-transform duration-300 hover:scale-105" 
          />
        </Link>

        {/* Center: Desktop Nav with Sliding Indicator */}
        <nav 
          className="hidden lg:flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              onMouseEnter={() => setHoveredIndex(idx)}
              className={cn(
                "relative px-4 py-2 text-[12px] font-sans font-bold tracking-[0.16em] transition-colors duration-300 z-10",
                hoveredIndex === idx || (hoveredIndex === null && idx === 0) 
                  ? "text-[var(--color-navy-900)]" 
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              
              {/* Active/Hover Indicator */}
              {(hoveredIndex === idx || (hoveredIndex === null && idx === 0)) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[var(--color-gold-400)] rounded-full -z-10 shadow-[0_0_15px_rgba(216,163,51,0.3)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Button
            variant="primary"
            icon={<Phone className="w-[18px] h-[18px]" />}
            className={cn(
              "hidden lg:inline-flex transition-all duration-300",
              isScrolled ? "py-2.5 px-5 text-[14px] rounded-full" : ""
            )}
            onClick={() => window.location.href = "tel:+13468808696"}
          >
            Call Today 346.880.8696
          </Button>

          <button
            className="lg:hidden text-white hover:text-[var(--color-gold-400)] transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-navy-900)]/95 backdrop-blur-3xl pt-[120px] px-6 pb-6 flex flex-col h-screen overflow-y-auto pointer-events-auto"
          >
            <nav className="flex flex-col gap-4 mt-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="block text-xl font-sans font-bold tracking-[0.1em] text-white border-b border-white/10 pb-4 hover:text-[var(--color-gold-400)] transition-colors hover:translate-x-2 duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-12 mb-8 flex justify-center"
            >
              <Button
                variant="primary"
                icon={<Phone className="w-5 h-5" />}
                className="w-full max-w-[300px] rounded-full shadow-[0_0_20px_rgba(216,163,51,0.4)]"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "tel:+13468808696";
                }}
              >
                Call Today 346.880.8696
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
