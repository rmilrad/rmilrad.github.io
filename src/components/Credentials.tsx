import { certifications, education } from "../data/profile";

export default function Credentials() {
  return (
    <section className="section tintband" id="credentials">
      <div className="wrap">
        <div className="kicker reveal">Credentials</div>
        <h2 className="reveal">Education and certifications.</h2>
        <div className="creds reveal">
          <div className="cred-group">Education</div>
          {education.map((c) => (
            <div className="cred" key={c.name}>
              <h4>{c.name}</h4>
              <span className="co">{c.org}</span>
            </div>
          ))}
          <div className="cred-group">Certifications</div>
          {certifications.map((c) => (
            <div className="cred" key={c.name}>
              <h4>{c.name}</h4>
              <span className="co">{c.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
