"use client";

import React from "react";
import Image from "next/image";
import { Gift, Heart, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GiveSection() {
  return (
    <section id="give" className="py-24 md:py-32 bg-white relative overflow-hidden scroll-mt-32">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] gap-12 lg:gap-20 items-center relative z-10">
        <ScrollReveal isStaggerContainer className="max-w-[660px]">
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
              <a href="https://www.zeffy.com/en-US/donation-form/where-grace-meets-new-beginnings-help-change-lives" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-[14px] font-sans font-semibold text-[15px] md:text-[16px] tracking-wide bg-[var(--color-gold-500)] text-white hover:bg-[var(--color-gold-400)] shadow-[var(--shadow-gold)] transition-all duration-300">
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
              <a href="https://www.amazon.com/registries/gl/guest-view/3TKG27SEMJBD8?ref_=cm_sw_r_mwn_ggr-subnav-share_BPQF7FCG9BBV90GXGSNH&language=en-US" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-[14px] font-sans font-semibold text-[15px] md:text-[16px] tracking-wide bg-white border border-[var(--color-border-gold)] text-[var(--color-navy-900)] hover:border-[var(--color-gold-400)] hover:bg-[var(--color-warm-white)] transition-all duration-300">
                <Gift className="w-5 h-5" />
                Amazon Wishlist
              </a>
            </div>
            <div className="mt-6 flex w-full max-w-[420px] items-start gap-3 rounded-[14px] border border-[var(--color-border-gold)] bg-[var(--color-warm-white)] px-4 py-3 text-[14px] leading-relaxed text-[var(--color-text)]">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold-500)]" />
              <span>Choose the giving option that feels most comfortable: a secure online gift, household essentials, or a direct scan-to-support option.</span>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal y={40} duration={0.8} delay={0.2} className="mx-auto w-full max-w-[520px]">
          <div className="relative overflow-hidden rounded-[18px] border border-[var(--color-border-gold)] bg-[var(--color-warm-white)] p-5 shadow-[var(--shadow-soft)]">
            <div className="rounded-[14px] bg-white p-6 md:p-8 text-center">
              <h3 className="font-display font-semibold text-[30px] text-[var(--color-navy-900)] leading-tight mb-6">
              Scan to Support
              </h3>

              <div className="mx-auto relative w-full max-w-[320px] aspect-square rounded-[16px] overflow-hidden border border-[var(--color-border-gold)]/60 shadow-sm bg-white">
                <Image
                  src="/images/zelle-qr.png"
                  alt="Send Money with Zelle QR Code"
                  fill
                  className="object-contain p-3"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
