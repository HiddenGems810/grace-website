"use client";

import React from "react";
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
  BookOpen 
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
  return (
    <section id="programs" className="py-24 md:py-32 bg-[var(--color-warm-white)]/30 relative scroll-mt-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[var(--color-gold-400)]/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <ScrollReveal y={20} className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]" />
            <span className="block text-[13px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
              Monthly Residency Includes
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-gold-500)]" />
          </div>
        </ScrollReveal>

        <div id="residency" className="scroll-mt-32">
          <ScrollReveal isStaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {PROGRAMS.map((program, index) => {
              const Icon = program.icon;
              return (
                <ScrollReveal key={index} y={30} className="h-full group">
                  <div className="h-full flex flex-col items-center text-center gap-5 bg-white border border-[var(--color-border-gold)]/40 hover:border-[var(--color-gold-400)] rounded-[20px] p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-gold)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle hover gradient inside card */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-400)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-warm-white)] flex items-center justify-center border border-[var(--color-gold-500)]/20 text-[var(--color-gold-500)] group-hover:scale-110 group-hover:bg-[var(--color-gold-500)] group-hover:text-white transition-all duration-500 relative z-10 shadow-sm">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    
                    <p className="font-sans text-[15px] text-[var(--color-navy-900)] leading-relaxed font-medium relative z-10">
                      {program.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
