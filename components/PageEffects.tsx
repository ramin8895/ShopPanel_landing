"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive-enhancement effects that need the DOM after each route render:
 *  - `.reveal` sections get the `in` class when scrolled into view
 *  - the sticky table-of-contents highlights the section being read
 * Content is never hidden before these run (see `.js .reveal` in site.css).
 */
export function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const links = document.querySelectorAll<HTMLAnchorElement>(".toc a[href^='#']");
    let tio: IntersectionObserver | undefined;
    if (links.length) {
      const map = new Map<string, HTMLAnchorElement>();
      links.forEach((a) => map.set(a.getAttribute("href")!.slice(1), a));
      tio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            links.forEach((a) => a.classList.remove("is-active"));
            map.get(e.target.id)?.classList.add("is-active");
          });
        },
        { rootMargin: "-20% 0px -70% 0px" },
      );
      map.forEach((_, id) => {
        const el = document.getElementById(id);
        if (el) tio!.observe(el);
      });
    }
    return () => {
      io.disconnect();
      tio?.disconnect();
    };
  }, [pathname]);

  return null;
}
