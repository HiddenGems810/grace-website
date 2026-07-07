"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MissionBand() {
  return (
    <section id="mission" className="relative bg-gradient-to-br from-[var(--color-navy-900)] to-[var(--color-navy-800)] py-[80px] md:py-[100px] border-y border-[var(--color-border-gold)]/30 overflow-hidden scroll-mt-32">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-gold-500)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center relative z-10">
        <ScrollReveal isStaggerContainer className="flex flex-col items-center text-center max-w-[900px]">
          
          <ScrollReveal y={20}>
            <div className="relative flex-shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-8">
              <div className="absolute inset-0 bg-[var(--color-gold-400)]/20 blur-xl rounded-full" />
              <motion.svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative z-10"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.path
                  d="M 50 15 Q 53 47 85 50 Q 53 53 50 85 Q 47 53 15 50 Q 47 47 50 15 Z"
                  className="stroke-[var(--color-gold-500)] fill-[var(--color-gold-500)]/10"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0, scale: 0.5 },
                    visible: { pathLength: 1, opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
                  }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  className="fill-[var(--color-gold-400)]"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.8 } },
                  }}
                />
              </motion.svg>
            </div>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]" />
              <span className="block text-[13px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
                Our Mission
              </span>
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-gold-500)]" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal y={20}>
            <p className="font-serif text-[24px] md:text-[32px] lg:text-[40px] text-white leading-[1.3] font-medium text-center">
              At Grace 101 Independent Living Home, our mission is to provide more than housing—we provide <span className="text-[var(--color-gold-400)] mx-1" style={{ fontFamily: "var(--font-quote-script)", fontSize: "1.3em", fontWeight: 400, display: "inline-block", transform: "translateY(4px)" }}>hope.</span> 
              <br className="hidden md:block" />
              <span className="text-[18px] md:text-[22px] lg:text-[26px] text-white/80 leading-relaxed block mt-8 font-sans font-light max-w-[800px] mx-auto">
                We empower women navigating life&apos;s transitions by offering safe, stable, and affordable housing, supportive services, and opportunities for personal growth, helping every resident build a future rooted in confidence, independence, and purpose.
              </span>
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
