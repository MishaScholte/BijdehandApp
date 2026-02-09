import React from "react";
import { cn } from "@/lib/utils";
import { ShieldUser, MapPin, Wallet, Check } from "lucide-react";

const TechnicalSchematic = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
                maskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.5]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Grid - Very subtle */}
                <path
                    d="M 10 0 V 100 M 20 0 V 100 M 30 0 V 100 M 40 0 V 100 M 50 0 V 100 M 60 0 V 100 M 70 0 V 100 M 80 0 V 100 M 90 0 V 100
                       M 0 10 H 100 M 0 20 H 100 M 0 30 H 100 M 0 40 H 100 M 0 50 H 100 M 0 60 H 100 M 0 70 H 100 M 0 80 H 100 M 0 90 H 100"
                    fill="none"
                    stroke="#bdc3c7" // light gray
                    strokeWidth="0.2"
                    strokeOpacity="0.2"
                />

                {/* Primary Arc - Focusing on "Shield" / Security concept */}
                <path
                    d="M 20 80 A 60 60 0 0 1 80 20"
                    fill="none"
                    stroke="#60a5fa" // blue-400
                    strokeWidth="1"
                    strokeOpacity="0.8"
                />

                {/* Secondary Arc - Partial */}
                <path
                    d="M 25 75 A 50 50 0 0 1 75 25"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                    strokeOpacity="0.5"
                    strokeDasharray="4 2"
                />

                {/* Center Lines - Precision */}
                <path
                    d="M 50 10 V 90 M 10 50 H 90"
                    fill="none"
                    stroke="#93c5fd" // blue-300
                    strokeWidth="0.5"
                    strokeOpacity="0.6"
                    strokeDasharray="10 5"
                />

                {/* Dimension Line - Technical feel */}
                <path
                    d="M 85 20 V 80"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                />
                {/* Arrowheads for dimension */}
                <path d="M 82 25 L 85 20 L 88 25" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
                <path d="M 82 75 L 85 80 L 88 75" fill="none" stroke="#60a5fa" strokeWidth="0.5" />

                {/* Technical Text Stub (abstract) */}
                <rect x="87" y="45" width="2" height="10" fill="#60a5fa" fillOpacity="0.4" />

            </svg>
        </div>
    );
};

const MapSchematic = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
                maskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.5]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Grid - Very subtle */}
                <path
                    d="M 10 0 V 100 M 20 0 V 100 M 30 0 V 100 M 40 0 V 100 M 50 0 V 100 M 60 0 V 100 M 70 0 V 100 M 80 0 V 100 M 90 0 V 100
                       M 0 10 H 100 M 0 20 H 100 M 0 30 H 100 M 0 40 H 100 M 0 50 H 100 M 0 60 H 100 M 0 70 H 100 M 0 80 H 100 M 0 90 H 100"
                    fill="none"
                    stroke="#bdc3c7" // light gray
                    strokeWidth="0.2"
                    strokeOpacity="0.2"
                />

                {/* Radar / Map Circles */}
                <circle cx="50" cy="50" r="30" fill="none" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.6" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="4 2" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.3" />

                {/* Crosshairs - Cardinal Points */}
                <path d="M 50 10 V 90 M 10 50 H 90" stroke="#dab6fc" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="10 5" />

                {/* Location Marker Scopes */}
                <path d="M 45 20 H 55 M 45 80 H 55 M 20 45 V 55 M 80 45 V 55" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.6" />

                {/* Diagonal Heading Line */}
                <path d="M 50 50 L 75 25" stroke="#c084fc" strokeWidth="0.5" strokeOpacity="0.4" />
                <circle cx="75" cy="25" r="2" fill="#c084fc" fillOpacity="0.4" />

            </svg>
        </div>
    );
};

