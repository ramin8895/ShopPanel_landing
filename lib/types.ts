export type Crumb = { name: string; href: string };

/** Answer text supports inline links written as [text](/path/). */
export type FaqItem = { q: string; a: string };

export type PageData = {
  /** URL path with leading and trailing slash, e.g. "/features/torob/" */
  path: string;
  title: string;
  description: string;
  /** og:/twitter: title when it differs from <title> (home page only). */
  socialTitle?: string;
  /** OG image path, 1200x630 */
  image: string;
  imageAlt: string;
  /** ISO date used in sitemap <lastmod>. Update ONLY when the page content really changes. */
  lastmod: string;
  crumbs?: Crumb[];
  faq?: FaqItem[];
  /** Page-specific JSON-LD nodes (WebPage, BlogPosting, HowTo, ...). Organization, WebSite,
   *  BreadcrumbList and FAQPage are generated automatically. */
  schema: Record<string, unknown>[];
};
