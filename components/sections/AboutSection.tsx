"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden scroll-mt-32">
      {/* Decorative background logo */}
      <div
        className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-no-repeat opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/images/logo.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Left Side: Images & Floating Elements */}
        <div className="lg:col-span-6 xl:col-span-7 relative mb-12 lg:mb-0">
          {/* Decorative Offset Block */}
          <div className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-[var(--color-navy-900)] rounded-[32px] opacity-5 transform translate-y-8 translate-x-4 md:translate-y-12 md:translate-x-8 -z-10" />
          
          <ScrollReveal y={40} duration={0.8} className="w-full relative h-[450px] md:h-[600px] lg:h-[700px] rounded-[24px] overflow-hidden shadow-2xl">
            <motion.div
              className="w-full h-[120%] -mt-[10%] bg-cover bg-center"
              style={{
                y: yParallax,
                backgroundImage: "url('/images/residency_space_diverse.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            {/* Subtle overlay to enrich colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy-900)]/20 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px]" />
          </ScrollReveal>

        </div>

        {/* Right Side: Text & Content */}
        <div className="lg:col-span-6 xl:col-span-5 lg:pl-10">
          <ScrollReveal isStaggerContainer>
            <ScrollReveal y={20}>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]" />
                <span className="block text-[12px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-600)]">
                  About Grace 101
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal y={20}>
              <h2 className="font-display text-[42px] md:text-[56px] lg:text-[64px] text-[var(--color-navy-900)] leading-[1.05] mb-8 tracking-[-0.02em]">
                A Safe Place <br className="hidden md:block" /> to <span className="text-[var(--color-gold-500)]" style={{ fontFamily: "var(--font-quote-script)", fontSize: "1.1em", fontWeight: 400 }}>Begin Again</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal y={20}>
              <div className="pl-6 md:pl-8 border-l-2 border-[var(--color-gold-400)]/40 mb-10 flex flex-col space-y-4">
                <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.8] text-pretty">
                  At <span className="font-script text-[32px] text-[var(--color-gold-500)] leading-none align-middle mx-1">Grace</span> 101 Independent Living Home, we believe every woman deserves a safe, supportive place to grow.
                </p>
                <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.8] text-pretty">
                  Our home provides a stable environment where women can build confidence, strengthen life skills, and move toward independence.
                </p>
                <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.8] text-pretty">
                  With <span className="font-script text-[32px] text-[var(--color-gold-500)] leading-none align-middle mx-1">Grace</span>, support, and opportunity, every new beginning starts here.
                </p>
              </div>
            </ScrollReveal>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
