import { projects } from "../data/profile";
import InterfaceMock from "./InterfaceMock";

export default function Projects() {
  return (
    <section className="section tintband" id="projects">
      <div className="wrap">
        <div className="kicker reveal">Projects</div>
        <h2 className="reveal">Things I'm building.</h2>
        <p className="lede reveal">Engineering experiments where I build the institutional grade version myself, not just read about it. Open one to try the interface.</p>

        <div className="pjc-grid reveal">
          {projects.map((p) => (
            <a className="pjc" key={p.id} href={`#/project/${p.id}`}>
              <span className="pjc-shot"><InterfaceMock label={`${p.name.toLowerCase()} · preview`} /></span>
              <span className="pjc-b">
                <span className="pjc-name">{p.name}</span>
                <span className="pjc-tagline">{p.tagline}</span>
                {p.tags && (
                  <span className="pjc-tags">
                    {p.tags.slice(0, 4).map((t) => <span className="tagp" key={t}>{t}</span>)}
                  </span>
                )}
                <span className="pjc-open">Open project <span aria-hidden="true">→</span></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
