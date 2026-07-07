"use client";

import React from "react";
import Image from "next/image";
import { Gift, Heart, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GiveSection() {
  return (
    <section id="give" className="py-24 md:py-32 bg-[var(--color-navy-900)] relative overflow-hidden scroll-mt-32">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-l from-[var(--color-gold-500)]/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] gap-16 lg:gap-24 items-center relative z-10">
        <ScrollReveal isStaggerContainer className="mx-auto max-w-[660px] text-center lg:mx-0 lg:text-left">
          
          <ScrollReveal y={20}>
            <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-6 w-full">
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[var(--color-gold-500)] hidden lg:block" />
              <span className="text-[12px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
                Ways to Give
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[var(--color-gold-500)] lg:hidden" />
            </div>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <h2 className="font-display text-[42px] md:text-[56px] leading-[1.1] text-white mb-6">
              Open the Door to <br className="hidden md:block" />
              <span className="text-[var(--color-gold-400)]" style={{ fontFamily: "var(--font-quote-script)", fontSize: "1.2em", fontWeight: 400 }}>New Beginnings</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <p className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-[560px] mx-auto lg:mx-0 text-balance">
              Grace 101 operates on the generosity of our community. Every gift makes a difference. Your financial support, donated household essentials, and volunteer time help provide women with a safe, fully furnished home, supportive resources, and the opportunity to build a brighter future.
            </p>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:justify-start mb-8">
              <a 
                href="https://www.zeffy.com/en-US/donation-form/where-grace-meets-new-beginnings-help-change-lives" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.15em] text-[13px] md:text-[14px] bg-[var(--color-gold-400)] text-[var(--color-navy-900)] hover:bg-white shadow-[0_0_20px_rgba(216,163,51,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Heart className="w-4 h-4 transition-transform group-hover:scale-110" strokeWidth={2.5} />
                Donate Now
              </a>
              <a 
                href="https://www.amazon.com/registries/gl/guest-view/3TKG27SEMJBD8?ref_=cm_sw_r_mwn_ggr-subnav-share_BPQF7FCG9BBV90GXGSNH&language=en-US" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.15em] text-[13px] md:text-[14px] bg-white/5 border border-[var(--color-gold-500)]/30 text-white hover:bg-[var(--color-gold-500)]/10 hover:border-[var(--color-gold-400)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Gift className="w-4 h-4 text-[var(--color-gold-400)] transition-transform group-hover:scale-110" strokeWidth={2.5} />
                Amazon Wishlist
              </a>
            </div>
            <div className="mx-auto lg:mx-0 flex w-full max-w-[460px] items-start gap-4 rounded-[20px] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-gold-400)]" strokeWidth={1.5} />
              <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-white/80">
                Choose the giving option that feels most comfortable: a secure online gift, household essentials, or a direct scan-to-support option.
              </p>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        {/* Right Column - QR Code Card */}
        <ScrollReveal y={40} duration={0.8} delay={0.2} className="mx-auto w-full max-w-[480px]">
          <div className="relative group">
            {/* Glowing backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-gold-400)] to-white rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-300" />
            
            <div className="relative rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-md p-3 md:p-4 shadow-2xl overflow-hidden">
              {/* Inner white card */}
              <div className="rounded-[24px] bg-white p-8 md:p-12 text-center flex flex-col items-center">
                <h3 className="font-display text-[32px] md:text-[40px] text-[var(--color-navy-900)] leading-tight mb-8">
                  Scan to Support
                </h3>
                
                <div className="relative w-full max-w-[360px] aspect-square rounded-[24px] overflow-hidden border border-[var(--color-navy-900)]/10 bg-[var(--color-warm-white)] shadow-[0_8px_30px_rgba(0,23,47,0.06)] p-2 sm:p-4 group-hover:shadow-[0_20px_40px_rgba(0,23,47,0.12)] transition-all duration-500">
                  <Image
                    src="/images/zelle-qr.png"
                    alt="Send Money with Zelle QR Code"
                    fill
                    sizes="360px"
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <p className="mt-8 font-sans font-semibold text-[13px] uppercase tracking-[0.15em] text-[var(--color-navy-900)]/50">
                  Grace 101 Independent Living
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
