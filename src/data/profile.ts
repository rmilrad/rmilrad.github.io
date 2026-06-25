/* =================================================================
   SINGLE SOURCE OF TRUTH
   Edit copy here. Components and the terminal both read from this.
   ================================================================= */

export const profile = {
  name: "Ryan Milrad",
  role: "Product Manager",
  tagline:
    "Product manager working at the intersection of data infrastructure, AI tooling, and platform engineering.",
  blurb:
    "I build systems and workflows that don't just ship products, but make the teams around them faster. I think like an engineer and operate like a product leader.",
  email: "ryanmilrad34@gmail.com",
  linkedin: "https://linkedin.com/in/ryan-milrad",
  github: "https://github.com/rmilrad",
  location: "Remote",
  experienceYears: "6+",
};

/* --- Headline metrics (the stat band) --- */
export type Metric = {
  value: string;
  label: string;
  context: string;
};

export const metrics: Metric[] = [
  { value: "$15B", label: "migrated", context: "across 8 staked assets onto new cold key management infrastructure" },
  { value: "$4.5B", label: "ETF funds flow", context: "facilitated as DRI for institutional vendor integrations" },
  { value: "$1B", label: "liquidity", context: "attracted within 4 weeks of the Hemi launch" },
  { value: "$2M", label: "net new ARR", context: "unlocked by an LLM powered developer MCP" },
  { value: "62%", label: "faster integrations", context: "developer onboarding cut from 40 to 15 weeks" },
  { value: "139", label: "PMs enabled", context: "with custom AI skills and automated tooling" },
];

/* --- Experience --- */
export type Highlight = { text: string };
export type Role = { title: string; period: string };
export type JobImage = { src: string; caption?: string; w?: number; h?: number };
export type Experience = {
  id: string;
  company: string;
  note?: string;
  url?: string; // company / product website
  brand?: string; // brand accent color, tints the card
  roles: Role[];
  summary: string;
  highlights: string[];
  stack: string[];
  /* Drop real photos at /public/images/<src> and they render automatically
     as a banner slideshow, one image at a time. */
  images?: JobImage[];
};

