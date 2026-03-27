export interface Area {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  boatingAccess: string;
  waterFeatures: string[];
  highlights: string[];
  notableCommunities: string[];
  priceRange: string;
  medianPrice: string;
  metaTitle: string;
  metaDescription: string;
  center: [number, number]; // [lng, lat]
  zoom: number;
}

export const AREAS: Area[] = [
  {
    slug: "palm-beach",
    name: "Palm Beach",
    tagline: "The pinnacle of South Florida waterfront living.",
    description:
      "Palm Beach Island is the most storied address in South Florida — a barrier island flanked by the Atlantic Ocean to the east and the Intracoastal Waterway to the west. Estates here define generational wealth. The market is characterized by direct oceanfront mansions, deep-water Intracoastal docks, and some of the most significant architectural properties in the United States.",
    boatingAccess:
      "Direct Intracoastal Waterway access via private docks on the western side of the island. No fixed bridges on the southern end. Lake Worth Lagoon provides protected deep-water navigation. Ocean access via Boynton Inlet (south) or Lake Worth Inlet (north).",
    waterFeatures: ["Atlantic Ocean", "Intracoastal Waterway", "Lake Worth Lagoon"],
    highlights: [
      "No income tax — Florida domicile saves UHNW families millions annually",
      "Direct ICW dockage on most waterfront estates — protected, deep-water",
      "Ocean-to-lake lots offer both sunrise and sunset water views",
      "Proximity to Palm Beach International Airport — 10 minutes",
    ],
    notableCommunities: [
      "North End",
      "Mid-Island",
      "Estate Section",
      "South End",
      "In-Town",
    ],
    priceRange: "$2M – $200M+",
    medianPrice: "$8.5M",
    metaTitle: "Palm Beach Waterfront Homes for Sale | Vessel-Matched Listings | SaltwaterEstates",
    metaDescription:
      "Find Palm Beach waterfront estates matched to your vessel. Deep-water ICW docks, ocean access, and some of Florida's most significant properties. Filtered by draft, bridge clearance, and inlet access.",
    center: [-80.037, 26.705],
    zoom: 12.5,
  },
  {
    slug: "manalapan",
    name: "Manalapan",
    tagline: "Seven-tenths of a mile of the most exclusive oceanfront in Florida.",
    description:
      "Manalapan is among the most exclusive municipalities in the United States — a small town of fewer than 400 residents occupying a sliver of barrier island between the Atlantic and Lake Worth Lagoon. Its ocean-to-lake estates regularly transact above $20 million. Privacy, security, and deep-water access define this enclave. Properties here are rarely listed publicly.",
    boatingAccess:
      "Direct ocean-to-lake lots provide both Atlantic exposure and protected ICW dockage. Boynton Inlet provides ocean access with no fixed bridge obstacles. Water depths at private docks accommodate vessels to 90ft+ in many locations.",
    waterFeatures: ["Atlantic Ocean", "Lake Worth Lagoon", "Boynton Inlet"],
    highlights: [
      "Ocean-to-lake lots — private beach on one side, deep-water dock on the other",
      "One of the lowest-density luxury markets in Florida — extreme privacy",
      "Gated town with 24-hour police presence — unmatched security",
      "Boynton Inlet ocean access — no fixed bridges restricting vessel size",
    ],
    notableCommunities: [
      "Ocean Boulevard estates",
      "Lake Worth Lagoon waterfront",
      "Ocean-to-lake parcels",
    ],
    priceRange: "$5M – $80M+",
    medianPrice: "$18M",
    metaTitle: "Manalapan Waterfront Estates | Ultra-Luxury Ocean-to-Lake Properties | SaltwaterEstates",
    metaDescription:
      "Manalapan oceanfront and ocean-to-lake estates matched to your vessel. One of Florida's most exclusive addresses. Deep-water ICW dockage, Boynton Inlet ocean access. Off-market opportunities available.",
    center: [-80.052, 26.558],
    zoom: 13.5,
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    tagline: "A boater's paradise — ocean access, deep water, and no compromises.",
    description:
      "Jupiter is one of the premier boating communities in South Florida, offering direct Atlantic access via Jupiter Inlet with no fixed bridges from the Intracoastal. The Loxahatchee River weaves through some of the most spectacular waterfront estates in Palm Beach County. World-class sport fishing, a thriving marina district, and a growing luxury residential market make Jupiter a destination for serious boaters.",
    boatingAccess:
      "Jupiter Inlet offers direct, no-fixed-bridge ocean access from the ICW — one of the most boater-friendly inlets on the East Coast. The Loxahatchee River provides fresh and brackish water navigation westward. Multiple marinas offer full-service facilities. Deep-water lots accommodate large sportfishing and sailing vessels.",
    waterFeatures: [
      "Jupiter Inlet (no fixed bridges)",
      "Intracoastal Waterway",
      "Loxahatchee River",
      "Atlantic Ocean",
    ],
    highlights: [
      "Jupiter Inlet — one of the cleanest, deepest inlets on Florida's east coast",
      "No fixed bridges from ICW to ocean via Jupiter Inlet",
      "World-class offshore fishing — Gulf Stream runs within 3 miles of shore",
      "Admirals Cove and Jonathan's Landing — two of PBC's top boating communities",
    ],
    notableCommunities: [
      "Admirals Cove",
      "Jonathan's Landing",
      "Loxahatchee River Road",
      "Jupiter Inlet Colony",
      "Rialto",
      "Frenchman's Creek",
    ],
    priceRange: "$800K – $25M+",
    medianPrice: "$2.8M",
    metaTitle: "Jupiter Waterfront Homes for Sale | No Fixed Bridge Ocean Access | SaltwaterEstates",
    metaDescription:
      "Jupiter waterfront properties with direct ocean access via Jupiter Inlet — no fixed bridges. Loxahatchee River estates, Admirals Cove listings. Vessel-matched search by draft, beam, and clearance.",
    center: [-80.094, 26.934],
    zoom: 12,
  },
  {
    slug: "juno-beach",
    name: "Juno Beach",
    tagline: "Understated oceanfront — between Jupiter and Palm Beach Gardens.",
    description:
      "Juno Beach occupies a quiet stretch of Palm Beach County coastline north of Palm Beach Gardens, offering direct Atlantic frontage and protected Intracoastal access. The market here is characterized by oceanfront estates, ICW-front properties, and a tight-knit coastal community. Proximity to Jupiter Inlet gives boaters no-fixed-bridge ocean access minutes from their dock.",
    boatingAccess:
      "Intracoastal Waterway runs the length of Juno Beach with multiple deep-water lots available. Jupiter Inlet to the north provides no-fixed-bridge ocean access. PGA Marina and Soverel Harbour Marina are minutes away. Favorable water depths on ICW lots accommodate mid-size to large vessels.",
    waterFeatures: ["Atlantic Ocean", "Intracoastal Waterway"],
    highlights: [
      "Direct Atlantic oceanfront — some of the cleanest beaches in South Florida",
      "Minutes from Jupiter Inlet — no fixed bridge ocean access",
      "Less developed than Palm Beach — larger lot sizes, more privacy",
      "Strong appreciation trajectory — undervalued relative to neighboring markets",
    ],
    notableCommunities: [
      "Juno Beach oceanfront",
      "Juno Isles",
      "ICW-front estates",
    ],
    priceRange: "$1M – $15M+",
    medianPrice: "$2.2M",
    metaTitle: "Juno Beach Waterfront Homes for Sale | Oceanfront & ICW Properties | SaltwaterEstates",
    metaDescription:
      "Juno Beach oceanfront and Intracoastal waterfront homes matched to your vessel. Palm Beach County coastal living with easy ocean access. Vessel-filtered search by draft and bridge clearance.",
    center: [-80.058, 26.879],
    zoom: 12.5,
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    tagline: "The cultural heart of Palm Beach County — on the water.",
    description:
      "West Palm Beach sits directly across the Intracoastal Waterway from Palm Beach Island, offering waterfront living at a compelling value relative to its neighbor. The downtown waterfront has transformed dramatically — luxury high-rises, a thriving marina district, and some of South Florida's most coveted historic neighborhoods. The ICW provides direct deep-water access and stunning views of the Palm Beach skyline.",
    boatingAccess:
      "Extensive ICW frontage throughout downtown and surrounding neighborhoods. Rybovich Superyacht Marina and the West Palm Beach Marina anchor a full-service boating infrastructure. Multiple ocean inlets within 20 minutes. Deep-water slips available for vessels to 200ft+ at Rybovich.",
    waterFeatures: [
      "Intracoastal Waterway",
      "Lake Worth Lagoon",
      "Rybovich Superyacht Marina",
    ],
    highlights: [
      "Direct ICW frontage — views across to Palm Beach Island",
      "Rybovich Marina — world-class superyacht service facility",
      "Historic neighborhoods: El Cid, Flamingo Park, South End",
      "CityPlace, Rosemary Square, waterfront dining — urban amenities",
    ],
    notableCommunities: [
      "El Cid",
      "Flamingo Park",
      "South End",
      "Prospect Park",
      "Downtown Waterfront",
      "Northwood",
    ],
    priceRange: "$500K – $15M+",
    medianPrice: "$1.4M",
    metaTitle: "West Palm Beach Waterfront Homes for Sale | ICW & Marina Properties | SaltwaterEstates",
    metaDescription:
      "West Palm Beach waterfront homes on the Intracoastal Waterway. Historic neighborhoods, downtown marina, vessel-matched listings. Filtered by draft, bridge clearance, and dock specifications.",
    center: [-80.053, 26.715],
    zoom: 12,
  },
  {
    slug: "palm-beach-gardens",
    name: "Palm Beach Gardens",
    tagline: "Luxury living where the ICW meets the PGA corridor.",
    description:
      "Palm Beach Gardens is one of the most affluent planned communities in South Florida, blending Intracoastal waterfront estates with championship golf, world-class retail at the Gardens Mall, and proximity to both Jupiter Inlet and Palm Beach International Airport. The waterfront corridor along the ICW features deep-water docks, newer construction, and some of the most livable luxury neighborhoods in the county.",
    boatingAccess:
      "Intracoastal Waterway access throughout the eastern corridor. PGA Marina provides full-service boat storage and services. Jupiter Inlet to the north and Palm Beach Inlet to the south offer dual ocean access options. ICW water depths accommodate most cruising and sport fishing vessels.",
    waterFeatures: [
      "Intracoastal Waterway",
      "PGA Marina",
      "Multiple tidal creeks",
    ],
    highlights: [
      "Dual ocean inlet access — Jupiter Inlet (north) and Palm Beach Inlet (south)",
      "PGA National Resort — world-class golf adjacent to waterfront living",
      "Palm Beach International Airport 15 minutes south",
      "Newer construction luxury market — larger lots than Palm Beach Island",
    ],
    notableCommunities: [
      "Frenchman's Reserve",
      "BallenIsles",
      "Mirasol",
      "Steeplechase",
      "Evergrene",
      "ICW-front estates",
    ],
    priceRange: "$700K – $20M+",
    medianPrice: "$1.9M",
    metaTitle: "Palm Beach Gardens Waterfront Homes for Sale | ICW & Golf Estates | SaltwaterEstates",
    metaDescription:
      "Palm Beach Gardens waterfront and luxury estate homes. ICW access, PGA Marina, dual ocean inlet options. Vessel-matched search for boating buyers. Draft, clearance, and dock filters.",
    center: [-80.098, 26.823],
    zoom: 12,
  },
  {
    slug: "north-palm-beach",
    name: "North Palm Beach",
    tagline: "Deep-water docks and a community built around the water.",
    description:
      "North Palm Beach was designed for boaters. The village is laced with deep-water canals, ICW-front estates, and marinas — all positioned between the ocean access of Jupiter Inlet to the north and Lake Worth Inlet to the south. The North Palm Beach Country Club anchors the community. This is an established waterfront market with a loyal following among serious boaters seeking true deep-water dockage.",
    boatingAccess:
      "Deep-water ICW frontage and canal systems throughout the village. Lake Worth Inlet provides ocean access with manageable fixed bridge considerations. North Palm Beach Marina offers full-service amenities. Canal lots provide direct dockage for boats to 60ft+ in many areas.",
    waterFeatures: [
      "Intracoastal Waterway",
      "Lake Worth Inlet",
      "Deep-water canal system",
      "North Palm Beach Marina",
    ],
    highlights: [
      "Village specifically designed around boating — canals in every neighborhood",
      "Lake Worth Inlet ocean access — 65ft fixed bridge clearance",
      "North Palm Beach Country Club — golf, tennis, marina membership",
      "Strong boating community culture — events, races, fishing tournaments",
    ],
    notableCommunities: [
      "Harbour Isles",
      "Old Port Cove",
      "North Palm Beach Country Club",
      "Prosperity Farms",
      "Canal-front estates",
    ],
    priceRange: "$600K – $12M+",
    medianPrice: "$1.6M",
    metaTitle: "North Palm Beach Waterfront Homes | Deep-Water Canal & ICW Properties | SaltwaterEstates",
    metaDescription:
      "North Palm Beach canal-front and ICW waterfront homes. Deep-water dockage, Lake Worth Inlet ocean access. Vessel-matched listings filtered by draft, beam, and bridge clearance.",
    center: [-80.065, 26.823],
    zoom: 12.5,
  },
  {
    slug: "gulf-stream",
    name: "Gulf Stream",
    tagline: "Florida's most exclusive oceanfront enclave.",
    description:
      "Gulf Stream is among the smallest and most exclusive municipalities in the United States — fewer than 900 residents, a strict architectural code, and one of the highest per-capita property values anywhere in Florida. Oceanfront estates here command a premium for their privacy, their architecture, and the irreplaceable nature of the land. The town maintains its character by design.",
    boatingAccess:
      "Intracoastal Waterway frontage on the western side of Gulf Stream's barrier island position. Boca Raton Inlet to the south and Boynton Inlet to the north provide ocean access. The ICW here is broad, deep, and uncrowded — consistent with the character of the community.",
    waterFeatures: ["Atlantic Ocean", "Intracoastal Waterway"],
    highlights: [
      "One of Florida's smallest and most exclusive municipalities",
      "Strict architectural code preserving estate character — no overdevelopment",
      "Oceanfront lots of irreplaceable size and frontage",
      "Immediate proximity to Delray Beach and Boca Raton amenities",
    ],
    notableCommunities: [
      "Gulf Stream oceanfront",
      "ICW-front estates",
      "Gulf Stream Shores",
    ],
    priceRange: "$3M – $40M+",
    medianPrice: "$9.2M",
    metaTitle: "Gulf Stream Waterfront Estates | Exclusive Oceanfront Properties | SaltwaterEstates",
    metaDescription:
      "Gulf Stream oceanfront and waterfront estates — one of Florida's most exclusive addresses. Vessel-matched listings with ICW dockage and ocean inlet access. Off-market opportunities available.",
    center: [-80.046, 26.507],
    zoom: 13,
  },
  {
    slug: "highland-beach",
    name: "Highland Beach",
    tagline: "Quiet oceanfront luxury between Boca Raton and Delray Beach.",
    description:
      "Highland Beach occupies a narrow barrier island between Delray Beach and Boca Raton — a town of roughly 4,000 residents where oceanfront and Intracoastal properties define the market entirely. The town is known for its high-rise oceanfront condominiums and single-family estate parcels, offering direct Atlantic exposure and ICW dockage in one of the most tranquil settings in South Florida.",
    boatingAccess:
      "Intracoastal Waterway fronts the entire western side of Highland Beach. Boca Raton Inlet to the south provides ocean access — 65ft fixed bridge clearance on SE Mizner Blvd. Boynton Inlet to the north as an alternative. Deep-water lots available for mid-size vessels on the ICW.",
    waterFeatures: ["Atlantic Ocean", "Intracoastal Waterway", "Boca Raton Inlet"],
    highlights: [
      "Ocean-to-ICW lots — dual water exposure in a quiet, low-density town",
      "Luxury high-rise oceanfront and single-family estate market",
      "Positioned between two of Florida's top luxury markets — Boca and Delray",
      "Small-town character with Boca Raton and Delray Beach minutes away",
    ],
    notableCommunities: [
      "Bel Lido Shores",
      "Highland Beach oceanfront",
      "ICW-front estates",
      "Boca Highland",
    ],
    priceRange: "$800K – $20M+",
    medianPrice: "$2.4M",
    metaTitle: "Highland Beach Waterfront Homes | Oceanfront & ICW Properties | SaltwaterEstates",
    metaDescription:
      "Highland Beach oceanfront condos and ICW waterfront estates between Boca Raton and Delray Beach. Vessel-matched listings, deep-water dockage, ocean inlet access.",
    center: [-80.063, 26.395],
    zoom: 13,
  },
  {
    slug: "delray-beach",
    name: "Delray Beach",
    tagline: "South Florida's most vibrant coastal city — with the waterfront to match.",
    description:
      "Delray Beach has evolved from a quiet coastal town into one of South Florida's most sought-after luxury markets, anchored by Atlantic Avenue's world-class dining and retail and bordered by both oceanfront estates and deep-water Intracoastal properties. The waterfront market spans from modest canal homes to multi-million dollar oceanfront estates, making Delray one of the most diverse and active luxury markets in Palm Beach County.",
    boatingAccess:
      "Intracoastal Waterway runs the length of Delray Beach with deep-water access throughout. Boynton Inlet to the north and Boca Raton Inlet to the south provide dual ocean access. Multiple marinas including Delray Harbor Club offer full-service amenities. Canal systems extend ICW access into inland neighborhoods.",
    waterFeatures: [
      "Atlantic Ocean",
      "Intracoastal Waterway",
      "Boynton Inlet",
      "Boca Raton Inlet",
      "Canal system",
    ],
    highlights: [
      "Atlantic Avenue — voted one of America's top main streets, walkable from waterfront",
      "Dual ocean inlet access — Boynton Inlet (north) and Boca Raton Inlet (south)",
      "Fastest-appreciating luxury market in PBC over the past 5 years",
      "Diverse inventory — oceanfront estates, ICW-front homes, canal properties",
    ],
    notableCommunities: [
      "Gulf Stream area",
      "Tropic Isle",
      "Seagate",
      "Delray Beach Country Club",
      "Ocean Ridge",
      "Casa Del Rey",
    ],
    priceRange: "$600K – $18M+",
    medianPrice: "$1.8M",
    metaTitle: "Delray Beach Waterfront Homes for Sale | Oceanfront & ICW Properties | SaltwaterEstates",
    metaDescription:
      "Delray Beach oceanfront and Intracoastal waterfront homes. Vessel-matched listings near Atlantic Avenue. Dual ocean inlet access, canal properties, deep-water dockage. Filtered by vessel specs.",
    center: [-80.064, 26.461],
    zoom: 12,
  },
  {
    slug: "boca-raton",
    name: "Boca Raton",
    tagline: "Southern Palm Beach County's crown jewel — waterfront and impeccably maintained.",
    description:
      "Boca Raton is the southernmost luxury market in Palm Beach County — a city that built its identity on Spanish Mediterranean architecture, immaculate streets, and deep-water waterfront estates. The Royal Palm Yacht & Country Club, The Sanctuary, and Boca Bay Colony represent the pinnacle of the local market. Boca Raton Inlet provides ocean access, and the ICW here is among the most navigable in South Florida.",
    boatingAccess:
      "Boca Raton Inlet provides ocean access with 65ft fixed bridge clearance on SE Mizner Blvd — accommodating most cruising vessels. The ICW through Boca runs deep and straight. Royal Palm Yacht & Country Club marina serves members with protected slips. Multiple additional marinas throughout the market.",
    waterFeatures: [
      "Boca Raton Inlet",
      "Intracoastal Waterway",
      "Lake Boca Raton",
      "Atlantic Ocean",
    ],
    highlights: [
      "Royal Palm Yacht & Country Club — one of Florida's top private yachting communities",
      "Boca Raton Resort & Club — historic Addison Mizner architecture",
      "65ft bridge clearance at Boca Inlet — accessible to most cruising vessels",
      "Highest-density luxury waterfront market in southern PBC",
    ],
    notableCommunities: [
      "Royal Palm Yacht & Country Club",
      "The Sanctuary",
      "Boca Bay Colony",
      "Les Jardins",
      "Woodfield Country Club",
      "Mizner Park area",
    ],
    priceRange: "$700K – $30M+",
    medianPrice: "$2.6M",
    metaTitle: "Boca Raton Waterfront Homes for Sale | Royal Palm Yacht Club & ICW Estates | SaltwaterEstates",
    metaDescription:
      "Boca Raton waterfront homes — Royal Palm Yacht Club, ICW-front estates, oceanfront condos. Vessel-matched listings by draft and bridge clearance. Boca Inlet ocean access.",
    center: [-80.085, 26.358],
    zoom: 12,
  },
  {
    slug: "wellington",
    name: "Wellington",
    tagline: "The equestrian capital of America — and a luxury market unlike any other.",
    description:
      "Wellington is the equestrian capital of the world — home to the Winter Equestrian Festival, the Global Dressage Festival, and the International Polo Club Palm Beach. The luxury market here is defined not by ocean and ICW frontage but by equestrian estates, polo fields, and lakefront properties. Wellington attracts a distinct UHNW buyer: international, athletic, and accustomed to a different standard of living.",
    boatingAccess:
      "Wellington is an inland community — the waterfront here is lakes, canals, and the C-51 canal system rather than ocean or ICW. Freshwater boating, kayaking, and paddleboarding are common. For saltwater boating, Palm Beach and the ICW are approximately 20 minutes east.",
    waterFeatures: [
      "Lake Wellington",
      "Equestrian canal system",
      "C-51 Canal",
      "Multiple community lakes",
    ],
    highlights: [
      "Winter Equestrian Festival — world's largest equestrian event, January–April",
      "International Polo Club Palm Beach — Sunday polo draws global UHNW audience",
      "Equestrian estates with private barns, arenas, and paddocks",
      "Distinct buyer profile — international, athletic, different from coastal market",
    ],
    notableCommunities: [
      "Palm Beach Polo & Country Club",
      "Mallet Hill",
      "Saddle Trail",
      "Paddock Park",
      "Equestrian Club Estates",
      "Versailles",
    ],
    priceRange: "$600K – $20M+",
    medianPrice: "$1.5M",
    metaTitle: "Wellington Equestrian Estates & Luxury Homes | Palm Beach County | SaltwaterEstates",
    metaDescription:
      "Wellington equestrian estates, polo properties, and lakefront luxury homes. Palm Beach County's equestrian capital. International Polo Club, Winter Equestrian Festival. Advisor-matched listings.",
    center: [-80.268, 26.659],
    zoom: 12,
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return AREAS.map((a) => a.slug);
}
