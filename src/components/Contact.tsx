import { profile } from "../data/profile";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="section-label">~/contact</div>
            <h2 className="contact-title">Let's build something.</h2>
            <p className="contact-lead">
              Open to platform and infrastructure product roles where deep technical execution
              matters. The fastest way to reach me is email.
            </p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono footer-built">built with react · vite — agent powered by a local knowledge base</span>
        </div>
      </footer>
    </section>
  );
}