export const experience: Experience[] = [
  {
    id: "coinbase",
    company: "Coinbase",
    url: "https://www.coinbase.com/staking",
    brand: "#0052ff",
    roles: [{ title: "Product Manager", period: "May 2025 to May 2026" }],
    summary:
      "Applied AI across platform delivery and org wide enablement as a core member of Coinbase's PM AI working group, while owning critical platform infrastructure and data initiatives.",
    highlights: [
      "Accelerated **$2M** in net new ARR opportunities by building an LLM powered developer MCP that cut integration timelines **62% (40→15 weeks)** through protocol analysis and codebase referencing.",
      "Systematized API onboarding into a repeatable developer runbook, cutting eng integration timelines **75% (16→4 weeks)**.",
      "Established Coinbase's PM AI foundation, shipping custom skills and automated tooling that compressed the path from PRD to prototype to production code across **139 PMs**.",
      "Automated SLA reporting dashboards ingesting live API data, eliminating manual engineer dependencies entirely.",
      "Facilitated **$4.5B** in institutional ETF funds flow as DRI for vendor integrations (Galaxy, Bitmine), owning technical API requirements and stakeholder alignment from contract to launch.",
      "Preserved **$120M ARR** by leading compliance and data governance across European (MiCA) and Canadian markets, authoring product specs that maintained uninterrupted access to ~$1B in staked assets for 1.3M global customers.",
      "Led the migration of **$15B** across eight staked assets onto a new cold key management infrastructure, hardening platform security, enabling downstream platform scalability, and reducing costs.",
      "Surfaced **$180M** in at risk funds through data analysis and led cross functional recovery to full resolution with zero customer impact.",
      "Captured **$900K ARR** through structured experimentation, identifying a payout flow inefficiency via data analysis and validating a configuration change across a partial fleet before scaling.",
      "Defined the Staking Platform North Star metric, standardizing net penetration calculations across four product groups and eight assets to align product strategy and reporting for institutional and consumer teams.",
    ],
    stack: ["Staking", "Key Management", "MCP / LLM tooling", "Data Governance", "Institutional"],
    images: [
      { src: "coinbase-metrics.webp", caption: "Choose a partner you can count on · $20B+ staked · 0 double signs · 99% uptime", w: 2000, h: 762 },
      { src: "coinbase-stake.webp", caption: "Solutions for every staker · developers, individuals, enterprise", w: 2000, h: 762 },
      { src: "coinbase-etf.webp", caption: "Grayscale Ethereum Staking ETF · institutional funds flow", w: 2000, h: 997 },
    ],
  },
  {
    id: "hemi",
    company: "Hemi",
    note: "Built by Bloq",
    url: "https://hemi.xyz",
    brand: "#ff6a3d",
    roles: [
      { title: "Senior Product Manager", period: "Apr 2024 to May 2025" },
      { title: "Product Manager", period: "Aug 2023 to Apr 2024" },
    ],
    summary:
      "Took a modular L2 from zero to launch, owning the full user facing surface and the growth that followed.",
    highlights: [
      "Executed the vision for Hemi launch, attracting **$1B** in liquidity within four weeks and securing **$15M** in seed funding.",
      "Led cross functional delivery of Hemi's first cross chain asset bridge, aligning engineering, design, and marketing from discovery through launch, facilitating **$500M** in asset transfers within two weeks.",
      "Diagnosed stagnant DAU through dual layer funnel analysis, shipped UI improvements based on community feedback, and drove the Hemi network to **150K daily transactions**.",
      "Uncovered a platform integrity issue through data analysis, accelerated a user verification product, and restored incentive participation from **73%→95%**, driving 100K verifications.",
      "Directed the UI/UX for all user applications, including staking, bridging, native DEX, onboarding, and DevX tooling.",
      "Drove **0→400K accounts** by lowering the barrier to entry through UX redesign and metrics tracking to continuously optimize onboarding and retention.",
    ],
    stack: ["L2", "Cross chain Bridge", "DEX", "Funnel Analysis", "UX"],
    images: [
      { src: "hemi-website.webp", caption: "Activate compliant Bitcoin yield without leaving custody", w: 2000, h: 997 },
      { src: "hemi-app.webp", caption: "The cross chain Tunnel · Ethereum ↔ Hemi bridge", w: 2000, h: 997 },
      { src: "hemi-metrics.webp", caption: "Network TVL tracked on DefiLlama · past $250M at peak", w: 2000, h: 997 },
    ],
  },
  {
    id: "bloq",
    company: "Bloq",
    note: "Infrastructure",
    url: "https://www.bloq.com",
    brand: "#2d9cff",
    roles: [{ title: "Product Manager", period: "May 2021 to Aug 2023" }],
    summary:
      "Shipped institutional staking infrastructure and advised enterprises entering digital assets.",
    highlights: [
      "Led **0→1** development of Visa's first Ethereum staking proof of concept, integrating BitGo for institutional custody.",
      "Scaled institutional staking to **$25M** in Assets under Management (AuM) across 12 networks.",
      "Advised Discover Bank's Innovation Team on emerging digital asset technology, delivering research that informed their strategic evaluation of blockchain infrastructure.",
      "Managed end to end product delivery across three API infrastructure services (BloqStake, BloqNodes, BloqConnect), owning scoping, roadmap, and launch execution.",
    ],
    stack: ["Institutional Staking", "API Infrastructure", "Custody", "0→1"],
    images: [
      { src: "bloq-website.webp", caption: "BloqStake · built for pros, available for all", w: 2000, h: 997 },
      { src: "bloq-stake.webp", caption: "Programmatic ETH staking via the Bloq API", w: 2000, h: 997 },
    ],
  },
  {
    id: "weightwatchers",
    company: "Weight Watchers",
    url: "https://www.weightwatchers.com",
    brand: "#4f46e5",
    roles: [{ title: "Data Scientist Intern", period: "Jun 2017 to Sept 2017" }],
    summary: "Where the data first instinct started.",
    highlights: [
      "Utilized NLP in Python to organize data on user recorded recipes and consolidate into functional classes.",
      "Updated data streaming processes for a **68%** reduction in catalog redundancy and **92%** product mapping accuracy.",
      "Connected a global food database with Postgres to increase project efficiency with the development team.",
    ],
    stack: ["Python", "NLP", "Postgres", "Data Pipelines"],
    images: [{ src: "ww-banner.webp", caption: "Data science internship · NLP and data pipelines", w: 860, h: 287 }],
  },
];

/* --- Skills --- */
export const skills = {
  technical: [
    "Claude Code", "Codex", "Opencode", "Python", "SQL", "JavaScript", "Solidity",
    "REST", "Postman", "GitHub", "Snowflake", "Datadog", "Looker", "Figma",
  ],
  product: [
    "Agile", "Cross Functional Leadership", "Data Analytics", "Developer Experience",
    "Funnel Optimization", "Roadmapping", "Stakeholder Management", "User Research",
    "A/B Testing", "Data Governance",
  ],
  tools: ["Linear", "Jira", "Asana", "Confluence"],
};

export const certifications = [
  { name: "Project Management Professional (PMP)", org: "Project Management Institute", year: "2024" },
  { name: "Product Management Certificate", org: "eCornell", year: "2023" },
  { name: "Data Science Certificate", org: "Florida Atlantic University", year: "2018" },
];

export const education = {
  degree: "B.S., Computer Science",
  school: "Florida Atlantic University",
  year: "2018",
};
