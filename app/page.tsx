
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BentoGrid, BentoGridItem, BentoFeatureCard, BentoNumberCard } from "@/components/ui/bento-grid";
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


          <BentoGrid className="max-w-4xl mx-auto">
            {/* Card 1: Privacy (Feature Card Template) */}
            <BentoFeatureCard
              title="Private by design"
              description="Jouw data is jouw data. Geen accounts. Geen reclame. Geen cookies."
              icon={EyeOff}
              iconColor="text-primary-purple"
              className="md:col-span-2"
            />

            {/* Card 2: 350+ Passes (Number Card Template) */}
            <BentoNumberCard
              number="350+"
              label="ontworpen klantenpassen"
              className="md:col-span-1"
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
