"use client";

import React from "react";
import { Calendar, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

const email = "dominque@grace101ilh.org";

export function ContactForms() {
  return (
    <section className="bg-[var(--color-warm-white)] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FormCard
          id="tour"
          icon={<Calendar className="w-8 h-8" />}
          title="Schedule a Tour"
          subject="Grace 101 Tour Request"
          messageLabel="Preferred dates or questions"
          button="Send Tour Request"
        />
        <FormCard
          id="partner"
          icon={<HeartHandshake className="w-8 h-8" />}
          title="Become a Partner"
          subject="Grace 101 Partner Commitment"
          messageLabel="How would you like to partner?"
          button="Send Commitment Form"
        />
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
  return (
    <form
      id={id}
      action={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      method="post"
      encType="text/plain"
      className="rounded-[14px] border border-[var(--color-gold-500)]/30 bg-white p-6 md:p-8 shadow-[var(--shadow-soft)]"
    >
      <div className="mb-6 flex items-center gap-4 text-[var(--color-gold-500)]">
        {icon}
        <h2 className="font-display text-[32px] text-[var(--color-navy-900)] leading-tight">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="font-sans text-[13px] font-semibold uppercase tracking-wide text-[var(--color-navy-900)]">
          Name
          <input name="name" required className="mt-2 w-full rounded-[10px] border border-[var(--color-border-gold)] px-4 py-3 text-[15px] font-normal normal-case tracking-normal" />
        </label>
        <label className="font-sans text-[13px] font-semibold uppercase tracking-wide text-[var(--color-navy-900)]">
          Phone
          <input name="phone" required className="mt-2 w-full rounded-[10px] border border-[var(--color-border-gold)] px-4 py-3 text-[15px] font-normal normal-case tracking-normal" />
        </label>
      </div>
      <label className="mt-4 block font-sans text-[13px] font-semibold uppercase tracking-wide text-[var(--color-navy-900)]">
        Email
        <input name="email" type="email" className="mt-2 w-full rounded-[10px] border border-[var(--color-border-gold)] px-4 py-3 text-[15px] font-normal normal-case tracking-normal" />
      </label>
      <label className="mt-4 block font-sans text-[13px] font-semibold uppercase tracking-wide text-[var(--color-navy-900)]">
        {messageLabel}
        <textarea name="message" rows={4} className="mt-2 w-full rounded-[10px] border border-[var(--color-border-gold)] px-4 py-3 text-[15px] font-normal normal-case tracking-normal" />
      </label>
      <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto">
        {button}
      </Button>
    </form>
  );
}
