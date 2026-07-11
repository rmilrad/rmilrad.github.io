import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section className="section tintband" id="projects">
      <div className="wrap">
        <div className="kicker reveal">Side projects</div>
        <h2 className="reveal">Engineering experiments.</h2>
        <p className="lede reveal">Personal applications I am building.</p>
        <div className="projects reveal">
          {projects.map((p) => (
            <a
              className="project"
              key={p.title}
              href={p.url ?? "#projects"}
              onClick={p.url ? undefined : (e) => e.preventDefault()}
              target={p.url ? "_blank" : undefined}
              rel={p.url ? "noreferrer" : undefined}
            >
              <span className="project-shot">screenshot</span>
              <span className="project-b">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <span className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tagp" key={t}>{t}</span>
                  ))}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
