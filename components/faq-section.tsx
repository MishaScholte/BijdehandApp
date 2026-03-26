"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

const faqs = [
    {
        question: "Is Bijdehand echt gratis?",
        answer: "Ja. Bijdehand is volledig gratis te gebruiken. Er zitten geen addertjes onder het gras.",
    },
    {
        question: "Wat kost Bijdehand jou?",
        answer: "Amper iets. Vandaar dat het ook gratis is. Bijdehand is gemaakt vanuit een principekwestie.",
    },
    {
        question: "Waarom is Bijdehand gemaakt?",
        answer: "Onze favoriete klantenpassen app werd overgenomen door een tech gigant. Meteen ging de ervaring de prullenbak in. Accounts. Reclames. Laadtijden. Wij zijn van een mening dat dit allemaal niet nodig is voor iets eenvoudigs als klantenpassen. We pakken onze favoriete klantenpassen app weer terug door hem dan maar zelf te maken en we delen dit graag met jou.",
    },
    {
        question: "Verkopen jullie gebruiksgegevens?",
        answer: (
            <>
                Nee. Sterker nog: we hebben helemaal geen gegevens. Er wordt niks centraal opgeslagen. We hebben geen analytics. We hebben geen flauw idee wat jij doet in Bijdehand. En dat vinden we prima zo. Je kunt de app volledig offline gebruiken als je dat wil en je verliest geen functionaliteit.{" "}
                <a
                    href="https://mishascholte.github.io/BijdehandApp/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-white/25 hover:text-neutral-200 hover:decoration-white/50 transition-colors"
                >
                    Lees meer over het privacybeleid
                </a>
                . We leggen je hier precies uit wat we doen.
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
                Je maakt ons ontzettend blij als je je vrienden vertelt over Bijdehand. Dat is alles wat we vragen! Wil je toch wat geven? Dan maak je ons nóg blijer door een donatie te doen aan{" "}
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
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
            >
                <span className="text-base md:text-lg font-semibold text-white">{question}</span>
                <span className="shrink-0 text-neutral-500">
                    {open ? <Minus className="size-4" aria-hidden /> : <Plus className="size-4" aria-hidden />}
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
                        <p className="pb-5 text-sm md:text-base text-neutral-400 leading-relaxed">
                            {answer}
                        </p>
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
