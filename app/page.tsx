
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { BentoGrid, BentoGridItem, BentoFeatureCard, BentoNumberCard } from "@/components/ui/bento-grid";
import {
  ShieldUser,
  MapPinned,
  Wallet,
  Cloud,
  LayoutGrid,
  Ticket,
  EyeOff
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">


          <BentoGrid className="max-w-4xl mx-auto">
            {/* Row 1: Privacy + Stores */}
            <BentoFeatureCard
              title="Private by design"
              description="Jouw data is jouw data. Geen accounts. Geen reclame. Geen cookies."
              icon={ShieldUser}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20"
              iconClassName="w-16 h-16"
              className="md:col-span-2"
            />
            <BentoNumberCard
              number="350+"
              label="ontworpen klantenpassen"
              className="md:col-span-1"
            />

            {/* Row 2: Battery + Smart Locations */}
            <BentoNumberCard
              number="0%"
              label="Batterij impact"
              className="md:col-span-1"
            />
            <BentoFeatureCard
              title="Slimme Locaties"
              description="De juiste pas verschijnt automatisch op je vergrendelscherm als je in de buurt van de winkel bent."
              icon={MapPinned}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-purple-400 to-purple-600 border border-white/20"
              iconClassName="w-16 h-16"
              className="md:col-span-2"
            />

            {/* Row 3: Apple Wallet + Placeholder */}
            <BentoFeatureCard
              title="Apple Wallet"
              description="Voeg je favoriete kaarten met één tik toe aan je Apple Wallet voor ultra-snelle toegang."
              icon={Wallet}
              iconColor="text-black"
              iconBgClass="bg-gradient-to-br from-yellow-400 to-yellow-600 border border-white/20"
              iconClassName="w-16 h-16"
              className="md:col-span-2"
            />
            <BentoNumberCard
              topLabel="In slechts"
              number="3 tikken"
              label="stap je over"
              numberClassName="text-6xl"
              className="md:col-span-1"
            />

            {/* Row 4: Placeholder + Vouchers */}
            <BentoNumberCard
              number="?"
              label="Binnenkort beschikbaar"
              className="md:col-span-1"
            />
            <BentoFeatureCard
              title="Sla je tegoedbonnen veilig op"
              description="Voorkom dat je geld verliest en ontvang een melding voordat de bon verloopt"
              icon={Ticket}
              iconColor="text-white"
              iconBgClass="bg-gradient-to-br from-orange-400 to-orange-600 border border-white/20"
              iconClassName="w-16 h-16"
              className="md:col-span-2"
            />

          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
