import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="section tintband" id="contact">
      <div className="wrap">
        <div className="kicker reveal">Contact</div>
        <h2 className="reveal">Let's build something that moves.</h2>
        <p className="lede reveal">Open to product leadership roles in fintech, crypto, and platform infrastructure.</p>
        <div className="reveal" style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me <span className="arw">→</span></a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
