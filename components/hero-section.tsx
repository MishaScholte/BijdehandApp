"use client";

import { SquareCheckBig } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import HeroImage from "@/app/assets/Hero.webp";
import HeroMobile from "@/app/assets/Hero-mobile.png";
import HeroMobileSmall from "@/app/assets/Hero-mobile-small.png";
import RatingAppStore from "@/app/assets/rating-app-store.svg";
import RatingEmerce from "@/app/assets/rating-emerce.svg";
const APP_STORE_URL = "https://apps.apple.com/nl/app/bijdehand-klantenpassen/id6756604756";
const GRADIENT = "conic-gradient(from 90deg at 50% 50%,#000000 0deg,#101010 60deg,#0090FF 120deg,#EB21FA 200deg,#FACC15 260deg,#000000 360deg)";

export function HeroSection() {
    return (
        <div className="min-h-0 md:min-h-[80vh] w-full rounded-md flex flex-col md:flex-row items-start md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pb-12 md:pb-0">

            <div className="p-4 max-w-6xl mx-auto relative z-10 w-full pt-6 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 items-center">
                {/* Left Column: Text & CTA */}
                <div className="flex flex-col items-start text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] pb-1 text-white tracking-tight">
                        Al je{" "}
                        <span className="relative inline-block">
                            pasjes
                            <svg className="absolute -bottom-1 left-0 w-full overflow-visible -z-10" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0,5 Q50,0 100,5" stroke="#FACC15" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        en{" "}
                        <span className="relative inline-block">
                            cadeaubonnen
                            <svg className="absolute -bottom-1 left-0 w-full overflow-visible -z-10" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0,5 Q50,0 100,5" stroke="#FACC15" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        <br />
                        altijd <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-purple">Bijdehand</span>.
                    </h1>
                    <p className="mt-2 md:mt-6 font-normal text-xl md:text-2xl text-neutral-300 max-w-lg text-balance">
                        Eindelijk. Een app voor klantenpassen zonder reclame, accounts of cookies.
                    </p>

                    <ul className="mt-4 md:mt-5 max-w-lg space-y-2.5 text-neutral-200" aria-label="Belangrijkste voordelen">
                        {["Bliksemsnel", "Gratis", "In 1 minuut overgestapt"].map((label) => (
                            <li key={label} className="flex items-center gap-3">
                                <SquareCheckBig className="size-7 shrink-0 text-emerald-400" aria-hidden />
                                <span className="text-base md:text-lg font-medium">{label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 md:mt-10 flex w-full flex-col items-center gap-4 md:w-auto md:flex-row md:items-center md:gap-6">

                        {/* Mobiel: App Store button */}
                        <a
                            href={APP_STORE_URL}
                            className="relative inline-flex group md:hidden"
                        >
                            {/* Outer Glow */}
                            <div className="absolute -inset-1 rounded-full blur-[0.67em] opacity-70 group-hover:opacity-100 group-hover:duration-200 overflow-hidden">
                                <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite]" style={{ background: GRADIENT }} />
                            </div>
                            <button className="relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden rounded-full p-[2px]">
                                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite]" style={{ background: GRADIENT }} />
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

                        {/* Desktop: QR code met gradient border */}
                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Scan de QR code om Bijdehand te downloaden in de App Store"
                            className="relative hidden md:inline-flex group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/[0.96] rounded-2xl"
                        >
                            {/* Outer Glow */}
                            <div className="absolute -inset-1 rounded-2xl blur-[0.67em] opacity-60 group-hover:opacity-90 group-hover:duration-200 overflow-hidden">
                                <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite]" style={{ background: GRADIENT }} />
                            </div>
                            {/* Gradient border container */}
                            <span className="relative overflow-hidden rounded-2xl p-[2px] inline-flex">
                                <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite]" style={{ background: GRADIENT }} />
                                {/* Inner card */}
                                <span className="relative bg-black rounded-[14px] p-4 flex flex-col items-center gap-2 border-2 border-white/10">
                                    <QRCodeSVG
                                        value={APP_STORE_URL}
                                        size={180}
                                        bgColor="#000000"
                                        fgColor="#e5e5e5"
                                        level="M"
                                        marginSize={1}
                                    />
                                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                                        Scan om te downloaden
                                    </span>
                                </span>
                            </span>
                        </a>

                        {/* Rating badges */}
                        <div className="flex flex-col items-center md:items-start gap-8">
                            <img
                                src={RatingAppStore.src ?? RatingAppStore}
                                alt="App Store rating"
                                className="h-20 w-auto object-contain opacity-90"
                            />
                            <img
                                src={RatingEmerce.src ?? RatingEmerce}
                                alt="Emerce rating"
                                className="h-20 w-auto object-contain opacity-90"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Image */}
                <div className="flex justify-center md:justify-end relative w-full h-auto md:h-full mt-[-40px] md:mt-0">
                    <div className="relative w-full md:w-auto h-auto md:h-[560px] transition-all duration-500 flex items-start md:items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <picture>
                                <source media="(max-width: 480px)" srcSet={`${HeroMobileSmall.src} 1x, ${HeroMobile.src} 2x`} />
                                <source media="(max-width: 768px)" srcSet={HeroMobile.src} />
                                <img
                                    src={HeroImage.src}
                                    alt="Bijdehand App Hero"
                                    width={1400}
                                    height={1348}
                                    className="object-contain w-full h-auto md:w-auto md:h-full max-h-[600px] md:max-h-[560px]"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
