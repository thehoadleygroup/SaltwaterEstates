import {
  LogoHoadleyGroup,
  LogoBarefoot,
  LogoHoadleyConstruction,
  LogoSaltwaterEstates,
} from "@/components/logos";

export default function LogoShowcase() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", padding: "60px 5vw" }}>
      <p style={{ color: "rgba(240,230,208,0.3)", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "60px" }}>
        Brand Identity Showcase — The Hoadley Group Family
      </p>

      {/* Dark variants */}
      <p style={{ color: "rgba(240,230,208,0.2)", fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "40px" }}>
        Dark Variant (for dark backgrounds)
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "60px", marginBottom: "80px" }}>
        <div>
          <p style={{ color: "rgba(240,230,208,0.2)", fontSize: "9px", fontFamily: "monospace", marginBottom: "20px" }}>PARENT BRAND</p>
          <LogoHoadleyGroup variant="dark" width={280} />
        </div>
        <div>
          <p style={{ color: "rgba(240,230,208,0.2)", fontSize: "9px", fontFamily: "monospace", marginBottom: "20px" }}>WATERFRONT PORTAL</p>
          <LogoSaltwaterEstates variant="dark" width={340} />
        </div>
        <div>
          <p style={{ color: "rgba(240,230,208,0.2)", fontSize: "9px", fontFamily: "monospace", marginBottom: "20px" }}>BROKERAGE</p>
          <LogoBarefoot variant="dark" width={320} />
        </div>
        <div>
          <p style={{ color: "rgba(240,230,208,0.2)", fontSize: "9px", fontFamily: "monospace", marginBottom: "20px" }}>CONSTRUCTION</p>
          <LogoHoadleyConstruction variant="dark" width={300} />
        </div>
      </div>

      {/* Light variants */}
      <div style={{ background: "#f5f0e8", padding: "60px 40px", marginTop: "40px" }}>
        <p style={{ color: "rgba(10,10,10,0.3)", fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "40px" }}>
          Light Variant (for white backgrounds, print, letterhead)
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <LogoHoadleyGroup variant="light" width={280} />
          <LogoSaltwaterEstates variant="light" width={340} />
          <LogoBarefoot variant="light" width={320} />
          <LogoHoadleyConstruction variant="light" width={300} />
        </div>
      </div>

      {/* Compact nav versions */}
      <div style={{ marginTop: "60px" }}>
        <p style={{ color: "rgba(240,230,208,0.2)", fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "30px" }}>
          Compact (nav bar usage)
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <LogoSaltwaterEstates variant="dark" width={220} compact />
          <LogoBarefoot variant="dark" width={200} compact />
        </div>
      </div>
    </div>
  );
}
