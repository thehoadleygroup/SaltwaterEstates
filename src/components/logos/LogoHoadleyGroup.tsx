interface Props {
  variant?: "dark" | "light";
  width?: number;
}

export default function LogoHoadleyGroup({ variant = "dark", width = 220 }: Props) {
  const gold = "#c9a96e";
  const teal = "#1a4a4a";
  const cream = "#f0e6d0";
  const dark = "#0a0a0a";

  const primary = variant === "dark" ? cream : dark;
  const accent = variant === "dark" ? gold : teal;
  const height = Math.round(width * 0.38);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Hoadley Group"
    >
      {/* Diamond mark */}
      <polygon
        points="110,4 118,12 110,20 102,12"
        fill={accent}
      />

      {/* THE */}
      <text
        x="110"
        y="34"
        textAnchor="middle"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="8"
        letterSpacing="6"
        fill={accent}
        fontWeight="400"
      >
        THE
      </text>

      {/* HOADLEY */}
      <text
        x="110"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="32"
        letterSpacing="4"
        fill={primary}
        fontWeight="300"
      >
        HOADLEY
      </text>

      {/* Rule */}
      <line x1="30" y1="64" x2="190" y2="64" stroke={accent} strokeWidth="0.75" />

      {/* GROUP */}
      <text
        x="110"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-jost), system-ui, sans-serif"
        fontSize="8"
        letterSpacing="8"
        fill={accent}
        fontWeight="300"
      >
        GROUP
      </text>
    </svg>
  );
}
