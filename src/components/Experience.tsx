import { useState, useEffect, useRef } from "react";
import { experience, type JobImage } from "../data/profile";
import { renderInline } from "../lib/rich";
import Reveal from "./Reveal";
import "./Experience.css";

function Slide({ img }: { img: JobImage }) {
  const [failed, setFailed] = useState(false);
  const showImage = img.src && !failed;
  return (
    <div className={`slide ${showImage ? "" : "slide-ph"}`}>
      {showImage ? (
        <img
          src={`/images/${img.src}`}
          alt={img.caption ?? ""}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <span className="ph-grid" />
          <span className="ph-caption">{img.caption}</span>
          {img.src && <span className="ph-hint mono">drop /public/images/{img.src}</span>}
        </>
      )}
    </div>
  );
}

function BannerSlideshow({ images, company }: { images?: JobImage[]; company: string }) {
  const list = images && images.length ? images : [{ src: "", caption: company }];
  const count = list.length;
  // Size the banner to the TALLEST image (smallest width/height ratio); shorter
  // images then sit centered on a transparent background, never cropped.
  const ratio = Math.min(...list.map((im) => (im.w && im.h ? im.w / im.h : 21 / 9)));
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count, paused]);

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null || count <= 1) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) < 40) return; // ignore taps and vertical scrolls
    // swipe left → next, swipe right → previous (both wrap)
    setIdx((i) => (delta < 0 ? (i + 1) % count : (i - 1 + count) % count));
  }

  return (
    <div
      className="banner-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="banner"
        style={{ aspectRatio: String(ratio) }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="banner-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {list.map((img, i) => (
            <Slide key={img.src || i} img={img} />
          ))}
        </div>
      </div>
      {count > 1 && (
        <div className="banner-dots">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`banner-dot ${i === idx ? "is-active" : ""}`}
              aria-label={`Show image ${i + 1} of ${count}`}
              aria-current={i === idx}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal>
          <div className="section-label">~/experience</div>
          <h2 className="section-title">What I've built.</h2>
          <p className="section-intro">
            Four chapters, one throughline: turning complex infrastructure into products teams can
            actually move on.
          </p>
        </Reveal>

        <div className="work-list">
          {experience.map((job) => (
            <Reveal key={job.id} delay={0.04}>
              <article
                className="job"
                style={{ "--brand": job.brand ?? "var(--accent)" } as React.CSSProperties}
              >
                <div className="job-banner">
                  <BannerSlideshow images={job.images} company={job.company} />
                </div>

                <div className="job-content">
                  <div className="job-head">
                    <h3 className="job-company">
                      {job.url ? (
                        <a className="job-company-link" href={job.url} target="_blank" rel="noreferrer">
                          {job.company}
                          <span className="ext" aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        job.company
                      )}
                      {job.note && <span className="job-note">{job.note}</span>}
                    </h3>
                    <div className="job-roles">
                      {job.roles.map((r) => (
                        <div className="job-role" key={r.title + r.period}>
                          <span className="job-role-title">{r.title}</span>
                          <span className="job-role-period mono">{r.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="job-body">
                    <p className="job-summary">{job.summary}</p>
                    <ul className="job-highlights">
                      {job.highlights.map((h, j) => (
                        <li key={j}>{renderInline(h)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
