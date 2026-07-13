import { Fragment, type ReactNode } from "react";

/* Parse a single line of inline markup (**bold**, `code`, [text](url)). */
export function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    if (m[2] !== undefined) nodes.push(<strong key={key++}>{m[2]}</strong>);
    else if (m[3] !== undefined) nodes.push(<code key={key++}>{m[3]}</code>);
    else if (m[4] !== undefined) nodes.push(<a key={key++} href={m[5]} target="_blank" rel="noreferrer">{m[4]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return nodes;
}

/* Full block renderer: paragraphs + "- " bullet groups, with inline bold. */
export function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (bullets.length === 0) return;
    blocks.push(
      <ul className="rich-list" key={key}>
        {bullets.map((b, i) => (
          <li key={i}>{renderInline(b)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      bullets.push(trimmed.slice(2));
    } else {
      flushBullets(`ul-${i}`);
      if (trimmed) {
        blocks.push(
          <p className="rich-p" key={`p-${i}`}>
            {renderInline(trimmed)}
          </p>,
        );
      }
    }
  });
  flushBullets("ul-end");

  return <>{blocks}</>;
}
