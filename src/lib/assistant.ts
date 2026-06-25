/* =================================================================
   THE TERMINAL BRAIN
   Local, curated, zero-cost. Speaks in first person as Ryan.

   To upgrade to a live LLM later: keep `suggestions` + `bootLines`,
   and replace `getResponse()` with a streaming API call. Nothing
   else in the app needs to change.
   ================================================================= */

export type Suggestion = { label: string; query: string };

export const bootLines = [
  "ryan agent v1.0 · portfolio assistant",
  "context loaded: 6+ yrs · 4 companies · platform + AI",
  "Ask me anything, or run a suggested command below.",
];

export const suggestions: Suggestion[] = [
  { label: "My last role", query: "What was your last role?" },
  { label: "Most impactful metrics", query: "What are your most impactful metrics?" },
  { label: "Where I've worked", query: "Which companies have you worked at?" },
  { label: "What I've built with AI", query: "What have you built with AI?" },
  { label: "The $15B migration", query: "Tell me about the $15B migration." },
];

export type Entry = {
  id: string;
  keywords: string[];
  tool: string; // the "tool use" flourish line
  answer: string; // light markdown: **bold**, blank-line paragraphs, "- " bullets
};

const KB: Entry[] = [
  {
    id: "about",
    keywords: ["about", "who", "yourself", "summary", "bio", "tell me about", "background", "you"],
    tool: "reading profile.summary",
    answer:
      "I'm Ryan, a product manager with **6+ years** at the intersection of data infrastructure, AI tooling, and platform engineering.\n\nMost recently at Coinbase I expanded, secured, and accelerated the Staking Platform: migrating billions onto new key management infrastructure, shipping LLM powered developer tooling, and building real time API dashboards.\n\nI think like an engineer and operate like a product leader.",
  },
  {
    id: "last-role",
    keywords: ["last role", "current", "recent", "now", "latest", "present", "coinbase", "doing now", "most recent"],
    tool: "querying experience where current = true",
    answer:
      "My most recent role is **Product Manager at Coinbase** (May 2025 to May 2026), on the Staking Platform.\n\nHighlights:\n- Migrated **$15B** across 8 staked assets to new cold key management infrastructure\n- Built an LLM powered developer **MCP** that cut integration time **62%** and unlocked **$2M** in ARR\n- Facilitated **$4.5B** in institutional ETF funds flow as DRI for vendor integrations\n- Preserved **$120M ARR** leading MiCA + Canadian compliance",
  },
  {
    id: "metrics",
    keywords: ["metric", "impact", "number", "result", "achievement", "impactful", "kpi", "outcome", "biggest", "proud"],
    tool: "aggregating metrics across roles",
    answer:
      "The numbers I'm proudest of:\n- **$15B** migrated to new key management infrastructure\n- **$4.5B** in institutional ETF funds flow facilitated\n- **$1B** in liquidity attracted within 4 weeks of the Hemi launch\n- **$2M** in net new ARR from an LLM powered developer MCP\n- **0→400K** accounts driven through onboarding UX\n- **139 PMs** enabled with custom AI tooling",
  },
  {
    id: "companies",
    keywords: ["compan", "where", "worked", "history", "experience", "timeline", "career", "jobs", "employ"],
    tool: "listing experience[] ordered by date desc",
    answer:
      "Where I've worked:\n- **Coinbase** · Product Manager · 2025 to 2026 · Staking Platform + PM AI\n- **Hemi** (built by Bloq) · Sr. PM / PM · 2023 to 2025 · L2 launch, bridge, DEX\n- **Bloq** · Product Manager · 2021 to 2023 · institutional staking infra\n- **Weight Watchers** · Data Scientist Intern · 2017 · NLP + data pipelines\n\nScroll down for the full breakdown of each.",
  },
  {
    id: "ai",
    keywords: ["ai", "llm", "mcp", "claude", "tooling", "automation", "agent", "model", "gen ai", "machine learning"],
    tool: "grep 'AI' experience/",
    answer:
      "AI is central to how I work. At Coinbase I was a core member of the PM AI working group and:\n- Built an **LLM powered developer MCP**: protocol analysis + codebase referencing that cut integration time **62% (40→15 weeks)**\n- Established the **PM AI foundation**: custom skills and automated tooling that compressed PRD → prototype → production code across **139 PMs**\n- Automated **SLA reporting dashboards** ingesting live API data, removing manual engineer dependencies\n\nI build daily with Claude Code, Codex, and Opencode.",
  },
  {
    id: "migration",
    keywords: ["15b", "$15b", "migration", "migrate", "key management", "key-management", "cold", "security", "vulnerab", "infrastructure"],
    tool: "reading case study: key management migration",
    answer:
      "I led the migration of **$15B across eight staked assets** onto new cold key management infrastructure.\n\nWhy it mattered: it hardened platform security, unlocked downstream platform scalability, and reduced operating costs, all without customer facing disruption.\n\nIt's the kind of deep infra work that doesn't make headlines but is existential for an institutional staking platform.",
  },
  {
    id: "hemi",
    keywords: ["hemi", "bridge", "l2", "launch", "liquidity", "cross-chain", "cross chain", "dex", "150k", "transactions"],
    tool: "reading case study: hemi launch",
    answer:
      "At **Hemi** (built by Bloq) I took a modular L2 from zero to launch:\n- **$1B** in liquidity within 4 weeks; **$15M** seed secured\n- Shipped the first **cross chain bridge**, **$500M** transferred in 2 weeks\n- Grew to **150K daily transactions** and **0→400K accounts**\n- Restored incentive participation **73%→95%** after diagnosing an integrity issue\n\nI owned the full user facing surface: staking, bridging, native DEX, onboarding, DevX.",
  },
  {
    id: "bloq",
    keywords: ["bloq", "visa", "institutional", "custody", "bitgo", "discover", "aum", "api", "0 to 1", "0->1"],
    tool: "reading case study: bloq infrastructure",
    answer:
      "At **Bloq** I shipped institutional staking infrastructure:\n- Led **0→1** on Visa's first Ethereum staking proof of concept, integrating BitGo for custody\n- Scaled to **$25M AuM** across 12 networks\n- Advised Discover Bank's Innovation Team on blockchain strategy\n- Owned three API services: BloqStake, BloqNodes, BloqConnect",
  },
  {
    id: "compliance",
    keywords: ["compliance", "mica", "governance", "regulat", "legal", "canada", "canadian", "europe", "european", "120m"],
    tool: "reading case study: compliance and governance",
    answer:
      "I preserved **$120M ARR** by leading compliance and data governance across European (**MiCA**) and Canadian markets.\n\nI authored the product specs that kept ~**$1B** in staked assets accessible and uninterrupted for **1.3M** global customers through regulatory change.",
  },
  {
    id: "etf",
    keywords: ["etf", "institutional flow", "galaxy", "bitmine", "vendor", "4.5b", "$4.5b", "funds flow"],
    tool: "reading case study: institutional etf",
    answer:
      "I was DRI for institutional vendor integrations (Galaxy, Bitmine), facilitating **$4.5B** in ETF funds flow.\n\nI owned the technical API requirements and stakeholder alignment end to end, from contract through launch.",
  },
  {
    id: "experimentation",
    keywords: ["experiment", "a/b", "ab test", "payout", "180m", "$180m", "at-risk", "at risk", "data analysis", "$900k", "900k"],
    tool: "reading case study: data driven wins",
    answer:
      "A couple of data driven wins I like:\n- Surfaced **$180M** in at risk funds through data analysis and led cross functional recovery to full resolution, **zero customer impact**\n- Captured **$900K ARR** via structured experimentation: spotted a payout flow inefficiency, validated a config change on a partial fleet, then scaled it",
  },
  {
    id: "skills",
    keywords: ["skill", "stack", "tech", "tools", "language", "code", "python", "sql", "solidity", "strong", "good at"],
    tool: "cat skills.json",
    answer:
      "**Technical:** Claude Code, Codex, Opencode, Python, SQL, JavaScript, Solidity, REST, Postman, GitHub, Snowflake, Datadog, Looker, Figma.\n\n**Product:** Cross functional leadership, data analytics, developer experience, funnel optimization, roadmapping, stakeholder management, user research, A/B testing, data governance.\n\n**Languages:** English, Spanish.",
  },
  {
    id: "education",
    keywords: ["education", "school", "degree", "study", "college", "university", "fau", "computer science"],
    tool: "reading education + certifications",
    answer:
      "**B.S. in Computer Science**, Florida Atlantic University (2018).\n\nCertifications: **PMP** (2024), Product Management Certificate from eCornell (2023), and a Data Science Certificate (2018).",
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "reach", "available", "resume", "cv", "connect", "linkedin", "hiring", "talk"],
    tool: "resolving contact channels",
    answer:
      "Happy to talk. You can reach me at **ryanmilrad34@gmail.com** or connect on **LinkedIn**.\n\nThe contact section at the bottom of the page has direct links.",
  },
];

const FALLBACK: Omit<Entry, "keywords"> = {
  id: "fallback",
  tool: "no exact match · suggesting commands",
  answer:
    "I don't have a scripted answer for that one yet. Try one of the suggested commands, or ask about my **roles**, **metrics**, **AI work**, the **$15B migration**, or how to **get in touch**.",
};

export type Response = { tool: string; answer: string };

export function getResponse(query: string): Response {
  const q = query.toLowerCase().trim();
  if (!q) return { tool: FALLBACK.tool, answer: FALLBACK.answer };

  let best: { entry: Entry; score: number } | null = null;

  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length; // longer matches weigh more
    }
    if (score > 0 && (!best || score > best.score)) best = { entry, score };
  }

  if (best) return { tool: best.entry.tool, answer: best.entry.answer };
  return { tool: FALLBACK.tool, answer: FALLBACK.answer };
}
