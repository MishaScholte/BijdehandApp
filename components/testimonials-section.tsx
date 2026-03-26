"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard, type Review } from "@/components/ui/testimonial-card";
import { FadeUp } from "@/components/ui/fade-up";
import reviewsData from "@/app/content/reviews.json";

// Trim to the nearest multiple of CARDS_PER_SLIDE so every slide is full
const CARDS_PER_SLIDE = 3;
const reviews = (reviewsData as Review[]).slice(
    0,
    Math.floor((reviewsData as Review[]).length / CARDS_PER_SLIDE) * CARDS_PER_SLIDE
);
const DOT_WINDOW = 5;

// Style per dot position (0 = leftmost, 2 = active/center, 4 = rightmost)
// Dots 2, 3, 4 have the same height (h-2); dot 3 (active) is wider.
// Dots 1 and 5 are smaller.
const DOT_POSITION_STYLES = [
    "w-1.5 h-1.5 bg-white/20",
    "w-2 h-2 bg-white/30",
    "w-5 h-2 bg-gradient-to-r from-primary via-primary-purple to-yellow-400",
    "w-2 h-2 bg-white/30",
    "w-1.5 h-1.5 bg-white/20",
] as const;

const dotVariants = {
    initial: (dir: number) => ({
        x: dir > 0 ? 24 : -24,
        opacity: 0,
        scale: 0.5,
    }),
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
        x: dir > 0 ? -24 : 24,
        opacity: 0,
        scale: 0.5,
    }),
};

// Split reviews into slides of CARDS_PER_SLIDE
function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

const slides = chunkArray(reviews, CARDS_PER_SLIDE);
// Duplicate for infinite loop feel
const loopedSlides = [...slides, ...slides];

export function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const totalSlides = loopedSlides.length;
    const realSlideCount = slides.length;
    const realActive = currentSlide % realSlideCount;
    const halfWindow = Math.floor(DOT_WINDOW / 2); // 2

    const goTo = useCallback(
        (next: number, dir: 1 | -1) => {
            if (isAnimating) return;
            setDirection(dir);

            // Stille reset: als we voorbij de gedupliceerde helft gaan, spring terug
            if (next >= totalSlides) {
                next = next - realSlideCount;
            } else if (next < 0) {
                next = next + realSlideCount;
            }

            setCurrentSlide(next);
        },
        [isAnimating, totalSlides, realSlideCount]
    );

    const next = () => goTo(currentSlide + 1, 1);
    const prev = () => goTo(currentSlide - 1, -1);

    // Active dot is always at position 2 (center of 5)
    const visibleDots = Array.from(
        { length: Math.min(DOT_WINDOW, realSlideCount) },
        (_, i) => {
            const offset = i - halfWindow; // -2, -1, 0, 1, 2
            return ((realActive + offset) % realSlideCount + realSlideCount) % realSlideCount;
        }
    );

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    return (
        <section className="pt-8 pb-16 md:pt-4 md:pb-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Heading */}
                <FadeUp>
                    <div className="mb-5 md:mb-7 pl-4 text-left md:pl-0 md:text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                            Duizenden blije gebruikers gingen je voor
                        </h2>
                    </div>
                </FadeUp>

                {/* Carousel */}
                <FadeUp delay={0.1}>
                <div className="relative">
                    <div className="overflow-hidden">
                        <AnimatePresence
                            initial={false}
                            custom={direction}
                            mode="wait"
                        >
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                onAnimationStart={() => setIsAnimating(true)}
                                onAnimationComplete={() => setIsAnimating(false)}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -60) next();
                                    else if (info.offset.x > 60) prev();
                                }}
                            >
                                {/* Mobiel: alle 3 reviews in 1 card met dotted dividers */}
                                <div className="group relative block md:hidden rounded-2xl border border-white/10 bg-white/[0.04] divide-y divide-dashed divide-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] overflow-hidden">
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,144,255,0.06) 0%, transparent 100%)" }} />
                                    {loopedSlides[currentSlide].map((review) => (
                                        <div key={review.id} className="relative px-4 py-4">
                                            <TestimonialCard review={review} />
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop: 3 losse cards naast elkaar */}
                                <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                                    {loopedSlides[currentSlide].map((review) => (
                                        <div
                                            key={review.id}
                                            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] overflow-hidden"
                                        >
                                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,144,255,0.06) 0%, transparent 100%)" }} />
                                            <div className="relative">
                                                <TestimonialCard review={review} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pijlen */}
                    <button
                        onClick={prev}
                        aria-label="Vorige testimonials"
                        className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-black/60 text-neutral-400 hover:text-white hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                        <ChevronLeft className="size-5" aria-hidden />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Volgende testimonials"
                        className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 bg-black/60 text-neutral-400 hover:text-white hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                        <ChevronRight className="size-5" aria-hidden />
                    </button>
                </div>
                </FadeUp>

                {/* Dots — active always centered, animated slide-in/out */}
                <div
                    className="flex items-center justify-center gap-2 mt-8"
                    role="group"
                    aria-label="Navigatie testimonials"
                >
                    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                        {visibleDots.map((dotSlideIndex, position) => (
                            <motion.button
                                key={dotSlideIndex}
                                layout
                                custom={direction}
                                variants={dotVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                onClick={() => {
                                    const delta = position - halfWindow;
                                    if (delta === 0) return;
                                    goTo(currentSlide + delta, delta > 0 ? 1 : -1);
                                }}
                                aria-label={`Ga naar slide ${dotSlideIndex + 1}`}
                                className={[
                                    "rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                                    DOT_POSITION_STYLES[position],
                                ].join(" ")}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
