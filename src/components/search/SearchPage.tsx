"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchFilters, DEFAULT_FILTERS } from "@/types/listing";
import { MOCK_LISTINGS, filterListings } from "@/lib/mock-listings";
import FilterPanel from "./FilterPanel";
import ListingCard from "./ListingCard";

// Mapbox must be client-only — no SSR
const MapView = dynamic(() => import("./MapView"), { ssr: false });

function vesselFitScore(
  listing: import("@/types/listing").Listing,
  filters: SearchFilters
): "full" | "partial" | "none" {
  if (filters.vesselLengthFt === 0 && filters.vesselDraftFt === 0) return "none";

  const draftOk =
    filters.vesselDraftFt === 0 ||
    listing.waterDepthFt === 0 ||
    listing.waterDepthFt >= filters.vesselDraftFt;

  const lengthOk =
    filters.vesselLengthFt === 0 ||
    !listing.hasDock ||
    listing.dockLengthFt === 0 ||
    listing.dockLengthFt >= filters.vesselLengthFt;

  if (draftOk && lengthOk) return "full";
  if (draftOk || lengthOk) return "partial";
  return "none";
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<SearchFilters>(() => {
    // Pre-populate from quiz URL params if present
    return {
      ...DEFAULT_FILTERS,
      vesselLengthFt: Number(searchParams.get("loa") ?? 0),
      vesselDraftFt: Number(searchParams.get("draft") ?? 0),
      noFixedBridges: searchParams.get("bridge") === "no",
      minWaterDepthFt: Number(searchParams.get("depth") ?? 0),
      waterAccessTypes: searchParams.get("access")?.split(",").filter(Boolean) ?? [],
      priceMax: Number(searchParams.get("price") ?? 0),
      bedroomsMin: Number(searchParams.get("beds") ?? 0),
    };
  });

  const [activeListing, setActiveListing] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(true);

  const filtered = filterListings(MOCK_LISTINGS, filters);

  // Scroll active card into view
  useEffect(() => {
    if (activeListing) {
      const el = document.getElementById(`card-${activeListing}`);
      el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeListing]);

  const handleListingClick = useCallback((id: string) => {
    setActiveListing((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Top nav bar */}
      <nav
        style={{
          height: "56px",
          background: "#0d0d0d",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          flexShrink: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              color: "#f0e6d0",
              textDecoration: "none",
            }}
          >
            Saltwater<span style={{ color: "#c9a96e" }}>Estates</span>
          </Link>
          <span
            style={{
              color: "rgba(255,255,255,0.1)",
              fontSize: "1rem",
            }}
          >
            /
          </span>
          <span
            style={{
              color: "rgba(240,230,208,0.4)",
              fontSize: "0.75rem",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Search
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Filter toggle on mobile */}
          <button
            onClick={() => setPanelOpen((p) => !p)}
            style={{
              padding: "6px 14px",
              background: panelOpen ? "rgba(201,169,110,0.1)" : "transparent",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#c9a96e",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            {panelOpen ? "Hide Filters" : "Filters"}
          </button>

          <Link
            href="/quiz"
            style={{
              padding: "6px 14px",
              background: "#c9a96e",
              color: "#0a0a0a",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              textDecoration: "none",
            }}
          >
            Vessel Quiz →
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Filter panel + card list */}
        {panelOpen && (
          <div
            style={{
              width: "580px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Filters */}
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              resultCount={filtered.length}
              onClear={() => setFilters(DEFAULT_FILTERS)}
            />

            {/* Listing cards */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                background: "#0a0a0a",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {filtered.length === 0 ? (
                <div
                  style={{
                    padding: "48px 24px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      color: "rgba(240,230,208,0.5)",
                      fontSize: "1rem",
                      marginBottom: "8px",
                    }}
                  >
                    No properties match.
                  </p>
                  <p
                    style={{
                      color: "rgba(240,230,208,0.3)",
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                    }}
                  >
                    Try relaxing your vessel or property filters.
                  </p>
                </div>
              ) : (
                filtered.map((listing) => (
                  <div key={listing.id} id={`card-${listing.id}`}>
                    <ListingCard
                      listing={listing}
                      active={activeListing === listing.id}
                      onClick={() => handleListingClick(listing.id)}
                      vesselFit={vesselFitScore(listing, filters)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Map */}
        <MapView
          listings={filtered}
          activeListing={activeListing}
          onListingClick={handleListingClick}
        />
      </div>
    </div>
  );
}
