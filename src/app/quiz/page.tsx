import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Dock | Vessel Quiz | SaltwaterEstates",
  description:
    "Tell us about your vessel — length, draft, bridge clearance. We'll show you every South Florida waterfront property where it can live.",
};

import QuizWrapper from "@/components/QuizWrapper";

export default function QuizPage() {
  return <QuizWrapper />;
}
