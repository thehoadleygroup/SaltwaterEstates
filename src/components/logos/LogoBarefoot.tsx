interface Props {
  variant?: "dark" | "light";
  width?: number;
  compact?: boolean; // single line nav version
}

export default function LogoBarefoot({ variant = "dark", width = 260, compact = false }: Props) {
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
        height={Math.round(width * 0.14)}
        viewBox="0 0 260 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Barefoot Realty & Investments"
      >
        {/* Minimal footprint mark */}
        <ellipse cx="10" cy="22" rx="5" ry="7" fill={accent} opacity="0.9" />
        <ellipse cx="7" cy="13.5" rx="1.6" ry="1.2" fill={accent} opacity="0.9" />
        <ellipse cx="9.5" cy="12" rx="1.5" ry="1.1" fill={accent} opacity="0.9" />
        <ellipse cx="12" cy="12" rx="1.4" ry="1.1" fill={accent} opacity="0.9" />
        <ellipse cx="14" cy="13" rx="1.2" ry="1" fill={accent} opacity="0.9" />
        <ellipse cx="15.5" cy="14.5" rx="1" ry="0.9" fill={accent} opacity="0.9" />

        {/* BAREFOOT */}
        <text
          x="26"
          y="22"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="22"
          letterSpacing="3"
          fill={primary}
          fontWeight="300"
        >
          BAREFOOT
        </text>

        {/* REALTY & INVESTMENTS */}
        <text
          x="27"
          y="31"
          fontFamily="var(--font-jost), system-ui, sans-serif"
          fontSize="7"
          letterSpacing="4"
          fill={accent}
          fontWeight="300"
        >
          REALTY & INVESTMENTS
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={Math.round(width * 0.48)}
      viewBox="0 0 260 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Barefoot Realty & Investments"
    >
      {/* Footprint mark — single refined print */}
      {/* Foot body */}
      <path
        d="M 108 72
           C 100 72 95 66 95 58
           C 94 50 97 42 100 36
           C 102 30 106 26 110 26
           C 114 26 118 30 120 36
           C 123 42 126 50 125 58
           C 125 66 120 72 112 72 Z"
        fill={accent}
        opacity="0.85"
      />
      {/* Toes */}
      <ellipse cx="100" cy="22" rx="4" ry="3" fill={accent} opacity="0.85" />
      <ellipse cx="106" cy="19" rx="3.5" ry="2.8" fill={accent} opacity="0.85" />
      <ellipse cx="112" cy="19" rx="3.2" ry="2.6" fill={accent} opacity="0.85" />
      <ellipse cx="117" cy="21" rx="2.8" ry="2.2" fill={accent} opacity="0.85" />
      <ellipse cx="121" cy="24" rx="2.2" ry="1.8" fill={accent} opacity="0.85" />

      {/* Small Hoadley Group diamond — brand tie */}
      <polygon points="110,8 113,11 110,14 107,11" fill={accent} opacity="0.5" />

      {/* BAREFOOT */}
      <text
        x="130"
        y="52"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="40"
        letterSpacing="4"
        fill={primary}
        fontWeight="300"
      >
        BAREFOOT
      </text>

      {/* Rule */}
      <line x1="130" y1="62" x2="258" y2="62" stroke={accent} strokeWidth="0.75" />

      {/* REALTY & INVESTMENTS */}
      <text
        x="130"
        y="76"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="9"
        letterSpacing="5"
        fill={accent}
        fontWeight="300"
      >
        REALTY & INVESTMENTS
      </text>

      {/* Licensed Brokerage tag */}
      <text
        x="130"
        y="92"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="7"
        letterSpacing="2"
        fill={primary}
        fontWeight="300"
        opacity="0.35"
      >
        LICENSED REAL ESTATE BROKERAGE · SOUTH FLORIDA
      </text>
    </svg>
  );
}
