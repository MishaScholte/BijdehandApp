import { cn } from "@/lib/utils";
import {
    ShieldUser,
    MapPin,
    Wallet,
    IdCard,
    Gift,
    LayoutGrid,
    Share,
    DatabaseBackup,
    FastForward,
} from "lucide-react";

interface USPCardProps {
    title: string;
    description?: string | React.ReactNode;
    icon: React.ElementType;
    iconBgClass?: string;
    iconColor?: string;
    className?: string;
}

const USPCard = ({
    title,
    description,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
}: USPCardProps) => {
    return (
        <div className={cn("flex flex-col items-start p-4 md:p-6", className)}>
            {/* Icon */}
            <div className={cn("mb-4 p-4 rounded-2xl border overflow-hidden", iconBgClass)}>
                <Icon className={cn("w-6 h-6 md:w-10 md:h-10", iconColor || "text-neutral-200")} />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white text-left mb-2">
                {title}
            </h3>

            {/* Description */}
            <div className="text-neutral-400 text-sm md:text-base text-left font-normal">
                {description}
            </div>
        </div>
    );
};

export function USPSection() {
    const features = [
        {
            title: "Private by design",
            description: "Je wil niet dat iemand in je portemonnee kijkt. Bijdehand heeft geen accounts, geen cookies, geen tracking.",
            icon: ShieldUser,
            iconBgClass: "bg-gradient-to-br from-blue-400 to-blue-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Klantenpassen",
            description: "Alle klantenpassen kunnen worden opgeslagen zonder beperking. Alle type barcodes worden ondersteund. Ook QR.",
            icon: IdCard,
            iconBgClass: "bg-gradient-to-br from-cyan-400 to-cyan-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Cadeaubonnen",
            description: "Sla je cadeaubonnen op en voorkom dat ze verlopen. Bijdehand stuurt je een melding als het bijna zo ver is, zodat jij niet misgrijpt.",
            icon: Gift,
            iconBgClass: "bg-gradient-to-br from-rose-400 to-rose-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Slimme locaties",
            description: "De juiste pas, precies wanneer je hem nodig hebt. Slim ontworpen. Batterij- en privacyvriendelijk. Precies zoals het hoort.",
            icon: MapPin,
            iconBgClass: "bg-gradient-to-br from-purple-400 to-purple-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Widgets",
            description: "Voeg je favoriete kaarten toe aan je startscherm. Met keuze uit 4 is er altijd wel een die precies past bij jou wensen.",
            icon: LayoutGrid,
            iconBgClass: "bg-gradient-to-br from-amber-400 to-amber-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Wallet",
            description: "Ontgrendel de kracht van iOS en voeg passen toe aan je Wallet. Combineer met Slimme Locaties en ze verschijnen op het juiste moment op je vergrendelde scherm.",
            icon: Wallet,
            iconBgClass: "bg-gradient-to-br from-indigo-400 to-indigo-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Delen",
            description: "Deel je pasje of cadeaubon met familie of vrienden. Eenvoudig en veilig. Geen centrale opslag. Je geheime codes blijven bij jou en met wie je het deelt.",
            icon: Share,
            iconBgClass: "bg-gradient-to-br from-emerald-400 to-emerald-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "iCloud Backup",
            description: "Dankzij iCloud Backup herstel je eenvoudig je gegevens mocht je een nieuw toestel krijgen.",
            icon: DatabaseBackup,
            iconBgClass: "bg-gradient-to-br from-sky-400 to-sky-600 border-white/20",
            iconColor: "text-white",
        },
        {
            title: "Eenvoudig overstappen",
            description: "Stap in 1 minuut over door een schermopname te maken van je huidige app en die te importeren. Bijdehand regelt de rest.",
            icon: FastForward,
            iconBgClass: "bg-gradient-to-br from-violet-400 to-violet-600 border-white/20",
            iconColor: "text-white",
        },

    ];

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-8 md:mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Dit is waarom ze kiezen voor Bijdehand
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <USPCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            iconBgClass={feature.iconBgClass}
                            iconColor={feature.iconColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