const WalletSchematic = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
                maskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 5%, black 80%)",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.5]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Grid - Very subtle */}
                <path
                    d="M 10 0 V 100 M 20 0 V 100 M 30 0 V 100 M 40 0 V 100 M 50 0 V 100 M 60 0 V 100 M 70 0 V 100 M 80 0 V 100 M 90 0 V 100
                       M 0 10 H 100 M 0 20 H 100 M 0 30 H 100 M 0 40 H 100 M 0 50 H 100 M 0 60 H 100 M 0 70 H 100 M 0 80 H 100 M 0 90 H 100"
                    fill="none"
                    stroke="#bdc3c7" // light gray
                    strokeWidth="0.2"
                    strokeOpacity="0.2"
                />

                {/* Card / Chip Outlines */}
                <rect x="20" y="30" width="40" height="25" rx="2" fill="none" stroke="#fb923c" strokeWidth="1" strokeOpacity="0.6" />
                <rect x="30" y="45" width="40" height="25" rx="2" fill="none" stroke="#fb923c" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 2" />

                {/* Data Traces (PCB style) */}
                <path d="M 20 42 H 10 M 20 35 H 15 V 10" stroke="#fdba74" strokeWidth="0.5" strokeOpacity="0.5" />
                <path d="M 60 42 H 90 M 70 57 H 90" stroke="#fdba74" strokeWidth="0.5" strokeOpacity="0.5" />

                {/* Connection Nodes */}
                <circle cx="10" cy="42" r="1.5" fill="#fb923c" fillOpacity="0.4" />
                <circle cx="90" cy="42" r="1.5" fill="#fb923c" fillOpacity="0.4" />

                {/* Chip Details */}
                <rect x="25" y="35" width="8" height="6" fill="#fb923c" fillOpacity="0.2" />

            </svg>
        </div>
    );
};

interface KnockoutCardProps {
    title: string;
    description?: string | React.ReactNode;
    icon: React.ElementType;
    iconBgClass?: string;
    iconColor?: string;
    className?: string;
    background?: React.ReactNode;
}

const KnockoutCard = ({
    title,
    description,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
    background,
}: KnockoutCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col items-start justify-start p-4 md:p-6 h-full overflow-hidden",
                "bg-white/[0.03] rounded-[32px] md:rounded-[40px]",
                "border border-white/10", // Subtle glassy border
                "transition-all duration-200 hover:border-white/20 hover:bg-white/[0.02]",
                className
            )}
        >
            {background}

            {/* Icon */}
            <div className={cn("relative z-10 mb-4 p-4 rounded-2xl border", iconBgClass)}>
                <Icon className={cn("w-6 h-6 md:w-10 md:h-10", iconColor || "text-neutral-200")} />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white text-left mb-2">
                {title}
            </h3>

            {/* Description */}
            <div className="relative z-10 text-neutral-400 text-sm md:text-base text-left font-normal">
                {description}
            </div>
        </div>
    );
};

export function USPSection() {
    const features = [
        {
            title: "Private by design",
            description: (
                <div className="flex flex-wrap gap-3 md:flex-col md:gap-2">
                    {["Geen accounts", "Geen cookies", "Geen reclame"].map((item, i) => (
                        <div key={i} className="flex items-center space-x-1">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-neutral-400 text-sm md:text-base">{item}</span>
                        </div>
                    ))}
                </div>
            ),
            icon: ShieldUser,
            iconBgClass: "bg-gradient-to-br from-blue-400 to-blue-600 border-white/20",
            iconColor: "text-white",
            background: <TechnicalSchematic />,
        },
        {
            title: "Slimme locaties",
            description: "De juiste pas, precies wanneer je hem nodig hebt. Slim ontworpen. Batterij- en privacyvriendelijk. Precies zoals het hoort.",
            icon: MapPin,
            iconBgClass: "bg-gradient-to-br from-purple-400 to-purple-600 border-white/20",
            iconColor: "text-white",
            background: <MapSchematic />,
        },
        {
            title: "Widgets & Wallet",
            description: "Voeg je favoriete kaarten toe aan je startscherm of aan je Wallet. Zo heb je altijd de snelste kaarten direct bij de hand.",
            icon: Wallet,
            iconBgClass: "bg-gradient-to-br from-orange-400 to-orange-600 border-white/20",
            iconColor: "text-white",
            background: <WalletSchematic />,
        },
    ];

    return (
        <section className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <KnockoutCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            iconBgClass={feature.iconBgClass}
                            iconColor={feature.iconColor}
                            background={feature.background}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
