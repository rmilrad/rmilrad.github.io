import { certifications, education, skills } from "../data/profile";
import Reveal from "./Reveal";
import "./Skills.css";

const groups = [
  { title: "Product", items: skills.product },
  { title: "Technical & AI", items: skills.technical },
  { title: "Languages", items: skills.languages },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal>
          <div className="section-label">~/toolkit</div>
          <h2 className="section-title">How I work.</h2>
        </Reveal>

        <div className="skills-groups">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="skill-group">
                <div className="skill-group-title mono">{g.title}</div>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="credentials">
            <div className="cred-block">
              <div className="skill-group-title mono">Education</div>
              <div className="cred-item">
                <span className="cred-name">{education.degree}</span>
                <span className="cred-meta">
                  {education.school} · {education.year}
                </span>
              </div>
            </div>
            <div className="cred-block">
              <div className="skill-group-title mono">Certifications</div>
              {certifications.map((c) => (
                <div className="cred-item" key={c.name}>
                  <span className="cred-name">{c.name}</span>
                  <span className="cred-meta">
                    {c.org} · {c.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
