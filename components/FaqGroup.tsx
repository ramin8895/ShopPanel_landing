"use client";

import { useEffect, useRef } from "react";

/** Keeps at most one FAQ item open at a time (children are server-rendered <details>). */
export function FaqGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const onToggle = (e: Event) => {
      const target = e.target as HTMLDetailsElement;
      if (!target.open) return;
      root.querySelectorAll<HTMLDetailsElement>("details.faq__item").forEach((d) => {
        if (d !== target) d.open = false;
      });
    };
    // "toggle" does not bubble, so listen in the capture phase.
    root.addEventListener("toggle", onToggle, true);
    return () => root.removeEventListener("toggle", onToggle, true);
  }, []);
  return (
    <div className="faq" ref={ref}>
      {children}
    </div>
  );
}
