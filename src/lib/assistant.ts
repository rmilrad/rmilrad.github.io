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
    k: ["who are", "yourself", "summary", "bio", "background", "introduce"],
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
    k: ["compan", "where", "worked", "history", "experience", "career"],
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
    a: "Before I optimize a proposed solution, I push on the actual requirement. When two teams' constraints collide, the problem is usually the framing, not the constraint, so I ask what actually has to be true and work back from there.\n\nThe proof point: engineering once scoped a migration at **16 weeks** against a deadline of weeks, and both constraints were real. Reframing the requirement turned it into a configuration change, and we moved **$24M** in live customer funds in a **single day**, retiring **$2M** in annual cost.\n\nAsk me about the **$24M migration** if you want the full story.",
  },
  {
    k: ["stakeholder", "alignment", "buy in", "exec", "leadership", "conflict", "pushback", "disagree", "blocked"],
    a: "Pushback rarely means the answer is no. It usually means nobody wants to own an undefined risk alone.\n\nSo my strategy is to make the risk explicit: name each one, quantify the business impact, bound it with a mitigation, and commit to a date to close it. That turns a unilateral approval into a joint decision, and shared ownership is what unblocks it. I bring stakeholders into risk decisions rather than asking them to approve mine.\n\nThe sharpest test of this was the **institutional ETF launches** I led at Coinbase. Ask me about those if you want the specifics.",
  },
  {
    k: ["timeline", "deadline", "pressure", "schedule", "scope", "on time", "slip", "crunch"],
    a: "When a timeline is at risk, there are four levers: scope, time, resources, and quality. Quality never gets cut deliberately, and scope is where I go first.\n\nBefore pulling any lever I diagnose why the timeline is at risk, because a wrong assumption and underestimated work need different fixes. Then I cut around the core, never into it, and I communicate what the cut protects so the tradeoff is one people can get behind.\n\nTwo launches tested this hard: the **MiCA segregation** work against a regulator's immovable date, and the **ETF launches** against a client's. Ask me about either.",
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
    k: ["compliance", "governance", "regulat", "legal"],
    a: "I treat compliance as a product problem, not a gate at the end. Legal and compliance come in as design partners from day one, the mandate gets translated into a technical boundary, and the boundary gets enforced in code, because a missed control is a breach, not a bug.\n\nThat approach carried the **MiCA segregation** work at Coinbase: **$1B** migrated with zero downtime and zero commingling, **1.3M** users protected, **$120M** in annual revenue preserved. Ask me about MiCA for the full story.",
  },
  {
    k: ["mica", "segregat", "commingl", "jurisdiction", "120m", "1.3m", "hardest", "challenging", "difficult"],
    a: "New regulation (**MiCA**) meant segregating funds, keys, and ledgers by jurisdiction, or shutting staking down in those markets. The deadline was the regulator's, not ours.\n\nThe insight: segregation lives at the layer controlling the funds, and that differs by protocol. We partitioned one shared pipeline by jurisdiction and enforced it in code, because a missed tag is a breach, not a bug.\n\nMigrated **$1B** with zero downtime and zero commingling, protecting **1.3M** users and **$120M** in annual revenue.",
  },
  {
    k: ["etf", "etf launch", "institutional", "4.5b", "funds flow"],
    a: "I was product lead for the third party integrations institutions depended on to launch their **ETFs**. End to end testing was blocked by protocol timelines measured in months, against a client deadline measured in weeks.\n\nThe teams withholding approval weren't refusing to launch. They were being asked to accept a risk nobody had defined. I named each risk, quantified it, bounded it with mitigations, and committed to a date to close the gap. Every stakeholder signed off.\n\nWe launched on the client's date, and the integration moved **$1B in the first 24 hours**.",
  },
  {
    k: ["prioritiz", "roadmap", "tradeoff", "rice", "capacity", "say no", "protect"],
    a: "Prioritization is really a question about what you protect.\n\nI start by getting clear on what the goal actually is, then use **RICE** to make the comparison explicit, with effort scoped alongside engineering rather than guessed. The score starts the conversation, it never substitutes for it. And when I defer something, I say what the deferral protects, because that turns a rejection into a tradeoff people can get behind.\n\nThe cleanest example is **Hemi's network launch**, where protecting the Day 1 feature set drew **$1B+ TVL** within days. Ask me about it.",
  },
  {
    k: ["design", "designer", "ux", "ui process", "work with design"],
    a: "I never take a UI request straight to design. First the why: which user pain, changing which behavior, moving which metric. That chain has to be complete.\n\nThen engineering, before design, to learn what the technology can and cannot expose. Then I write the user story, not the screen, and hand the designer the problem instead of a solution.\n\nMy job is to make the problem sharp enough that a good designer goes further with it than I could. I review against the user story, not my taste. The **Hemi miner** redesign is the cleanest example, ask me about it.",
  },
  {
    k: ["data", "sql", "analytic", "experiment", "a/b", "measure"],
    a: "Feedback tells you what hurts. Data tells you whether it matters.\n\nI use community signal and support tickets to generate hypotheses, then validate them against funnel data before committing engineering time. SQL for the questions, event tracking for the funnels, partial fleet validation before full rollouts.\n\nAnd honest attribution: separating a demand driver from a conversion barrier is the difference between understanding your product and getting lucky. Ask me about the **Hemi miner funnel** to see it in action.",
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
  "Try asking about my **roles**, **top metrics**, **AI work**, **stakeholder management**, **timelines**, **how I prioritize**, my favorite **data story**, or the **chef to crypto** path.";

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
