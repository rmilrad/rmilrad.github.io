import { useEffect, useRef, useState, type CSSProperties } from "react";
import { jobs, type Job } from "../data/profile";
import { renderInline } from "../lib/rich";

/* Brand lockups — transparent, no tiles. Bloq is the official
   wordmark SVG; Hemi is the official mark pulled from hemi.xyz. */
function Lockup({ id }: { id: string }) {
  if (id === "coinbase") {
    return (
      <span className="lgo" aria-label="Coinbase">
        <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#0052ff" />
          <path d="M12 5.4a6.6 6.6 0 1 0 6.32 8.5h-3.55A3.3 3.3 0 0 1 8.7 12a3.3 3.3 0 0 1 6.07-1.9h3.55A6.6 6.6 0 0 0 12 5.4Z" fill="#fff" />
        </svg>
        <span className="lgo-word" style={{ color: "#0052ff" }}>coinbase</span>
      </span>
    );
  }
  if (id === "hemi") {
    return (
      <span className="lgo" aria-label="Hemi">
        <img src="/images/hemi-mark.png" width={21} height={21} alt="" />
        <span className="lgo-word" style={{ color: "#141412" }}>hemi</span>
      </span>
    );
  }
  if (id === "bloq") {
    return (
      <span className="lgo" aria-label="Bloq">
        <svg viewBox="0 0 78.333 40" width="43" height="22" aria-hidden="true">
          <g fill="#2d9cff">
            <path d="M4.938,2.449V28.48A2.469,2.469,0,0,1,0,28.48V2.449A2.468,2.468,0,0,1,4.212.721a2.4,2.4,0,0,1,.727,1.729" transform="translate(24.624 0)" />
            <path d="M11.122,30.937a11.292,11.292,0,0,1-2.241-.224A11.138,11.138,0,0,1,1.9,26.076,10.909,10.909,0,0,1,0,19.911,1.979,1.979,0,0,1,.007,19.7.413.413,0,0,1,0,19.6V2.449A2.432,2.432,0,0,1,.723.717a2.484,2.484,0,0,1,3.5,0,2.424,2.424,0,0,1,.719,1.729v8.29a11.142,11.142,0,0,1,6.184-1.861,11.286,11.286,0,0,1,2.24.224,11.124,11.124,0,0,1,6.976,4.639,10.952,10.952,0,0,1,0,12.336,11.117,11.117,0,0,1-6.976,4.637A11.288,11.288,0,0,1,11.122,30.937Zm0-17.2A6.236,6.236,0,0,0,6.971,15.3a6.14,6.14,0,0,0-2.033,3.872,6.018,6.018,0,0,0-.044.736v.118a6.1,6.1,0,0,0,.523,2.361A6.166,6.166,0,0,0,6,23.418,6.248,6.248,0,0,0,16.28,23.36a6.161,6.161,0,0,0,.574-1.048,6.147,6.147,0,0,0,0-4.806,6.167,6.167,0,0,0-.574-1.05,6.226,6.226,0,0,0-5.158-2.724Z" />
            <path d="M11.118,22.057a11.288,11.288,0,0,1-2.241-.224A11.131,11.131,0,0,1,1.9,17.194a10.946,10.946,0,0,1,0-12.332A11.122,11.122,0,0,1,8.877.224a11.314,11.314,0,0,1,4.481,0,11.131,11.131,0,0,1,6.978,4.638,10.947,10.947,0,0,1,0,12.332,11.121,11.121,0,0,1-6.978,4.639A11.283,11.283,0,0,1,11.118,22.057Zm0-17.2A6.235,6.235,0,0,0,5.955,7.575a6.159,6.159,0,0,0-.574,1.049,6.151,6.151,0,0,0,0,4.808,6.162,6.162,0,0,0,.574,1.049,6.248,6.248,0,0,0,10.324,0,6.163,6.163,0,0,0,.574-1.049,6.151,6.151,0,0,0,0-4.808,6.16,6.16,0,0,0-.574-1.049,6.232,6.232,0,0,0-5.161-2.722Z" transform="translate(32.08 8.846)" />
            <path d="M19.767,31.106a2.434,2.434,0,0,1-1.742-.721,2.4,2.4,0,0,1-.727-1.729V20.2a11.1,11.1,0,0,1-6.184,1.861,11.287,11.287,0,0,1-2.24-.224A11.126,11.126,0,0,1,1.9,17.2a10.956,10.956,0,0,1,0-12.336A11.114,11.114,0,0,1,8.874.224a11.316,11.316,0,0,1,4.481,0,11.136,11.136,0,0,1,6.981,4.639,10.924,10.924,0,0,1,1.9,6.171c0,.108,0,.221-.007.324a.985.985,0,0,1,.007.147V28.657a2.432,2.432,0,0,1-.723,1.732,2.471,2.471,0,0,1-1.746.717ZM11.115,4.855A6.218,6.218,0,0,0,5.383,8.628a6.125,6.125,0,0,0,.574,5.854,6.254,6.254,0,0,0,9.309,1.152A6.13,6.13,0,0,0,17.3,11.769a5.647,5.647,0,0,0,.045-.706v-.029a6.1,6.1,0,0,0-.489-2.405,6.162,6.162,0,0,0-.574-1.05,6.235,6.235,0,0,0-5.165-2.724Z" transform="translate(55.995 8.878)" />
          </g>
        </svg>
      </span>
    );
  }
  // Weight Watchers
  return (
    <span className="lgo" aria-label="Weight Watchers">
      <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#3383c4" />
        <path d="M6 4.6l2.4 6.6 2.3-5.1 2.3 5.1 2.4-6.6" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinejoin="miter" />
        <path d="M6 12.6l2.4 6.6 2.3-5.1 2.3 5.1 2.4-6.6" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinejoin="miter" />
      </svg>
      <span className="lgo-word" style={{ color: "#141412" }}>WeightWatchers</span>
    </span>
  );
}

