import { useEffect, useRef, useState } from "react";
import { getAnswer, suggestions } from "../lib/assistant";
import { RichText } from "../lib/rich";

/* Interactive dot field: dots glow and displace around the cursor,
   clicks send a ripple wave through the grid. Pauses cheaply when
   reduced motion is requested. */
function useDotField(heroRef: React.RefObject<HTMLElement | null>, canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 30, INFL = 150;
    let dots: { x: number; y: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let ripples: { x: number; y: number; t: number }[] = [];
    let raf = 0;

    const resize = () => {
      const r = hero.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      canvas.style.width = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      dots = [];
      for (let y = GAP / 2; y < r.height; y += GAP)
        for (let x = GAP / 2; x < r.width; x += GAP) dots.push({ x, y });
      if (reduce) drawStatic();
    };

    const drawStatic = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(20,20,18,0.10)";
      dots.forEach((d) => { ctx.beginPath(); ctx.arc(d.x, d.y, 1.4, 0, 6.2832); ctx.fill(); });
    };

    const frame = (now: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        let a = 0.10, rr = 1.4, ox = 0, oy = 0;
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < INFL) {
          const f = 1 - dist / INFL;
          a += f * 0.42; rr += f * 1.5;
          ox += (dx / dist) * f * 8; oy += (dy / dist) * f * 8;
        }
        for (const rp of ripples) {
          const age = (now - rp.t) / 1000;
          const rad = age * 400;
          const rdx = d.x - rp.x, rdy = d.y - rp.y;
          const rd = Math.sqrt(rdx * rdx + rdy * rdy) || 1;
          const band = Math.abs(rd - rad);
          if (band < 48) {
            const g = (1 - band / 48) * Math.max(0, 1 - age / 1.5);
            a += g * 0.45; rr += g * 1.3;
            ox += (rdx / rd) * g * 9; oy += (rdy / rd) * g * 9;
          }
        }
        ctx.beginPath();
        ctx.arc(d.x + ox, d.y + oy, rr, 0, 6.2832);
        ctx.fillStyle = `rgba(20,20,18,${Math.min(a, 0.62).toFixed(3)})`;
        ctx.fill();
      }
      ripples = ripples.filter((rp) => now - rp.t < 1500);
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("input,button,a")) return;
      const r = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() });
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    hero.addEventListener("mouseleave", onLeave);
    hero.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    resize();
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      hero.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, [heroRef, canvasRef]);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [query, setQuery] = useState("");
  const timer = useRef<number | undefined>(undefined);

  useDotField(heroRef, canvasRef);

  const ask = (q: string) => {
    const text = getAnswer(q);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTyping(true);
    setAnswer(null);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setAnswer(text);
      setTyping(false);
    }, reduce ? 0 : 400);
  };

  return (
    <header className="hero" id="top" ref={heroRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="wrap">
        <div className="eyebrow reveal">Product Manager · Money movement</div>
        <h1 className="reveal">Six years moving money,<br />made into product.</h1>
        <p className="hero-sub reveal">Platforms, infrastructure, and applications, shipped faster with AI.</p>

        <div className="ask reveal">
          <form
            className="ask-bar"
            onSubmit={(e) => { e.preventDefault(); ask(query); }}
          >
            <span className="ask-spark" aria-hidden="true">✦</span>
            <input
              className="ask-input"
              type="text"
              autoComplete="off"
              placeholder="Ask me anything about my work"
              aria-label="Ask me anything about my work"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="ask-go" type="submit">Ask</button>
          </form>
          <div className="ask-chips">
            {suggestions.map((s) => (
              <button
                key={s.label}
                className="chip-ask"
                type="button"
                onClick={() => { setQuery(s.query); ask(s.query); }}
              >
                {s.label}
              </button>
            ))}
          </div>
          {(typing || answer) && (
            <div className="ask-answer">
              <div className="ask-answer-head"><span className="ask-spark" aria-hidden="true">✦</span> Ryan</div>
              <div className="ask-answer-body" aria-live="polite">
                {typing ? <span className="ask-cursor" /> : answer ? <RichText text={answer} /> : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
