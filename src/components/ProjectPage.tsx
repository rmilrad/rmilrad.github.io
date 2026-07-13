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
          <h1 className="pp-name">{p.name}</h1>
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
              <video className="pp-video" controls playsInline preload="metadata" poster={p.poster}>
                <source src={p.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <div className="wrap">
        <div className="pp-writeup">
          <div className="pp-part">
            <div className="pj-label">Inspiration</div>
            <p>{p.inspiration}</p>
          </div>
          <div className="pp-part">
            <div className="pj-label">Problem</div>
            <p>{p.problem}</p>
          </div>
          <div className="pp-part pp-part-sol">
            <div className="pj-label">Solution</div>
            {p.solutionLead && <p className="pp-sol-lead">{renderInline(p.solutionLead)}</p>}
            <ul className="pj-built">
              {p.solution.map((b, i) => <li key={i}>{renderInline(b)}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
