import React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface LogoProps {
  className?: string;
  colored?: boolean; // Kept for backwards compatibility but not used for masking anymore
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <Image 
        src="/images/logo-colored.png" 
        alt="Grace 101 Independent Living Home Logo" 
        fill
        sizes="(max-width: 768px) 120px, 160px"
        className="object-contain"
        priority
      />
    </div>
  );
}
