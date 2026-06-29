import { motion } from "framer-motion";
import { profile } from "../data/profile";
import Terminal from "./Terminal";
import "./Hero.css";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <motion.div className="hero-eyebrow" {...fade(0.05)}>
          <span className="status-dot" />
          {profile.role} · {profile.experienceYears} years
        </motion.div>

        <motion.h1 className="hero-title" {...fade(0.12)}>
          {profile.name}
        </motion.h1>

        <motion.p className="hero-lead" {...fade(0.2)}>
          I build at the intersection of <em>money movement</em>, <em>financial infrastructure</em>, and{" "}
          <em>AI tooling</em>.
        </motion.p>

        <motion.div className="hero-terminal-wrap" {...fade(0.3)}>
          <Terminal />
        </motion.div>
      </div>

      <a href="#impact" className="scroll-cue" aria-label="Scroll to content">
        <span>scroll</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
