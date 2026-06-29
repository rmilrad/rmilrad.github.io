/* =================================================================
   SINGLE SOURCE OF TRUTH
   Edit copy here. Components and the terminal both read from this.
   ================================================================= */

export const profile = {
  name: "Ryan Milrad",
  role: "Product Manager",
  tagline:
    "Product manager owning money movement and financial infrastructure across institutional and consumer platforms.",
  blurb:
    "Deep expertise in funds flow, technical integrations, compliance, security, and platform infrastructure, with hands on fluency in crypto rails. I define north star metrics and ship AI powered tooling adopted across product and engineering. Engineer's depth, product leader's instincts.",
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
  { value: "$15B", label: "assets migrated", context: "onto new key management infrastructure, saving $2M per year in legacy costs" },
  { value: "$4.5B", label: "funds flow", context: "facilitated through third party provider API integrations, including the first ETH ETF" },
  { value: "$1B", label: "liquidity", context: "attracted to Hemi across 60+ partner integrations" },
  { value: "$180M", label: "at risk funds", context: "surfaced through data analysis and recovered to full resolution" },
  { value: "62%", label: "faster integrations", context: "engineering integration time cut from 40 to 15 weeks with an agentic MCP" },
  { value: "0 → 100K", label: "users", context: "consumer acquisition driven in six months through UI/UX" },
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
      "Owned money movement and platform infrastructure across Coinbase's institutional product group, pairing funds flow and compliance ownership with AI powered tooling shipped across product and engineering.",
    highlights: [
      "Standardized north star metrics and built dashboards to align **100+** cross functional stakeholders.",
      "Supported the institutional product group, facilitating **$4.5B** in funds flow through third party provider API integrations and launching the first ETH ETF product offering.",
      "Managed the migration of **$15B** in assets to new key management infrastructure, saving **$2M/yr** in legacy costs.",
      "Led compliance strategy, architecting regionally compliant platform services for **1.3M** global users, protecting a **$1B** international market and preserving **$120M** in annual revenue.",
      "Surfaced **$180M** in at risk funds through data analysis and led the financial team recovery to full resolution.",
      "Optimized retail payout flows through data analysis with SQL and experimentation, capturing **$900K** in revenue.",
      "Shipped engineering development workflows via an agentic MCP that cut integration times **62% (40 to 15 weeks)**.",
      "Built an LLM powered runbook, cutting partner integration time for a team of ten engineers **75% (16 to 4 weeks)**.",
    ],
    stack: ["Institutional", "Funds Flow", "Key Management", "Compliance", "MCP / LLM tooling"],
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
    roles: [{ title: "Senior Product Manager", period: "Aug 2023 to May 2025" }],
    summary:
      "Owned end to end product strategy for a modular L2, driving consumer growth and the liquidity that followed.",
    highlights: [
      "Directed the UI/UX for consumer applications, driving user acquisition from **0 → 100K** in six months.",
      "Executed the end to end product strategy, attracting **$1B** in liquidity across **60+** partner integrations.",
      "Led the development of Hemi's cross chain bridge and wallet integrations, facilitating **$500M** in liquidity.",
      "Strengthened user retention through funnel analysis, growing DAU **70%** over three months.",
    ],
    stack: ["L2", "Cross chain Bridge", "Wallet Integrations", "Funnel Analysis", "UX"],
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
      "Shipped onchain financial infrastructure and advised enterprises entering digital assets.",
    highlights: [
      "Owned end to end development of Visa's first crypto yield product, delivering the full stack from API to UI.",
      "Led **0 → 1** adoption of core platform services, scaling onchain infrastructure to support **$25M** in user funds.",
      "Managed relationships with banking partners, advising Discover Bank on emerging trends and technologies.",
    ],
    stack: ["Crypto Yield", "Platform Services", "Onchain Infrastructure", "0 → 1"],
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
    roles: [{ title: "Software Engineering Intern", period: "Jun 2019 to Sep 2019" }],
    summary: "Where the engineering instinct started.",
    highlights: [
      "Developed smarter systems for managing complex food ontologies.",
      "Built NLP workflows in Python, cutting catalog redundancy **68%**.",
    ],
    stack: ["Python", "NLP", "Data Systems"],
    images: [{ src: "ww-banner.webp", caption: "Software engineering internship · NLP and data systems", w: 860, h: 287 }],
  },
];

/* --- Skills --- */
export const skills = {
  product: [
    "Metrics Ownership", "North Star Definition", "Funnel Optimization",
    "Testing & Experimentation", "Roadmapping", "Stakeholder Management",
    "Cross Functional Leadership", "User Research", "Developer Experience", "Agile",
  ],
  technical: [
    "LLM Powered Tooling", "Workflow Automation", "Python", "SQL", "JavaScript",
    "Solidity", "REST", "Postman", "Snowflake", "Datadog", "Looker",
    "Claude Code", "Codex", "GitHub", "Linear", "Jira", "Figma",
  ],
  languages: ["English", "Spanish"],
};

export const certifications = [
  { name: "Project Management Professional (PMP)", org: "Project Management Institute", year: "2024" },
  { name: "Product Management Certificate", org: "eCornell", year: "2023" },
  { name: "Data Science Certificate", org: "Florida Atlantic University", year: "2020" },
];

export const education = {
  degree: "B.S., Computer Science",
  school: "Florida Atlantic University",
  year: "2020",
};
