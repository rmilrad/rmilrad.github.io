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

/* Page level motion: reveal on scroll + subtle parallax on [data-plx]
   panels. Parallax is measured off untransformed parents and clamped
   so tall elements never over travel. */
function usePageMotion() {
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
  }, []);
}

export default function App() {
  usePageMotion();
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
