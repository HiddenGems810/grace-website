"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  arrow?: boolean;
}

export function Button({
  className,
  variant = "primary",
  icon,
  iconPosition = "left",
  arrow = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] font-sans font-semibold text-[15px] md:text-[16px] tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const variants = {
    primary:
      "bg-[var(--color-gold-500)] text-white hover:bg-[var(--color-gold-400)] shadow-[var(--shadow-gold)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-[var(--color-border-gold)] text-[var(--color-navy-900)] hover:border-[var(--color-gold-400)] hover:bg-[var(--color-warm-white)] hover:-translate-y-0.5",
    outline:
      "bg-transparent border border-[var(--color-border-gold)] text-white hover:border-[var(--color-gold-400)] hover:shadow-[0_0_15px_rgba(216,163,51,0.4)] hover:-translate-y-0.5",
    text: "bg-transparent text-[var(--color-gold-500)] hover:text-[var(--color-gold-400)] px-0 py-0",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className, "group")}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </span>
      )}
      {arrow && (
        <span className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
          →
        </span>
      )}
    </button>
  );
}
