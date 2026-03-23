import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPage from "@/components/search/SearchPage";

export const metadata: Metadata = {
  title: "Search Waterfront Homes | SaltwaterEstates",
  description:
    "Search luxury waterfront homes for sale in South Florida — filtered by vessel draft, bridge clearance, dock size, and inlet access. Palm Beach, Jupiter, Fort Lauderdale, Boca Raton.",
  keywords: [
    "waterfront homes for sale South Florida",
    "deep water dock homes",
    "no fixed bridge waterfront homes",
    "intracoastal homes for sale Palm Beach",
    "luxury homes with private dock",
  ],
};

export default function Page() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
