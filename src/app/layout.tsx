import type { Metadata } from "next";
import { Oswald, Anton, Black_Ops_One, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const blackOpsOne = Black_Ops_One({
  weight: "400",
  variable: "--font-black-ops",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["900"],
  style: ["italic"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We Got Game | Basketball",
  description: "Baschet. Încredere. Caracter. Comunitate.",
  icons: {
    icon: "/icon.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${oswald.variable} ${anton.variable} ${blackOpsOne.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-oswald">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
          <defs>
            <filter id="grunge">
              <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -5 3.9" in="noise" result="mask" />
              <feComposite in="SourceGraphic" in2="mask" operator="in" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
