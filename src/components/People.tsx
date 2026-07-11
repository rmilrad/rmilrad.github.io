import { useEffect, useRef } from "react";
import { quotes } from "../data/profile";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div className="car-group" aria-hidden={hidden || undefined}>
      {quotes.map((q, i) => (
        <div className="qcard" key={i}>
          <p>{q.text}</p>
          <div className="q-who">
            <span className="q-nm">{q.name}</span>
            <span className="q-ti">{q.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function People() {
  const track = useRef<HTMLDivElement | null>(null);

  // press and hold pauses the marquee on touch devices
  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const pause = () => { t.style.animationPlayState = "paused"; };
    const run = () => { t.style.animationPlayState = "running"; };
    t.addEventListener("touchstart", pause, { passive: true });
    t.addEventListener("touchend", run, { passive: true });
    return () => { t.removeEventListener("touchstart", pause); t.removeEventListener("touchend", run); };
  }, []);

  return (
    <section className="section" id="people">
      <div className="wrap">
        <div className="kicker reveal">References</div>
        <h2 className="reveal">People I have worked with.</h2>
        <p className="lede reveal">Real recommendations from LinkedIn.</p>
      </div>
      <div className="car reveal">
        <div className="car-track" ref={track}>
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
}
