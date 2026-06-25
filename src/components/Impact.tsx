import { metrics } from "../data/profile";
import Reveal from "./Reveal";
import "./Impact.css";

export default function Impact() {
  return (
    <section className="section impact" id="impact">
      <div className="container">
        <Reveal>
          <div className="section-label">~/impact</div>
          <h2 className="section-title">Outcomes, in numbers.</h2>
          <p className="section-intro">
            Six years of platform work, measured the way infrastructure should be: by what it moved,
            secured, and unlocked.
          </p>
        </Reveal>

        <div className="impact-grid">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="metric-card">
                <div className="metric-value mono">{m.value}</div>
                <div className="metric-label">{m.label}</div>
                <div className="metric-context">{m.context}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
