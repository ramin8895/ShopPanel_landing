import base from "@/content/schema-base.json";
import type { PageData } from "./types";
import { SITE_URL } from "./site";

/** Strip the [text](url) link markup used in FAQ answers. */
export function faqPlainText(a: string): string {
  return a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

/**
 * Builds the page's JSON-LD @graph. FAQ and breadcrumb nodes are generated from the same data the
 * visible UI renders, so structured data can never drift from on-page content.
 */
export function pageSchema(page: PageData): Record<string, unknown>[] {
  const url = SITE_URL + page.path;
  const graph: Record<string, unknown>[] = [base.Organization, base.WebSite];

  if (page.crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: page.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: SITE_URL + c.href,
      })),
    });
  }

  graph.push(...page.schema);

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": `${url}#webpage` },
      inLanguage: "fa-IR",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: faqPlainText(f.a) },
      })),
    });
  }
  return graph;
}
