"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DoorOpen, Gift, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GiveSection() {
  return (
    <section id="give" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <ScrollReveal isStaggerContainer>
          <ScrollReveal y={20}>
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              Ways to Give
            </span>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] text-[var(--color-navy-900)] leading-[1.05] mb-6 tracking-[-0.02em]">
              Open the Door to <br className="hidden md:block" /> New Beginnings
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.65] mb-10 max-w-[560px]">
              Grace 101 operates on the generosity of our community. Every gift makes a difference. Your financial support, donated household essentials, and volunteer time help provide women with a safe, fully furnished home, supportive resources, and the opportunity to build a brighter future.
            </p>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://www.zeffy.com/en-US/donation-form/where-grace-meets-new-beginnings-help-change-lives" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] font-sans font-semibold text-[15px] md:text-[16px] tracking-wide bg-[var(--color-gold-500)] text-white hover:bg-[var(--color-gold-400)] shadow-[var(--shadow-gold)] transition-all duration-300">
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
              <a href="#amazon-wishlist-link-needed" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] font-sans font-semibold text-[15px] md:text-[16px] tracking-wide bg-transparent border border-[var(--color-border-gold)] text-[var(--color-navy-900)] hover:border-[var(--color-gold-400)] hover:bg-[var(--color-warm-white)] transition-all duration-300">
                <Gift className="w-5 h-5" />
                Amazon Wishlist
              </a>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal y={40} duration={0.8} delay={0.2} className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[var(--color-gold-400)] rounded-2xl opacity-20 border border-[var(--color-gold-500)]" />

          <div className="relative bg-white border border-[var(--color-border-gold)] rounded-2xl p-6 md:p-12 shadow-[var(--shadow-navy)] flex flex-col items-center text-center">
            <motion.div
              className="relative w-20 h-16 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              <DoorOpen className="absolute left-1/2 top-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 text-[var(--color-navy-900)]" strokeWidth={1.5} />
              <motion.div
                className="absolute bottom-3 left-2 w-3 h-8 rounded-full bg-[var(--color-gold-500)]"
                variants={{
                  hidden: { x: 0, opacity: 0 },
                  visible: { x: 38, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
                }}
              />
            </motion.div>

            <h3 className="font-display font-semibold text-[26px] text-[var(--color-navy-900)] leading-tight mb-3">
              Scan to Support
            </h3>

            <p className="font-sans text-[15px] text-[var(--color-text)] leading-relaxed mb-8 max-w-[280px]">
              Help provide safe housing, stability, and opportunity. Scan below to support Grace 101.
            </p>

            <div className="relative w-full max-w-[280px] aspect-square rounded-xl overflow-hidden border border-[var(--color-border-gold)]/50 shadow-sm bg-white transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/zelle-qr.png"
                alt="Send Money with Zelle QR Code"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
