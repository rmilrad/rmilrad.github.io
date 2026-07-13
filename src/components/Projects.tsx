import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section className="section tintband" id="projects">
      <div className="wrap">
        <div className="kicker reveal">Projects</div>
        <h2 className="reveal">Things I'm building.</h2>
        <p className="lede reveal">Engineering experiments where I build the institutional grade version myself, not just read about it. Open one for the demo.</p>

        <div className="pjc-grid reveal">
          {projects.map((p) => (
            <a className="pjc" key={p.id} href={`#/project/${p.id}`}>
              <span className="pjc-shot">
                <img src={p.shot ?? p.poster} alt={`${p.name} interface`} loading="lazy" />
              </span>
              <span className="pjc-name">{p.name}</span>
              <span className="pjc-tagline">{p.tagline}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
