/* =================================================================
   SINGLE SOURCE OF TRUTH
   Edit copy here. Components read from this file; the ask box
   reads from src/lib/assistant.ts (hand kept in sync).
   ================================================================= */

export const profile = {
  name: "Ryan Milrad",
  role: "Product Manager",
  email: "ryanmilrad34@gmail.com",
  linkedin: "https://linkedin.com/in/ryan-milrad",
  github: "https://github.com/rmilrad",
};

/* --- career stats (the dark island band) --- */
export type Stat = { label: string; value: string; green?: boolean };

export const stats: Stat[] = [
  { label: "Assets managed and secured", value: "$20B+" },
  { label: "Liquidity attracted to Hemi", value: "$1B+" },
  { label: "Users protected under MiCA", value: "1M+" },
  { label: "Faster engineering integrations", value: "62%", green: true },
];

/* --- work history (the bento) --- */
export type JobRow = { icon: string; name: string; value: string; sub: string };
export type Job = {
  id: string;
  colors: { bg: string; hd: string; tx: string; rows: string; mk: string };
  headline: string;
  body: string; // markdown lite: **bold**
  role: string;
  media:
    | { kind: "rows"; rows: JobRow[] }
    | { kind: "image"; src: string; alt: string }
    | { kind: "code" } // the BloqStake API terminal, rendered in Work.tsx
    | { kind: "blank" } // reserved space, visual to come
    | null;
  bullets?: string[]; // markdown lite: **bold**
  plx: number;
  compact?: boolean;
};

export const jobs: Job[] = [
  {
    id: "coinbase",
    colors: { bg: "#e9f0ff", hd: "#0043cc", tx: "#3f57a6", rows: "#dde7fd", mk: "#0052ff" },
    headline: "The most trusted staking infrastructure.",
    body:
      "I supported the institutional ETFs moving billions through Coinbase, architected the infrastructure that segregates MiCA regulated funds for international users, and shipped the AI tooling that made engineering faster.",
    role: "Product Manager · May 2025 to May 2026",
    media: { kind: "blank" },
    bullets: [
      "Facilitated **$4.5B** in institutional ETF funds flow through third party integrations.",
      "Led compliance and reconciliation for **1.3M** users, protecting a **$1B** market and **$120M** in revenue.",
      "Managed the **$15B** key management migration, saving **$2M** per year in legacy costs.",
      "Shipped an agentic MCP cutting engineering integration time **62%**, from 40 to 15 weeks.",
      "Surfaced **$180M** in at risk funds and led the financial recovery to full resolution.",
    ],
    plx: 24,
  },
  {
    id: "hemi",
    colors: { bg: "#fdeee5", hd: "#c2410c", tx: "#96522f", rows: "#f7e0d2", mk: "#ff5d22" },
    headline: "Zero to 200K+ users on a new L2.",
    body:
      "A modular Layer 2 protocol bringing Bitcoin security and programmability to DeFi. I owned end to end product strategy, from UI and UX through the liquidity that followed.",
    role: "Senior Product Manager · Aug 2023 to May 2025",
    media: { kind: "image", src: "/images/hemi-app.png", alt: "The Hemi Tunnel app: transaction history and a confirmed deposit" },
    bullets: [
      "Directed the UI and UX for consumer applications, driving acquisition **0 to 200K+** in six months.",
      "Attracted **$1B** in liquidity across **60+** partner integrations.",
      "Led the cross chain bridge and wallet integrations behind **$500M** in liquidity, including the Tunnel.",
      "Grew DAU **70%** over three months through funnel analysis.",
    ],
    plx: 26,
  },
  {
    id: "bloq",
    colors: { bg: "#e7f3fc", hd: "#026bb8", tx: "#3a6685", rows: "#d9ecf9", mk: "#2d9cff" },
    headline: "Banks, brought onchain.",
    body:
      "Enterprise blockchain infrastructure, the onramp bringing traditional financial institutions onchain. I shipped Visa's first crypto yield product full stack, from API to UI.",
    role: "Product Manager · May 2021 to Aug 2023",
    media: { kind: "code" },
    bullets: [
      "Owned end to end development of Visa's first crypto yield product, the full stack from API to UI.",
      "Led **0 to 1** adoption of core platform services supporting **$25M** in user funds.",
      "Managed banking partner relationships, advising Discover Bank on emerging trends and technologies.",
    ],
    plx: 18,
  },
  {
    id: "ww",
    colors: { bg: "#edecfa", hd: "#4f46e5", tx: "#5f5a9e", rows: "#e0defa", mk: "#3383c4" },
    headline: "Where the engineering instinct started.",
    body:
      "Consumer health and nutrition platform serving millions of members. I built NLP workflows in Python that cut catalog redundancy **68%**, working across Python, NLP, and SQL on the data science team.",
    role: "Data Science / ML Intern · Jun 2019 to Sep 2019",
    media: null,
    plx: 16,
    compact: true,
  },
];

