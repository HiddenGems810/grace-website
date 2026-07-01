import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionBand } from "@/components/sections/MissionBand";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { FounderSection } from "@/components/sections/FounderSection";
import { GiveSection } from "@/components/sections/GiveSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-warm-white)]">
      <Header />
      
      {/* 
        We use flex-grow to ensure the main content pushes the footer down if needed.
        The Sections are structured to match the visual hierarchy of the reference.
      */}
      <div className="flex-grow">
        <Hero />
        <AboutSection />
        <MissionBand />
        <ProgramsGrid />
        <FounderSection />
        <GiveSection />
      </div>

      <Footer />
    </main>
  );
}
