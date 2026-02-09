import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

interface BentoGridItemProps {
    className?: string;
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    index?: number; // Optional index for "Number" style capability if needed, or just pass number as icon
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: BentoGridItemProps) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-black border border-white/[0.1] justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <GlowingEffect
                spread={40}
                glow={false}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />

            <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-2">
                {header && <div className="mb-4">{header}</div>}

                {icon && <div className="mb-2">{icon}</div>}

                <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-sm">
                    {description}
                </div>
            </div>
        </div>
    );
};