/* The BloqStake API, condensed from the real docs: one call spins up
   an Ethereum validator and stakes 32 ETH. The product was the API,
   so the API is the artwork. Types itself out when scrolled into
   view, finishing in about two seconds. */
const TERM_TOKENS: { t: string; c?: string }[] = [
  { t: "# stake 32 ETH: spin up a validator", c: "tc-com" }, { t: "\n" },
  { t: "$", c: "tc-p" }, { t: " curl -X " }, { t: "POST", c: "tc-m" },
  { t: " api.bloq.com/staking/ethereum/mainnet/validators \\\n    -H " },
  { t: "\"Authorization: Bearer <token>\"", c: "tc-s" }, { t: " \\\n    -d " },
  { t: "'{ \"withdrawalAddress\": \"0xA9f3…C21e\" }'", c: "tc-s" }, { t: "\n\n" },
  { t: "201 Created", c: "tc-ok" }, { t: "\n{\n  " },
  { t: "\"chain\"", c: "tc-k" }, { t: ":  " }, { t: "\"mainnet\"", c: "tc-s" }, { t: ",\n  " },
  { t: "\"pubkey\"", c: "tc-k" }, { t: ": " }, { t: "\"91adb75d…8697b2\"", c: "tc-s" }, { t: ",\n  " },
  { t: "\"status\"", c: "tc-k" }, { t: ": " }, { t: "\"active_online\"", c: "tc-s" }, { t: ",\n  " },
  { t: "\"apr\"", c: "tc-k" }, { t: ":    " }, { t: "3.42", c: "tc-n" }, { t: "\n}" },
];
const TERM_TOTAL = TERM_TOKENS.reduce((n, tok) => n + tok.t.length, 0);

/* Render the first `count` characters across the colored tokens.
   Pass TERM_TOTAL for the full (ghost) copy that reserves the box size. */
function renderTokens(count: number) {
  let used = 0;
  return TERM_TOKENS.map((tok, i) => {
    const remaining = count - used;
    used += tok.t.length;
    if (remaining <= 0) return null;
    const text = remaining >= tok.t.length ? tok.t : tok.t.slice(0, remaining);
    return tok.c ? <span className={tok.c} key={i}>{text}</span> : <span key={i}>{text}</span>;
  });
}

