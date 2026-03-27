"use client";

import Link from "next/link";
import { Area } from "@/data/areas";

interface Props {
  area: Area;
}

export default function AreaLanding({ area }: Props) {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f0e6d0", minHeight: "100vh" }}>

      {/* ── SKIP NAV ──────────────────────────────────────────────────────── */}
      <a
        href="#search-cta"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:text-sm"
        style={{ background: "#c9a96e", color: "#0a0a0a" }}
      >
        Skip to search
      </a>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="flex items-center justify-between px-6 sm:px-10 py-5"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
      >
        <Link href="/" className="group flex flex-col gap-0.5">
          <span
            className="font-mono text-xs tracking-[0.25em] uppercase transition-opacity group-hover:opacity-80"
            style={{ color: "#c9a96e" }}
          >
            SaltwaterEstates
          </span>
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "rgba(240,230,208,0.25)" }}
          >
            Barefoot Realty &amp; Investments
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/search"
            className="font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "rgba(240,230,208,0.5)" }}
          >
            Search
          </Link>
          <Link
            href="/"
            className="font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-80 px-4 py-2"
            style={{
              border: "1px solid rgba(201,169,110,0.35)",
              color: "#c9a96e",
            }}
          >
            Find My Dock
          </Link>
        </div>
      </nav>

      {/* ── BREADCRUMB ────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-10 pt-6 pb-0">
        <p className="font-mono text-xs tracking-widest" style={{ color: "rgba(240,230,208,0.25)" }}>
          <Link href="/search" className="hover:opacity-70 transition-opacity">Markets</Link>
          <span className="mx-2" style={{ color: "rgba(240,230,208,0.15)" }}>›</span>
          <span style={{ color: "rgba(201,169,110,0.6)" }}>{area.name}</span>
        </p>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative px-6 sm:px-10 py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl relative z-10">
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "rgba(201,169,110,0.6)" }}
          >
            Palm Beach County · Waterfront Real Estate
          </p>
          <h1
            className="font-serif leading-none mb-5"
            style={{ fontSize: "clamp(44px, 7vw, 84px)", fontWeight: 300, color: "#f0e6d0" }}
          >
            {area.name}
          </h1>
          <p
            className="font-serif mb-8"
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#c9a96e",
            }}
          >
            {area.tagline}
          </p>
          <div
            style={{ width: "60px", height: "1px", background: "#c9a96e", opacity: 0.4, marginBottom: "28px" }}
          />
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(240,230,208,0.55)", maxWidth: "680px" }}
          >
            {area.description}
          </p>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <div
        className="px-6 sm:px-10 py-6"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)", borderBottom: "1px solid rgba(240,230,208,0.06)", background: "rgba(201,169,110,0.03)" }}
      >
        <div className="max-w-4xl flex flex-wrap gap-10">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,169,110,0.5)" }}>
              Price Range
            </p>
            <p className="font-serif text-xl" style={{ color: "#f0e6d0", fontWeight: 300 }}>
              {area.priceRange}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,169,110,0.5)" }}>
              Median Sale
            </p>
            <p className="font-serif text-xl" style={{ color: "#f0e6d0", fontWeight: 300 }}>
              {area.medianPrice}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,169,110,0.5)" }}>
              County
            </p>
            <p className="font-serif text-xl" style={{ color: "#f0e6d0", fontWeight: 300 }}>
              Palm Beach
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,169,110,0.5)" }}>
              Market Focus
            </p>
            <p className="font-serif text-xl" style={{ color: "#f0e6d0", fontWeight: 300 }}>
              Waterfront &amp; Luxury
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-10 py-16 sm:py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Boating Access */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "#c9a96e" }}>
              Boating &amp; Water Access
            </p>
            <p className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(240,230,208,0.55)" }}>
              {area.boatingAccess}
            </p>
            <div className="flex flex-wrap gap-2">
              {area.waterFeatures.map((f) => (
                <span
                  key={f}
                  className="font-mono text-xs px-3 py-1.5"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "rgba(201,169,110,0.7)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Why This Market */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: "#c9a96e" }}>
              Why {area.name}
            </p>
            <ul className="space-y-4">
              {area.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: "#c9a96e", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,230,208,0.55)" }}>
                    {h}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notable Communities */}
        <div className="mt-14 pt-14" style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}>
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#c9a96e" }}>
            Notable Communities &amp; Neighborhoods
          </p>
          <div className="flex flex-wrap gap-3">
            {area.notableCommunities.map((c) => (
              <span
                key={c}
                className="font-sans text-sm px-4 py-2"
                style={{
                  background: "rgba(201,169,110,0.06)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  color: "rgba(240,230,208,0.6)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEARCH CTA ────────────────────────────────────────────────────── */}
      <section
        id="search-cta"
        className="px-6 sm:px-10 py-16 sm:py-20"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)", background: "rgba(201,169,110,0.03)" }}
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#c9a96e" }}>
            Vessel-Matched Search
          </p>
          <h2 className="font-serif mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#f0e6d0", fontWeight: 300 }}>
            Find every {area.name} property your boat can reach.
          </h2>
          <p className="text-sm leading-relaxed mb-8"
            style={{ color: "rgba(240,230,208,0.45)", maxWidth: "560px" }}>
            Our vessel-matching search filters every active listing in {area.name} against your
            boat&apos;s draft, beam, bridge clearance, and dock requirements — so you only see
            properties where your vessel can actually live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-block font-mono text-xs tracking-widest uppercase px-8 py-4 transition-all hover:opacity-90 active:scale-95 text-center"
              style={{ background: "#c9a96e", color: "#0a0a0a" }}
            >
              Start Vessel Quiz →
            </Link>
            <Link
              href="/search"
              className="inline-block font-mono text-xs tracking-widest uppercase px-8 py-4 transition-all hover:opacity-80 active:scale-95 text-center"
              style={{
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#c9a96e",
                background: "transparent",
              }}
            >
              Browse All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER MARKETS ─────────────────────────────────────────────────── */}
      <section className="px-6 sm:px-10 py-16" style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}>
        <p className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "rgba(201,169,110,0.5)" }}>
          Explore Other Palm Beach County Markets
        </p>
        <OtherMarkets current={area.slug} />
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-10 text-center"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}
        role="contentinfo"
      >
        <p className="font-mono text-xs mb-1" style={{ color: "rgba(240,230,208,0.15)" }}>
          Equal Housing Opportunity · All listings subject to availability and change.
        </p>
        <p className="font-mono text-xs" style={{ color: "rgba(240,230,208,0.1)" }}>
          © {new Date().getFullYear()} Barefoot Realty &amp; Investments · FL BK3222885 · SaltwaterEstates.com
        </p>
      </footer>
    </div>
  );
}

