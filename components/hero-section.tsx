"use client";

import Link from "next/link";
import Image from "next/image"; // Keep for AppIcon if used, or standard usage elsewhere
import HeroImage from "@/app/assets/Hero.png";
import HeroMobile from "@/app/assets/Hero-mobile.png";
import HeroMobileSmall from "@/app/assets/Hero-mobile-small.png";

export function HeroSection() {
    return (
        <div className="min-h-0 md:min-h-[90vh] w-full rounded-md flex flex-col md:flex-row items-start md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pb-12 md:pb-0">

            <div className="p-4 max-w-6xl mx-auto relative z-10 w-full pt-12 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 items-center">
                {/* Left Column: Text & CTA */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight pb-1 text-white tracking-tight">
                        Al je pasjes,<br />
                        altijd <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-purple">Bijdehand</span>.
                    </h1>
                    <p className="mt-2 md:mt-6 font-semibold text-xl md:text-2xl text-neutral-300 max-w-lg text-balance">
                        Eindelijk. Een app voor klantenpassen zonder reclame, accounts of cookies.
                    </p>

                    <div className="flex justify-center md:justify-start mt-6 md:mt-10">
                        {/* Sleep Cycle Style Button - Simplified & Robust Implementation */}
                        <a
                            href="#"
                            className="relative inline-flex group"
                        >
                            {/* Outer Glow */}
                            <div className="absolute -inset-1 rounded-full blur-[0.67em] opacity-70 group-hover:opacity-100 group-hover:duration-200 overflow-hidden">
                                <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#101010_60deg,#0090FF_120deg,#EB21FA_200deg,#FACC15_260deg,#000000_360deg)]" />
                            </div>

                            {/* Button Container */}
                            <button
                                className="relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-transparent font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden rounded-full p-[2px]"
                            >
                                {/* Rotating Gradient Layer */}
                                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#101010_60deg,#0090FF_120deg,#EB21FA_200deg,#FACC15_260deg,#000000_360deg)]" />

                                {/* Inner Content Layer (Black Main Button) */}
                                <span className="relative h-full w-full bg-black rounded-full flex items-center gap-3 px-8 py-3 border-2 border-white/10">
                                    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                    </svg>
                                    <div className="flex flex-col items-start leading-none text-left">
                                        <span className="text-xl font-bold text-white tracking-tight">Download nu gratis</span>
                                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">in de App Store</span>
                                    </div>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right Column: Hero Image */}
                <div className="flex justify-center md:justify-end relative w-full h-auto md:h-full mt-[-40px] md:mt-0">
                    <div className="relative w-full md:w-auto h-auto md:h-[874px] transition-all duration-500 flex items-start md:items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <picture>
                                <source media="(max-width: 480px)" srcSet={`${HeroMobileSmall.src} 1x, ${HeroMobile.src} 2x`} />
                                <source media="(max-width: 768px)" srcSet={HeroMobile.src} />
                                <img
                                    src={HeroImage.src}
                                    alt="Bijdehand App Hero"
                                    width={2721}
                                    height={2622}
                                    className="object-contain w-full h-auto md:w-auto md:h-full max-h-[600px] md:max-h-[874px]"
                                    loading="eager"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
