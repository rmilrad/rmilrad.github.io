/* =================================================================
   THE ASK BOX BRAIN
   Local, curated, zero cost. Speaks in first person as Ryan.
   Sourced from the vetted work history and story bank; anything
   company sensitive or private stays out by design.

   To upgrade to a live LLM later: keep `suggestions`, replace
   `getAnswer()` with a streaming API call. Nothing else changes.
   ================================================================= */

export type Suggestion = { label: string; query: string };

export const suggestions: Suggestion[] = [
  { label: "Last role", query: "What was your last role?" },
  { label: "Top metrics", query: "What are your most impactful metrics?" },
  { label: "AI work", query: "What have you built with AI?" },
  { label: "How I prioritize", query: "How do you prioritize?" },
];

type Entry = { k: string[]; a: string };

const KB: Entry[] = [
  {
    k: ["about", "who", "yourself", "summary", "bio", "background"],
    a: "I'm Ryan, a product manager with **6+ years** across crypto infrastructure, payments, and fintech.\n\nBefore tech I was a professional chef. Then a computer science degree, then years living and working abroad, where I learned Spanish to fluency, which is how I met my wife. That path shows in how I work: calm under pressure, sharp communication, and an engineer's curiosity.\n\nMost recently at Coinbase I owned the core staking platform, the orchestration service moving customer funds from off chain to on chain across **8 assets**.",
  },
  {
    k: ["last role", "current", "recent", "latest", "coinbase", "most recent", "staking"],
    a: "My most recent role was **Product Manager at Coinbase** (May 2025 to May 2026), as DRI for the core staking platform moving customer funds on chain across **8 assets**.\n- Facilitated **$4.5B** in institutional ETF funds flow; one launch moved **$1B** in its first 24 hours\n- Led the MiCA segregation work protecting **1.3M** users and preserving **$120M** in annual revenue\n- Managed the **$15B** key management migration, saving **$2M/yr** in legacy costs\n- Shipped AI tooling that cut engineering integration time **62%**",
  },
  {
    k: ["metric", "impact", "number", "result", "achievement", "impactful", "proud", "top"],
    a: "The numbers I'm proudest of:\n- **$15B** in assets migrated to new key management infrastructure\n- **$4.5B** in ETF funds flow, **$1B** of it in one launch's first 24 hours\n- **$24M** in live funds migrated in a single day by reframing a 16 week build\n- **$1B+** liquidity attracted to Hemi across **60+** integrations\n- **$180M** in at risk funds surfaced and recovered\n- **62%** faster integrations with an agentic MCP, **75%** with an LLM runbook\n- **0 to 200K+** users on Hemi's consumer apps",
  },
  {
    k: ["compan", "where", "worked", "history", "experience", "timeline", "career"],
    a: "Where I've worked:\n- **Coinbase** · Product Manager · 2025 to 2026\n- **Hemi** · PM to Senior PM · 2023 to 2025\n- **Bloq** · Product Manager · 2021 to 2023\n- **Weight Watchers** · Data Science / ML Intern · 2019",
  },
  {
    k: ["ai", "llm", "mcp", "claude", "tooling", "automation", "agent", "model", "use ai"],
    a: "AI shows up in four places in how I work:\n- **Shipping faster**: an agentic MCP systematized protocol onboarding, cutting integration time from **40 to 15 weeks**\n- **Deciding better**: I use AI to pressure test my proposals before they reach the team\n- **Communicating sharper**: AI skill libraries organize company artifacts so PRDs and dashboards build on past solutions\n- **Going deeper**: on one migration I used AI to ramp into protocol mechanics in days instead of weeks\n\nAI extends my leverage as a product leader, not just my speed. I build daily with Claude Code and Codex.",
  },
  {
    k: ["15b", "$15b", "key management", "infrastructure", "migration", "migrate"],
    a: "I managed the migration of **$15B** in assets onto new key management infrastructure across 8 assets, saving **$2M per year** in legacy costs, without customer facing disruption.\n\nSeparately, my favorite migration story: engineering scoped one move at **16 weeks** against a deadline of weeks. I pushed on what actually had to be true, and we moved **$24M** in live funds in a **single day** with a configuration change.",
  },
  {
    k: ["24m", "$24m", "single day", "one day", "config", "reframe", "16 week", "constraint", "migration", "migrate"],
    a: "Engineering scoped a migration at **16 weeks** against a deadline of weeks, and the deadline could not move. Both were right, because we were solving the wrong problem.\n\nI stopped optimizing the plan and asked what actually had to be true. Walking the full flow with the owning teams, the dependency lived in one place. We moved **$24M** in live customer funds in a **single day** with a configuration change, retired **$2M** in annual cost, and kept the full build on the roadmap.\n\nWhen two teams' constraints collide, the problem is usually the framing, not the constraint.",
  },
  {
    k: ["hemi", "bridge", "tunnel", "l2", "launch", "liquidity", "cross chain", "wallet", "tvl"],
    a: "At **Hemi**, a Bitcoin L2, I grew from PM to Senior PM owning the consumer surface and the bridge:\n- Drove **0 to 200K+** active accounts in six months\n- Led the cross chain bridge end to end: **$500M** facilitated in 2 weeks, **$1B+ TVL** within 3 months\n- The network launch attracted **$1B** in liquidity in 4 weeks across **60+** DeFi integrations\n- Lifted participation from **73% to 95%** with a proof of personhood app",
  },
  {
    k: ["miner", "pop", "wasm", "funnel", "drop off", "declin", "data story"],
    a: "My favorite data story: a first of its kind consumer mining app, **2,000** daily users, participation declining **5%** week over week with no clear cause.\n\nCommunity feedback generated the hypotheses; funnel data told me which ones mattered. We shipped three fixes: wallet balance visibility, session reuse, and a clear path to starting funds. The decline reversed and the app peaked at **100K** unique miners, at one point **93%** of Bitcoin testnet3 traffic.\n\nFeedback tells you what hurts. Data tells you whether it matters.",
  },
  {
    k: ["sybil", "bot", "verification", "personhood", "demos", "integrity", "wau"],
    a: "Weekly participation on Hemi's incentive platform slid from **85% to 73%** while network activity stayed flat, so it wasn't real disengagement. Miners had grown 100x but unique addresses hadn't: bots were gaming rewards.\n\nWe shipped **DEMOS**, an in house proof of personhood app. **100K** people verified in the first week, and participation recovered to **95%**.",
  },
  {
    k: ["bloq", "visa", "custody", "discover", "yield", "onchain"],
    a: "At **Bloq** I shipped onchain financial infrastructure:\n- Owned Visa's first **crypto yield product**, full stack from API to UI\n- Scaled an institutional product line to **$25M** in assets across **12 integrations**\n- Owned delivery across three API infrastructure products\n- Advised **Discover Bank's** innovation team on emerging technology and roadmap strategy",
  },
  {
    k: ["compliance", "governance", "regulat", "mica", "120m", "1.3m", "segregat"],
    a: "New regulation (**MiCA**) meant segregating funds, keys, and ledgers by jurisdiction, or shutting staking down in those markets. The deadline was the regulator's, not ours.\n\nThe insight: segregation lives at the layer controlling the funds, and that differs by protocol. We partitioned one shared pipeline by jurisdiction and enforced it in code, because a missed tag is a breach, not a bug.\n\nMigrated **$1B** with zero downtime and zero commingling, protecting **1.3M** users and **$120M** in annual revenue.",
  },
  {
    k: ["etf", "institutional", "4.5b", "funds flow", "stakeholder", "risk"],
    a: "I was product lead for the third party integrations institutions depended on to launch their **ETFs**. End to end testing was blocked by protocol timelines measured in months, against a client deadline measured in weeks.\n\nThe teams withholding approval weren't refusing to launch. They were being asked to accept a risk nobody had defined. I named each risk, quantified it, bounded it with mitigations, and committed to a date to close the gap. Every stakeholder signed off.\n\nWe launched on the client's date, and the integration moved **$1B in the first 24 hours**.",
  },
  {
    k: ["prioritiz", "roadmap", "tradeoff", "rice", "capacity", "say no", "protect"],
    a: "Prioritization is really a question about what you protect.\n\nAhead of Hemi's launch, a consumer app driving 20K daily users was proposed as a Day 1 build. I scored it with **RICE**, effort scoped with engineering rather than guessed, and it came out high effort, low impact against our north star. I deferred it and said what the deferral protected: the features the launch depended on. We hit go live and drew **$1B+ TVL** within days.\n\nDeferring a feature sounds like rejection. Deferring it to protect what the launch depends on is a tradeoff people can get behind.",
  },
  {
    k: ["design", "designer", "ux", "ui process", "work with design"],
    a: "I never take a UI request straight to design. First the why: which user pain, changing which behavior, moving which metric. That chain has to be complete.\n\nThen engineering, before design, to learn what the technology can and cannot expose. Then I write the user story, not the screen, and hand the designer the problem instead of a solution.\n\nMy job is to make the problem sharp enough that a good designer goes further with it than I could. I review against the user story, not my taste.",
  },
  {
    k: ["data", "sql", "analytic", "experiment", "a/b", "measure"],
    a: "Feedback tells you what hurts. Data tells you whether it matters.\n\nI use community signal and support tickets to generate hypotheses, then validate them against funnel data before committing engineering time. SQL for the questions, event tracking for the funnels, partial fleet validation before full rollouts.\n\nAnd honest attribution: separating a demand driver from a conversion barrier is the difference between understanding your product and getting lucky.",
  },
  {
    k: ["principle", "philosophy", "how do you work", "approach", "operate", "style"],
    a: "A few principles I keep coming back to:\n- Diagnose before solving, and push on the actual requirement before optimizing the proposed solution\n- Prioritization is what you protect\n- Treat compliance and safety as product problems, not gates\n- Enforce decisions in the system, not by policing\n- Feedback tells you what hurts, data tells you whether it matters",
  },
  {
    k: ["chef", "fun", "personal", "hobby", "spanish", "interesting", "cook"],
    a: "Before tech I was a **professional chef**. Kitchens taught me calm under pressure and communication that has to land the first time.\n\nThen a computer science degree, then living and working abroad, where I picked up **Spanish to fluency**, which is how I met my wife.\n\nEngineering taught me depth. Product is where it all meets.",
  },
  {
    k: ["skill", "stack", "tech", "tools", "python"],
    a: "**Product:** metrics ownership, north star definition, funnel optimization, experimentation, roadmapping, stakeholder management.\n\n**Technical & AI:** LLM tooling, Python, SQL, JavaScript, Solidity, Claude Code, Codex, Snowflake, Datadog, Looker.\n\n**Languages:** English, Spanish.",
  },
  {
    k: ["education", "school", "degree", "college", "university", "fau", "certif"],
    a: "**B.S. in Computer Science**, Florida Atlantic University (2020).\n\nCertifications: **PMP** (2024), Product Management Certificate from eCornell (2023), Data Science Certificate (2020).",
  },
  {
    k: ["contact", "hire", "email", "reach", "available", "connect", "linkedin"],
    a: "Happy to talk. Reach me at **ryanmilrad34@gmail.com** or connect on **LinkedIn**.",
  },
];

const FALLBACK =
  "Try asking about my **roles**, **top metrics**, **AI work**, the **$15B migration**, **how I prioritize**, my favorite **data story**, or the **chef to crypto** path.";

export function getAnswer(query: string): string {
  const q = (query || "").toLowerCase().trim();
  if (!q) return FALLBACK;
  let best: Entry | null = null;
  let bestScore = 0;
  for (const e of KB) {
    let s = 0;
    for (const kw of e.k) if (q.includes(kw)) s += kw.length; // longer matches weigh more
    if (s > bestScore) { bestScore = s; best = e; }
  }
  return best ? best.a : FALLBACK;
}
