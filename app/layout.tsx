import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className="font-sans antialiased bg-neutral-950 text-white selection:bg-primary/30"
      >
        {children}
      </body>
    </html>
  );
}
