"use client";

import React from "react";
import { Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative w-full h-auto min-h-[100vh] lg:min-h-[720px] flex items-center pt-[150px] md:pt-[170px] lg:pt-[130px] overflow-hidden bg-[var(--color-navy-900)]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        {/* The image container is constrained to the right 65% on desktop */}
        <div 
          className="relative w-full lg:w-[65%] h-full opacity-60 lg:opacity-100 mix-blend-overlay lg:mix-blend-normal"
        >
          {/* Actual background video */}
          <video
            ref={(el) => { if (el) el.playbackRate = 0.5; }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 lg:opacity-50 saturate-125"
          >
            <source src="/videos/porch-women-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Hard gradient on the left edge of the image to blend it seamlessly into the solid navy background */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[400px] bg-gradient-to-r from-[var(--color-navy-900)] via-[var(--color-navy-900)]/80 to-transparent z-10" />
          
          {/* Bottom gradient to blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-[var(--color-navy-900)] to-transparent z-10 hidden lg:block" />
        </div>
        
        {/* Mobile/Tablet global overlay (hidden on desktop because the left edge gradient handles it) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)]/70 via-[var(--color-navy-900)]/45 to-[var(--color-navy-900)]/85 lg:hidden pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 pb-16 lg:pb-0">
        <ScrollReveal isStaggerContainer className="max-w-[650px]">
          <ScrollReveal y={30} duration={0.8}>
            <h1 className="font-display font-medium text-[38px] leading-[0.95] md:text-[56px] lg:text-[76px] xl:text-[88px] tracking-[-0.035em] mb-6">
              <span className="block text-white">Where <span className="text-[var(--color-gold-500)]">Grace</span></span>
              <span className="block text-white italic pr-4">Meets New <span className="text-[var(--color-gold-500)]">Beginnings.</span></span>
            </h1>
          </ScrollReveal>

          <ScrollReveal y={20} delay={0.15} duration={0.8}>
            <p className="font-sans text-[15px] md:text-[18px] text-[var(--color-ivory)]/90 leading-[1.65] max-w-[540px] mb-10">
              Grace 101 provides safe, stable, and affordable housing where women can rebuild with confidence, discover their strength, and create a brighter future.
            </p>
          </ScrollReveal>

          <ScrollReveal y={20} delay={0.25} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" icon={<Calendar className="w-5 h-5" />} className="w-full sm:w-auto" onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}>
                Schedule a Tour
              </Button>
              <Button variant="secondary" icon={<Heart className="w-5 h-5" />} className="w-full sm:w-auto !text-white !border-white/40 hover:!border-[var(--color-gold-400)] hover:!text-[var(--color-navy-900)]" onClick={() => document.getElementById("partner")?.scrollIntoView({ behavior: "smooth" })}>
                Become a Partner
              </Button>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>

      {/* Subtle decorative particles/crescent could go here via a pseudo-element or absolute div */}
    </section>
  );
}
