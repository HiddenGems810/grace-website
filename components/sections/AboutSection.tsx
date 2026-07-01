"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-[var(--color-warm-white)] relative overflow-hidden">
      {/* Decorative Crescent Motif */}
      <div 
        className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-no-repeat opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/logo.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: "brightness(0) saturate(100%) invert(75%) sepia(54%) saturate(637%) hue-rotate(352deg) brightness(89%) contrast(85%)", // Approximate to Gold
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left: Image Card */}
        <ScrollReveal y={40} duration={0.8} className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[var(--shadow-gold)] border border-[var(--color-border-gold)]">
          <motion.div className="w-full h-[120%] -mt-[10%] bg-cover bg-center"
            style={{ 
              y: yParallax,
              backgroundImage: "url('/images/about_living_room.png')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </ScrollReveal>

        {/* Right: Content */}
        <ScrollReveal isStaggerContainer>
          <ScrollReveal y={20}>
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              About Grace 101
            </span>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <h2 className="font-display text-[40px] md:text-[48px] lg:text-[56px] text-[var(--color-navy-900)] leading-[1.05] mb-6 tracking-[-0.02em]">
              A Safe Place <br className="hidden md:block"/> to Begin Again
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text)] leading-[1.65] mb-10 max-w-[500px]">
              At Grace 101 Independent Living Home, we believe every woman deserves more than a place to stay—she deserves a place to grow. Our home offers a safe, stable, and supportive environment where women can rebuild with confidence, develop life skills, and move toward long-term independence.
            </p>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <Button variant="primary" arrow>
              Learn More About Our Home
            </Button>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
