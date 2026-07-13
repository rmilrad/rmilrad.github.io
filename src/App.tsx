import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Work from "./components/Work";
import Credentials from "./components/Credentials";
import Writing from "./components/Writing";
import Projects from "./components/Projects";
import People from "./components/People";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import { useRoute } from "./lib/route";

/* Page level motion: reveal on scroll + subtle parallax on [data-plx]
   panels. Re-runs on route change so a freshly rendered page wires up
   its own reveal + parallax. */
function usePageMotion(routeKey: string) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // .bx cards manage their own reveal state in React (dynamic className)
    const items = Array.from(document.querySelectorAll(".reveal:not(.bx)"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io?.unobserve(e.target); }
        }),
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
      items.forEach((el) => io?.observe(el));
    }

    let onScroll: (() => void) | undefined;
    if (!reduce) {
      const plxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-plx]"));
      let ticking = false;
      const plx = () => {
        ticking = false;
        const vh = window.innerHeight;
        plxEls.forEach((el) => {
          const m = el.parentElement || el;
          const r = m.getBoundingClientRect();
          if (r.bottom < -120 || r.top > vh + 120) return;
          const c = Math.max(-0.65, Math.min(0.65, (r.top + r.height / 2 - vh / 2) / vh));
          el.style.transform = `translate3d(0,${(c * parseFloat(el.dataset.plx || "0")).toFixed(1)}px,0)`;
        });
      };
      onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(plx); } };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", plx);
      plx();
    }

    return () => {
      io?.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, [routeKey]);
}

export default function App() {
  const route = useRoute();
  usePageMotion(route.name === "home" ? "home" : `project:${route.id}`);

  // Returning to the home route via a section anchor: scroll to it once
  // the landing has rendered.
  useEffect(() => {
    if (route.name !== "home") return;
    const h = window.location.hash;
    if (!h || h === "#" || h === "#top") { window.scrollTo(0, 0); return; }
    if (h.startsWith("#/")) return;
    const el = document.querySelector(h);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }, [route]);

  if (route.name === "project") {
    return (
      <>
        <Nav />
        <ProjectPage id={route.id} />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Work />
        <Credentials />
        <Writing />
        <Projects />
        <People />
        <Contact />
      </main>
    </>
  );
}
