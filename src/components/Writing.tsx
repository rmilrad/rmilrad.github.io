import { useRef, type CSSProperties } from "react";
import { articles } from "../data/profile";

export default function Writing() {
  const grid = useRef<HTMLDivElement | null>(null);

  const nudge = (dir: number) => {
    const g = grid.current;
    if (!g) return;
    const card = g.querySelector(".wr");
    const step = card ? card.getBoundingClientRect().width + 14 : 300;
    g.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="section" id="writing">
      <div className="wrap">
        <div className="kicker reveal">Writing</div>
        <h2 className="reveal">Research and updates.</h2>
        <p className="lede reveal">Protocol explainers and product deep dives, published across the teams I helped build.</p>
        <div className="wr-grid reveal" ref={grid}>
          {articles.map((a) => (
            <a
              className="wr"
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              style={{ "--c1": a.c1, "--c2": a.c2 } as CSSProperties}
            >
              <span className="wr-cover" data-plx="14"><span className="wr-glyph">{a.glyph}</span></span>
              <h3>{a.title}</h3>
              <p>{a.blurb}</p>
              <span className="wr-meta"><span>{a.date}</span><span>{a.tag}</span></span>
            </a>
          ))}
        </div>
        <div className="wr-nav reveal">
          <button className="wr-arrow" type="button" aria-label="Previous article" onClick={() => nudge(-1)}>←</button>
          <button className="wr-arrow" type="button" aria-label="Next article" onClick={() => nudge(1)}>→</button>
        </div>
      </div>
    </section>
  );
}
