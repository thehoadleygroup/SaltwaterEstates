import type { Metadata } from "next";
import FamilyAdvisoryLanding from "@/components/FamilyAdvisoryLanding";

export const metadata: Metadata = {
  title: "Family Advisory | The Hoadley Group · Barefoot Realty & Investments",
  description:
    "The Hoadley Group serves a select number of South Florida families across the full spectrum of their real estate life — waterfront acquisition, investment strategy, Florida domicile planning, construction, and legacy coordination.",
  keywords: [
    "luxury real estate advisor Palm Beach",
    "family office real estate Palm Beach",
    "waterfront estate Palm Beach",
    "Florida domicile planning",
    "private real estate advisory South Florida",
    "UHNW real estate Palm Beach County",
    "estate acquisition South Florida",
  ],
  openGraph: {
    title: "Family Advisory — The Hoadley Group",
    description:
      "Some families need an agent. Yours needs an advisor. One relationship across every dimension of your real estate life.",
    type: "website",
  },
};

export default function FamilyAdvisoryPage() {
  return <FamilyAdvisoryLanding />;
}
