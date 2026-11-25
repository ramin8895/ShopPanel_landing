import type { PageData } from "@/lib/types";

export const page: PageData = {
  path: "/blog/",
  title: "وبلاگ نکس‌کارت | راهنمای ساخت و مدیریت فروشگاه اینترنتی",
  description:
    "مقاله‌های کاربردی برای راه‌اندازی و رشد فروشگاه اینترنتی: هزینه‌ها، مقایسه‌ی فروشگاه‌ساز و وردپرس، راهنمای اینماد، سئو فروشگاه و مهاجرت از ووکامرس.",
  image: "/og/blog.jpg",
  imageAlt: "وبلاگ نکس‌کارت",
  lastmod: "2026-11-25",
  crumbs: [
    {
      name: "خانه",
      href: "/",
    },
    {
      name: "وبلاگ",
      href: "/blog/",
    },
  ],
  schema: [
    {
      "@type": "CollectionPage",
      "@id": "https://nexcart.ir/blog/#webpage",
      url: "https://nexcart.ir/blog/",
      name: "وبلاگ نکس‌کارت | راهنمای ساخت و مدیریت فروشگاه اینترنتی",
      description:
        "مقاله‌های کاربردی برای راه‌اندازی و رشد فروشگاه اینترنتی: هزینه‌ها، مقایسه‌ی فروشگاه‌ساز و وردپرس، راهنمای اینماد، سئو فروشگاه و مهاجرت از ووکامرس.",
      isPartOf: {
        "@id": "https://nexcart.ir/#website",
      },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/blog.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-11-25",
      breadcrumb: {
        "@id": "https://nexcart.ir/blog/#breadcrumb",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://nexcart.ir/blog/#list",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://nexcart.ir/blog/what-is-store-builder/",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://nexcart.ir/blog/online-store-cost/",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://nexcart.ir/blog/store-builder-vs-wordpress/",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: "https://nexcart.ir/blog/enamad-guide/",
        },
        {
          "@type": "ListItem",
          position: 5,
          url: "https://nexcart.ir/blog/online-store-seo/",
        },
        {
          "@type": "ListItem",
          position: 6,
          url: "https://nexcart.ir/blog/woocommerce-to-store-builder/",
        },
        {
          "@type": "ListItem",
          position: 7,
          url: "https://nexcart.ir/create-online-store/",
        },
      ],
    },
  ],
};
