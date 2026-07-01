"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  staggerChildren?: number;
  isStaggerContainer?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  staggerChildren,
  isStaggerContainer = false,
  tag = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1];

  const variants = isStaggerContainer
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerChildren || 0.15,
            delayChildren: delay,
          },
        },
      }
    : {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease,
            delay: isStaggerContainer ? 0 : delay,
          },
        },
      };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[tag as keyof typeof motion] as any;

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
