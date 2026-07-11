import { stats } from "../data/profile";

export default function Overview() {
  return (
    <div className="island-gutter">
      <div className="island" id="overview">
        <div className="wrap">
          <div className="ov-grid">
            <div>
              <h2 className="reveal">Money movement's operator.<br />Billions in motion.</h2>
              <div className="ov-copy reveal">
                <p>I deliver every piece of money movement in one product practice: funds flow, key management, compliance, and the AI tooling that ships it all faster.</p>
                <p>Six years across companies like Coinbase, from first commit to institutional and international scale. Engineer's depth, product leader's instincts.</p>
                <a className="ov-cta" href="#work">See the work <span className="arw">→</span></a>
              </div>
            </div>
            <div className="reveal">
              <div className="stats-chip"><span className="gd" /> Career stats</div>
              <div className="stats" data-plx="34">
                {stats.map((s) => (
                  <div className={`stat${s.green ? " green" : ""}`} key={s.label}>
                    <span className="sl">{s.label}</span>
                    <span className="sv">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
