import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArea, getAllSlugs } from "@/data/areas";
import AreaLanding from "@/components/AreaLanding";

// ── STATIC PARAMS — pre-render all 12 area pages at build time ────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── DYNAMIC METADATA per area ─────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Area Not Found" };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `${area.name} waterfront homes for sale`,
      `${area.name} real estate`,
      `${area.name} waterfront property`,
      `${area.name} homes with dock`,
      `${area.name} luxury real estate`,
      `Palm Beach County waterfront homes`,
      `vessel matched real estate ${area.name}`,
    ],
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: "website",
    },
  };
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default async function AreaPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  return <AreaLanding area={area} />;
}
