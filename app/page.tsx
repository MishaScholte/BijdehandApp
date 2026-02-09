
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BentoGrid, BentoGridItem, BentoFeatureCard, BentoNumberCard } from "@/components/ui/bento-grid";
import {
  ShieldCheck,
  MapPin,
  Wallet,
  Cloud,
  LayoutGrid,
  EyeOff,
  Shield
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
              icon={Shield}
              iconColor="text-black"
              iconBgClass="bg-gradient-to-br from-yellow-400 to-yellow-500 border border-white/20"
              className="md:col-span-2"
            />

            {/* Card 2: 350+ Passes (Number Card Template) */}
            <BentoNumberCard
              number="350+"
              label="ontworpen klantenpassen"
              className="md:col-span-1"
            />

            {/* Card 3: Smart Locations */}
            <BentoFeatureCard
              title="Slimme Locaties"
              description="De juiste pas verschijnt automatisch op je vergrendelscherm als je in de buurt van de winkel bent."
              icon={MapPin}
              iconColor="text-primary-purple"
              className="md:col-span-1"
            />

            {/* Card 4: Apple Wallet */}
            <BentoFeatureCard
              title="Apple Wallet"
              description="Voeg je favoriete kaarten met één tik toe aan je Apple Wallet voor ultra-snelle toegang."
              icon={Wallet}
              iconColor="text-blue-400"
              className="md:col-span-1"
            />

            {/* Card 5: iCloud Sync */}
            <BentoFeatureCard
              title="iCloud Sync"
              description="Al je apparaten altijd up-to-date. Voeg een pas toe op je iPhone, gebruik hem op je Watch."
              icon={Cloud}
              iconColor="text-white"
              className="md:col-span-1"
            />

          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
