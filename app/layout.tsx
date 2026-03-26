import type { Metadata } from "next";
import "./globals.css";
import HeroWebp from "@/app/assets/Hero.webp";

export const metadata: Metadata = {
  title: "Bijdehand - Premium Privacy Wallet voor iOS",
  description: "De slimste en veiligste wallet voor al je klantenpassen. Privacy first, geen accounts, geen tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <head>
        <link
          rel="preload"
          as="image"
          href={HeroWebp.src}
          type="image/webp"
          media="(min-width: 769px)"
        />
      </head>
      <body
        className="font-sans antialiased bg-neutral-950 text-white selection:bg-primary/30"
      >
        {children}
      </body>
    </html>
  );
}
