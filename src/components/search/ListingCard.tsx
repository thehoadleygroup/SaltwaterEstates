"use client";

import { Listing } from "@/types/listing";
import { formatPrice } from "@/lib/mock-listings";

const WATERFRONT_COLORS: Record<string, string> = {
  Ocean: "#1a7aad",
  Intracoastal: "#1a9a6e",
  "Deep Canal": "#6e6e1a",
  Bay: "#1a4a8a",
  River: "#6e4a1a",
};

interface Props {
  listing: Listing;
  active: boolean;
  onClick: () => void;
  vesselFit: "full" | "partial" | "none";
}

export default function ListingCard({ listing, active, onClick, vesselFit }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        background: active ? "#1a1a1a" : "#111",
        border: active ? "1px solid #c9a96e" : "1px solid rgba(255,255,255,0.06)",
        marginBottom: "2px",
        cursor: "pointer",
        transition: "all 0.15s",
        display: "flex",
        gap: 0,
        minHeight: "130px",
      }}
    >
      {/* Photo */}
      <div
        style={{
          width: "130px",
          flexShrink: 0,
          background: "#1e2a1e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Placeholder gradient — replace with <Image> once real photos exist */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, #0d1a0d, #1a2e1a)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            opacity: 0.6,
          }}
        >
          🏡
        </div>

        {/* Vessel fit badge */}
        {vesselFit !== "none" && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              padding: "3px 8px",
              background: vesselFit === "full" ? "#c9a96e" : "rgba(201,169,110,0.4)",
              color: vesselFit === "full" ? "#0a0a0a" : "#f0e6d0",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {vesselFit === "full" ? "✓ Vessel Fit" : "~ Partial"}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px", flex: 1, minWidth: 0 }}>
        {/* Price */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.2rem",
            color: "#c9a96e",
            marginBottom: "4px",
          }}
        >
          {formatPrice(listing.listPrice)}
        </div>

        {/* Address */}
        <div
          style={{
            color: "#f0e6d0",
            fontSize: "0.8rem",
            marginBottom: "2px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {listing.address}
        </div>
        <div
          style={{
            color: "rgba(240,230,208,0.4)",
            fontSize: "0.75rem",
            marginBottom: "10px",
            fontFamily: "monospace",
          }}
        >
          {listing.city}, FL {listing.zip}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "10px" }}>
          {[
            { v: listing.bedrooms, l: "bd" },
            { v: listing.bathrooms, l: "ba" },
            { v: listing.sqft.toLocaleString(), l: "sf" },
          ].map((s) => (
            <span
              key={s.l}
              style={{
                color: "rgba(240,230,208,0.6)",
                fontSize: "0.75rem",
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "#f0e6d0" }}>{s.v}</span> {s.l}
            </span>
          ))}
        </div>

        {/* Waterfront badges */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "2px 8px",
              background: `${WATERFRONT_COLORS[listing.waterfrontType]}22`,
              border: `1px solid ${WATERFRONT_COLORS[listing.waterfrontType]}44`,
              color: WATERFRONT_COLORS[listing.waterfrontType],
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {listing.waterfrontType}
          </span>

          {listing.hasDock && (
            <span
              style={{
                padding: "2px 8px",
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.2)",
                color: "rgba(201,169,110,0.8)",
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              {listing.dockLengthFt}′ Dock
            </span>
          )}

          {listing.noFixedBridges && (
            <span
              style={{
                padding: "2px 8px",
                background: "rgba(26,154,110,0.08)",
                border: "1px solid rgba(26,154,110,0.2)",
                color: "#1a9a6e",
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              No Fixed Bridges
            </span>
          )}
        </div>
      </div>

      {/* Active indicator */}
      {active && (
        <div
          style={{
            width: "3px",
            background: "#c9a96e",
            flexShrink: 0,
          }}
        />
      )}
    </div>
  );
}
