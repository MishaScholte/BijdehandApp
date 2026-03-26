"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard, type Review } from "@/components/ui/testimonial-card";
import reviewsData from "@/app/content/reviews.json";

// Trim to the nearest multiple of CARDS_PER_SLIDE so every slide is full
const CARDS_PER_SLIDE = 3;
const reviews = (reviewsData as Review[]).slice(
    0,
    Math.floor((reviewsData as Review[]).length / CARDS_PER_SLIDE) * CARDS_PER_SLIDE
);
const DOT_WINDOW = 5;

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

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const totalSlides = loopedSlides.length;
    const realSlideCount = slides.length;

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

    // Schuivend dot-venster van DOT_WINDOW
    const dotWindowStart = clamp(
        currentSlide % realSlideCount - Math.floor(DOT_WINDOW / 2),
        0,
        Math.max(0, realSlideCount - DOT_WINDOW)
    );
    const visibleDots = Array.from(
        { length: Math.min(DOT_WINDOW, realSlideCount) },
        (_, i) => dotWindowStart + i
    );
    const activeDotInWindow = currentSlide % realSlideCount;

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="mb-5 md:mb-7 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Duizenden blije gebruikers gingen je voor
                    </h2>
                    <p className="mt-2 text-neutral-500 text-sm">
                        Dit is wat ze zeggen over Bijdehand
                    </p>
                </div>

                {/* Carousel */}
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
                                <div className="block md:hidden rounded-2xl border border-white/10 bg-white/[0.04] divide-y divide-dashed divide-white/10">
                                    {loopedSlides[currentSlide].map((review) => (
                                        <div key={review.id} className="px-4 py-4">
                                            <TestimonialCard review={review} />
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop: 3 losse cards naast elkaar */}
                                <div className="hidden md:grid md:grid-cols-3 md:gap-6">
                                    {loopedSlides[currentSlide].map((review) => (
                                        <div
                                            key={review.id}
                                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5"
                                        >
                                            <TestimonialCard review={review} />
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

                {/* Schuivende dots */}
                <div className="flex items-center justify-center gap-2 mt-8" aria-hidden>
                    {visibleDots.map((dotIndex) => (
                        <button
                            key={dotIndex}
                            onClick={() =>
                                goTo(dotIndex, dotIndex > activeDotInWindow ? 1 : -1)
                            }
                            aria-label={`Ga naar slide ${dotIndex + 1}`}
                            className={[
                                "rounded-full transition-all duration-300",
                                dotIndex === activeDotInWindow
                                    ? "w-4 h-1.5 bg-white"
                                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40",
                            ].join(" ")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
