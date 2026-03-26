"use client";

import { useState } from "react";
import WaterfrontQuiz from "@/components/WaterfrontQuiz";
import type { WaterfrontQuizResult } from "@/components/WaterfrontQuiz";

// ─── Web3Forms lead submission ────────────────────────────────────────────────
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

async function submitLead(result: WaterfrontQuizResult) {
  if (!WEB3FORMS_KEY) return;
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New FindYourDock Lead — ${result.firstName} ${result.lastName}`,
        from_name: "FindYourDock",
        name: `${result.firstName} ${result.lastName}`,
        email: result.email,
        phone: result.phone,
        vessel: `${result.vesselLengthFt}ft ${result.vesselType.replace(/_/g, " ")}`,
        draft: `${result.vesselDraftFt} ft`,
        beam: `${result.vesselBeamFt} ft`,
        water_access: result.waterAccessTypes.join(", "),
        fixed_bridges: result.fixedBridges,
        min_depth: `${result.minWaterDepthFt} ft`,
        dock_required: result.dockRequired,
        boat_lift: result.boatLiftRequired,
        num_vessels: result.numVessels,
        lifestyle: result.boatingLifestyle.join(", "),
        budget: `$${result.priceMaxM}M`,
        bedrooms: result.bedrooms,
        areas: result.preferredAreas.join(", "),
      }),
    });
  } catch (err) {
    console.error("Lead submission failed:", err);
  }
}

// ─── How It Works steps ───────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Tell Us About Your Vessel",
    body: "LOA, draft, beam, bridge clearance — the specs that determine where your boat can actually live.",
  },
  {
    num: "02",
    title: "We Match the Properties",
    body: "We filter every active listing against your vessel's needs. Only properties your boat can reach appear on your shortlist.",
  },
  {
    num: "03",
    title: "Your Advisor Connects",
    body: "A Barefoot Realty advisor contacts you within 24 hours with a curated, vessel-matched property report.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function FindYourDockLanding() {
  const [quizStarted, setQuizStarted] = useState(false);

  function scrollToQuiz() {
    setQuizStarted(true);
    setTimeout(() => {
      document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  async function handleQuizComplete(result: WaterfrontQuizResult) {
    await submitLead(result);
  }

  return (
    <div
      style={{ backgroundColor: "#0a0a0a", color: "#f0e6d0", minHeight: "100vh" }}
      className="font-sans"
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-5 py-20 text-center overflow-hidden">
        {/* Subtle background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Logo wordmark */}
        <div className="mb-10 relative z-10">
          <p
            className="font-mono uppercase tracking-[0.35em] text-xs mb-2"
            style={{ color: "#c9a96e" }}
          >
            Palm Beach Boat Show · 2026
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl leading-none"
            style={{ color: "#f0e6d0" }}
          >
            Find Your Dock
          </h1>
          <div
            className="mx-auto mt-4 mb-0"
            style={{ height: "1px", width: "120px", background: "#c9a96e", opacity: 0.5 }}
          />
        </div>

        {/* Headline */}
        <div className="relative z-10 max-w-lg mx-auto mb-10">
          <p
            className="text-xl sm:text-2xl font-serif leading-snug mb-4"
            style={{ color: "#f0e6d0" }}
          >
            Your boat deserves a home.
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(240,230,208,0.55)" }}
          >
            Tell us about your vessel — we&apos;ll show you every South Florida
            waterfront property where it can live, filtered by draft, bridge
            clearance, and inlet access.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToQuiz}
          className="relative z-10 px-8 py-4 text-sm font-mono tracking-widest uppercase transition-all duration-200 active:scale-95"
          style={{
            background: "#c9a96e",
            color: "#0a0a0a",
            border: "none",
            cursor: "pointer",
          }}
        >
          Find My Dock →
        </button>

        {/* Scroll hint */}
        <p
          className="absolute bottom-8 left-0 right-0 text-center font-mono text-xs tracking-widest uppercase animate-pulse"
          style={{ color: "rgba(240,230,208,0.2)" }}
        >
          scroll
        </p>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="px-5 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-center font-mono text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: "#c9a96e" }}
          >
            How It Works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.num} className="text-center sm:text-left">
                <p
                  className="font-mono text-3xl mb-3 leading-none"
                  style={{ color: "rgba(201,169,110,0.25)" }}
                >
                  {s.num}
                </p>
                <h3
                  className="font-serif text-lg mb-2"
                  style={{ color: "#f0e6d0" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(240,230,208,0.5)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────────────────────────── */}
      <section
        id="quiz-section"
        className="px-5 py-8 sm:py-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-2xl mx-auto">
          {!quizStarted && (
            <div className="text-center mb-12">
              <p
                className="font-serif text-2xl sm:text-3xl mb-4"
                style={{ color: "#f0e6d0" }}
              >
                Tell us about your vessel
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "rgba(240,230,208,0.5)" }}
              >
                7 quick steps. We&apos;ll handle the rest.
              </p>
              <button
                onClick={scrollToQuiz}
                className="px-8 py-4 text-sm font-mono tracking-widest uppercase transition-all active:scale-95"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(201,169,110,0.4)",
                  color: "#c9a96e",
                  cursor: "pointer",
                }}
              >
                Start the Quiz
              </button>
            </div>
          )}

          {quizStarted && (
            <WaterfrontQuiz onComplete={handleQuizComplete} />
          )}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="px-5 py-10 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="font-serif text-base mb-1"
          style={{ color: "rgba(240,230,208,0.4)" }}
        >
          Barefoot Realty &amp; Investments
        </p>
        <p
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "rgba(240,230,208,0.2)" }}
        >
          Licensed Real Estate Brokerage · South Florida
        </p>
        <p
          className="font-mono text-xs mt-4"
          style={{ color: "rgba(240,230,208,0.15)" }}
        >
          findyourdock.com · The Hoadley Group
        </p>
      </footer>
    </div>
  );
}
