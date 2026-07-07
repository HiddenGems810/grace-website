"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FounderSection() {
  const handleWaitlistSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Email: ${formData.get("email") || ""}`,
    ].join("\n");

    window.location.href = `mailto:dominque@grace101ilh.org?subject=${encodeURIComponent("Grace 101 Waitlist Request")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="founder" className="scroll-mt-32 bg-[var(--color-warm-white)] pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row shadow-[var(--shadow-navy)] rounded-2xl overflow-hidden min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[38%] relative h-[300px] md:h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[var(--color-gold-500)]/40 bg-[#f8f0ea]"
          >
            <Image
              src="/images/dominque_brown_02.png"
              alt="Dominque Brown, Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
              priority
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[36%] bg-[var(--color-navy-900)] p-8 lg:p-12 flex flex-col justify-center text-white relative"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 100%, var(--color-gold-500) 0%, transparent 60%)" }} />

            <span className="block text-[12px] font-sans font-bold uppercase tracking-[0.16em] text-[var(--color-gold-500)] mb-4">
              Meet Our Founder
            </span>

            <h2 className="font-display text-[40px] md:text-[46px] leading-[1.1] mb-2">
              Dominque Brown
            </h2>

            <p className="font-sans text-[14px] text-[var(--color-gold-400)] uppercase tracking-[0.1em] font-semibold mb-8">
              Founder & Executive Director
            </p>

            <div className="flex flex-col space-y-5 mb-8">
              <p className="font-sans text-[15px] md:text-[16px] text-white/85 leading-[1.7]">
                Dominque Brown is the Founder and Executive Director of Grace 101 Independent Living Home. She is passionate about creating safe, supportive spaces where women are treated with compassion, dignity, and grace. A college graduate, church volunteer, and life insurance professional, Dominque has dedicated her life to encouraging others and helping families build stronger futures.
              </p>
              <p className="font-sans text-[15px] md:text-[16px] text-white/85 leading-[1.7]">
                Grace 101 was founded from her desire to provide more than housing—it was created to offer hope, stability, and encouragement for women as they move toward independence. Her vision is to ensure every resident feels welcomed, valued, and empowered to embrace a new beginning.
              </p>
            </div>

            <blockquote
              className="text-center text-[29px] md:text-[34px] text-[var(--color-gold-400)] leading-[1.28]"
              style={{ fontFamily: "var(--font-quote-script)" }}
            >
              &quot;When women are met with grace instead of judgment, hope has room to grow.&quot;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[26%] bg-[var(--color-gold-400)] p-8 lg:p-10 flex flex-col items-center justify-center text-center relative"
          >
            <ClipboardList className="w-14 h-14 text-[var(--color-navy-900)] mb-6 opacity-90" strokeWidth={1.5} />

            <h3 className="font-display font-semibold text-[32px] text-[var(--color-navy-900)] leading-tight mb-4">
              Join the Waitlist
            </h3>

            <p className="font-sans text-[16px] text-[var(--color-navy-900)]/90 leading-relaxed font-medium mb-8">
              Share your information and we will follow up about residency availability.
            </p>

            <form
              id="waitlist"
              onSubmit={handleWaitlistSubmit}
              className="w-full space-y-3"
            >
              <input name="name" required placeholder="Name" className="w-full rounded-[10px] border border-[var(--color-navy-900)]/20 px-4 py-3 text-[14px] text-[var(--color-navy-900)]" />
              <input name="phone" required placeholder="Phone" className="w-full rounded-[10px] border border-[var(--color-navy-900)]/20 px-4 py-3 text-[14px] text-[var(--color-navy-900)]" />
              <input name="email" type="email" placeholder="Email" className="w-full rounded-[10px] border border-[var(--color-navy-900)]/20 px-4 py-3 text-[14px] text-[var(--color-navy-900)]" />
              <Button type="submit" variant="primary" arrow className="w-full !bg-[var(--color-navy-900)] hover:!bg-[var(--color-navy-800)] !text-white shadow-[var(--shadow-navy)]">
                Join Waitlist
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
