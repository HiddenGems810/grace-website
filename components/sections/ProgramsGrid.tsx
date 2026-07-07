"use client";

import React, { useState } from "react";
import { 
  BedDouble, 
  Zap, 
  Wifi, 
  Monitor, 
  Shirt, 
  Key, 
  ShieldCheck, 
  Coffee, 
  HeartHandshake, 
  BookOpen,
  ChevronDown
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const PROGRAMS = [
  { text: "Safe, fully furnished accommodations", icon: BedDouble },
  { text: "All utilities", icon: Zap },
  { text: "High-speed Wi-Fi", icon: Wifi },
  { text: "Computer access", icon: Monitor },
  { text: "Laundry facilities", icon: Shirt },
  { text: "Secure, keyed bedroom locks", icon: Key },
  { text: "24/7 security camera monitoring in common areas", icon: ShieldCheck },
  { text: "Access to shared kitchen and living spaces", icon: Coffee },
  { text: "Community support", icon: HeartHandshake },
  { text: "Life skills development opportunities", icon: BookOpen },
];

export function ProgramsGrid() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="programs" className="py-24 md:py-32 bg-[var(--color-gold-400)] relative scroll-mt-32 overflow-hidden transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/30 blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <ScrollReveal y={20} className="text-center mb-10">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center justify-center gap-3 md:gap-4 mx-auto hover:opacity-80 transition-opacity focus:outline-none"
            aria-expanded={isExpanded}
            aria-controls="residency-grid"
          >
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-navy-900)]/60" />
            <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full backdrop-blur-md border border-white/30 transition-all duration-300">
              <span className="block text-[13px] md:text-[15px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-navy-900)]">
                Monthly Residency Includes
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-[var(--color-navy-900)]" strokeWidth={2.5} />
              </motion.div>
            </div>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-navy-900)]/60" />
          </button>
        </ScrollReveal>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div 
              id="residency-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div id="residency" className="scroll-mt-32 pt-6 pb-4">
                <ScrollReveal isStaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
                  {PROGRAMS.map((program, index) => {
                    const Icon = program.icon;
                    return (
                      <ScrollReveal key={index} y={30} className="h-full group">
                        <div className="h-full flex flex-col items-center text-center gap-5 bg-white border border-white/60 hover:border-white rounded-[20px] p-8 shadow-[var(--shadow-soft)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                          {/* Subtle hover gradient inside card */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-warm-white)]/80 to-[var(--color-warm-white)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="w-14 h-14 rounded-2xl bg-[var(--color-warm-white)] flex items-center justify-center border border-[var(--color-navy-900)]/10 text-[var(--color-navy-900)] group-hover:scale-110 group-hover:bg-[var(--color-navy-900)] group-hover:text-white transition-all duration-500 relative z-10 shadow-sm">
                            <Icon className="w-6 h-6" strokeWidth={1.5} />
                          </div>
                          
                          <p className="font-sans text-[15px] text-[var(--color-navy-900)] leading-relaxed font-semibold relative z-10">
                            {program.text}
                          </p>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </ScrollReveal>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
