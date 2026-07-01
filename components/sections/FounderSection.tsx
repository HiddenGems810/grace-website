"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FounderSection() {
  return (
    <section className="bg-[var(--color-warm-white)] pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row shadow-[var(--shadow-navy)] rounded-2xl overflow-hidden min-h-[500px]">
          
          {/* Left: Founder Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[32%] relative h-[300px] md:h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[var(--color-gold-500)]/40 bg-[#f8f0ea]"
          >
            <Image
              src="/images/profile image.png"
              alt="Dominique Brown, Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover object-top"
            />
          </motion.div>

          {/* Middle: Navy Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[38%] bg-[var(--color-navy-900)] p-8 md:p-14 flex flex-col justify-center text-white relative"
          >
            {/* Subtle background motif */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 100%, var(--color-gold-500) 0%, transparent 60%)" }} />

            <span className="block text-[12px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              Meet Our Founder
            </span>
            
            <h2 className="font-display text-[40px] md:text-[46px] leading-[1.1] mb-2">
              Dominique Brown
            </h2>
            
            <p className="font-sans text-[14px] text-[var(--color-gold-400)] uppercase tracking-[0.1em] font-semibold mb-8">
              Founder & Executive Director
            </p>

            <p className="font-sans text-[15px] md:text-[16px] text-white/85 leading-[1.7] mb-8">
              Grace 101 was created from a vision to provide women with more than housing—it was created to provide hope. Through compassionate leadership and a commitment to empowering women, Dominique has built Grace 101 as a place where healing begins, confidence is restored, and new opportunities become possible.
            </p>

            <blockquote className="font-script text-[28px] md:text-[34px] text-[var(--color-gold-500)] leading-[1.2]">
              “Every woman deserves a safe place to begin again.”
            </blockquote>
          </motion.div>

          {/* Right: Gold CTA Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[30%] bg-[var(--color-gold-400)] p-8 md:p-14 flex flex-col items-center justify-center text-center relative"
          >
            {/* Calendar Icon Motif */}
            <Calendar className="w-14 h-14 text-[var(--color-navy-900)] mb-6 opacity-90" strokeWidth={1.5} />

            <h3 className="font-display font-semibold text-[32px] text-[var(--color-navy-900)] leading-tight mb-4">
              Schedule A Tour
            </h3>
            
            <p className="font-sans text-[16px] text-[var(--color-navy-900)]/90 leading-relaxed font-medium mb-8">
              Come see Grace 101 for yourself.<br/> We&apos;d love to meet you!
            </p>

            <Button 
              variant="primary" 
              arrow 
              className="!bg-[var(--color-navy-900)] hover:!bg-[var(--color-navy-800)] !text-white shadow-[var(--shadow-navy)]"
            >
              Schedule Your Tour
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
