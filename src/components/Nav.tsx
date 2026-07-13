import { jobs, articles, projects } from "../data/profile";

const JOB_LABEL: Record<string, string> = {
  coinbase: "Coinbase",
  hemi: "Hemi",
  bloq: "Bloq",
  ww: "Weight Watchers",
};

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <a className="brand" href="#top">Ryan Milrad</a>
        <div className="nav-links">
          <a href="#overview">Overview</a>

          <div className="nav-drop">
            <a href="#work" className="nav-drop-t">Work</a>
            <div className="nav-menu">
              {jobs.map((j) => (
                <a key={j.id} href={`#bx-${j.id}`}>{JOB_LABEL[j.id] ?? j.id}</a>
              ))}
            </div>
          </div>

          <a href="#credentials">Credentials</a>

          <div className="nav-drop">
            <a href="#writing" className="nav-drop-t">Writing</a>
            <div className="nav-menu nav-menu-wide">
              {articles.map((a) => (
                <a key={a.url} href={a.url} target="_blank" rel="noreferrer">{a.title}</a>
              ))}
            </div>
          </div>

          <div className="nav-drop">
            <a href="#projects" className="nav-drop-t">Projects</a>
            <div className="nav-menu">
              {projects.map((p) => (
                <a key={p.id} href={`#/project/${p.id}`}>{p.name}</a>
              ))}
            </div>
          </div>

          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="btn btn-primary" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
}
