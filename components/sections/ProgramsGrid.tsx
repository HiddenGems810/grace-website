"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROGRAMS = [
  "Safe, fully furnished accommodations",
  "All utilities",
  "High-speed Wi-Fi",
  "Computer access",
  "Laundry facilities",
  "Secure, keyed bedroom locks",
  "24/7 security camera monitoring in common exterior and shared areas",
  "Access to shared kitchen and living spaces",
  "Community support",
  "Life skills development opportunities",
];

export function ProgramsGrid() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <ScrollReveal y={20} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-border-gold)]" />
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)]">
              Monthly Residency Includes
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-border-gold)]" />
          </div>
        </ScrollReveal>

        <div id="residency">
          <ScrollReveal isStaggerContainer staggerChildren={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROGRAMS.map((program) => (
              <ScrollReveal key={program} y={30} className="h-full">
                <div className="h-full min-h-[116px] flex items-start gap-3 bg-[var(--color-warm-white)] border border-[var(--color-gold-500)]/30 rounded-[14px] p-5">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-gold-500)] shrink-0 mt-0.5" />
                  <p className="font-sans text-[15px] text-[var(--color-text)] leading-relaxed">
                    {program}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
