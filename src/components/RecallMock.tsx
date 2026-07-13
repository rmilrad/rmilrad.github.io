import { useState } from "react";
import { Markdown } from "../lib/markdown";
import { recallChats, recallStats, recallRecent, savedSoFar, type BadgeKind } from "../data/recall";

const dotClass: Record<BadgeKind, string> = { fresh: "rk-dot-fresh", memory: "rk-dot-memory", synth: "rk-dot-synth" };

function Dashboard() {
  return (
    <div className="rk-dash">
      <div className="rk-stats">
        {recallStats.map((s) => (
          <div className="rk-stat" key={s.label}>
            <div className="rk-stat-l">{s.label}</div>
            <div className={`rk-stat-v${s.tone ? ` rk-${s.tone}` : ""}`}>{s.value}</div>
            <div className="rk-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="rk-recent">
        <div className="rk-recent-h">Recent questions</div>
        <div className="rk-recent-sub">Where each answer came from, how long it took, what it saved, and how much it added to memory.</div>
        {recallRecent.map((r, i) => (
          <div className="rk-row" key={i}>
            <div className="rk-row-q">
              <div className="rk-row-title">{r.q}</div>
              <div className="rk-row-meta">
                {r.when} · <span className={`rk-src ${dotClass[r.kind]}`}><span className="rk-dot" /> {r.source}</span>
              </div>
            </div>
            <div className="rk-cell"><span className="rk-cell-l">Saved</span><span className={`rk-cell-v${r.saved !== "$0.00" ? " rk-green" : ""}`}>{r.saved}</span></div>
            <div className="rk-cell"><span className="rk-cell-l">Time</span><span className="rk-cell-v">{r.time}</span></div>
            <div className="rk-cell"><span className="rk-cell-l">To memory</span><span className="rk-cell-v">{r.chunks}<span className="rk-cell-u">chunks</span></span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RecallMock() {
  const [view, setView] = useState<string>("dashboard");
  const chat = recallChats.find((c) => c.id === view);
  const crumb = view === "dashboard" ? "Dashboard" : chat?.messages[0].q ?? "";

  return (
    <div className="rk">
      <aside className="rk-side">
        <div className="rk-brand"><span className="rk-logo" aria-hidden="true" /> Recall</div>
        <button type="button" className="rk-item rk-newchat"><span className="rk-ic">+</span> New chat</button>
        <button type="button" className={`rk-item${view === "dashboard" ? " is-on" : ""}`} onClick={() => setView("dashboard")}>
          <span className="rk-ic" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14"><g fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1.4" /><rect x="9" y="1" width="6" height="6" rx="1.4" /><rect x="1" y="9" width="6" height="6" rx="1.4" /><rect x="9" y="9" width="6" height="6" rx="1.4" /></g></svg>
          </span> Dashboard
        </button>
        <div className="rk-recents-l">Recents</div>
        {recallChats.map((c) => (
          <button type="button" key={c.id} className={`rk-item rk-chat${view === c.id ? " is-on" : ""}`} onClick={() => setView(c.id)}>
            <span className="rk-chat-t">{c.navTitle}</span>
            <span className="rk-chat-w">{c.when}</span>
          </button>
        ))}
        <div className="rk-user">
          <span className="rk-av">R</span>
          <span className="rk-user-t"><b>ryanmilrad34</b><span>Recall · Local</span></span>
        </div>
      </aside>

      <main className="rk-main">
        <header className="rk-top">
          <div className="rk-crumb"><span>Recall</span> / <span className="rk-crumb-cur">{crumb}</span></div>
          <div className="rk-saved">Saved so far <b>{savedSoFar}</b></div>
        </header>

        <div className="rk-scroll">
          {view === "dashboard" ? (
            <Dashboard />
          ) : (
            chat?.messages.map((m, i) => (
              <div className="rk-turn" key={i}>
                <div className="rk-q">{m.q}</div>
                <div className="rk-answer"><Markdown src={m.md} /></div>
                <div className={`rk-badge ${dotClass[m.badge.kind]}`}>
                  <span className="rk-dot" /> {m.badge.label}
                  {m.badge.meta && <span className="rk-badge-meta"> · {m.badge.meta}</span>}
                </div>
              </div>
            ))
          )}
        </div>

        {view !== "dashboard" && (
          <div className="rk-reply-wrap">
            <div className="rk-reply"><span className="rk-reply-ph">Reply to Recall...</span><span className="rk-send" aria-hidden="true">↑</span></div>
            <div className="rk-reply-bar"><span className="rk-live"><span className="rk-dot rk-dot-live" /> Live · Opus 4.8</span><span>Enter to send · Shift+Enter for newline</span></div>
          </div>
        )}
      </main>
    </div>
  );
}
