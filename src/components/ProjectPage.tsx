import { useEffect } from "react";
import { projects } from "../data/profile";
import { renderInline } from "../lib/rich";

export default function ProjectPage({ id }: { id: string }) {
  const p = projects.find((x) => x.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!p) {
    return (
      <main className="section">
        <div className="wrap">
          <a className="pp-back" href="#projects">← Back to projects</a>
          <h2 className="reveal in" style={{ marginTop: 20 }}>Project not found.</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="pp">
      <div className="wrap">
        <a className="pp-back" href="#projects">← Back to projects</a>
        <header className="pp-head">
          <div className="kicker">Project</div>
          <h1 className="pp-name">{p.storyTitle}</h1>
          <p className="pp-tagline">{p.tagline}</p>
          {(p.tags || p.link) && (
            <div className="pp-meta">
              {p.tags && <div className="pj-tags">{p.tags.map((t) => <span className="tagp" key={t}>{t}</span>)}</div>}
              {p.link && <a className="pj-link" href={p.link} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>}
            </div>
          )}
        </header>
      </div>

      {p.video && (
        <div className="pp-stage">
          <div className="wrap">
            <div className="pp-video-wrap">
              <video
                key={p.id}
                className="pp-video"
                ref={(el) => { if (el) el.playbackRate = 2; }}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={p.poster}
                onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 2; }}
                onRateChange={(e) => { if (e.currentTarget.playbackRate !== 2) e.currentTarget.playbackRate = 2; }}
              >
                <source src={p.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <div className="wrap">
        <article className="pp-story">
          {p.story.map((sec, si) => (
            <section className="pp-sec" key={si}>
              <h2 className="pp-h">{sec.heading}</h2>
              {sec.blocks.map((b, bi) =>
                "list" in b ? (
                  <ul className="pp-ul" key={bi}>
                    {b.list.map((li, i) => <li key={i}>{renderInline(li)}</li>)}
                  </ul>
                ) : (
                  <p key={bi}>{renderInline(b.p)}</p>
                ),
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
