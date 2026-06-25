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
              <a className="icon-btn icon-btn-primary" href={`mailto:${profile.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.99H5.67V18h2.67zM7 8.82a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.39c0-2.35-1.26-3.44-2.94-3.44-1.35 0-1.96.74-2.3 1.27V9.99h-2.66V18h2.66v-4.47c0-.24.02-.47.09-.64.18-.47.62-.96 1.34-.96.94 0 1.32.72 1.32 1.77V18h2.69z" />
                </svg>
              </a>
              <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono footer-built">built with react · vite · agent powered by a local knowledge base</span>
        </div>
      </footer>
    </section>
  );
}
