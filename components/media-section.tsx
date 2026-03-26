import { ExternalLink } from "lucide-react";
import EmerceLogo from "@/app/assets/emerce.svg";
import { FadeUp } from "@/components/ui/fade-up";

export function MediaSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                {/* Section label */}
                <FadeUp>
                    <div className="mb-8 md:mb-10 text-left md:text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                            In de media
                        </h2>
                    </div>
                </FadeUp>

                {/* Glass card */}
                <FadeUp delay={0.1}>
                <a
                    href="https://www.emerce.nl/nieuws/uxontwerper-bouwt-alternatief-stocard-instant-succes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-10 md:px-12 md:py-12 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="Lees het artikel van Erwin Boogert op Emerce"
                >
                    {/* Subtle gradient glow */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,144,255,0.06) 0%, transparent 100%)",
                        }}
                    />

                    {/* Source row */}
                    <div className="relative z-10 flex items-center justify-between">
                        <img
                            src={EmerceLogo.src ?? EmerceLogo}
                            alt="Emerce"
                            width={100}
                            height={34}
                            className="h-7 w-auto rounded-sm object-contain opacity-90 transition-opacity group-hover:opacity-100"
                        />
                        <ExternalLink
                            className="size-4 text-neutral-600 transition-colors group-hover:text-neutral-400"
                            aria-hidden
                        />
                    </div>

                    {/* Quote */}
                    <blockquote className="relative z-10 flex gap-3">
                        <span
                            className="shrink-0 font-serif not-italic text-neutral-400 text-[3.5rem] md:text-[5rem] leading-none mt-1"
                            aria-hidden
                        >
                            &ldquo;
                        </span>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium italic text-neutral-200 leading-relaxed text-balance">
                            Zo simpel als de app er uit ziet, zo geraffineerd is hij opgezet.
                        </p>
                    </blockquote>

                    {/* Attribution */}
                    <p className="relative z-10 text-base md:text-lg text-neutral-500">
                        — Erwin Boogert, 26 maart 2026
                    </p>
                </a>
                </FadeUp>
            </div>
        </section>
    );
}
