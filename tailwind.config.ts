import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0090FF",
                    purple: "#EB21FA",
                }
            },
            animation: {
                shimmer: "shimmer 2s linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                "spin-gradient": "spin-gradient 5s linear infinite",
            },
            keyframes: {
                "spin-gradient": {
                    "0%": { "--gradient-angle": "0deg" },
                    "100%": { "--gradient-angle": "360deg" },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                "pulse-ring": {
                    "0%": { transform: "scale(0.8)", opacity: "0.5" },
                    "100%": { transform: "scale(2.5)", opacity: "0" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
                    "50%": { opacity: "0.3", transform: "scale(1.1)" },
                },
                "pulse-scan": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                shimmer: "shimmer 2s linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                "spin-gradient": "spin-gradient 5s linear infinite",
                "pulse-ring": "pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "pulse-glow": "pulse-glow 4s ease-in-out infinite",
                "pulse-scan": "pulse-scan 4s linear infinite",
            },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
