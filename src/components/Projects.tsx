import { projects } from "../data/profile";
import { renderInline } from "../lib/rich";

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
              <div className="pj-media">
                {p.video ? (
                  <video className="pj-video" src={p.video} controls playsInline preload="metadata" />
                ) : (
                  <div className="pj-video pj-video-ph" role="img" aria-label={`${p.name} demo video, coming soon`}>
                    <span className="pj-play" aria-hidden="true">▶</span>
                    <span className="pj-video-cap">Demo video · coming soon</span>
                  </div>
                )}
              </div>

              <div className="pj-text">
                <h3 className="pj-name">{p.name}</h3>
                <p className="pj-tagline">{p.tagline}</p>

                <div className="pj-part">
                  <div className="pj-label">What inspired it</div>
                  <p>{p.inspired}</p>
                </div>
                <div className="pj-part">
                  <div className="pj-label">The problem we explored</div>
                  <p>{p.problem}</p>
                </div>
                <div className="pj-part">
                  <div className="pj-label">How it's built</div>
                  <ul className="pj-built">
                    {p.built.map((b, i) => (
                      <li key={i}>{renderInline(b)}</li>
                    ))}
                  </ul>
                </div>

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
