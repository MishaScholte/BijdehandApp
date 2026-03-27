"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

const faqs = [
    {
        question: "Is Bijdehand echt gratis?",
        answer: "Ja. Bijdehand is volledig gratis te gebruiken omdat het weinig kost om te maken. Er zitten geen addertjes onder het gras. Bijdehand is gemaakt vanuit een principekwestie.",
    },
    {
        question: "Waarom is Bijdehand gemaakt?",
        answer: "Een tech gigant nam Stocard over. Meteen ging de privacy en de ervaring de prullenbak in. Accounts. Reclames. Laadtijden. We pakken onze privacy terug door het zelf te maken en delen dit graag met jou.",
    },
    {
        question: "Wat wordt er gedaan met gebruiksgegevens?",
        answer: (
            <>
                Helemaal niets. Dat kan ook niet, want er wordt niets gemeten. Er is geen analytics. Er is geen tracking. Geen cookies. Geen account. Wat jij in Bijdehand doet is alleen jouw zaak.! 
                {" "}
                <a
                    href="https://mishascholte.github.io/BijdehandApp/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-white/25 hover:text-neutral-200 hover:decoration-white/50 transition-colors"
                >
                    Lees meer over het privacybeleid.
                </a>
            </>
        ),
    },
    {
        question: "Komt er ook een Androidversie?",
        answer: "Nee, die staat niet in de planning.",
    },
    {
        question: "Kan ik doneren?",
        answer: (
            <>
                Vertel je vrienden over Bijdehand. Dat is alles! Wil je toch wat geven? Doneer wat aan{" "}
                <a
                    href="https://kika.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-white/25 hover:text-neutral-200 hover:decoration-white/50 transition-colors"
                >
                    KiKa
                </a>
                . Je bent fantastisch! ❤️
            </>
        ),
    },
];

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            >
                <span className="text-base md:text-lg font-semibold text-white">{question}</span>
                <span className="shrink-0 text-neutral-500" aria-hidden>
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 text-sm md:text-base text-neutral-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <FadeUp>
                    <div className="mb-10 md:mb-14 text-left md:text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                            Veelgestelde vragen
                        </h2>
                    </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                    <div className="divide-y divide-white/10 border-t border-white/10">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
