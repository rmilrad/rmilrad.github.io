import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import "./Nav.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">RM</span>
          <span className="nav-brand-name">{profile.name}</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.99H5.67V18h2.67zM7 8.82a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.39c0-2.35-1.26-3.44-2.94-3.44-1.35 0-1.96.74-2.3 1.27V9.99h-2.66V18h2.66v-4.47c0-.24.02-.47.09-.64.18-.47.62-.96 1.34-.96.94 0 1.32.72 1.32 1.77V18h2.69z" />
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
