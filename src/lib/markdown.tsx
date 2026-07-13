import { type ReactNode } from "react";
import { renderInline } from "./rich";

/* Minimal markdown renderer for the Recall conversation transcripts:
   fenced code blocks, ## / ### headings, ordered + unordered lists,
   horizontal rules, and paragraphs, with inline bold / code / links. */
export function Markdown({ src }: { src: string }) {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let ul: string[] = [];
  let ol: string[] = [];
  let key = 0;

  const flush = () => {
    if (ul.length) {
      out.push(<ul className="md-ul" key={key++}>{ul.map((x, j) => <li key={j}>{renderInline(x)}</li>)}</ul>);
      ul = [];
    }
    if (ol.length) {
      out.push(<ol className="md-ol" key={key++}>{ol.map((x, j) => <li key={j}>{renderInline(x)}</li>)}</ol>);
      ol = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();

    if (t.startsWith("```")) {
      flush();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) { code.push(lines[i]); i++; }
      out.push(<pre className="md-code" key={key++}><code>{code.join("\n")}</code></pre>);
      continue;
    }
    if (t === "") { flush(); continue; }
    if (t === "---") { flush(); out.push(<hr className="md-hr" key={key++} />); continue; }
    if (t.startsWith("### ")) { flush(); out.push(<h5 className="md-h" key={key++}>{renderInline(t.slice(4))}</h5>); continue; }
    if (t.startsWith("## ")) { flush(); out.push(<h4 className="md-h" key={key++}>{renderInline(t.slice(3))}</h4>); continue; }

    const um = t.match(/^[-*]\s+(.*)$/);
    if (um) { if (ol.length) flush(); ul.push(um[1]); continue; }
    const om = t.match(/^\d+\.\s+(.*)$/);
    if (om) { if (ul.length) flush(); ol.push(om[1]); continue; }

    flush();
    out.push(<p className="md-p" key={key++}>{renderInline(t)}</p>);
  }
  flush();
  return <>{out}</>;
}