function BloqTerminal() {
  const [typed, setTyped] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setTyped(TERM_TOTAL); return; }
    let raf = 0;
    const DURATION = 2200; // ms to fully type out
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const n = Math.min(TERM_TOTAL, Math.round(((now - t0) / DURATION) * TERM_TOTAL));
          setTyped(n);
          if (n < TERM_TOTAL) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="term" ref={ref} role="img" aria-label="BloqStake API example: one call creates an Ethereum validator and stakes 32 ETH">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f57" }} />
        <span className="term-dot" style={{ background: "#febc2e" }} />
        <span className="term-dot" style={{ background: "#28c840" }} />
        <span className="term-title">bloqstake · api</span>
      </div>
      <pre className="term-body">
        {/* ghost copy reserves the final size so typing never reflows the box */}
        <code className="term-ghost" aria-hidden="true">{renderTokens(TERM_TOTAL)}</code>
        <code className="term-live">
          {renderTokens(typed)}
          <span className="term-cursor" />
        </code>
      </pre>
    </div>
  );
}

/* Hemi Tunnel scene: the transaction history sits behind a scrim, and
   as the box scrolls up through the viewport the Review Deposit drawer
   slides in from the right while the screen behind it dims. Driven by
   a single --p (0..1) progress variable the CSS reads. */
function HemiScene() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.style.setProperty("--p", "1"); return; }
    let raf = 0;
    const compute = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.82; // drawer starts opening when the scene enters here
      const end = vh * 0.36; // fully open by here
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    compute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hemi-scene" ref={ref} role="img" aria-label="The Hemi Tunnel: transaction history and a confirmed cross chain deposit">
      <img className="hemi-base" src="/images/hemi-txns.png" alt="" />
      <span className="hemi-scrim" aria-hidden="true" />
      <img className="hemi-panel" src="/images/hemi-deposit.png" alt="" />
    </div>
  );
}

/* Network logos from a CC0 crypto icon set; each carries its own
   brand colored circle, so they drop straight into the card marks. */
const MARK_ETH = <img className="cb-logo" src="/images/coin-eth.svg" width={30} height={30} alt="" />;
const MARK_SOL = <img className="cb-logo" src="/images/coin-sol.svg" width={30} height={30} alt="" />;
const MARK_ADA = <img className="cb-logo" src="/images/coin-ada.svg" width={30} height={30} alt="" />;
const MARK_AVAX = <img className="cb-logo" src="/images/coin-avax.svg" width={30} height={30} alt="" />;

/* Coinbase asset grid: floating cards on a dark panel with soft glows.
   Each layer drifts opposite the cursor (and on scroll) by its own depth
   for a 3D feel. Everything is clipped inside the panel. */
