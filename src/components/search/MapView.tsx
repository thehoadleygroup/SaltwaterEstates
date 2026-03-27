"use client";

import { useEffect, useRef, useCallback, useState } from "react";
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

// ── NAUTICAL LAYER IDs ────────────────────────────────────────────────────────
const SEAMARK_SOURCE  = "openseamap-source";
const SEAMARK_LAYER   = "openseamap-layer";
const NOAA_SOURCE     = "noaa-rnc-source";
const NOAA_LAYER      = "noaa-rnc-layer";

export default function MapView({ listings, activeListing, onListingClick }: Props) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mapRef        = useRef<maptilersdk.Map | null>(null);
  const markersRef    = useRef<Map<string, maptilersdk.Marker>>(new Map());
  const [nautical, setNautical]       = useState(false);
  const [mapReady, setMapReady]       = useState(false);
  const [layerError, setLayerError]   = useState(false);

  // ── INIT MAP ────────────────────────────────────────────────────────────────
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

    map.on("load", () => setMapReady(true));

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  // ── NAUTICAL OVERLAY TOGGLE ─────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    if (nautical) {
      setLayerError(false);
      try {
        // ── NOAA Raster Nautical Charts (RNC) — public domain ─────────────
        if (!map.getSource(NOAA_SOURCE)) {
          map.addSource(NOAA_SOURCE, {
            type: "raster",
            tiles: [
              "https://tileservice.charts.noaa.gov/tiles/50000_1/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution: "NOAA Office of Coast Survey",
            minzoom: 4,
            maxzoom: 16,
          });
        }
        if (!map.getLayer(NOAA_LAYER)) {
          map.addLayer({
            id: NOAA_LAYER,
            type: "raster",
            source: NOAA_SOURCE,
            paint: { "raster-opacity": 0.72 },
          });
        }

        // ── OpenSeaMap Seamark overlay — navigation marks, buoys, lights ──
        if (!map.getSource(SEAMARK_SOURCE)) {
          map.addSource(SEAMARK_SOURCE, {
            type: "raster",
            tiles: [
              "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution: "© OpenSeaMap contributors",
            minzoom: 9,
            maxzoom: 18,
          });
        }
        if (!map.getLayer(SEAMARK_LAYER)) {
          map.addLayer({
            id: SEAMARK_LAYER,
            type: "raster",
            source: SEAMARK_SOURCE,
            paint: { "raster-opacity": 0.95 },
          });
        }
      } catch (err) {
        console.warn("Nautical layer error:", err);
        setLayerError(true);
        setNautical(false);
      }
    } else {
      // ── Remove layers cleanly ────────────────────────────────────────────
      [SEAMARK_LAYER, NOAA_LAYER].forEach((id) => {
        if (map.getLayer(id)) map.removeLayer(id);
      });
      [SEAMARK_SOURCE, NOAA_SOURCE].forEach((id) => {
        if (map.getSource(id)) map.removeSource(id);
      });
    }
  }, [nautical, mapReady]);

  // ── MARKERS ──────────────────────────────────────────────────────────────────
  const buildMarkers = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

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

  // ── ACTIVE LISTING HIGHLIGHT + FLY TO ────────────────────────────────────────
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

  // ── RENDER ───────────────────────────────────────────────────────────────────
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* ── NAUTICAL TOGGLE ─────────────────────────────────────────────── */}
      <button
        onClick={() => setNautical((v) => !v)}
        disabled={!mapReady}
        aria-label={nautical ? "Disable nautical chart overlay" : "Enable nautical chart overlay"}
        aria-pressed={nautical}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          padding: "8px 14px",
          background: nautical ? "#c9a96e" : "rgba(10,10,10,0.88)",
          border: `1px solid ${nautical ? "#c9a96e" : "rgba(201,169,110,0.35)"}`,
          color: nautical ? "#0a0a0a" : "rgba(240,230,208,0.7)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "monospace",
          backdropFilter: "blur(4px)",
          cursor: mapReady ? "pointer" : "default",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "7px",
          opacity: mapReady ? 1 : 0.4,
        }}
      >
        <span style={{ fontSize: "13px" }}>⚓</span>
        {nautical ? "Nautical On" : "Nautical Chart"}
      </button>

      {/* ── NAUTICAL LEGEND ─────────────────────────────────────────────── */}
      {nautical && !layerError && (
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "16px",
            padding: "10px 14px",
            background: "rgba(10,10,10,0.88)",
            border: "1px solid rgba(201,169,110,0.2)",
            backdropFilter: "blur(4px)",
            fontSize: "10px",
            fontFamily: "monospace",
            letterSpacing: "0.12em",
            lineHeight: "1.8",
          }}
        >
          <p style={{ color: "#c9a96e", marginBottom: "4px", letterSpacing: "0.2em" }}>
            CHART DATA
          </p>
          <p style={{ color: "rgba(240,230,208,0.5)" }}>NOAA Raster Nautical Charts</p>
          <p style={{ color: "rgba(240,230,208,0.5)" }}>OpenSeaMap Navigation Marks</p>
          <p style={{ color: "rgba(240,230,208,0.3)", marginTop: "6px", fontSize: "9px" }}>
            Depths · Channels · Buoys · Hazards
          </p>
        </div>
      )}

      {/* ── LAYER ERROR NOTICE ───────────────────────────────────────────── */}
      {layerError && (
        <div
          style={{
            position: "absolute",
            top: "52px",
            left: "16px",
            padding: "8px 14px",
            background: "rgba(10,10,10,0.88)",
            border: "1px solid rgba(201,169,110,0.15)",
            color: "rgba(240,230,208,0.4)",
            fontSize: "10px",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
            backdropFilter: "blur(4px)",
          }}
        >
          Chart tiles unavailable — try again
        </div>
      )}

      {/* ── NO RESULTS ───────────────────────────────────────────────────── */}
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
            <p style={{ color: "#f0e6d0", fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "8px" }}>
              No properties match your vessel profile.
            </p>
            <p style={{ color: "rgba(240,230,208,0.4)", fontSize: "0.8rem", fontFamily: "monospace" }}>
              Try adjusting your filters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