/* --- credentials --- */
export type Credential = { name: string; org: string };
export const education: Credential[] = [
  { name: "B.S., Computer Science", org: "Florida Atlantic University · 2020" },
];
export const certifications: Credential[] = [
  { name: "Project Management Professional (PMP)", org: "Project Management Institute · 2024" },
  { name: "Product Management Certificate", org: "eCornell · 2023" },
  { name: "Data Science Certificate", org: "Florida Atlantic University · 2020" },
];

/* --- writing --- */
export type Article = {
  title: string; blurb: string; url: string; date: string; tag: string;
  c1: string; c2: string; glyph: string;
};
export const articles: Article[] = [
  {
    title: "Ethereum: Shapella's Stability Supporting Features",
    blurb: "Withdrawal mechanisms, staking limits, and validator exit queues, and what they mean for staked ETH liquidity.",
    url: "https://sync.bloq.com/ethereum-shapellas-stability-supporting-features/",
    date: "Apr 11, 2023", tag: "#Protocol", c1: "#bcd6ff", c2: "#e3edff", glyph: "Ξ",
  },
  {
    title: "What is the Ethereum Pectra Upgrade",
    blurb: "An explainer on Ethereum's Pectra upgrade and what it changes for everyday users and stakers.",
    url: "https://hemi.xyz/blog/what-is-the-ethereum-pectra-upgrade",
    date: "2025", tag: "#Protocol", c1: "#ffc9ae", c2: "#ffe9dc", glyph: "⬢",
  },
  {
    title: "Start Staking on Hemi Ahead of Mainnet Launch",
    blurb: "A practical guide to staking on Hemi ahead of its mainnet launch, from setup to first rewards.",
    url: "https://hemi.xyz/blog/start-staking-on-hemi-ahead-of-mainnet-launch",
    date: "2025", tag: "#Staking", c1: "#b9e7c9", c2: "#e2f6e9", glyph: "▲",
  },
];

/* --- side projects (placeholders until real ones are supplied) --- */
export type Project = { title: string; blurb: string; tags: string[]; url?: string };
export const projects: Project[] = [
  { title: "Project one", blurb: "One line on what it does and why you built it.", tags: ["React", "AI"] },
  { title: "Project two", blurb: "One line on what it does and why you built it.", tags: ["Next.js", "Solidity"] },
  { title: "Project three", blurb: "One line on what it does and why you built it.", tags: ["Python", "LLM"] },
];

/* --- references (short pulls from LinkedIn recommendations) --- */
export type Quote = { text: string; name: string; title: string };
export const quotes: Quote[] = [
  {
    text: "“Ryan is one of those rare PMs who doesn't just ship. He builds systems that make his product and everyone around him better.”",
    name: "Isabella Fachini de Araujo", title: "Product Lead, Coinbase · managed Ryan directly",
  },
  {
    text: "“Ryan thinks like an engineer. He can zoom into the technical details and zoom out to the product strategy with equal fluency. That combination is genuinely rare.”",
    name: "Karen Wang", title: "Staff Software Engineer, Coinbase · same team",
  },
  {
    text: "“He brought strong product judgment and deep technical intuition to difficult cross functional problems, consistently driving clarity and execution.”",
    name: "Lukas Staniszewski", title: "Director of Product, Coinbase · managed Ryan directly",
  },
  {
    text: "“Rather than treating AI as a buzzword, he found real use cases where it could save time, improve output, and make day to day work better.”",
    name: "Reza Sabernia", title: "Product, Web3 and Crypto · senior colleague at Coinbase",
  },
  {
    text: "“He is a world class executor who brings long term strategic thinking to his decisions. Any team would be lucky to have Ryan as a team member, partner, and leader.”",
    name: "Isabella Fachini de Araujo", title: "Product Lead, Coinbase · managed Ryan directly",
  },
  {
    text: "“When the team hit a gnarly infrastructure migration with real customer impact on the line, he got into the weeds, worked through the technical tradeoffs, and got legal, finance, and eng all pointed in the same direction.”",
    name: "Karen Wang", title: "Staff Software Engineer, Coinbase · same team",
  },
  {
    text: "“I'm confident he'll make a strong impact wherever he goes next.”",
    name: "Lukas Staniszewski", title: "Director of Product, Coinbase · managed Ryan directly",
  },
];
