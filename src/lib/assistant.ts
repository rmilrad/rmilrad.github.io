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
  "context loaded: 6+ yrs · 4 companies · money movement + AI",
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
      "I'm Ryan, a product manager with **6+ years** owning money movement and financial infrastructure across institutional and consumer platforms.\n\nMost recently at Coinbase I owned funds flow, key management, and compliance for the institutional product group, while shipping AI powered tooling adopted across product and engineering.\n\nI think like an engineer and operate like a product leader.",
  },
  {
    id: "last-role",
    keywords: ["last role", "current", "recent", "now", "latest", "present", "coinbase", "doing now", "most recent"],
    tool: "querying experience where current = true",
    answer:
      "My most recent role is **Product Manager at Coinbase** (May 2025 to May 2026), in the institutional product group.\n\nHighlights:\n- Facilitated **$4.5B** in funds flow through third party provider API integrations, launching the first ETH ETF\n- Managed the migration of **$15B** in assets to new key management infrastructure, saving **$2M/yr**\n- Led compliance strategy for **1.3M** global users, preserving **$120M** in annual revenue\n- Shipped an agentic **MCP** that cut engineering integration time **62% (40 to 15 weeks)**",
  },
  {
    id: "metrics",
    keywords: ["metric", "impact", "number", "result", "achievement", "impactful", "kpi", "outcome", "biggest", "proud"],
    tool: "aggregating metrics across roles",
    answer:
      "The numbers I'm proudest of:\n- **$15B** in assets migrated to new key management infrastructure\n- **$4.5B** in funds flow facilitated, including the first ETH ETF\n- **$1B** in liquidity attracted to Hemi across 60+ partner integrations\n- **$180M** in at risk funds surfaced and recovered to full resolution\n- **62%** faster engineering integrations with an agentic MCP\n- **0 → 100K** users driven in six months through UI/UX",
  },
  {
    id: "companies",
    keywords: ["compan", "where", "worked", "history", "experience", "timeline", "career", "jobs", "employ"],
    tool: "listing experience[] ordered by date desc",
    answer:
      "Where I've worked:\n- **Coinbase** · Product Manager · 2025 to 2026 · institutional funds flow + AI tooling\n- **Hemi** (built by Bloq) · Senior PM · 2023 to 2025 · L2 launch, bridge, wallets\n- **Bloq** · Product Manager · 2021 to 2023 · onchain financial infrastructure\n- **Weight Watchers** · Software Engineering Intern · 2019 · NLP + data systems\n\nScroll down for the full breakdown of each.",
  },
  {
    id: "ai",
    keywords: ["ai", "llm", "mcp", "claude", "tooling", "automation", "agent", "model", "gen ai", "machine learning"],
    tool: "grep 'AI' experience/",
    answer:
      "AI is central to how I work. At Coinbase I:\n- Shipped an **agentic MCP** for engineering workflows that cut integration time **62% (40 to 15 weeks)**\n- Built an **LLM powered runbook** that cut partner integration time for ten engineers **75% (16 to 4 weeks)**\n- Standardized north star metrics and dashboards to align **100+** cross functional stakeholders\n\nI build daily with Claude Code and Codex.",
  },
  {
    id: "migration",
    keywords: ["15b", "$15b", "migration", "migrate", "key management", "key-management", "cold", "security", "vulnerab", "infrastructure"],
    tool: "reading case study: key management migration",
    answer:
      "I managed the migration of **$15B** in assets onto new key management infrastructure, saving **$2M per year** in legacy costs.\n\nWhy it mattered: it hardened platform security, unlocked downstream scalability, and cut operating costs, all without customer facing disruption.\n\nIt's the kind of deep infra work that doesn't make headlines but is existential for an institutional platform.",
  },
  {
    id: "hemi",
    keywords: ["hemi", "bridge", "l2", "launch", "liquidity", "cross-chain", "cross chain", "dex", "150k", "transactions"],
    tool: "reading case study: hemi launch",
    answer:
      "At **Hemi** (built by Bloq) I owned end to end product strategy for a modular L2:\n- Drove user acquisition **0 → 100K** in six months through UI/UX\n- Attracted **$1B** in liquidity across **60+** partner integrations\n- Led the cross chain **bridge** and **wallet integrations**, facilitating **$500M** in liquidity\n- Grew DAU **70%** over three months through funnel analysis",
  },
  {
    id: "bloq",
    keywords: ["bloq", "visa", "institutional", "custody", "bitgo", "discover", "aum", "api", "0 to 1", "0->1"],
    tool: "reading case study: bloq infrastructure",
    answer:
      "At **Bloq** I shipped onchain financial infrastructure:\n- Owned end to end development of Visa's first **crypto yield product**, full stack from API to UI\n- Led **0 → 1** adoption of core platform services, scaling onchain infra to support **$25M** in user funds\n- Advised **Discover Bank** on emerging trends and technologies",
  },
  {
    id: "compliance",
    keywords: ["compliance", "mica", "governance", "regulat", "legal", "canada", "canadian", "europe", "european", "120m"],
    tool: "reading case study: compliance and governance",
    answer:
      "I led compliance strategy, architecting regionally compliant platform services for **1.3M** global users.\n\nThat work protected a **$1B** international market and preserved **$120M** in annual revenue through regulatory change.",
  },
  {
    id: "etf",
    keywords: ["etf", "institutional flow", "galaxy", "bitmine", "vendor", "4.5b", "$4.5b", "funds flow"],
    tool: "reading case study: institutional etf",
    answer:
      "I facilitated **$4.5B** in funds flow through third party provider **API integrations**, including launching the first **ETH ETF** product offering.\n\nI owned the technical API requirements and stakeholder alignment end to end, from contract through launch.",
  },
  {
    id: "experimentation",
    keywords: ["experiment", "a/b", "ab test", "payout", "180m", "$180m", "at-risk", "at risk", "data analysis", "$900k", "900k"],
    tool: "reading case study: data driven wins",
    answer:
      "A couple of data driven wins I like:\n- Surfaced **$180M** in at risk funds through data analysis and led the financial team recovery to full resolution\n- Captured **$900K** in revenue by optimizing retail payout flows with **SQL** and experimentation",
  },
  {
    id: "skills",
    keywords: ["skill", "stack", "tech", "tools", "language", "code", "python", "sql", "solidity", "strong", "good at"],
    tool: "cat skills.json",
    answer:
      "**Product:** Metrics ownership, north star definition, funnel optimization, testing & experimentation, roadmapping, stakeholder management, cross functional leadership, user research, developer experience, Agile.\n\n**Technical & AI:** LLM powered tooling, workflow automation, Python, SQL, JavaScript, Solidity, REST, Postman, Snowflake, Datadog, Looker, Claude Code, Codex, GitHub, Linear, Jira, Figma.\n\n**Languages:** English, Spanish.",
  },
  {
    id: "education",
    keywords: ["education", "school", "degree", "study", "college", "university", "fau", "computer science"],
    tool: "reading education + certifications",
    answer:
      "**B.S. in Computer Science**, Florida Atlantic University (2020).\n\nCertifications: **PMP** (2024), Product Management Certificate from eCornell (2023), and a Data Science Certificate (2020).",
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
