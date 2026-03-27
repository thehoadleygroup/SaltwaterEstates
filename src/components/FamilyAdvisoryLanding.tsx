"use client";

import { useState } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// ── TYPES ─────────────────────────────────────────────────────────────────────
interface InquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referredBy: string;
  context: string;
}

const EMPTY: InquiryForm = {
  firstName: "", lastName: "", email: "",
  phone: "", referredBy: "", context: "",
};

// ── PILLARS ───────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    num: "I",
    title: "Waterfront Estate Acquisition",
    body: "We match your vessel to the property before we show you a single listing. Draft depth, bridge clearance, inlet access, dock and lift specifications — the nautical requirements that determine whether a property works for your life on the water.",
  },
  {
    num: "II",
    title: "Investment Portfolio Strategy",
    body: "Income-producing commercial assets, distressed acquisitions, and 1031 exchange coordination. We treat real estate as a wealth-building instrument — not a collection of transactions — and evaluate every opportunity against your full portfolio picture.",
  },
  {
    num: "III",
    title: "Florida Domicile Planning",
    body: "For families with primary residences in high-tax states, establishing a Florida domicile eliminates state income tax entirely. We manage the real estate side of that transition — from selecting the right property to documenting the change of domicile — in coordination with your tax counsel.",
  },
  {
    num: "IV",
    title: "Construction & Renovation",
    body: "Our affiliated construction arm, Hoadley Construction, manages the build, renovation, and repositioning of residential and commercial properties — from permit acquisition to final walk-through. One relationship from acquisition through completion.",
  },
  {
    num: "V",
    title: "Off-Market Access",
    body: "Through our proprietary acquisition network and data pipeline, we provide first access to properties that never reach the public market — distressed estates, motivated sellers, pre-foreclosure opportunities, and private seller relationships built over years.",
  },
  {
    num: "VI",
    title: "Legacy & Estate Coordination",
    body: "We work alongside your estate attorneys, family office advisors, and CPAs to ensure your real estate holdings reflect your long-term family objectives. Asset titling, entity structuring, generational transfer strategy — we speak the language of your existing advisory team.",
  },
];

