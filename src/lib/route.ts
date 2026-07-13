import { useEffect, useState } from "react";

/* Hash routing that works on GitHub Pages with no server config and
   coexists with the landing page's #section scroll anchors:
     #/project/<id>  -> a project detail page
     anything else   -> the landing page (anchors scroll as before) */
export type Route = { name: "home" } | { name: "project"; id: string };

export function parseHash(hash: string): Route {
  const m = hash.match(/^#\/project\/([\w-]+)/);
  if (m) return { name: "project", id: m[1] };
  return { name: "home" };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
