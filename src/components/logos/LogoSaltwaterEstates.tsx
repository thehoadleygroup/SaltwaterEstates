interface Props {
  variant?: "dark" | "light";
  width?: number;
  compact?: boolean;
}

export default function LogoSaltwaterEstates({ variant = "dark", width = 280, compact = false }: Props) {
  const gold = "#c9a96e";
  const teal = "#1a4a4a";
  const cream = "#f0e6d0";
  const dark = "#0a0a0a";

  const primary = variant === "dark" ? cream : dark;
  const accent = variant === "dark" ? gold : teal;

  if (compact) {
    return (
      <svg
        width={width}
        height={Math.round(width * 0.13)}
        viewBox="0 0 280 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SaltwaterEstates"
      >
        {/* Tide mark — three wave lines */}
        <path d="M4,13 C7,10 11,16 14,13" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M2,18 C6,14 11,22 16,18" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M4,23 C7,20 11,26 14,23" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" />

        <text
          x="22"
          y="22"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="22"
          letterSpacing="2"
          fill={primary}
          fontWeight="300"
        >
          Saltwater
          <tspan fill={accent}>Estates</tspan>
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={Math.round(width * 0.44)}
      viewBox="0 0 280 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SaltwaterEstates"
    >
      {/* Tide wave mark — 3 arcing wave lines, centered */}
      <path
        d="M98,18 C106,12 116,24 124,18"
        stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round"
      />
      <path
        d="M94,24 C104,16 116,30 126,24"
        stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round"
      />
      <path
        d="M98,30 C106,24 116,36 124,30"
        stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round"
      />

      {/* Diamond — Hoadley Group tie */}
      <polygon points="110,8 113,11 110,14 107,11" fill={accent} opacity="0.7" />

      {/* SALTWATER */}
      <text
        x="140"
        y="46"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="38"
        letterSpacing="6"
        fill={primary}
        fontWeight="300"
      >
        SALTWATER
      </text>

      {/* Rule */}
      <line x1="28" y1="56" x2="252" y2="56" stroke={accent} strokeWidth="0.75" />

      {/* ESTATES */}
      <text
        x="140"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="12"
        letterSpacing="12"
        fill={accent}
        fontWeight="300"
      >
        ESTATES
      </text>

      {/* Tagline */}
      <text
        x="140"
        y="90"
        textAnchor="middle"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="7"
        letterSpacing="2.5"
        fill={primary}
        fontWeight="300"
        opacity="0.35"
      >
        SOUTH FLORIDA LUXURY WATERFRONT REAL ESTATE
      </text>

      {/* Powered by line */}
      <text
        x="140"
        y="104"
        textAnchor="middle"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="6.5"
        letterSpacing="1.5"
        fill={primary}
        fontWeight="300"
        opacity="0.25"
      >
        POWERED BY BAREFOOT REALTY & INVESTMENTS · THE HOADLEY GROUP
      </text>
    </svg>
  );
}
