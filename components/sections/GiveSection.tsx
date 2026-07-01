"use client";

import React from "react";
import Image from "next/image";
import { Heart, QrCode } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GiveSection() {
  return (
    <section id="give" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Subtle Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-gold-500) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left: Content */}
        <ScrollReveal isStaggerContainer>
          <ScrollReveal y={20}>
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              Ways to Give
            </span>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] text-[var(--color-navy-900)] leading-[1.05] mb-6 tracking-[-0.02em]">
              Help Us Welcome <br className="hidden md:block"/> Women Home
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.65] mb-10 max-w-[500px]">
              Grace 101 operates on the generosity of our community. Your financial support, household item donations, and volunteer time directly impact the lives of women rebuilding their futures. Every gift helps provide a safe, fully-furnished room and access to life-changing programs.
            </p>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" icon={<Heart className="w-5 h-5" />} className="w-full sm:w-auto">
                Donate Now
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                See Wishlist
              </Button>
            </div>
          </ScrollReveal>
        </ScrollReveal>

        {/* Right: Badge / QR Card Structure */}
        <ScrollReveal y={40} duration={0.8} delay={0.2} className="relative mx-auto w-full max-w-[440px]">
          {/* Background offset card for depth */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[var(--color-gold-400)] rounded-2xl opacity-20 border border-[var(--color-gold-500)]" />
          
          <div className="relative bg-white border border-[var(--color-border-gold)] rounded-2xl p-6 md:p-12 shadow-[var(--shadow-navy)] flex flex-col items-center text-center">
            
            <div className="w-16 h-16 bg-[var(--color-navy-900)] rounded-full flex items-center justify-center mb-6 shadow-md">
              <Heart className="w-8 h-8 text-[var(--color-gold-500)]" fill="currentColor" />
            </div>
            
            <h3 className="font-display font-semibold text-[26px] text-[var(--color-navy-900)] leading-tight mb-3">
              Scan to Support
            </h3>
            
            <p className="font-sans text-[15px] text-[var(--color-text)] leading-relaxed mb-8 max-w-[280px]">
              Use the QR code below to make a quick and secure donation to Grace 101.
            </p>

            {/* Zelle QR Code */}
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