function CoinbaseAssets() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    const loop = () => {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      el.style.setProperty("--mx", cx.toFixed(3));
      el.style.setProperty("--my", cy.toFixed(3));
      raf = Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002 ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      if (!r.width) return;
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    };
    const onLeave = () => { tx = 0; ty = 0; kick(); };
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const sy = ((r.top + r.height / 2) / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--sy", Math.max(-1, Math.min(1, sy)).toFixed(3));
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cb-scene" ref={ref} role="img" aria-label="Coinbase staking across major proof of stake assets">
      <div className="cb-card" style={{ "--d": 10, left: "1%", top: "34%" } as CSSProperties}>
        <span className="cb-mark">{MARK_SOL}</span>
        <span className="cb-name">Solana</span>
      </div>
      <div className="cb-card" style={{ "--d": 8, left: "63%", top: "14%" } as CSSProperties}>
        <span className="cb-mark">{MARK_ADA}</span>
        <span className="cb-name">Cardano</span>
      </div>
      <div className="cb-card cb-front" style={{ "--d": 12, left: "45%", top: "49%" } as CSSProperties}>
        <span className="cb-mark">{MARK_AVAX}</span>
        <span className="cb-name">Avalanche</span>
      </div>
      <div className="cb-card cb-top" style={{ "--d": 13, left: "21%", top: "3%" } as CSSProperties}>
        <span className="cb-mark">{MARK_ETH}</span>
        <span className="cb-tag">Staking enabled</span>
        <span className="cb-name">Ethereum</span>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false); // reveal in
  const [lit, setLit] = useState(false); // grayscale to color focus
  const ref = useRef<HTMLElement | null>(null);

  /* The card's className is dynamic, so React re renders would wipe
     classes added from outside via classList. All three states live
     in React instead; the global reveal observer skips .bx. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setSeen(true);
      setLit(true);
      return;
    }
    const ioIn = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setSeen(true); ioIn.disconnect(); } }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    const ioLit = new IntersectionObserver(
      (es) => es.forEach((e) => setLit(e.isIntersecting)),
      { rootMargin: "-22% 0px -22% 0px" },
    );
    ioIn.observe(el);
    ioLit.observe(el);
    return () => { ioIn.disconnect(); ioLit.disconnect(); };
  }, []);

  const vars = {
    "--bx-bg": job.colors.bg,
    "--bx-hd": job.colors.hd,
    "--bx-tx": job.colors.tx,
    "--bx-rows": job.colors.rows,
    "--bx-mk": job.colors.mk,
  } as CSSProperties;

  const media = job.media && (
    <div className={`art-media${job.media.kind === "image" ? " tn-shot-wrap" : ""}`}>
      {job.media.kind === "rows" ? (
        <div className="uirows">
          {job.media.rows.map((r) => (
            <div className="uirow" key={r.name}>
              <span className="uico">{r.icon}</span>
              <span className="uiname">{r.name}</span>
              <span className="uiright">
                <span className="uiamt">{r.value}</span>
                <span className="uisub">{r.sub}</span>
              </span>
            </div>
          ))}
        </div>
      ) : job.media.kind === "image" ? (
        <img className="tn-shot" src={job.media.src} alt={job.media.alt} />
      ) : job.media.kind === "code" ? (
        <BloqTerminal />
      ) : job.media.kind === "scene" ? (
        <HemiScene />
      ) : job.media.kind === "assets" ? (
        <CoinbaseAssets />
      ) : (
        <div className="art-blank" aria-hidden="true" />
      )}
    </div>
  );

  const text = (
    <div>
      <div className="bx-kick"><Lockup id={job.id} /></div>
      <h3>{job.headline}</h3>
      <p className="bx-body">{renderInline(job.body)}</p>
      <p className="bx-role">{job.role}</p>
      {job.media && job.bullets && (
        <button
          className="bx-cta"
          type="button"
          aria-expanded={open}
          aria-controls={`d-${job.id}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less " : "The full story "}<span className="chev">⌄</span>
        </button>
      )}
    </div>
  );

  return (
    <article
      className={`bx reveal${seen ? " in" : ""}${lit ? " lit" : ""}${open ? " open" : ""}`}
      style={vars}
      ref={ref}
      id={`bx-${job.id}`}
    >
      {job.compact ? (
        text
      ) : (
        <div className="bx-cols">
          {text}
          <div className="bx-art" data-plx={job.plx}>
            {job.media ? (
              <div className="art-stage">
                <div className="art-fold art-fold-media"><div className="art-fold-in">{media}</div></div>
                {job.bullets && (
                  <div className="art-fold art-fold-detail" id={`d-${job.id}`}>
                    <div className="art-fold-in">
                      <ul className="bx-more">
                        {job.bullets.map((b, i) => (
                          <li key={i}>{renderInline(b)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              job.bullets && (
                <ul className="bx-more">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{renderInline(b)}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="kicker reveal">Work history</div>
        <h2 className="reveal">Built for all the ways money moves.</h2>
        <p className="lede reveal">From first commit to institutional scale, the same job every time: turn hard infrastructure into product people trust.</p>
        <div className="bento">
          {jobs.map((j) => (
            <JobCard job={j} key={j.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
