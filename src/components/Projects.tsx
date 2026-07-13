import { projects, type Project } from "../data/profile";
import { renderInline } from "../lib/rich";

/* Framed "app window" built from the project's UI screenshots. Until
   real screens are supplied it shows a placeholder; hover hotspots get
   layered on once the images and their button positions are known. */
function InterfaceMock({ project }: { project: Project }) {
  const screen = project.screens?.[0];
  return (
    <div className="pj-app">
      <div className="pj-app-bar">
        <span className="pj-app-dot" style={{ background: "#ff5f57" }} />
        <span className="pj-app-dot" style={{ background: "#febc2e" }} />
        <span className="pj-app-dot" style={{ background: "#28c840" }} />
        <span className="pj-app-addr">{project.name.toLowerCase()} · dashboard</span>
      </div>
      <div className="pj-app-screen">
        {screen ? (
          <img src={screen.src} alt={screen.alt} />
        ) : (
          <div className="pj-app-ph" aria-label="Interactive interface, coming soon">
            <div className="phd-side">
              <span className="phd-nav is-on" /><span className="phd-nav" /><span className="phd-nav" /><span className="phd-nav" />
            </div>
            <div className="phd-main">
              <div className="phd-top">
                <span className="phd-title" />
                <span className="phd-btn phd-hot" /><span className="phd-btn" />
              </div>
              <div className="phd-tiles"><span /><span /><span /></div>
              <div className="phd-chart">
                <i style={{ height: "40%" }} /><i style={{ height: "62%" }} /><i style={{ height: "48%" }} />
                <i style={{ height: "78%" }} /><i style={{ height: "66%" }} /><i style={{ height: "90%" }} />
                <i style={{ height: "72%" }} /><i style={{ height: "84%" }} />
              </div>
            </div>
            <span className="pj-app-note">Interactive preview · screens coming</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section tintband" id="projects">
      <div className="wrap">
        <div className="kicker reveal">Projects</div>
        <h2 className="reveal">Things I'm building.</h2>
        <p className="lede reveal">Engineering experiments where I build the institutional grade version myself, not just read about it.</p>

        <div className="projects">
          {projects.map((p) => (
            <article className="pj reveal" key={p.id}>
              <header className="pj-head">
                <h3 className="pj-name">{p.name}</h3>
                <p className="pj-tagline">{p.tagline}</p>
              </header>

              <InterfaceMock project={p} />

              <div className="pj-story">
                <div className="pj-col">
                  <div className="pj-label">Inspiration</div>
                  <p>{p.inspiration}</p>
                </div>
                <div className="pj-col">
                  <div className="pj-label">Problem</div>
                  <p>{p.problem}</p>
                </div>
              </div>

              <div className="pj-solution">
                <div className="pj-label">Solution</div>
                {p.solutionLead && <p className="pj-sol-lead">{renderInline(p.solutionLead)}</p>}
                <ul className="pj-built">
                  {p.solution.map((b, i) => (
                    <li key={i}>{renderInline(b)}</li>
                  ))}
                </ul>
                {(p.tags || p.link) && (
                  <div className="pj-foot">
                    {p.tags && (
                      <div className="pj-tags">
                        {p.tags.map((t) => (
                          <span className="tagp" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    {p.link && (
                      <a className="pj-link" href={p.link} target="_blank" rel="noreferrer">
                        View project <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
