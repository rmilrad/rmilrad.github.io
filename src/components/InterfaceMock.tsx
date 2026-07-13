/* Framed app-window placeholder (a faux dashboard) used until a
   project's real interactive mock or screenshots are supplied. */
export default function InterfaceMock({ label = "dashboard" }: { label?: string }) {
  return (
    <div className="pj-app">
      <div className="pj-app-bar">
        <span className="pj-app-dot" style={{ background: "#ff5f57" }} />
        <span className="pj-app-dot" style={{ background: "#febc2e" }} />
        <span className="pj-app-dot" style={{ background: "#28c840" }} />
        <span className="pj-app-addr">{label}</span>
      </div>
      <div className="pj-app-screen">
        <div className="pj-app-ph" aria-label="Interactive interface, coming soon">
          <div className="phd-side">
            <span className="phd-nav is-on" /><span className="phd-nav" /><span className="phd-nav" /><span className="phd-nav" />
          </div>
          <div className="phd-main">
            <div className="phd-top"><span className="phd-title" /><span className="phd-btn phd-hot" /><span className="phd-btn" /></div>
            <div className="phd-tiles"><span /><span /><span /></div>
            <div className="phd-chart">
              <i style={{ height: "40%" }} /><i style={{ height: "62%" }} /><i style={{ height: "48%" }} />
              <i style={{ height: "78%" }} /><i style={{ height: "66%" }} /><i style={{ height: "90%" }} />
              <i style={{ height: "72%" }} /><i style={{ height: "84%" }} />
            </div>
          </div>
          <span className="pj-app-note">Interactive preview · screens coming</span>
        </div>
      </div>
    </div>
  );
}
