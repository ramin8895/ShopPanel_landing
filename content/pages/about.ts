import type { PageData } from "@/lib/types";

export const page: PageData = {
  path: "/about/",
  title: "درباره نکس‌کارت | فروشگاه‌ساز ایرانی",
  description:
    "نکس‌کارت (NexCart) فروشگاه‌ساز ایرانی برای ساخت و مدیریت فروشگاه اینترنتی است. با اصول کاری، فناوری و آخرین به‌روزرسانی‌های پلتفرم آشنا شو.",
  image: "/og/about.jpg",
  imageAlt: "درباره نکس‌کارت",
  lastmod: "2026-11-04",
  crumbs: [
    {
      name: "خانه",
      href: "/",
    },
    {
      name: "درباره ما",
      href: "/about/",
    },
  ],
  schema: [
    {
      "@type": "AboutPage",
      "@id": "https://nexcart.ir/about/#webpage",
      url: "https://nexcart.ir/about/",
      name: "درباره نکس‌کارت | فروشگاه‌ساز ایرانی",
      description:
        "نکس‌کارت (NexCart) فروشگاه‌ساز ایرانی برای ساخت و مدیریت فروشگاه اینترنتی است. با اصول کاری، فناوری و آخرین به‌روزرسانی‌های پلتفرم آشنا شو.",
      isPartOf: {
        "@id": "https://nexcart.ir/#website",
      },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/about.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-11-04",
      breadcrumb: {
        "@id": "https://nexcart.ir/about/#breadcrumb",
      },
    },
  ],
};
