"use client";

import React from "react";
import { Calendar, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const email = "dominque@grace101ilh.org";

export function ContactForms() {
  return (
    <section id="contact" className="bg-[var(--color-warm-white)] py-16 md:py-24 scroll-mt-32 relative overflow-hidden">
      
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold-400)]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-navy-900)]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal isStaggerContainer className="text-center mb-10 md:mb-14">
          <ScrollReveal y={20}>
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]" />
              <span className="text-[12px] md:text-[14px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
                Get Involved
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[var(--color-gold-500)]" />
            </div>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <h2 className="font-display text-[42px] md:text-[56px] leading-[1.1] text-[var(--color-navy-900)] mb-6">
              Take the Next <br className="hidden md:block" />
              <span className="text-[var(--color-gold-400)]" style={{ fontFamily: "var(--font-quote-script)", fontSize: "1.2em", fontWeight: 400 }}>Step With Us</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20}>
            <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-navy-900)]/70 leading-relaxed max-w-[600px] mx-auto">
              Whether you are looking to schedule a visit to our home or become a partner in our mission, we would love to connect with you.
            </p>
          </ScrollReveal>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal y={30} delay={0.1} className="h-full">
            <FormCard
              id="tour"
              icon={<Calendar className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />}
              title="Schedule a Tour"
              subject="Grace 101 Tour Request"
              messageLabel="Preferred dates or questions"
              button="Send Tour Request"
            />
          </ScrollReveal>
          <ScrollReveal y={30} delay={0.2} className="h-full">
            <FormCard
              id="partner"
              icon={<HeartHandshake className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />}
              title="Become a Partner"
              subject="Grace 101 Partner Commitment"
              messageLabel="How would you like to partner?"
              button="Send Commitment Form"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FormCard({
  id,
  icon,
  title,
  subject,
  messageLabel,
  button,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subject: string;
  messageLabel: string;
  button: string;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `${messageLabel}: ${formData.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="h-full flex flex-col scroll-mt-32 rounded-[32px] border border-[var(--color-navy-900)]/5 bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(0,23,47,0.06)] hover:shadow-[0_20px_40px_rgba(0,23,47,0.12)] transition-shadow duration-500"
    >
      <div className="mb-6 flex items-center gap-5">
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-[var(--color-gold-500)]/10 text-[var(--color-gold-400)]">
          {icon}
        </div>
        <h3 className="font-display text-[32px] md:text-[36px] text-[var(--color-navy-900)] leading-tight">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-navy-900)]/80">
          Name
          <input name="name" required className="mt-3 w-full rounded-[16px] border border-[var(--color-navy-900)]/10 bg-[var(--color-warm-white)]/50 px-5 py-4 text-[15px] font-normal normal-case tracking-normal text-[var(--color-navy-900)] placeholder-[var(--color-navy-900)]/30 focus:border-[var(--color-gold-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-400)] transition-all" />
        </label>
        <label className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-navy-900)]/80">
          Phone
          <input name="phone" required className="mt-3 w-full rounded-[16px] border border-[var(--color-navy-900)]/10 bg-[var(--color-warm-white)]/50 px-5 py-4 text-[15px] font-normal normal-case tracking-normal text-[var(--color-navy-900)] placeholder-[var(--color-navy-900)]/30 focus:border-[var(--color-gold-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-400)] transition-all" />
        </label>
      </div>
      
      <label className="mb-4 block font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-navy-900)]/80">
        Email
        <input name="email" type="email" required className="mt-3 w-full rounded-[16px] border border-[var(--color-navy-900)]/10 bg-[var(--color-warm-white)]/50 px-5 py-4 text-[15px] font-normal normal-case tracking-normal text-[var(--color-navy-900)] placeholder-[var(--color-navy-900)]/30 focus:border-[var(--color-gold-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-400)] transition-all" />
      </label>
      
      <label className="mb-6 block font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-navy-900)]/80 flex-grow">
        {messageLabel}
        <textarea name="message" rows={4} required className="mt-3 w-full h-[calc(100%-2rem)] min-h-[120px] rounded-[16px] border border-[var(--color-navy-900)]/10 bg-[var(--color-warm-white)]/50 px-5 py-4 text-[15px] font-normal normal-case tracking-normal text-[var(--color-navy-900)] placeholder-[var(--color-navy-900)]/30 focus:border-[var(--color-gold-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold-400)] transition-all resize-none" />
      </label>
      
      <button 
        type="submit" 
        className="w-full mt-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.15em] text-[13px] md:text-[14px] bg-[var(--color-gold-400)] text-[var(--color-navy-900)] hover:bg-[var(--color-navy-900)] hover:text-white transition-all duration-300 shadow-[0_4px_14px_rgba(216,163,51,0.2)] hover:shadow-[0_6px_20px_rgba(0,23,47,0.15)]"
      >
        {button}
      </button>
    </form>
  );
}
