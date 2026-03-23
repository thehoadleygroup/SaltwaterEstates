"use client";

import { useEffect, useRef, useCallback } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { Listing } from "@/types/listing";
import { formatPrice } from "@/lib/mock-listings";

interface Props {
  listings: Listing[];
  activeListing: string | null;
  onListingClick: (id: string) => void;
}

const SOUTH_FL_CENTER: [number, number] = [-80.08, 26.58];

export default function MapView({ listings, activeListing, onListingClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maptilersdk.Map | null>(null);
  const markersRef = useRef<Map<string, maptilersdk.Marker>>(new Map());

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY!;

    const map = new maptilersdk.Map({
      container: containerRef.current,
      style: `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: SOUTH_FL_CENTER,
      zoom: 9.5,
      attributionControl: false,
    });

    map.addControl(
      new maptilersdk.AttributionControl({ compact: true }),
      "bottom-right"
    );
    map.addControl(
      new maptilersdk.NavigationControl({ showCompass: false }),
      "bottom-right"
    );

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Build / update markers when listings change
  const buildMarkers = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove markers no longer in results
    const newIds = new Set(listings.map((l) => l.id));
    markersRef.current.forEach((marker, id) => {
      if (!newIds.has(id)) {
        marker.remove();
        markersRef.current.delete(id);
      }
    });

    listings.forEach((listing) => {
      if (markersRef.current.has(listing.id)) return;

      const el = document.createElement("div");
      el.dataset.listingId = listing.id;
      el.style.cssText = `
        padding: 5px 10px;
        background: #0a0a0a;
        border: 1px solid #c9a96e;
        color: #c9a96e;
        font-family: Georgia, serif;
        font-size: 12px;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.15s;
        user-select: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      `;
      el.textContent = formatPrice(listing.listPrice);

      el.addEventListener("mouseenter", () => {
        if (el.dataset.listingId !== activeListing) {
          el.style.background = "#1a1a1a";
          el.style.borderColor = "#e0c080";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (el.dataset.listingId !== activeListing) {
          el.style.background = "#0a0a0a";
          el.style.borderColor = "#c9a96e";
          el.style.transform = "scale(1)";
        }
      });
      el.addEventListener("click", () => onListingClick(listing.id));

      const marker = new maptilersdk.Marker({ element: el, anchor: "bottom" })
        .setLngLat([listing.lng, listing.lat])
        .addTo(map);

      markersRef.current.set(listing.id, marker);
    });
  }, [listings, activeListing, onListingClick]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (map.isStyleLoaded()) {
      buildMarkers();
    } else {
      map.once("load", buildMarkers);
    }
  }, [buildMarkers]);

  // Highlight active marker + fly to it
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement();
      if (id === activeListing) {
        el.style.background = "#c9a96e";
        el.style.color = "#0a0a0a";
        el.style.borderColor = "#c9a96e";
        el.style.transform = "scale(1.1)";
        el.style.zIndex = "10";
      } else {
        el.style.background = "#0a0a0a";
        el.style.color = "#c9a96e";
        el.style.borderColor = "#c9a96e";
        el.style.transform = "scale(1)";
        el.style.zIndex = "1";
      }
    });

    if (activeListing) {
      const listing = listings.find((l) => l.id === activeListing);
      if (listing && mapRef.current) {
        mapRef.current.flyTo({
          center: [listing.lng, listing.lat],
          zoom: 13,
          duration: 800,
          essential: true,
        });
      }
    } else if (mapRef.current) {
      mapRef.current.flyTo({
        center: SOUTH_FL_CENTER,
        zoom: 9.5,
        duration: 800,
      });
    }
  }, [activeListing, listings]);

  return (
    <div style={{ flex: 1, position: "relative" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* Nautical overlay toggle — Phase 2 */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          padding: "8px 14px",
          background: "rgba(10,10,10,0.85)",
          border: "1px solid rgba(201,169,110,0.2)",
          color: "rgba(240,230,208,0.4)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "monospace",
          backdropFilter: "blur(4px)",
        }}
      >
        ⚓ Nautical Overlay — Coming Soon
      </div>

      {/* No results */}
      {listings.length === 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(10,10,10,0.9)",
              border: "1px solid rgba(201,169,110,0.2)",
              padding: "32px 40px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>⚓</div>
            <p
              style={{
                color: "#f0e6d0",
                fontFamily: "Georgia, serif",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              No properties match your vessel profile.
            </p>
            <p
              style={{
                color: "rgba(240,230,208,0.4)",
                fontSize: "0.8rem",
                fontFamily: "monospace",
              }}
            >
              Try adjusting your filters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
