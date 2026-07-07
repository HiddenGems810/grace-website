"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Home, Mail, ArrowRight, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Mission", href: "#mission" },
  { name: "Programs", href: "#programs" },
  { name: "Schedule a Tour", href: "#tour" },
  { name: "Ways to Give", href: "#give" },
];

export function Footer() {
  return (
    <footer className="bg-[#030e1a] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-gold-900)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Logo className="w-[170px] h-[170px]" />
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start space-y-6 lg:pl-8 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Explore</h3>
            <nav className="flex flex-col items-center md:items-start space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-[15px] text-white/70 hover:text-white transition-colors duration-300 w-fit"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 text-[var(--color-gold-400)] transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Contact Us</h3>
            <div className="flex flex-col items-center md:items-start space-y-4 text-[15px] text-white/70">
              <a href="#" className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-[var(--color-gold-400)] shrink-0" />
                <span className="text-center md:text-left">P.O. Box 60194<br className="hidden md:block" /> Houston, TX 77205</span>
              </a>
              <a href="tel:+13468808696" className="flex flex-col md:flex-row items-center gap-2 md:gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[var(--color-gold-400)] shrink-0" />
                <span>346.880.8696</span>
              </a>
              <a href="mailto:dominque@grace101ilh.org" className="flex flex-col md:flex-row items-center gap-2 md:gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[var(--color-gold-400)] shrink-0" />
                <span>dominque@grace101ilh.org</span>
              </a>
              <a href="https://grace101ilh.org" className="flex flex-col md:flex-row items-center gap-2 md:gap-3 hover:text-white transition-colors">
                <Home className="w-5 h-5 text-[var(--color-gold-400)] shrink-0" />
                <span>grace101ilh.org</span>
              </a>
            </div>
            
            {/* Popl Digital Business Card */}
            <div className="pt-2 flex flex-col items-center md:items-start justify-center gap-3 w-full max-w-[200px] mx-auto md:mx-0">
              <span className="font-sans text-[11px] text-[var(--color-gold-400)] tracking-widest uppercase font-bold text-center md:text-left">
                Scan for Digital Business Card
              </span>
              <div className="relative w-28 h-28 bg-white rounded-xl overflow-hidden p-1.5 transition-transform hover:-translate-y-1 duration-300">
                <Image 
                  src="/images/popl-qr.png" 
                  alt="Popl Digital Business Card" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
            </div>
          </div>

          {/* Column 4: Quote & Promise */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <blockquote
              className="text-[22px] md:text-[24px] lg:text-[26px] text-[var(--color-gold-400)] leading-[1.3] text-center"
              style={{ fontFamily: "var(--font-quote-script)" }}
            >
              <span className="block">&quot;Grace reminds every woman that</span>
              <span className="block">her past may shape her story, but</span>
              <span className="block">it never has to define her future.&quot;</span>
            </blockquote>

            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 w-full max-w-[360px] mx-auto md:mx-0 border border-[var(--color-gold-500)]/30 rounded-xl p-5 bg-white/5 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-[var(--color-gold-400)] md:mt-1 flex-shrink-0" />
              <div className="flex flex-col items-center md:items-start">
                <span className="font-sans text-[11px] text-[var(--color-gold-400)] tracking-widest uppercase font-bold mb-1">
                  Our Promise
                </span>
                <span className="font-serif text-[16px] md:text-[17px] text-white leading-tight">
                  Grace, Dignity and Support<br className="hidden md:block" /> for Every New Beginning
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 text-[13px] text-white/50 font-sans gap-4">
          <p>© 2026 Grace 101 Independent Living Home. All Rights Reserved.</p>
          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20"></span>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20"></span>
            <Link href="/equal-housing" className="flex items-center gap-2 hover:text-white transition-colors">
              Equal Housing Opportunity <Home className="w-[14px] h-[14px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
