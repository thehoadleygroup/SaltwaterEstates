import type { Metadata } from "next";
import FindYourDockLanding from "@/components/FindYourDockLanding";

export const metadata: Metadata = {
  title: "Find Your Dock | South Florida Waterfront Homes Matched to Your Vessel",
  description:
    "Tell us about your boat — we'll show you every South Florida waterfront property where it can live. Filtered by draft, bridge clearance, and inlet access.",
  keywords: [
    "waterfront homes for sale South Florida",
    "homes with private boat dock",
    "deep water dock homes South Florida",
    "no fixed bridge ocean access Florida",
    "intracoastal homes for sale Palm Beach",
    "South Florida boating lifestyle real estate",
    "luxury waterfront real estate Palm Beach",
  ],
  openGraph: {
    title: "Find Your Dock — Your Boat Deserves a Home",
    description:
      "South Florida waterfront real estate matched to your vessel. Tell us your specs — we handle the rest.",
    type: "website",
  },
};

export default function HomePage() {
  return <FindYourDockLanding />;
}
