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
  { text: "All utilities included", icon: Zap },
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
    <section id="programs" className="py-24 md:py-32 bg-[var(--color-navy-900)] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-r from-[var(--color-gold-500)]/10 to-transparent blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column - Sticky Header */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <ScrollReveal>
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]" />
                  <span className="text-[12px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
                    The Experience
                  </span>
                </div>
                <h2 className="font-display text-[42px] md:text-[56px] leading-[1.1] text-white mb-6">
                  Monthly Residency <br className="hidden md:block" />
                  <span className="text-[var(--color-gold-400)]" style={{ fontFamily: "var(--font-quote-script)", fontSize: "1.2em", fontWeight: 400 }}>Includes</span>
                </h2>
                
                <p className="font-sans text-white/70 text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-md">
                  Everything you need to focus on your journey. Our comprehensive monthly residency program is designed to provide a safe, fully-equipped, and supportive environment.
                </p>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex items-center gap-5 hover:opacity-90 transition-all focus:outline-none"
                >
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--color-gold-500)]/30 bg-white/5 group-hover:bg-[var(--color-gold-500)]/20 transition-all duration-300">
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-gold-400)]" />
                    </motion.div>
                  </div>
                  <span className="font-sans font-bold uppercase tracking-[0.15em] text-[13px] md:text-[14px] text-white group-hover:text-[var(--color-gold-400)] transition-colors">
                    {isExpanded ? "Collapse Details" : "View Amenities"}
                  </span>
                </button>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column - Amenities List */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4 pb-4">
                    <ScrollReveal isStaggerContainer staggerChildren={0.08} className="flex flex-col gap-4">
                      {PROGRAMS.map((program, index) => {
                        const Icon = program.icon;
                        const number = String(index + 1).padStart(2, "0");
                        
                        return (
                          <ScrollReveal key={index} y={20}>
                            <div className="group relative flex items-center gap-6 md:gap-8 p-6 md:p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[var(--color-gold-500)]/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                              
                              {/* Hover Glow */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-500)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              
                              {/* Giant Background Number */}
                              <span className="absolute -right-4 -bottom-8 font-display text-[100px] md:text-[140px] font-bold text-white/[0.02] group-hover:text-[var(--color-gold-500)]/[0.04] transition-colors duration-500 pointer-events-none select-none">
                                {number}
                              </span>

                              {/* Icon Container */}
                              <div className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-[var(--color-gold-500)]/10 border border-[var(--color-gold-500)]/20 text-[var(--color-gold-400)] group-hover:scale-110 group-hover:bg-[var(--color-gold-400)] group-hover:text-[var(--color-navy-900)] shadow-[0_0_20px_rgba(216,163,51,0)] group-hover:shadow-[0_0_30px_rgba(216,163,51,0.2)] transition-all duration-500">
                                <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                              </div>

                              {/* Text */}
                              <p className="relative z-10 font-sans text-[16px] md:text-[18px] text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 pr-12">
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
        </div>
      </div>
    </section>
  );
}
