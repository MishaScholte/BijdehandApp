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
                "grid grid-cols-3 gap-2 md:gap-4 max-w-7xl mx-auto",
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
    index?: number;
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
                "row-span-1 rounded-2xl shadow-input dark:shadow-none p-4 bg-white/5 border border-white/[0.1] justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <div className="relative z-10">
                {header && <div className="mb-2 md:mb-4">{header}</div>}

                {icon && <div className="mb-2">{icon}</div>}

                <div className="font-sans font-bold text-neutral-200 mb-1 md:mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs md:text-sm">
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
    iconBgClass,
    iconClassName,
    className,
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor?: string;
    iconBgClass?: string;
    iconClassName?: string;
    className?: string;
}) => {
    return (
        <BentoGridItem
            title={<span className="text-xl md:text-3xl text-neutral-200">{title}</span>}
            description={description}
            header={
                <div className="flex flex-1 w-full h-full min-h-[4rem] md:min-h-[6rem] items-center justify-start">
                    <div className={cn("w-12 h-12 md:w-24 md:h-24 flex items-center justify-center rounded-2xl", iconBgClass)}>
                        <Icon className={cn("w-6 h-6 md:w-8 md:h-8", iconColor, iconClassName)} />
                    </div>
                </div>
            }
            className={cn("bg-white/5 border-none p-4 md:p-8", className)}
        />
    );
};

export const BentoNumberCard = ({
    number,
    label,
    topLabel,
    numberClassName,
    className,
}: {
    number: string;
    label: string;
    topLabel?: string;
    numberClassName?: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl shadow-input dark:shadow-none p-3 md:p-6 bg-white/5 justify-center flex flex-col space-y-1 md:space-y-2 relative overflow-hidden text-center items-center",
                className
            )}
        >
            {topLabel && (
                <span className="font-sans font-normal text-neutral-400 text-xs md:text-sm">
                    {topLabel}
                </span>
            )}
            <span
                className={cn(
                    "text-4xl md:text-8xl font-bold text-white tracking-tight",
                    numberClassName
                )}
            >
                {number}
            </span>
            <span className="font-sans font-normal text-neutral-400 text-xs md:text-sm">
                {label}
            </span>
        </div>
    );
};
