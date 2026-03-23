interface Props {
  variant?: "dark" | "light";
  width?: number;
}

export default function LogoHoadleyConstruction({ variant = "dark", width = 240 }: Props) {
  const gold = "#c9a96e";
  const teal = "#1a4a4a";
  const cream = "#f0e6d0";
  const dark = "#0a0a0a";

  const primary = variant === "dark" ? cream : dark;
  const accent = variant === "dark" ? gold : teal;
  const height = Math.round(width * 0.42);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hoadley Construction"
    >
      {/* Geometric H mark — architectural, three rectangles */}
      <rect x="20" y="12" width="7" height="42" fill={accent} />
      <rect x="20" y="30" width="34" height="5" fill={accent} />
      <rect x="47" y="12" width="7" height="42" fill={accent} />

      {/* Small Hoadley Group diamond — brand tie */}
      <polygon points="37,6 40,9 37,12 34,9" fill={accent} opacity="0.6" />

      {/* HOADLEY */}
      <text
        x="68"
        y="44"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="34"
        letterSpacing="5"
        fill={primary}
        fontWeight="300"
      >
        HOADLEY
      </text>

      {/* Rule */}
      <line x1="68" y1="54" x2="238" y2="54" stroke={accent} strokeWidth="0.75" />

      {/* CONSTRUCTION */}
      <text
        x="68"
        y="68"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="9"
        letterSpacing="6"
        fill={accent}
        fontWeight="300"
      >
        CONSTRUCTION
      </text>

      {/* South Florida tag */}
      <text
        x="68"
        y="82"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="7"
        letterSpacing="2"
        fill={primary}
        fontWeight="300"
        opacity="0.35"
      >
        LUXURY BUILD · WATERFRONT · SOUTH FLORIDA
      </text>
    </svg>
  );
}
