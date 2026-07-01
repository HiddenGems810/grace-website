"use client";

import React from "react";
import { Home, Users, HeartHandshake, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROGRAMS = [
  {
    title: "Safe Housing",
    description: "Clean, comfortable, and secure living accommodations in a supportive environment.",
    icon: <Home className="w-10 h-10" />,
  },
  {
    title: "Independent Living Skills",
    description: "Life skills training, budgeting, employment readiness, and personal development.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: "Community Resources",
    description: "Connections to education, healthcare, employment, counseling, and local services.",
    icon: <HeartHandshake className="w-10 h-10" />,
  },
  {
    title: "Supportive Environment",
    description: "Encouragement, accountability, and a community that believes in second chances.",
    icon: <Heart className="w-10 h-10" />,
  },
];

export function ProgramsGrid() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal y={20} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-border-gold)]" />
            <span className="block text-[13px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)]">
              What We Provide
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-border-gold)]" />
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <ScrollReveal isStaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, idx) => (
            <ScrollReveal key={idx} y={30} className="h-full">
              <div className="group h-full min-h-[220px] md:min-h-[190px] flex flex-col items-center text-center bg-[var(--color-warm-white)] border border-[var(--color-gold-500)]/30 rounded-[14px] p-[32px_26px] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-[var(--color-gold-500)]/60 hover:shadow-[var(--shadow-gold)] cursor-default">
                
                {/* Icon Container */}
                <div className="text-[var(--color-gold-500)] mb-6 transition-transform duration-300 group-hover:scale-110">
                  {/* We duplicate the icon styling to simulate the hybrid fill/outline look */}
                  <div className="relative">
                    <div className="absolute inset-0 opacity-20 fill-current">
                      {program.icon}
                    </div>
                    {program.icon}
                  </div>
                </div>

                <h3 className="font-display font-semibold text-[22px] leading-tight text-[var(--color-navy-900)] mb-4">
                  {program.title}
                </h3>
                
                <p className="font-sans text-[15px] text-[var(--color-text)] leading-relaxed">
                  {program.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
