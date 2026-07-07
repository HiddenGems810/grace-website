"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MissionBand() {
  return (
    <section id="mission" className="bg-gradient-to-br from-[var(--color-navy-900)] to-[var(--color-navy-800)] py-[46px] border-y border-[var(--color-border-gold)]/50">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="flex-shrink-0 w-[88px] h-[88px] md:w-[110px] md:h-[110px]">
          <motion.svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full stroke-[var(--color-gold-500)]"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.path
              d="M 10 55 L 50 20 L 90 55 M 20 45 L 20 85 L 80 85 L 80 45"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
              }}
            />
            <motion.path
              d="M 50 70 C 50 70 35 55 35 45 C 35 38 42 35 48 40 C 50 42 50 42 50 42 C 50 42 50 42 52 40 C 58 35 65 38 65 45 C 65 55 50 70 50 70 Z"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" } },
              }}
            />
          </motion.svg>
        </div>

        <ScrollReveal isStaggerContainer className="max-w-[850px] text-center md:text-left">
          <ScrollReveal y={20}>
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              Our Mission - Mission Statement
            </span>
          </ScrollReveal>
          <ScrollReveal y={20}>
            <p className="font-serif text-[22px] md:text-[28px] lg:text-[32px] text-white leading-[1.4] font-medium">
              At Grace 101 Independent Living Home, our mission is to provide more than housing-we provide hope. We empower women navigating life&apos;s transitions by offering safe, stable, and affordable housing, supportive services, and opportunities for personal growth, helping every resident build a future rooted in confidence, independence, and purpose.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
