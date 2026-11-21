import Link from "next/link";
import { Fragment } from "react";
import type { FaqItem } from "@/lib/types";
import { Icon } from "./Icon";
import { FaqGroup } from "./FaqGroup";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function Answer({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));
    nodes.push(
      m[2].startsWith("/") ? (
        <Link key={idx} href={m[2]}>
          {m[1]}
        </Link>
      ) : (
        <a key={idx} href={m[2]}>
          {m[1]}
        </a>
      ),
    );
    last = idx + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return (
    <p>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </p>
  );
}

export function Faq({ items }: { items: FaqItem[] | undefined }) {
  if (!items?.length) return null;
  return (
    <FaqGroup>
      {items.map((f) => (
        <details className="faq__item" key={f.q}>
          <summary>
            {f.q}
            <Icon name="chevron-down" />
          </summary>
          <div className="faq__body">
            <Answer text={f.a} />
          </div>
        </details>
      ))}
    </FaqGroup>
  );
}
