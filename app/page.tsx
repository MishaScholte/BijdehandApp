import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  ShieldCheck,
  MapPin,
  Wallet,
  Cloud,
  LayoutGrid,
  EyeOff
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
            Waarom <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-purple">Bijdehand</span>?
          </h2>

          <BentoGrid className="max-w-4xl mx-auto">
            {/* Card 1: Privacy (Icon) */}
            <BentoGridItem
              title="Privacy First"
              description="Jouw data blijft van jou. Geen tracking, geen analytics, geen accounts. Alles wordt lokaal opgeslagen."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center border border-white/5">
                  <ShieldCheck className="w-12 h-12 text-primary" />
                </div>
              }
              className="md:col-span-2"
              icon={<ShieldCheck className="h-4 w-4 text-neutral-500" />}
            />

            {/* Card 2: No Ads (Number) */}
            <BentoGridItem
              title="Reclame & Accounts"
              description="Gewoon je pasjes. Niets meer, niets minder. Geen afleiding."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center border border-white/5">
                  <span className="text-6xl font-bold text-white">0</span>
                </div>
              }
              className="md:col-span-1"
              icon={<EyeOff className="h-4 w-4 text-neutral-500" />}
            />

            {/* Card 3: Smart Locations (Icon) */}
            <BentoGridItem
              title="Slimme Locaties"
              description="De juiste pas verschijnt automatisch op je vergrendelscherm als je in de buurt van de winkel bent."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center border border-white/5">
                  <MapPin className="w-12 h-12 text-primary-purple" />
                </div>
              }
              className="md:col-span-1"
            />

            {/* Card 4: Apple Wallet (Icon) */}
            <BentoGridItem
              title="Apple Wallet"
              description="Voeg je favoriete kaarten met één tik toe aan je Apple Wallet voor ultra-snelle toegang."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center border border-white/5">
                  <Wallet className="w-12 h-12 text-blue-400" />
                </div>
              }
              className="md:col-span-1"
            />

            {/* Card 5: iCloud Sync (Icon) */}
            <BentoGridItem
              title="iCloud Sync"
              description="Al je apparaten altijd up-to-date. Voeg een pas toe op je iPhone, gebruik hem op je Watch."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 items-center justify-center border border-white/5">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
              }
              className="md:col-span-1"
            />

          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
