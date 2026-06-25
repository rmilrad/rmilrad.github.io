import { useEffect, useRef, useState } from "react";
import { bootLines, getResponse, suggestions } from "../lib/assistant";
import { RichText } from "../lib/rich";
import "./Terminal.css";

const placeholders = suggestions.map((s) => s.query);

type Phase = "tool" | "typing" | "done";

type Msg =
  | { id: number; role: "user"; text: string }
  | { id: number; role: "assistant"; tool: string; text: string; phase: Phase; shown: number };

let counter = 0;
const nextId = () => ++counter;

function patch(list: Msg[], id: number, fields: Partial<Extract<Msg, { role: "assistant" }>>): Msg[] {
  return list.map((m) => (m.id === id && m.role === "assistant" ? { ...m, ...fields } : m));
}

export default function Terminal() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [phIndex, setPhIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const last = messages[messages.length - 1];
  const activeId = last && last.role === "assistant" && last.phase !== "done" ? last.id : null;
  const activePhase = last && last.role === "assistant" ? last.phase : null;
  const busy = activeId !== null;

  /* Drive the tool-use → streaming animation. */
  useEffect(() => {
    if (activeId === null) return;
    let cancelled = false;

    if (activePhase === "tool") {
      const t = setTimeout(() => {
        if (!cancelled) setMessages((m) => patch(m, activeId, { phase: "typing" }));
      }, 620);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    }

    if (activePhase === "typing") {
      const interval = setInterval(() => {
        setMessages((m) => {
          const msg = m.find((x) => x.id === activeId);
          if (!msg || msg.role !== "assistant") {
            clearInterval(interval);
            return m;
          }
          const tokens = msg.text.split(/(\s+)/);
          const next = msg.shown + 2; // reveal a word + its trailing space
          if (next >= tokens.length) {
            clearInterval(interval);
            return patch(m, activeId, { shown: tokens.length, phase: "done" });
          }
          return patch(m, activeId, { shown: next });
        });
      }, 24);
      return () => {
        cancelled = true;
        clearInterval(interval);
      };
    }
  }, [activeId, activePhase]);

  /* Keep the conversation scrolled to the latest line. */
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  /* Cycle example prompts in the input while it sits idle. */
  useEffect(() => {
    if (focused || input || busy) return;
    const t = setInterval(() => setPhIndex((i) => (i + 1) % placeholders.length), 2800);
    return () => clearInterval(t);
  }, [focused, input, busy]);

  function submit(query: string) {
    const q = query.trim();
    if (!q || busy) return;
    const resp = getResponse(q);
    setMessages((m) => [
      ...m,
      { id: nextId(), role: "user", text: q },
      { id: nextId(), role: "assistant", tool: resp.tool, text: resp.answer, phase: "tool", shown: 0 },
    ]);
    setInput("");
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="terminal-title">ryan@portfolio — agent</span>
        <span className="terminal-live">
          <span className="live-dot" /> interactive
        </span>
      </div>

      <div className="terminal-body" ref={bodyRef}>
        <div className="boot">
          {bootLines.map((line, i) => (
            <div className="boot-line" key={i}>
              {i === 0 ? <span className="boot-badge">●</span> : <span className="boot-prefix">›</span>}
              {line}
            </div>
          ))}
        </div>

        {messages.map((m) => {
          if (m.role === "user") {
            return (
              <div className="msg msg-user" key={m.id}>
                <span className="prompt">›</span>
                <span>{m.text}</span>
              </div>
            );
          }
          const tokens = m.text.split(/(\s+)/);
          const visible = m.phase === "done" ? m.text : tokens.slice(0, m.shown).join("");
          return (
            <div className="msg msg-agent" key={m.id}>
              <div className={`tool-line ${m.phase === "tool" ? "running" : "done"}`}>
                <span className="tool-dot" />
                <span className="tool-text">{m.tool}</span>
                {m.phase !== "tool" && <span className="tool-check">done</span>}
              </div>
              {m.phase !== "tool" && (
                <div className="answer">
                  <RichText text={visible} />
                  {m.phase === "typing" && <span className="stream-caret" />}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="terminal-ask">
        <div className="ask-hint">
          <span className="blink-square" /> ask my agent anything — type below or tap a prompt
        </div>

        <div className={`ask-bar ${focused ? "ask-bar-focused" : ""}`}>
          <span className="prompt prompt-input">›</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            placeholder={busy ? "thinking…" : placeholders[phIndex]}
            disabled={busy}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit(input);
            }}
            aria-label="Ask Ryan's portfolio assistant"
          />
          <kbd className="ask-enter">↵ enter</kbd>
        </div>

        <div className="chips">
          {suggestions.map((s) => (
            <button key={s.label} className="chip" disabled={busy} onClick={() => submit(s.query)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
