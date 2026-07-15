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
    | { kind: "scene" } // the Hemi Tunnel scroll scene, rendered in Work.tsx
    | { kind: "assets" } // the Coinbase parallax asset grid, rendered in Work.tsx
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
    media: { kind: "assets" },
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
    media: { kind: "scene" },
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

/* --- side projects (long form case studies) ---
   Each project page reads as a short blog post: a headline, a demo
   video, then a sequence of sections. A section is a heading plus an
   ordered list of blocks (paragraphs or bullet lists). All text
   supports **bold**. House style: no hyphens in prose. */
export type StoryBlock = { p: string } | { list: string[] };
export type StorySection = { heading: string; blocks: StoryBlock[] };
export type Project = {
  id: string;
  name: string; // short label for nav + landing card
  tagline: string; // one line description under the title
  video?: string; // demo video (mp4 under /videos)
  poster?: string; // video poster + landing thumbnail
  shot?: string; // landing screenshot (falls back to poster)
  storyTitle: string; // article headline on the project page
  story: StorySection[];
  tags?: string[];
  link?: string;
};
export const projects: Project[] = [
  {
    id: "recall",
    name: "Recall",
    tagline: "A memory layer for AI chat that stops you paying for the same tokens twice.",
    video: "/videos/recall.mp4?v=2",
    poster: "/images/recall-poster.jpg",
    storyTitle: "Recall: Teaching AI to Remember",
    tags: ["Python", "FastAPI", "RAG", "React", "AWS"],
    story: [
      {
        heading: "The spark",
        blocks: [
          { p: "At Coinbase, I watched every engineering team independently build their own AI knowledge layers, redundant retrieval pipelines solving the same problem. I built KBaaS to centralize that infrastructure, and query costs dropped by up to **280×**. The lesson was clear: the expensive part of AI isn't the model. It's what you send it." },
          { p: "Recall is what happens when you apply that lesson to AI chat itself." },
        ],
      },
      {
        heading: "The problem",
        blocks: [
          { p: "Open any AI chat and send ten messages. By the tenth, the app has resent your entire conversation history nine extra times. Same tokens, reprocessed and rebilled every turn. Language models are stateless, they have no memory between calls, so every application compensates by stuffing the full history into each request." },
          { p: "At enterprise scale, this is how Uber burned through their entire 2026 AI coding budget in four months. The problem isn't that AI is expensive. It's that AI is amnesic." },
        ],
      },
      {
        heading: "The decisions",
        blocks: [
          { p: "I chose to build a native app rather than a proxy so I could control the full routing loop, specifically which model answers each question, or whether a model needs to answer at all." },
          { p: "The core design is a three tier router:" },
          { list: [
            "**Tier 0** · Question matches a previous Q&A pair. Replay the stored answer. Cost: **$0**.",
            "**Tier 1** · Strong retrieved context. Use a cheaper model with only the relevant chunks, no history.",
            "**Tier 2** · Novel question. Full frontier model with memory augmented prompt and recent turns.",
          ] },
          { p: "Every query logs its routing decision, actual cost, and a counterfactual, what it would have cost without the memory layer. The savings are never abstract; they're displayed per message, per conversation, and across the dashboard in real time." },
        ],
      },
      {
        heading: "How I built it",
        blocks: [
          { p: "I built the entire app using Claude Code as a full stack engineering partner, not autocomplete, but continuous sessions where it held the whole architecture in context and built vertically across backend, frontend, and infrastructure." },
          { p: "Four milestones: chat parity with SSE streaming (M1), a **RAG** pipeline with hybrid vector and BM25 retrieval (M2), the three tier router and cost ledger (M3), and a real time analytics dashboard (M4)." },
          { p: "The stack is **Python/FastAPI** with SQLite and sqlite-vec on the backend, React with Tailwind on the frontend, deployed on **AWS** (ECS Fargate + EFS) with a one command deploy script. A 1,000 conversation benchmark showed up to **84%** cost savings." },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { p: "Recall is a memory layer for AI chat. It stores every conversation into a searchable knowledge base and uses that context to answer future questions cheaper, or free. The more you use it, the more it remembers, and the more queries it can answer without a full model call." },
        ],
      },
    ],
  },
  {
    id: "rwa-vault",
    name: "Tokenized Yield Vault",
    tagline: "An institutional grade tokenized fund that honors redemptions even when the cash isn't in the vault.",
    video: "/videos/rwa-vault.mp4?v=2",
    poster: "/images/rwa-vault-poster.jpg",
    storyTitle: "Building a Tokenized Yield Vault That Can Prove Its Own Books",
    tags: ["Solidity", "Foundry", "ERC-4626", "React", "Base"],
    story: [
      {
        heading: "The inspiration",
        blocks: [
          { p: "Tokenized real world assets are moving from thesis to product. Neobanks and asset managers are racing to wrap yield bearing instruments like Treasuries into onchain share classes that anyone can hold. I didn't want to read another explainer about it, I wanted to build the institutional grade version myself and feel where the hard parts actually are." },
        ],
      },
      {
        heading: "The problem",
        blocks: [
          { p: "A tokenized fund makes a promise that's quietly in tension with itself: instant, retail friendly access to a product whose assets are actually deployed and not sitting in cash. Layer on the requirement that holders be permissioned, and the real question emerges. How do you honor redemptions, and keep the accounting provably honest, when the money isn't always in the vault?" },
        ],
      },
      {
        heading: "The decisions",
        blocks: [
          { p: "I built on **ERC-4626** so the vault speaks a standard the ecosystem already understands, then designed around its known traps. A few choices shaped everything:" },
          { list: [
            "Put authorization at a single chokepoint on the value moving path, so there is one place to reason about who can do what.",
            "Split liquidity into an instantly redeemable buffer and everything else. Redemptions inside the buffer settle now; larger ones book a slow claim at NAV locked at request time, so later gains or losses don't move a price someone already accepted.",
            "Derive total assets from real balances and strategy positions rather than internal counters, so money that arrives out of band can't quietly desync the books.",
            "Make correctness checkable by something that shares no code with the vault.",
          ] },
        ],
      },
      {
        heading: "How I built it",
        blocks: [
          { p: "The whole thing was built test first, in disciplined vertical slices. Each phase opened as failing **Foundry** tests describing the behavior, deposit and mint, then withdraw and redeem, then permissioning, then the buffer and slow redemptions, then reconciliation, and only went green once the behavior and its edge cases held: rounding direction, the first depositor inflation attack, frozen actors, out of band deposits." },
          { p: "A React dashboard on **wagmi/viem** stayed live from the first phase and grew with each one, so every capability was something I could actually drive, not just a passing test. Alongside it, an off chain indexer folds the vault's events into a mirror ledger and diffs it against live onchain reads to the wei. Because it is a genuinely different code path, it catches drift instead of agreeing with the same bug." },
        ],
      },
      {
        heading: "The solution",
        blocks: [
          { p: "The result is a permissioned **ERC-4626** vault on **Base Sepolia** with a real liquidity model, a dashboard that surfaces NAV, the split between buffer and deployed treasury, and the pending redemption liability, and an independent reconciler watching the books." },
        ],
      },
    ],
  },
];

/* --- references (short pulls from LinkedIn recommendations) --- */
export type Quote = { text: string; name: string; title: string };
export const quotes: Quote[] = [
  {
    text: "“Ryan is one of those rare PMs who doesn't just ship. He builds systems that make his product and everyone around him better.”",
    name: "Isabella Fachini de Araujo", title: "Product Lead, Coinbase · managed Ryan directly",
  },
  {
    text: "“He was the most AI fluent PM at Coinbase. He shared his recipes with the entire PM team through his ‘How I AI’ doc, a very concrete and practical way to build your own routines, skills, context, and memory.”",
    name: "Nicolas M.", title: "Coinbase · worked on the same team",
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
