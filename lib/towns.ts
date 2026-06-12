export type Town = {
  slug: string
  name: string
  county: "Norfolk" | "Plymouth"
  zips: string[]
  areas: string[]
  housingNote: string
  systemsNote: string
  nearby: string[]
}

export const TOWNS: Town[] = [
  {
    slug: "quincy",
    name: "Quincy",
    county: "Norfolk",
    zips: ["02169", "02170", "02171"],
    areas: ["Quincy Center", "Wollaston", "North Quincy", "Houghs Neck", "Squantum", "Marina Bay", "West Quincy"],
    housingNote:
      "Quincy's housing stock leans older — triple-deckers and pre-war single-families where original galvanized supply lines and cast-iron drains are still common and prone to corrosion, low pressure, and slow drains.",
    systemsNote:
      "Most of Quincy is on city water and sewer, so main line clogs, sewer lateral root intrusion, and aging shutoff valves are the issues we see most often.",
    nearby: ["braintree", "milton", "weymouth"],
  },
  {
    slug: "braintree",
    name: "Braintree",
    county: "Norfolk",
    zips: ["02184"],
    areas: ["Braintree Center", "South Braintree", "East Braintree", "Braintree Highlands", "Five Corners"],
    housingNote:
      "Braintree is full of postwar capes and colonials where the original copper and cast-iron systems are now 50+ years old — we regularly replace corroded drain stacks and failing original shutoff valves here.",
    systemsNote:
      "Braintree homes are largely on municipal water and sewer; water heaters working against winter ground temperatures tend to fail around the 10-year mark.",
    nearby: ["quincy", "weymouth", "holbrook"],
  },
  {
    slug: "weymouth",
    name: "Weymouth",
    county: "Norfolk",
    zips: ["02188", "02189", "02190", "02191"],
    areas: ["North Weymouth", "East Weymouth", "South Weymouth", "Jackson Square", "Columbian Square"],
    housingNote:
      "Weymouth has one of the largest postwar housing inventories on the South Shore — original 1950s–60s plumbing is reaching end of life, so repiping sections, replacing corroded traps, and clearing aging drains are everyday work for us here.",
    systemsNote:
      "Weymouth runs on town water and sewer in most neighborhoods; recurring main line clogs and water heater replacements are our most common calls.",
    nearby: ["quincy", "braintree", "hingham"],
  },
  {
    slug: "hingham",
    name: "Hingham",
    county: "Plymouth",
    zips: ["02043"],
    areas: ["Hingham Square", "Crow Point", "World's End", "South Hingham", "Hingham Harbor"],
    housingNote:
      "Hingham mixes genuinely antique homes near the Square with newer construction — older homes often hide original piping behind plaster walls, which makes careful leak detection and surgical pipe replacement essential.",
    systemsNote:
      "Coastal exposure means harbor-side homes face hard freezes in winter; we handle frozen pipe prevention, burst pipe repair, and seasonal inspections across Hingham.",
    nearby: ["weymouth", "cohasset", "norwell", "hull"],
  },
  {
    slug: "hull",
    name: "Hull",
    county: "Plymouth",
    zips: ["02045"],
    areas: ["Nantasket Beach", "Allerton", "Pemberton Point", "Kenberma", "Hull Village"],
    housingNote:
      "Hull's peninsula homes take the full force of salt air and nor'easters — exterior hose bibs, exposed supply lines, and water heaters corrode faster here than anywhere else we serve.",
    systemsNote:
      "Many Hull cottages were converted to year-round living, and their plumbing wasn't always upgraded to match; winterization gaps cause a spike in burst pipes every cold snap.",
    nearby: ["hingham", "cohasset"],
  },
  {
    slug: "cohasset",
    name: "Cohasset",
    county: "Norfolk",
    zips: ["02025"],
    areas: ["Cohasset Village", "Sandy Beach", "Black Rock", "Beechwood"],
    housingNote:
      "Cohasset's older estates and village homes sit on granite ledge — drain and sewer lines routed around ledge develop bellies and clogs, and we frequently camera-inspect lines here before recommending repairs.",
    systemsNote:
      "Parts of Cohasset combine town water with private septic, so we coordinate drain work carefully to protect septic systems while clearing blockages.",
    nearby: ["hingham", "scituate", "hull"],
  },
  {
    slug: "scituate",
    name: "Scituate",
    county: "Plymouth",
    zips: ["02066"],
    areas: ["Scituate Harbor", "Minot", "Humarock", "North Scituate", "Greenbush"],
    housingNote:
      "Scituate takes a beating from coastal storms — after every nor'easter we get calls for flooded basements, failed sump tie-ins, and storm-driven drainage backups, especially around Minot and Humarock.",
    systemsNote:
      "Coastal homes here need proactive winterization; we also see heavy root intrusion in older sewer laterals near the Harbor.",
    nearby: ["cohasset", "norwell", "marshfield"],
  },
  {
    slug: "norwell",
    name: "Norwell",
    county: "Plymouth",
    zips: ["02061"],
    areas: ["Norwell Center", "Assinippi", "Queen Anne's Corner", "Church Hill"],
    housingNote:
      "Norwell's larger-lot homes mostly run on private septic systems, so drain problems need a different playbook — we clear blockages without flooding leach fields and flag septic-side issues before they become failures.",
    systemsNote:
      "Some Norwell neighborhoods still use private wells; pressure tank issues, sediment in fixtures, and iron staining are common calls here.",
    nearby: ["hingham", "hanover", "scituate", "rockland"],
  },
  {
    slug: "hanover",
    name: "Hanover",
    county: "Plymouth",
    zips: ["02339"],
    areas: ["Hanover Center", "West Hanover", "North Hanover", "Assinippi"],
    housingNote:
      "Hanover boomed in the 1980s and 90s, and those first-generation systems — original water heaters, polybutylene-era piping, builder-grade fixtures — are all reaching replacement age at the same time.",
    systemsNote:
      "Most of Hanover is on town water with private septic, so we focus on supply-side repairs and septic-safe drain maintenance.",
    nearby: ["norwell", "rockland", "pembroke", "hanson"],
  },
  {
    slug: "rockland",
    name: "Rockland",
    county: "Plymouth",
    zips: ["02370"],
    areas: ["Rockland Center", "North Rockland"],
    housingNote:
      "Rockland's compact older homes often still carry their original cast-iron drain stacks — when they rot through, we replace sections cleanly and bring the connections up to code.",
    systemsNote:
      "Rockland is on municipal water and sewer; aging laterals and undersized older drain lines drive most of our calls in town.",
    nearby: ["abington", "hanover", "norwell", "whitman"],
  },
  {
    slug: "abington",
    name: "Abington",
    county: "Plymouth",
    zips: ["02351"],
    areas: ["Abington Center", "North Abington"],
    housingNote:
      "Abington mixes older capes with newer infill construction — we handle everything from century-old drain lines in the older stock to warranty-age fixture issues in the new builds.",
    systemsNote:
      "Town water and sewer serve most of Abington; hard-working water heaters and recurring kitchen line clogs are the most frequent calls.",
    nearby: ["rockland", "whitman", "holbrook"],
  },
  {
    slug: "marshfield",
    name: "Marshfield",
    county: "Plymouth",
    zips: ["02050"],
    areas: ["Brant Rock", "Green Harbor", "Ocean Bluff", "Rexhame", "Marshfield Hills", "Marshfield Center"],
    housingNote:
      "Marshfield's beach neighborhoods are full of cottages converted to year-round homes — seasonal water shutoffs, under-insulated crawl spaces, and exposed supply lines make winterization and burst-pipe response a big part of our work here.",
    systemsNote:
      "Coastal flooding around Brant Rock and Green Harbor stresses drainage systems; we repair storm-damaged lines and install backflow protection.",
    nearby: ["scituate", "duxbury", "pembroke"],
  },
  {
    slug: "duxbury",
    name: "Duxbury",
    county: "Plymouth",
    zips: ["02332"],
    areas: ["Snug Harbor", "Duxbury Beach", "Island Creek", "Millbrook", "Tinkertown"],
    housingNote:
      "Duxbury's antique homes near Snug Harbor hide original plumbing behind historic finishes — our leak detection work here is about finding the problem without tearing up irreplaceable woodwork and plaster.",
    systemsNote:
      "Duxbury relies heavily on private septic; we keep drain cleaning septic-safe and flag failing components early, and coastal homes get hit hard by hard freezes.",
    nearby: ["marshfield", "kingston", "pembroke"],
  },
  {
    slug: "pembroke",
    name: "Pembroke",
    county: "Plymouth",
    zips: ["02359"],
    areas: ["North Pembroke", "Bryantville", "Pembroke Center"],
    housingNote:
      "Pembroke's pond-side homes around the Monponsett and Furnace ponds often run on wells — iron and sediment chew through fixtures and water heaters faster, so filtration-aware repairs matter here.",
    systemsNote:
      "Private wells and septic dominate Pembroke; pressure tank troubleshooting, well-pump-side plumbing, and septic-safe drain work are our staples in town.",
    nearby: ["hanover", "duxbury", "kingston", "hanson", "marshfield"],
  },
  {
    slug: "kingston",
    name: "Kingston",
    county: "Plymouth",
    zips: ["02364"],
    areas: ["Kingston Center", "Rocky Nook", "Silver Lake", "Indian Pond"],
    housingNote:
      "Kingston splits between a historic town center and newer subdivisions — root intrusion in older clay sewer lines near the center, builder-grade fixture failures in the newer neighborhoods.",
    systemsNote:
      "Kingston mixes town water with wells and septic depending on the neighborhood; we adapt drain and supply work to whichever system the home runs on.",
    nearby: ["duxbury", "plymouth", "pembroke"],
  },
  {
    slug: "plymouth",
    name: "Plymouth",
    county: "Plymouth",
    zips: ["02360", "02362"],
    areas: ["Downtown Plymouth", "The Pinehills", "Manomet", "Cedarville", "West Plymouth", "North Plymouth"],
    housingNote:
      "Plymouth spans everything from 300-year-old downtown homes to brand-new construction in The Pinehills — antique piping and historic-home leak detection on one end, warranty-age systems and new fixture installs on the other.",
    systemsNote:
      "Plymouth is geographically the largest town in the state; outlying villages like Cedarville and Manomet often wait longest for plumbers, and we cover all of them.",
    nearby: ["kingston", "duxbury"],
  },
  {
    slug: "milton",
    name: "Milton",
    county: "Norfolk",
    zips: ["02186"],
    areas: ["Milton Village", "East Milton", "Milton Centre", "Blue Hills"],
    housingNote:
      "Milton's pre-war housing stock is beautiful and old — original brass and galvanized piping, tree-lined streets whose roots invade clay sewer laterals, and radiators that complicate supply-line work.",
    systemsNote:
      "Milton is on municipal water and sewer; sewer lateral root intrusion and corroded original supply lines drive most of our calls here.",
    nearby: ["quincy", "braintree"],
  },
  {
    slug: "holbrook",
    name: "Holbrook",
    county: "Norfolk",
    zips: ["02343"],
    areas: ["Holbrook Center", "Brookville"],
    housingNote:
      "Holbrook's modest postwar homes are workhorses — but their original water heaters, traps, and shutoff valves are decades past design life, and we replace a lot of all three in town.",
    systemsNote:
      "Holbrook is on town water and sewer; aging fixtures and recurring bathroom drain clogs are the most common reasons neighbors call us.",
    nearby: ["braintree", "abington", "weymouth"],
  },
  {
    slug: "whitman",
    name: "Whitman",
    county: "Plymouth",
    zips: ["02382"],
    areas: ["Whitman Center", "South Whitman"],
    housingNote:
      "Whitman's Victorian-era homes near the center have charm and century-old drain lines in equal measure — undersized, bellied, and patched over generations, they respond well to camera-guided cleaning and targeted replacement.",
    systemsNote:
      "Whitman runs on municipal water and sewer; old laterals and original cast-iron stacks are the recurring themes in our work here.",
    nearby: ["abington", "hanson", "rockland"],
  },
  {
    slug: "hanson",
    name: "Hanson",
    county: "Plymouth",
    zips: ["02341"],
    areas: ["Hanson Center", "Monponsett", "Bryantville"],
    housingNote:
      "Hanson's rural lots mostly run on private wells and septic — when pressure drops or water stains fixtures, the cause is usually on the supply side, and we troubleshoot pressure tanks, sediment, and well-side plumbing regularly here.",
    systemsNote:
      "With septic systems everywhere in Hanson, our drain work stays septic-safe, and we flag early warning signs before a backup becomes a yard excavation.",
    nearby: ["whitman", "pembroke", "hanover"],
  },
]

export function getTown(slug: string): Town | undefined {
  return TOWNS.find((t) => t.slug === slug)
}

export function townFaqs(town: Town): { question: string; answer: string }[] {
  return [
    {
      question: `Do you offer 24/7 emergency plumbing in ${town.name}, MA?`,
      answer: `Yes. Horizon Fix Plumbing answers emergency calls in ${town.name} around the clock, including nights, weekends, and holidays. For burst pipes, sewer backups, or major leaks, call +1 978 893 7728 and we will dispatch a licensed plumber right away.`,
    },
    {
      question: `What plumbing problems are most common in ${town.name}?`,
      answer: `${town.housingNote} ${town.systemsNote}`,
    },
    {
      question: `Which areas of ${town.name} do you serve?`,
      answer: `We serve all of ${town.name} (${town.zips.join(", ")}), including ${town.areas.join(", ")}. We also cover the surrounding South Shore towns, so we can usually reach you quickly.`,
    },
    {
      question: `How much does a plumber cost in ${town.name}, MA?`,
      answer: `We quote upfront, flat-rate pricing before any work begins in ${town.name} — no hourly surprises. Diagnosis fees are applied toward the repair when you proceed, and emergency visits are priced the same transparent way.`,
    },
  ]
}
