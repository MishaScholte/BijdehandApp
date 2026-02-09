import React from "react";
import { cn } from "@/lib/utils";
import { ShieldUser, MapPin, Wallet, Check } from "lucide-react";

interface KnockoutCardProps {
    title: string;
    description?: string | React.ReactNode;
    icon: React.ElementType;
    iconBgClass?: string;
    iconColor?: string;
    className?: string;
}

const KnockoutCard = ({
    title,
    description,
    icon: Icon,
    iconBgClass,
    iconColor,
    className,
}: KnockoutCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col items-start justify-start p-4 md:p-6 h-full",
                "bg-white/[0.03] rounded-[32px] md:rounded-[40px]",
                "border border-white/10", // Subtle glassy border
                "transition-all duration-200 hover:border-white/20 hover:bg-white/[0.02]",
                className
            )}
        >
            {/* Icon */}
            <div className={cn("mb-4 p-4 rounded-2xl border", iconBgClass)}>
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
            description: (
                description: (
                    <div className = "flex flex-wrap gap-3 md:flex-col md:gap-2">
                    { ["Geen accounts", "Geen cookies", "Geen reclame"].map((item, i) => (
                        <div key={i} className="flex items-center space-x-1">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-neutral-400 text-sm md:text-base">{item}</span>
                        </div>
                    ))
        }
                </div >
            ),
            ),
    icon: ShieldUser,
        iconBgClass: "bg-gradient-to-br from-blue-400 to-blue-600 border-white/20",
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
    title: "Widgets & Wallet",
        description: "Voeg je favoriete kaarten toe aan je startscherm of aan je Wallet. Zo heb je altijd de snelste kaarten direct bij de hand.",
            icon: Wallet,
                iconBgClass: "bg-gradient-to-br from-orange-400 to-orange-600 border-white/20",
                    iconColor: "text-white",
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
                    />
                ))}
            </div>
        </div>
    </section>
);
}