// ── HOW WE WORK ───────────────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    num: "01",
    title: "A Limited Practice",
    body: "We accept a limited number of family advisory relationships each year. This is intentional. Full-service advisory requires full attention — and full attention requires limits.",
  },
  {
    num: "02",
    title: "Direct Access",
    body: "Every family advisory client has direct access to Ben Hoadley — not an assistant, not a junior agent. The person who signs your documents is the person who answers your call.",
  },
  {
    num: "03",
    title: "The Full Picture",
    body: "Our first conversation is a discovery meeting. No pitch. No presentation. We want to understand your complete picture — your properties, your vessel, your investment objectives, your family structure — before we make a single recommendation.",
  },
  {
    num: "04",
    title: "Absolute Discretion",
    body: "Our clients have built exceptional things. They expect the same standard of discretion from every advisor in their circle. We operate accordingly — always.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function FamilyAdvisoryLanding() {
  const [form, setForm] = useState<InquiryForm>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: keyof InquiryForm, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone) return;
    setStatus("sending");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Family Advisory Inquiry — ${form.firstName} ${form.lastName}`,
          from_name: "The Hoadley Group · Family Advisory",
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          referred_by: form.referredBy,
          context: form.context,
        }),
      });
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ backgroundColor: "#08111f", color: "#f0e6d0", minHeight: "100vh" }}>

      {/* ── SKIP NAV ──────────────────────────────────────────────────────── */}
      <a
        href="#inquiry"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:text-sm"
        style={{ background: "#c9a96e", color: "#08111f" }}
      >
        Skip to inquiry form
      </a>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="flex items-center justify-between px-8 py-6"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.12)" }}
      >
        <div>
          <p className="font-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "#c9a96e" }}>
            The Hoadley Group
          </p>
          <p className="font-mono text-xs tracking-widest uppercase mt-0.5"
            style={{ color: "rgba(240,230,208,0.3)" }}>
            Barefoot Realty &amp; Investments
          </p>
        </div>
        <a
          href="tel:+15616766659"
          className="font-mono text-xs tracking-wider transition-opacity hover:opacity-80"
          style={{ color: "rgba(201,169,110,0.7)" }}
        >
          (561) 676-6659
        </a>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 sm:py-44 overflow-hidden">

        {/* Background radial */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)"
        }} />

        {/* Eyebrow */}
        <p className="font-mono text-xs tracking-[0.35em] uppercase mb-8 relative z-10"
          style={{ color: "rgba(201,169,110,0.6)" }}>
          Family Advisory · The Hoadley Group
        </p>

        {/* Headline */}
        <h1 className="font-serif relative z-10 leading-none mb-6"
          style={{ color: "#f0e6d0", maxWidth: "780px" }}>
          <span className="block" style={{ fontSize: "clamp(42px, 7vw, 88px)", fontWeight: 300 }}>
            Some families need an agent.
          </span>
          <span className="block" style={{
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#c9a96e"
          }}>
            Yours needs an advisor.
          </span>
        </h1>

        {/* Rule */}
        <div className="relative z-10 mb-8" style={{
          width: "80px", height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a96e, transparent)"
        }} />

        {/* Subhead */}
        <p className="font-serif relative z-10 leading-relaxed"
          style={{
            color: "rgba(240,230,208,0.6)",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            maxWidth: "640px",
            fontWeight: 300,
          }}>
          The Hoadley Group serves a select number of South Florida families
          across the full spectrum of their real estate life — from the vessel
          that defines your weekends to the estate that anchors your legacy.
        </p>

        {/* CTA */}
        <a
          href="#inquiry"
          className="relative z-10 mt-12 inline-block font-mono text-xs tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: "#c9a96e",
            color: "#08111f",
          }}
        >
          Request a Private Conversation
        </a>

        {/* Scroll hint */}
        <p className="absolute bottom-8 font-mono text-xs tracking-widest uppercase animate-pulse"
          style={{ color: "rgba(240,230,208,0.15)" }}>
          scroll
        </p>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: "#c9a96e" }}>
            The Cost of Fragmentation
          </p>
          <p className="font-serif leading-relaxed mb-6"
            style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "#f0e6d0", fontWeight: 300 }}>
            Most high-net-worth families manage their real estate through
            a fragmented collection of agents, attorneys, property managers,
            and contractors who have never spoken to one another.
          </p>
          <p className="font-serif leading-relaxed mb-6"
            style={{ fontSize: "clamp(16px, 2.2vw, 22px)", color: "rgba(240,230,208,0.55)", fontWeight: 300 }}>
            Opportunities are missed. Decisions are made without the full picture.
            The tax savings conversation never connects to the property acquisition.
            The construction project starts before the investment thesis is clear.
            The vessel purchase happens before anyone confirms the dock depth.
          </p>
          <p className="font-serif leading-relaxed"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#c9a96e", fontWeight: 300, fontStyle: "italic" }}>
            There is a better way.
          </p>
        </div>
      </section>

      {/* ── SIX PILLARS ───────────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)", background: "rgba(201,169,110,0.03)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "#c9a96e" }}>
            Areas of Service
          </p>
          <h2 className="font-serif text-center mb-16"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#f0e6d0", fontWeight: 300 }}>
            One relationship. Every dimension.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: "1px solid rgba(201,169,110,0.12)", background: "rgba(201,169,110,0.12)" }}>
            {PILLARS.map((p) => (
              <div
                key={p.num}
                className="p-8 sm:p-10"
                style={{ background: "#08111f" }}
              >
                <p className="font-mono mb-4"
                  style={{ fontSize: "11px", letterSpacing: "0.3em", color: "rgba(201,169,110,0.4)" }}>
                  {p.num}
                </p>
                <h3 className="font-serif mb-4"
                  style={{ fontSize: "20px", color: "#f0e6d0", fontWeight: 300, lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed"
                  style={{ color: "rgba(240,230,208,0.45)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "#c9a96e" }}>
            How We Work
          </p>
          <h2 className="font-serif text-center mb-16"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#f0e6d0", fontWeight: 300 }}>
            Built for families who expect more.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            {PRINCIPLES.map((pr) => (
              <div key={pr.num}>
                <p className="font-mono mb-3"
                  style={{ fontSize: "32px", color: "rgba(201,169,110,0.2)", lineHeight: 1 }}>
                  {pr.num}
                </p>
                <h3 className="font-serif mb-3"
                  style={{ fontSize: "20px", color: "#f0e6d0", fontWeight: 300 }}>
                  {pr.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ color: "rgba(240,230,208,0.45)" }}>
                  {pr.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISOR BIO ───────────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 sm:py-28"
        style={{
          borderTop: "1px solid rgba(240,230,208,0.06)",
          borderBottom: "1px solid rgba(240,230,208,0.06)",
          background: "rgba(201,169,110,0.03)"
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6" style={{
            width: "56px", height: "1px",
            background: "#c9a96e", opacity: 0.5, margin: "0 auto 24px"
          }} />
          <h2 className="font-serif mb-4"
            style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#f0e6d0", fontWeight: 300 }}>
            Benjamin Hoadley
          </h2>
          <p className="font-mono text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "#c9a96e" }}>
            Licensed Real Estate Broker · FL #BK3222885
          </p>
          <p className="font-serif leading-relaxed mb-6"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,230,208,0.6)", fontWeight: 300 }}>
            Ben built Barefoot Realty &amp; Investments to serve clients whose
            real estate needs don&apos;t fit a single category. A South Florida
            native with deep roots in waterfront, commercial, and distressed
            asset markets — he approaches every client relationship as a
            long-term advisory partnership, not a transaction.
          </p>
          <p className="font-serif leading-relaxed"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,230,208,0.6)", fontWeight: 300 }}>
            The Hoadley Group is the integrated platform that brings together
            residential, commercial, construction, and acquisition expertise
            under one roof — and under one relationship.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+15616766659"
              className="font-mono text-xs tracking-wider transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,169,110,0.7)" }}>
              (561) 676-6659
            </a>
            <span className="hidden sm:inline" style={{ color: "rgba(240,230,208,0.15)" }}>·</span>
            <a href="mailto:ben@thehoadleygroup.com"
              className="font-mono text-xs tracking-wider transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,169,110,0.7)" }}>
              ben@thehoadleygroup.com
            </a>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ──────────────────────────────────────────────────── */}
      <section id="inquiry" className="px-6 py-20 sm:py-28">
        <div className="max-w-xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "#c9a96e" }}>
            Begin the Conversation
          </p>
          <h2 className="font-serif text-center mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 36px)", color: "#f0e6d0", fontWeight: 300 }}>
            Request a Private Conversation
          </h2>
          <p className="text-sm text-center mb-12 leading-relaxed"
            style={{ color: "rgba(240,230,208,0.35)" }}>
            We respond to all inquiries within one business day.
            All conversations are held in strict confidence.
          </p>

          {status === "sent" ? (
            <div className="text-center py-16">
              <p className="font-serif mb-3"
                style={{ fontSize: "24px", color: "#c9a96e", fontWeight: 300 }}>
                Thank you.
              </p>
              <p className="text-sm leading-relaxed"
                style={{ color: "rgba(240,230,208,0.45)" }}>
                We&apos;ve received your inquiry and will be in touch within
                one business day. We look forward to the conversation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: "rgba(240,230,208,0.35)" }}>
                    First Name <span style={{ color: "#c9a96e" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => update("firstName", e.target.value)}
                    required
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors"
                    style={{
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#f0e6d0",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: "rgba(240,230,208,0.35)" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={e => update("lastName", e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors"
                    style={{
                      border: "1px solid rgba(201,169,110,0.2)",
                      color: "#f0e6d0",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 mb-5">
                <label className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "rgba(240,230,208,0.35)" }}>
                  Email Address <span style={{ color: "#c9a96e" }}>*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => update("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#f0e6d0",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2 mb-5">
                <label className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "rgba(240,230,208,0.35)" }}>
                  Phone <span style={{ color: "#c9a96e" }}>*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => update("phone", e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#f0e6d0",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Referred By */}
              <div className="flex flex-col gap-2 mb-5">
                <label className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "rgba(240,230,208,0.35)" }}>
                  Referred By
                </label>
                <input
                  type="text"
                  value={form.referredBy}
                  onChange={e => update("referredBy", e.target.value)}
                  placeholder="Name of the person who connected us"
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#f0e6d0",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Context */}
              <div className="flex flex-col gap-2 mb-8">
                <label className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "rgba(240,230,208,0.35)" }}>
                  What brings you here
                </label>
                <textarea
                  value={form.context}
                  onChange={e => update("context", e.target.value)}
                  rows={4}
                  placeholder="Tell us briefly about your situation — properties, vessel, what you're looking to accomplish."
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none resize-none"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#f0e6d0",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-50"
                style={{ background: "#c9a96e", color: "#08111f", border: "none", cursor: "pointer" }}
              >
                {status === "sending" ? "Sending..." : "Request a Private Conversation"}
              </button>

              {status === "error" && (
                <p className="mt-4 text-xs text-center"
                  style={{ color: "rgba(240,230,208,0.4)" }}>
                  Something went wrong. Please call us directly at (561) 676-6659.
                </p>
              )}

              <p className="mt-6 text-xs text-center leading-relaxed"
                style={{ color: "rgba(240,230,208,0.2)" }}>
                By submitting this form you consent to be contacted regarding
                real estate advisory services. We do not share your information
                with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-12 text-center"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}
        role="contentinfo"
      >
        {/* EHO */}
        <div className="flex justify-center mb-6" aria-label="Equal Housing Opportunity">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M18 5L4 16h3v13h8v-8h6v8h8V16h3L18 5z"
              stroke="rgba(240,230,208,0.25)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            <line x1="12" y1="24" x2="24" y2="24"
              stroke="rgba(240,230,208,0.25)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="27.5" x2="24" y2="27.5"
              stroke="rgba(240,230,208,0.25)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <p className="font-serif text-sm mb-1" style={{ color: "rgba(240,230,208,0.4)" }}>
          Benjamin Hoadley · Licensed Real Estate Broker · FL #BK3222885
        </p>
        <p className="font-serif text-sm mb-4" style={{ color: "rgba(240,230,208,0.3)" }}>
          Barefoot Realty &amp; Investments · The Hoadley Group
        </p>
        <p className="font-mono text-xs mb-1" style={{ color: "rgba(240,230,208,0.15)" }}>
          Equal Housing Opportunity · All services subject to availability.
        </p>
        <p className="font-mono text-xs" style={{ color: "rgba(240,230,208,0.1)" }}>
          © {new Date().getFullYear()} Barefoot Realty &amp; Investments · The Hoadley Group · thehoadleygroup.com
        </p>
      </footer>
    </div>
  );
}
