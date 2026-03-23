export interface Listing {
  // Identity
  id: string;
  mlsNumber: string;

  // Location
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  area: string;

  // Price
  listPrice: number;

  // Property
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSqft: number;
  yearBuilt: number;
  propertyType: "Single Family" | "Condo" | "Townhouse" | "Estate";

  // Waterfront
  waterfrontType: "Ocean" | "Intracoastal" | "Deep Canal" | "Bay" | "River";
  waterfrontFt: number; // feet of water frontage
  waterDepthFt: number; // depth at dock, mean low water
  noFixedBridges: boolean;
  inletDistanceMi: number; // miles to nearest inlet
  inletName: string;

  // Dockage
  hasDock: boolean;
  dockLengthFt: number;
  dockCovered: boolean;
  boatLift: boolean;
  numSlips: number;

  // Media
  photos: string[];
  virtualTour?: string;

  // Meta
  daysOnMarket: number;
  status: "Active" | "Pending" | "Sold";
}

export interface SearchFilters {
  // Vessel
  vesselLengthFt: number;
  vesselDraftFt: number;
  noFixedBridges: boolean;
  minWaterDepthFt: number;
  waterAccessTypes: string[];

  // Dockage
  dockRequired: boolean;
  boatLiftRequired: boolean;

  // Property
  priceMax: number;
  bedroomsMin: number;
  areas: string[];
}

export const DEFAULT_FILTERS: SearchFilters = {
  vesselLengthFt: 0,
  vesselDraftFt: 0,
  noFixedBridges: false,
  minWaterDepthFt: 0,
  waterAccessTypes: [],
  dockRequired: false,
  boatLiftRequired: false,
  priceMax: 0,
  bedroomsMin: 0,
  areas: [],
};
