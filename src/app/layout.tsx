import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default: "The Hoadley Group | Luxury Waterfront Real Estate & Construction",
    template: "%s | The Hoadley Group",
  },
  description:
    "South Florida luxury waterfront real estate and construction. Barefoot Realty & Investments and Hoadley Construction — serving UHNW clients across Palm Beach, Broward & Martin County.",
  keywords: [
    "luxury waterfront real estate South Florida",
    "waterfront homes for sale Palm Beach",
    "intracoastal homes for sale",
    "deep water dock homes Florida",
    "no fixed bridge ocean access",
    "Barefoot Realty",
    "Hoadley Construction",
    "UHNW real estate South Florida",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body style={{ background: "#0a0a0a", color: "#f0e6d0", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
