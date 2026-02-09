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
                "row-span-1 rounded-xl shadow-input dark:shadow-none p-4 bg-black border border-white/[0.1] justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <div className="relative z-10">
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

export const BentoFeatureCard = ({
    title,
    description,
    icon: Icon,
    iconColor = "text-primary-purple",
    className,
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor?: string;
    className?: string;
}) => {
    return (
        <BentoGridItem
            title={<span className="text-3xl text-neutral-200">{title}</span>}
            description={description}
            header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-start">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className={cn("w-8 h-8", iconColor)} />
                    </div>
                </div>
            }
            className={className}
        />
    );
};

export const BentoNumberCard = ({
    number,
    label,
    className,
}: {
    number: string;
    label: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl shadow-input dark:shadow-none p-6 bg-white/5 justify-start flex flex-col space-y-2 relative overflow-hidden text-left items-start",
                className
            )}
        >
            <span className="text-8xl font-bold text-white tracking-tight">
                {number}
            </span>
            <span className="font-sans font-normal text-neutral-400 text-sm">
                {label}
            </span>
        </div>
    );
};
