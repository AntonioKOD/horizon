export type ServicePage = {
  slug: string
  name: string
  headline: string
  title: string
  metaDescription: string
  intro: string
  image: string
  painPoints: string[]
  included: string[]
  faqs: { question: string; answer: string }[]
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    headline: "24/7 Emergency Plumber — South Shore MA",
    title: "Emergency Plumber South Shore MA | 24/7",
    metaDescription:
      "Burst pipe? Flooding? Sewer backup? Horizon Fix Plumbing answers 24/7 across the South Shore of Massachusetts. Call +1 978 893 7728 for immediate dispatch.",
    intro:
      "When water is pouring through your ceiling or backing up into your tub, every minute counts. Horizon Fix Plumbing dispatches licensed plumbers across the South Shore 24 hours a day — we answer the phone, guide you to the shutoff, and get a truck moving.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "Burst or frozen pipes flooding your home",
      "Sewage backing up into tubs and drains",
      "Water heater leaking or failed with no hot water",
      "Sump failure during a storm",
    ],
    included: [
      "Live answer and emergency shutoff guidance over the phone",
      "Rapid dispatch across the South Shore, day or night",
      "On-site diagnosis and upfront price before work begins",
      "Same-visit repair whenever parts allow",
      "Water damage prevention and cleanup guidance",
    ],
    faqs: [
      {
        question: "How fast can you get to my house in an emergency?",
        answer:
          "We dispatch from the South Shore and prioritize active water emergencies. While exact timing depends on your town and current call volume, we answer 24/7 and send the nearest available licensed plumber immediately — and we guide you to your main shutoff over the phone so damage stops before we arrive.",
      },
      {
        question: "What should I do while I wait for the plumber?",
        answer:
          "Shut off the water at the main valve (usually where the supply enters the basement), open a low faucet to drain pressure, and move belongings away from the water. If sewage is backing up, stop using all water in the house. Our dispatcher walks you through each step when you call.",
      },
      {
        question: "Do you charge extra for nights and weekends?",
        answer:
          "Emergency visits are quoted upfront before any work begins, the same flat-rate way as daytime calls. You approve the price first — there are no surprise hourly charges.",
      },
      {
        question: "Is a running toilet or dripping faucet an emergency?",
        answer:
          "Usually not — those can wait for a scheduled visit, which costs less. True emergencies are active leaks you can't stop, sewage backups, no water at all, or a leaking water heater. Not sure? Call us and we'll tell you honestly which one you have.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    headline: "Drain Cleaning & Clog Removal — South Shore MA",
    title: "Drain Cleaning South Shore MA",
    metaDescription:
      "Slow or blocked drains? Hydro-jetting, camera inspections, and main line cleaning across South Shore MA. Upfront pricing. Call +1 978 893 7728.",
    intro:
      "A drain that clogs once a year isn't bad luck — it's a line telling you something. We don't just snake the symptom; we camera-inspect, clear the real blockage, and show you exactly what's down there so it stops coming back.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "Kitchen sink backing up no matter what you pour down it",
      "Showers draining slower every month",
      "Gurgling toilets and sewer smells",
      "Main line clogs that keep coming back",
    ],
    included: [
      "Mechanical snaking for sinks, tubs, showers, and toilets",
      "Hydro-jetting for grease and scale in main lines",
      "Camera inspection with recorded video of your line",
      "Root cutting in sewer laterals",
      "Septic-safe methods for homes on private systems",
    ],
    faqs: [
      {
        question: "Why does my drain keep clogging after I snake it?",
        answer:
          "A snake punches a hole through the clog but leaves the buildup on the pipe walls — grease, scale, or roots close back in within months. Hydro-jetting scours the full pipe diameter, and a camera inspection confirms the line is actually clean. That's why our clearings last.",
      },
      {
        question: "Is hydro-jetting safe for old pipes?",
        answer:
          "We camera-inspect first on older lines. If the pipe is structurally sound, jetting is safe and far more effective than snaking. If we find a compromised section, we tell you before running the jetter and quote the repair options instead.",
      },
      {
        question: "Are drain cleaning chemicals okay to use?",
        answer:
          "We recommend against them. Caustic cleaners damage older pipes, sit in the trap when they fail to clear the clog (making our job hazardous), and are hard on septic systems common in towns like Norwell, Hanson, and Duxbury. Mechanical cleaning works and doesn't corrode anything.",
      },
      {
        question: "Do you handle main sewer line clogs?",
        answer:
          "Yes — main line and sewer lateral clogs are some of our most common calls, especially root intrusion in older towns like Milton and Quincy. We clear the line, camera it, and give you video proof plus honest options if the lateral itself is failing.",
      },
    ],
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Services",
    headline: "Water Heater Repair & Installation — South Shore MA",
    title: "Water Heater Repair South Shore MA",
    metaDescription:
      "No hot water? Leaking tank? Same-day water heater repair and replacement, tank and tankless, across South Shore MA. Call +1 978 893 7728.",
    intro:
      "No hot water is a today problem, not a next-week problem. We diagnose tank and tankless systems, repair what's repairable, and when a replacement makes more sense, we install the same day whenever possible — sized correctly for your home, not just whatever's on the truck.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "No hot water, or it runs out halfway through a shower",
      "Water pooling around the base of the tank",
      "Rusty or rotten-egg-smelling hot water",
      "Pilot light that won't stay lit",
    ],
    included: [
      "Same-day diagnosis for gas, electric, and tankless systems",
      "Repairs: thermostats, elements, pilots, anode rods, valves",
      "Full replacement with code-compliant venting and expansion tanks",
      "Tankless installation, descaling, and annual maintenance",
      "Old unit haul-away and disposal",
    ],
    faqs: [
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "Rule of thumb: if the tank itself is leaking, replacement is the only fix. If the unit is under 8 years old and the problem is a thermostat, element, or pilot, repair usually wins. Past 10 years, we'll quote both honestly and let you decide — repairs on a tank that age often just buy months.",
      },
      {
        question: "Is a tankless water heater worth it in Massachusetts?",
        answer:
          "Often, yes. Tankless units deliver endless hot water, last 20+ years versus 10–12 for tanks, and cut gas usage meaningfully. The trade-offs are higher upfront cost and annual descaling — especially on well water, common in Pembroke and Hanson. We size and quote both options so you can compare real numbers.",
      },
      {
        question: "How long does a water heater replacement take?",
        answer:
          "A like-for-like tank swap typically takes 2–3 hours once we're on site, including draining the old unit, setting the new one, and bringing connections up to code. Tankless conversions take longer — usually most of a day — because of venting and gas line changes.",
      },
      {
        question: "Why does my hot water smell like rotten eggs?",
        answer:
          "That's usually a reaction between the tank's anode rod and sulfur bacteria in the water — common on well systems. Replacing the standard anode with an aluminum-zinc one typically solves it. It's a repair, not a replacement, and we do it routinely.",
      },
    ],
  },
  {
    slug: "pipe-leak-repair",
    name: "Pipe and Leak Repair",
    headline: "Leak Detection & Pipe Repair — South Shore MA",
    title: "Leak Detection & Pipe Repair South Shore MA",
    metaDescription:
      "Hidden leak? Frozen pipe? Low pressure? We find and fix leaks without tearing your house apart. South Shore MA. Call +1 978 893 7728.",
    intro:
      "A hidden leak announces itself in your water bill before it shows on your ceiling. We locate leaks with detection equipment — not exploratory demolition — then repair the exact failed section and pressure-test the result.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "Water stains spreading on ceilings or walls",
      "Water bill climbing with no explanation",
      "Banging, rattling pipes or dropping pressure",
      "Frozen pipes every winter in the same spot",
    ],
    included: [
      "Electronic leak detection — minimal wall and floor opening",
      "Pipe section replacement in copper, PEX, and PVC",
      "Frozen pipe thawing, repair, and insulation to prevent repeats",
      "Water pressure diagnosis and regulator replacement",
      "Whole-home repiping assessment for aging galvanized systems",
    ],
    faqs: [
      {
        question: "How do you find a leak without opening walls?",
        answer:
          "We use acoustic and thermal detection to trace the leak to a specific spot before cutting anything. In older South Shore homes — Milton's pre-war stock, Duxbury's antiques — that precision matters: we open one small section instead of exploratory holes across a room.",
      },
      {
        question: "My water bill doubled but I see no leak. What now?",
        answer:
          "Check your water meter with everything off — if it's still spinning, water is going somewhere. Common hidden culprits are toilet flappers, slab leaks, and underground service line failures. We can isolate which one it is in a single visit, usually without any demolition.",
      },
      {
        question: "Should I replace my old galvanized pipes?",
        answer:
          "Galvanized supply lines — still common in Quincy and Weymouth homes — corrode from the inside, choking pressure and eventually leaking. If you're seeing brown water after vacations and weak flow upstairs, the pipes are telling you. We assess section by section; full repiping isn't always necessary.",
      },
      {
        question: "How do I stop pipes from freezing every winter?",
        answer:
          "The fix depends on why they freeze: pipes in exterior walls need rerouting or insulation, crawl space runs need heat tape and sealing, and coastal homes in Hull and Marshfield often need both. We fix the burst, then fix the cause so you're not calling us next January.",
      },
    ],
  },
  {
    slug: "fixture-installation",
    name: "Fixture Installation",
    headline: "Faucet, Toilet & Fixture Installation — South Shore MA",
    title: "Fixture Installation South Shore MA",
    metaDescription:
      "Faucets, toilets, sinks, disposals, and shower valves installed right and leak-tested. South Shore MA. Upfront pricing. Call +1 978 893 7728.",
    intro:
      "A fixture install looks simple until the supply valve crumbles, the flange is broken, or the new faucet doesn't fit the old holes. We install faucets, toilets, sinks, disposals, and shower valves cleanly — and every connection gets leak-tested before we leave.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "New faucet or toilet sitting in the box for weeks",
      "Old shutoff valves you're afraid to touch",
      "Garbage disposal humming, jamming, or leaking",
      "Shower that scalds when someone flushes",
    ],
    included: [
      "Faucet, sink, and toilet installation and replacement",
      "Garbage disposal installation and repair",
      "Pressure-balanced shower valve replacement",
      "Shutoff valve and supply line upgrades with every install",
      "Haul-away of old fixtures and full leak testing",
    ],
    faqs: [
      {
        question: "Can you install a fixture I bought myself?",
        answer:
          "Absolutely — most of our installs use customer-supplied fixtures. We'll tell you upfront if what you bought won't fit your rough-in or has a known reliability problem, before anything is opened or installed.",
      },
      {
        question: "Why does my new shower scald when the toilet flushes?",
        answer:
          "Your shower valve lacks pressure balancing — when the toilet draws cold water, the mix shifts hot. Modern pressure-balanced valves (required by code in new work) hold the temperature steady. Swapping the valve fixes it permanently.",
      },
      {
        question: "Do you replace the shutoff valves during installation?",
        answer:
          "If they're original or showing corrosion, yes — and we strongly recommend it. Old multi-turn valves seize and weep exactly when you need them. New quarter-turn valves cost little during an install and save an emergency call later.",
      },
      {
        question: "How long does a toilet installation take?",
        answer:
          "A straightforward replacement takes about an hour. If we find a damaged flange or rotten subfloor — common in older Weymouth and Rockland homes — we'll show you the issue and quote the fix before proceeding.",
      },
    ],
  },
  {
    slug: "sewer-line-services",
    name: "Sewer and Main Line Services",
    headline: "Sewer Line & Main Drain Services — South Shore MA",
    title: "Sewer Line Repair South Shore MA",
    metaDescription:
      "Sewer backups, root intrusion, and main line damage diagnosed with camera inspection and fixed for good. South Shore MA. Call +1 978 893 7728.",
    intro:
      "When the lowest drain in the house backs up, the problem is the main line — and guessing is expensive. We camera-inspect first, show you exactly what's wrong and where, then clear or repair with the least invasive option that actually lasts.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    painPoints: [
      "Sewage backing up into basement drains or tubs",
      "Multiple drains slow at the same time",
      "Sewer smell in the yard or basement",
      "Backups that return every few months",
    ],
    included: [
      "Sewer camera inspection with recorded video and locating",
      "Main line clog removal and root cutting",
      "Hydro-jetting for grease and scale in laterals",
      "Backwater valve installation to prevent street backups",
      "Repair coordination for broken or bellied lines",
    ],
    faqs: [
      {
        question: "How do I know if it's my sewer line or just a clogged drain?",
        answer:
          "If one fixture is slow, it's that fixture's branch line. If multiple drains back up at once — especially the lowest ones in the house — it's the main line. Gurgling toilets when the washer drains is another main-line tell. Either way, a camera inspection settles it definitively.",
      },
      {
        question: "Tree roots keep clogging my sewer line. Is replacement the only fix?",
        answer:
          "Not always. Root cutting plus periodic maintenance keeps many lines flowing for years at a fraction of replacement cost. But if the camera shows the roots are entering through collapsed sections, repair is the honest recommendation — we show you the video either way so the decision is yours.",
      },
      {
        question: "Who is responsible for the sewer lateral — me or the town?",
        answer:
          "In most South Shore towns, the homeowner owns the lateral from the house to the street connection, sometimes including the section under the road. We camera and locate the problem precisely, which tells you whether the failure is on your side and exactly where.",
      },
      {
        question: "What is a backwater valve and do I need one?",
        answer:
          "It's a one-way valve on your main line that stops municipal sewer surges from backing up into your basement — relevant in low-lying and coastal neighborhoods in Scituate, Marshfield, and Quincy. If your basement has flooded with sewage during heavy rain, it's one of the best investments you can make.",
      },
    ],
  },
]

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}
