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
   so the API is the artwork. */
function BloqTerminal() {
  return (
    <div className="term" role="img" aria-label="BloqStake API example: one call creates an Ethereum validator and stakes 32 ETH">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f57" }} />
        <span className="term-dot" style={{ background: "#febc2e" }} />
        <span className="term-dot" style={{ background: "#28c840" }} />
        <span className="term-title">bloqstake · api</span>
      </div>
      <pre className="term-body">
        <code>
          <span className="tc-com"># stake 32 ETH: spin up a validator</span>{"\n"}
          <span className="tc-p">$</span> curl -X <span className="tc-m">POST</span> api.bloq.com/staking/ethereum/mainnet/validators \{"\n"}
          {"    "}-H <span className="tc-s">"Authorization: Bearer &lt;token&gt;"</span> \{"\n"}
          {"    "}-d <span className="tc-s">{"'{ \"withdrawalAddress\": \"0xA9f3…C21e\" }'"}</span>{"\n"}
          {"\n"}
          <span className="tc-ok">201 Created</span>{"\n"}
          {"{"}{"\n"}
          {"  "}<span className="tc-k">"chain"</span>:  <span className="tc-s">"mainnet"</span>,{"\n"}
          {"  "}<span className="tc-k">"pubkey"</span>: <span className="tc-s">"91adb75d…8697b2"</span>,{"\n"}
          {"  "}<span className="tc-k">"status"</span>: <span className="tc-s">"active_online"</span>,{"\n"}
          {"  "}<span className="tc-k">"apr"</span>:    <span className="tc-n">3.42</span>{"\n"}
          {"}"}<span className="term-cursor" />
        </code>
      </pre>
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
      ) : (
        <BloqTerminal />
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
                {media}
                {job.bullets && (
                  <div className="art-detail" id={`d-${job.id}`}>
                    <ul className="bx-more">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{renderInline(b)}</li>
                      ))}
                    </ul>
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
