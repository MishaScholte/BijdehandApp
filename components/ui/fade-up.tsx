"use client";

import { motion } from "framer-motion";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