// ── OTHER MARKETS STRIP ───────────────────────────────────────────────────────
function OtherMarkets({ current }: { current: string }) {
  // Import inline to avoid circular dep
  const markets = [
    { slug: "palm-beach", name: "Palm Beach" },
    { slug: "manalapan", name: "Manalapan" },
    { slug: "jupiter", name: "Jupiter" },
    { slug: "juno-beach", name: "Juno Beach" },
    { slug: "west-palm-beach", name: "West Palm Beach" },
    { slug: "palm-beach-gardens", name: "Palm Beach Gardens" },
    { slug: "north-palm-beach", name: "North Palm Beach" },
    { slug: "gulf-stream", name: "Gulf Stream" },
    { slug: "highland-beach", name: "Highland Beach" },
    { slug: "delray-beach", name: "Delray Beach" },
    { slug: "boca-raton", name: "Boca Raton" },
    { slug: "wellington", name: "Wellington" },
  ].filter((m) => m.slug !== current);

  return (
    <div className="flex flex-wrap gap-3">
      {markets.map((m) => (
        <Link
          key={m.slug}
          href={`/areas/${m.slug}`}
          className="font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all hover:opacity-80"
          style={{
            border: "1px solid rgba(240,230,208,0.1)",
            color: "rgba(240,230,208,0.4)",
          }}
        >
          {m.name}
        </Link>
      ))}
    </div>
  );
}
