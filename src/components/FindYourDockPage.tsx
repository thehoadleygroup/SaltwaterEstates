"use client";

import { useState, useRef } from "react";
import WaterfrontQuiz, { WaterfrontQuizResult } from "./WaterfrontQuiz";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

async function submitToFormspree(data: WaterfrontQuizResult): Promise<boolean> {
  if (!FORMSPREE_ENDPOINT) {
    console.warn("No Formspree endpoint configured — lead not sent.");
    return true; // still show success to user
  }

  const body = {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data.phone || "—",
    vessel: `${data.vesselLengthFt}ft ${data.vesselType.replace(/_/g, " ")}`,
    draft: `${data.vesselDraftFt} ft`,
    beam: `${data.vesselBeamFt} ft`,
    air_draft: `${data.airDraftFt} ft`,
    water_access: data.waterAccessTypes.join(", "),
    fixed_bridges: data.fixedBridges,
    min_depth: `${data.minWaterDepthFt} ft`,
    dock_required: String(data.dockRequired),
    dock_covered: data.dockCovered ? "Yes" : "No",
    boat_lift: data.boatLiftRequired ? "Yes" : "No",
    num_vessels: String(data.numVessels),
    lifestyle: data.boatingLifestyle.join(", "),
    budget: `$${data.priceMaxM}M`,
    bedrooms: `${data.bedrooms}+`,
    areas: data.preferredAreas.join(", "),
    _subject: `New Dock Match Lead: ${data.firstName} ${data.lastName} — ${data.vesselLengthFt}ft vessel`,
  };

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  return res.ok;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background wave texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,169,110,0.8) 60px, rgba(201,169,110,0.8) 61px)",
        }}
      />

      {/* Boat Show Badge */}
      <div
        className="inline-flex items-center gap-2 border px-4 py-2 mb-10"
        style={{ borderColor: "rgba(201,169,110,0.3)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: "#c9a96e" }}
        />
        <span
          className="text-xs tracking-[0.3em] uppercase font-mono"
          style={{ color: "#c9a96e" }}
        >
          Palm Beach International Boat Show · 2026
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-serif mb-6 leading-tight"
        style={{
          color: "#f0e6d0",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 300,
          maxWidth: "900px",
        }}
      >
        Your boat deserves
        <br />
        <em style={{ color: "#c9a96e", fontStyle: "italic" }}>
          an even better home.
        </em>
      </h1>

      {/* Subhead */}
      <p
        className="mb-12 leading-relaxed"
        style={{
          color: "rgba(240,230,208,0.55)",
          fontSize: "1.1rem",
          maxWidth: "560px",
        }}
      >
        Tell us about your vessel — length, draft, bridge clearance, dockage
        needs. We&apos;ll show you every South Florida property where it can
        actually live.
      </p>

      {/* CTA */}
      <button
        onClick={onStart}
        className="group flex items-center gap-3 px-10 py-4 transition-all duration-300"
        style={{
          backgroundColor: "#c9a96e",
          color: "#0a0a0a",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          fontFamily: "var(--font-jost)",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Find My Dock
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <p
        className="mt-6 text-xs tracking-widest uppercase font-mono"
        style={{ color: "rgba(240,230,208,0.2)" }}
      >
        Takes about 3 minutes · No obligation
      </p>

      {/* Bottom brand */}
      <div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1"
      >
        <div
          className="w-px h-8 mb-3"
          style={{ backgroundColor: "rgba(201,169,110,0.2)" }}
        />
        <p
          className="text-xs tracking-[0.25em] uppercase font-mono"
          style={{ color: "rgba(240,230,208,0.2)" }}
        >
          Saltwater Estates · Powered by Barefoot Realty &amp; Investments
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export default function FindYourDockPage() {
  const [started, setStarted] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  function handleStart() {
    setStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  async function handleComplete(result: WaterfrontQuizResult) {
    await submitToFormspree(result);
  }

  return (
    <main style={{ backgroundColor: "#0a0a0a" }}>
      {!started && <Hero onStart={handleStart} />}
      <div ref={quizRef}>
        {started && <WaterfrontQuiz onComplete={handleComplete} />}
      </div>
    </main>
  );
}
