import React from "react";
import { cn } from "@/lib/utils";
import { ShieldUser, MapPin, Wallet, Check } from "lucide-react";

// Add keyframes style
const KeyframesStyle = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-dot {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `}} />
);

const IconDesignGuide = () => {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none select-none flex items-center justify-center p-1">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Large Circle (Safe Area) */}
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.5" className="text-white/50" />

                {/* Inner Circle (Core Icon Area) */}
                <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.5" className="text-white/40" />

                {/* Crosslines */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-white/30" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-white/30" />

                {/* Diagonals */}
                <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                <line x1="15" y1="85" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />

                {/* Corner Curves (Squircle hints) */}
                <path d="M 0 50 Q 0 0 50 0" stroke="currentColor" strokeWidth="0.5" className="text-white/10" fill="none" />
                <path d="M 100 50 Q 100 0 50 0" stroke="currentColor" strokeWidth="0.5" className="text-white/10" fill="none" />
                <path d="M 100 50 Q 100 100 50 100" stroke="currentColor" strokeWidth="0.5" className="text-white/10" fill="none" />
                <path d="M 0 50 Q 0 100 50 100" stroke="currentColor" strokeWidth="0.5" className="text-white/10" fill="none" />
            </svg>
        </div>
    );
};

const DotGridPattern = () => {
    // Generate a grid of dots
    const dots = [];
    const rows = 20; // Enough to cover typical card size
    const cols = 20;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Randomly select some dots to animate
            const shouldAnimate = Math.random() < 0.1; // 10% chance
            const delay = Math.random() * 3 + "s"; // Random delay up to 3s
            const style = shouldAnimate
                ? { animation: `pulse-dot 3s infinite ${delay}`, opacity: 0.3 }
                : { opacity: 0.3 };

            dots.push(
                <circle
                    key={`${i}-${j}`}
                    cx={j * 20 + 2}
                    cy={i * 20 + 2}
                    r="1.5"
                    className="fill-white"
                    style={style}
                />
            );
        }
    }

    return (
        <div
            className="absolute inset-0 pointer-events-none select-none overflow-hidden"
            style={{
                maskImage: "linear-gradient(to top right, transparent 0%, white 100%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 0%, white 100%)",
            }}
        >
            <KeyframesStyle />
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {dots}
            </svg>
        </div>
    );
};

const PlusGridPattern = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none"
            style={{
                maskImage: "linear-gradient(to top right, transparent 0%, white 100%)",
                WebkitMaskImage: "linear-gradient(to top right, transparent 0%, white 100%)",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <pattern
                    id="plus-grid"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M 10 5 V 15 M 5 10 H 15" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#plus-grid)" />
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
    iconOverlay?: React.ReactNode;
    background?: React.ReactNode;
}

const KnockoutCard = ({
    title,
    description,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
    iconOverlay,
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
            <div className={cn("relative z-10 mb-4 p-4 rounded-2xl border overflow-hidden", iconBgClass)}>
                <Icon className={cn("relative z-10 w-6 h-6 md:w-10 md:h-10", iconColor || "text-neutral-200")} />
                {iconOverlay}
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
            iconOverlay: <IconDesignGuide />,
        },
        {
            title: "Slimme locaties",
            description: "De juiste pas, precies wanneer je hem nodig hebt. Slim ontworpen. Batterij- en privacyvriendelijk. Precies zoals het hoort.",
            icon: MapPin,
            iconBgClass: "bg-gradient-to-br from-purple-400 to-purple-600 border-white/20",
            iconColor: "text-white",
            background: <DotGridPattern />,
        },
        {
            title: "Widgets & Wallet",
            description: "Voeg je favoriete kaarten toe aan je startscherm of aan je Wallet. Zo heb je altijd de snelste kaarten direct bij de hand.",
            icon: Wallet,
            iconBgClass: "bg-gradient-to-br from-orange-400 to-orange-600 border-white/20",
            iconColor: "text-white",
            background: <PlusGridPattern />,
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
                            iconOverlay={feature.iconOverlay}
                            background={feature.background}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
