"use client";

import { SearchFilters } from "@/types/listing";

const AREAS = [
  "Palm Beach",
  "Jupiter & Tequesta",
  "North Palm Beach",
  "Palm Beach Gardens",
  "Boca Raton",
  "Highland Beach",
  "Manalapan",
  "Fort Lauderdale",
  "Lighthouse Point",
];

const PRICE_OPTIONS = [
  { label: "Any", value: 0 },
  { label: "Under $3M", value: 3_000_000 },
  { label: "Under $5M", value: 5_000_000 },
  { label: "Under $10M", value: 10_000_000 },
  { label: "Under $20M", value: 20_000_000 },
  { label: "Under $35M", value: 35_000_000 },
];

const WATER_TYPES = [
  { id: "ocean", label: "Ocean" },
  { id: "intracoastal", label: "Intracoastal" },
  { id: "deep_canal", label: "Deep Canal" },
  { id: "bay", label: "Bay" },
  { id: "river", label: "River" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "rgba(240,230,208,0.35)",
        fontSize: "9px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginBottom: "10px",
        marginTop: "20px",
      }}
    >
      {children}
    </p>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        marginBottom: "8px",
      }}
    >
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: "32px",
          height: "18px",
          background: checked ? "#c9a96e" : "rgba(255,255,255,0.1)",
          borderRadius: "9px",
          position: "relative",
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: checked ? "16px" : "2px",
            width: "14px",
            height: "14px",
            background: "#0a0a0a",
            borderRadius: "50%",
            transition: "left 0.2s",
          }}
        />
      </div>
      <span style={{ color: "rgba(240,230,208,0.7)", fontSize: "0.8rem" }}>
        {label}
      </span>
    </label>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span style={{ color: "rgba(240,230,208,0.6)", fontSize: "0.75rem" }}>
          {label}
        </span>
        <span
          style={{
            color: value > 0 ? "#c9a96e" : "rgba(240,230,208,0.25)",
            fontSize: "0.75rem",
            fontFamily: "monospace",
          }}
        >
          {value === 0 ? "Any" : `${value} ${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#c9a96e" }}
      />
    </div>
  );
}

function ChipGroup({
  options,
  selected,
  onToggle,
}: {
  options: { id: string; label: string }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {options.map((o) => {
        const active = selected.includes(o.id);
        return (
          <button
            key={o.id}
            onClick={() => onToggle(o.id)}
            style={{
              padding: "4px 12px",
              border: active
                ? "1px solid #c9a96e"
                : "1px solid rgba(255,255,255,0.1)",
              background: active ? "rgba(201,169,110,0.12)" : "transparent",
              color: active ? "#c9a96e" : "rgba(240,230,208,0.5)",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

interface Props {
  filters: SearchFilters;
  onChange: (f: SearchFilters) => void;
  resultCount: number;
  onClear: () => void;
}

export default function FilterPanel({ filters, onChange, resultCount, onClear }: Props) {
  function set<K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) {
    onChange({ ...filters, [key]: value });
  }

  function toggleArr(key: "waterAccessTypes" | "areas", val: string) {
    const arr = filters[key];
    onChange({
      ...filters,
      [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
    });
  }

  const hasFilters =
    filters.vesselLengthFt > 0 ||
    filters.vesselDraftFt > 0 ||
    filters.noFixedBridges ||
    filters.minWaterDepthFt > 0 ||
    filters.waterAccessTypes.length > 0 ||
    filters.dockRequired ||
    filters.boatLiftRequired ||
    filters.priceMax > 0 ||
    filters.bedroomsMin > 0 ||
    filters.areas.length > 0;

  return (
    <div
      style={{
        width: "300px",
        flexShrink: 0,
        background: "#0d0d0d",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 20px 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingBottom: "16px",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                color: "#f0e6d0",
              }}
            >
              {resultCount}
            </span>
            <span
              style={{
                color: "rgba(240,230,208,0.4)",
                fontSize: "0.75rem",
                marginLeft: "6px",
                fontFamily: "monospace",
              }}
            >
              properties
            </span>
          </div>
          {hasFilters && (
            <button
              onClick={onClear}
              style={{
                background: "none",
                border: "none",
                color: "#c9a96e",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Scrollable filters */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 20px" }}>

        {/* Vessel */}
        <SectionLabel>Your Vessel</SectionLabel>
        <SliderRow
          label="Vessel length (LOA)"
          value={filters.vesselLengthFt}
          min={0} max={150} step={5} unit="ft"
          onChange={(v) => set("vesselLengthFt", v)}
        />
        <SliderRow
          label="Draft"
          value={filters.vesselDraftFt}
          min={0} max={15} step={0.5} unit="ft"
          onChange={(v) => set("vesselDraftFt", v)}
        />
        <SliderRow
          label="Min water depth at dock"
          value={filters.minWaterDepthFt}
          min={0} max={15} step={0.5} unit="ft"
          onChange={(v) => set("minWaterDepthFt", v)}
        />

        {/* Access */}
        <SectionLabel>Water Access</SectionLabel>
        <ChipGroup
          options={WATER_TYPES}
          selected={filters.waterAccessTypes}
          onToggle={(id) => toggleArr("waterAccessTypes", id)}
        />
        <div style={{ marginTop: "12px" }}>
          <Toggle
            label="No fixed bridges"
            checked={filters.noFixedBridges}
            onChange={(v) => set("noFixedBridges", v)}
          />
        </div>

        {/* Dockage */}
        <SectionLabel>Dockage</SectionLabel>
        <Toggle
          label="On-property dock required"
          checked={filters.dockRequired}
          onChange={(v) => set("dockRequired", v)}
        />
        <Toggle
          label="Boat lift required"
          checked={filters.boatLiftRequired}
          onChange={(v) => set("boatLiftRequired", v)}
        />

        {/* Price */}
        <SectionLabel>Price</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {PRICE_OPTIONS.map((p) => (
            <button
              key={p.value}
              onClick={() => set("priceMax", p.value)}
              style={{
                padding: "4px 10px",
                border: filters.priceMax === p.value
                  ? "1px solid #c9a96e"
                  : "1px solid rgba(255,255,255,0.1)",
                background: filters.priceMax === p.value
                  ? "rgba(201,169,110,0.12)"
                  : "transparent",
                color: filters.priceMax === p.value
                  ? "#c9a96e"
                  : "rgba(240,230,208,0.5)",
                fontSize: "10px",
                fontFamily: "monospace",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Bedrooms */}
        <SectionLabel>Min Bedrooms</SectionLabel>
        <div style={{ display: "flex", gap: "6px" }}>
          {[0, 3, 4, 5, 6, 7].map((b) => (
            <button
              key={b}
              onClick={() => set("bedroomsMin", b)}
              style={{
                padding: "4px 10px",
                border: filters.bedroomsMin === b
                  ? "1px solid #c9a96e"
                  : "1px solid rgba(255,255,255,0.1)",
                background: filters.bedroomsMin === b
                  ? "rgba(201,169,110,0.12)"
                  : "transparent",
                color: filters.bedroomsMin === b
                  ? "#c9a96e"
                  : "rgba(240,230,208,0.5)",
                fontSize: "10px",
                fontFamily: "monospace",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {b === 0 ? "Any" : b === 7 ? "7+" : b}
            </button>
          ))}
        </div>

        {/* Areas */}
        <SectionLabel>Area</SectionLabel>
        <ChipGroup
          options={AREAS.map((a) => ({ id: a, label: a }))}
          selected={filters.areas}
          onToggle={(id) => toggleArr("areas", id)}
        />
      </div>
    </div>
  );
}
