import type { Metadata } from "next";
import FindYourDockPage from "@/components/FindYourDockPage";

export const metadata: Metadata = {
  title: "Find Your Dock | Saltwater Estates",
  description:
    "Tell us about your vessel. We'll show you every South Florida waterfront property where it can live. Powered by Barefoot Realty & Investments.",
  openGraph: {
    title: "Find Your Dock — Your Boat Deserves a Home",
    description:
      "South Florida waterfront homes matched to your vessel. Deep water, no fixed bridges, on-property dock. Tell us your specs.",
    siteName: "Saltwater Estates",
  },
};

export default function DockPage() {
  return <FindYourDockPage />;
}
