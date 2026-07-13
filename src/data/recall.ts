import revolutMd from "./recall-revolut.md?raw";
import stripeMd from "./recall-stripe.md?raw";

/* Content for the interactive Recall mock: the two demo conversations
   (Stripe shows a fresh answer then the same question answered from
   memory, demonstrating the savings) plus the dashboard. */
export type BadgeKind = "fresh" | "memory" | "synth";
export type Badge = { kind: BadgeKind; label: string; meta?: string };

export type RecallMessage = { q: string; md: string; badge: Badge };
export type RecallChat = { id: string; navTitle: string; when: string; messages: RecallMessage[] };

export const savedSoFar = "$0.05";

export const recallChats: RecallChat[] = [
  {
    id: "revolut",
    navTitle: "How do I integrate Revolut...",
    when: "just now",
    messages: [
      {
        q: "How do I integrate Revolut payment systems into my application?",
        md: revolutMd,
        badge: { kind: "fresh", label: "Fresh model call", meta: "Opus 4.8" },
      },
    ],
  },
  {
    id: "stripe",
    navTitle: "How do I integrate Stripe...",
    when: "1h ago · $0.03 saved",
    messages: [
      {
        q: "How do I integrate Stripe payments into my application?",
        md: stripeMd,
        badge: { kind: "fresh", label: "Fresh model call", meta: "Opus 4.8" },
      },
      {
        q: "How do i integrate stripe payments?",
        md: stripeMd,
        badge: { kind: "memory", label: "Answered from memory", meta: "saved $0.04 · $0 spent · ~2.7k tok saved" },
      },
    ],
  },
];

export type RecallStat = { label: string; value: string; sub: string; tone?: "green" | "orange" };
export const recallStats: RecallStat[] = [
  { label: "Saved with memory", value: "$0.05", sub: "What memory served you for free", tone: "green" },
  { label: "What you spent", value: "$0.14", sub: "Total AI cost", tone: "orange" },
  { label: "From memory", value: "60%", sub: "3 of 5 answers" },
  { label: "Times you re-asked", value: "0%", sub: "Memory answer felt off" },
];

export type RecallRow = {
  q: string; when: string; kind: BadgeKind; source: string; saved: string; time: string; chunks: string;
};
export const recallRecent: RecallRow[] = [
  { q: "How do I integrate Revolut payment systems into my application?", when: "1m ago", kind: "fresh", source: "Fresh model call", saved: "$0.00", time: "—", chunks: "+4" },
  { q: "How do I integrate Plaid payments into my application?", when: "2m ago", kind: "memory", source: "Answered from memory", saved: "$0.0070", time: "0.5s", chunks: "0" },
  { q: "How do I integrate Plaid payments into my application?", when: "2m ago", kind: "synth", source: "Synthesized from your notes", saved: "$0.0023", time: "—", chunks: "+1" },
  { q: "How do i integrate stripe payments?", when: "1h ago", kind: "memory", source: "Answered from memory", saved: "$0.04", time: "2.5s", chunks: "0" },
  { q: "How do I integrate Stripe payments into my application?", when: "1h ago", kind: "fresh", source: "Fresh model call", saved: "$0.00", time: "—", chunks: "+4" },
];
