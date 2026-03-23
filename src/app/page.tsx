import type { Metadata } from "next";
import WaterfrontLanding from "@/components/WaterfrontLanding";

export const metadata: Metadata = {
  title: "South Florida Luxury Waterfront Homes | Barefoot Realty & Investments",
  description:
    "Deep-water canal homes, no-fixed-bridge intracoastal estates & private oceanfront properties across Palm Beach, Broward & Martin County — matched to your vessel.",
  keywords: [
    "waterfront homes for sale South Florida",
    "luxury waterfront real estate Palm Beach",
    "intracoastal homes for sale",
    "deep water dock homes South Florida",
    "no fixed bridge ocean access Florida",
    "homes with private boat dock",
    "oceanfront estate Palm Beach County",
    "South Florida boating lifestyle real estate",
  ],
  openGraph: {
    title: "Where Your Vessel Chooses the Address | Barefoot Realty",
    description:
      "South Florida luxury waterfront real estate — filtered by draft, bridge clearance, and inlet access before you see the listing.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function HomePage() {
  return <WaterfrontLanding />;
}
