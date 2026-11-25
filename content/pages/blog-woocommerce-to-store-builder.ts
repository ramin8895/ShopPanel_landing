import type { PageData } from "@/lib/types";

const TITLE = "مهاجرت از ووکامرس به فروشگاه‌ساز بدون افت سئو";
const DESC =
  "راهنمای مهاجرت از ووکامرس به فروشگاه‌ساز بدون افت رتبه‌ی گوگل: فهرست آدرس‌ها، نقشه‌ی ریدایرکت ۳۰۱، حفظ عنوان و توضیحات، روز انتقال و پایش بعد از آن.";

export const page: PageData = {
  path: "/blog/woocommerce-to-store-builder/",
  title: TITLE,
  description: DESC,
  image: "/og/blog-woocommerce-to-store-builder.jpg",
  imageAlt: TITLE,
  lastmod: "2026-11-25",
  crumbs: [
    { name: "خانه", href: "/" },
    { name: "وبلاگ", href: "/blog/" },
    { name: "مهاجرت از ووکامرس", href: "/blog/woocommerce-to-store-builder/" },
  ],
  faq: [
    {
      q: "با مهاجرت از ووکامرس حتماً رتبه‌ی گوگل می‌افتد؟",
      a: "نه حتماً. اگر آدرس‌های قدیمی با ریدایرکت ۳۰۱ به معادل جدیدشان هدایت شوند و عنوان و محتوای صفحه‌ها حفظ شود، معمولاً فقط یک نوسان کوتاه می‌بینی. اما هیچ‌کس نمی‌تواند حفظ کامل رتبه را تضمین کند.",
    },
    {
      q: "اگر دامنه همان بماند، ریدایرکت هم لازم است؟",
      a: "بله. دامنه ثابت است ولی ساختار آدرس‌ها فرق می‌کند؛ مثلاً آدرس‌های ووکامرس معمولاً با /product/ و /product-category/ شروع می‌شوند. هر آدرس قدیمی که معادل جدیدی دارد باید ریدایرکت ۳۰۱ بگیرد.",
    },
    {
      q: "محصولات را چطور از ووکامرس به نکس‌کارت منتقل کنم؟",
      a: "ایمپورت خودکار محصول از ووکامرس هنوز در نکس‌کارت نیست. ریدایرکت‌ها را می‌شود با فایل CSV یک‌جا وارد کرد، ولی محصولات را باید خودت ثبت کنی. برای برنامه‌ریزی انتقال، [با پشتیبانی تماس بگیر](/contact/).",
    },
    {
      q: "بعد از انتقال چقدر باید منتظر بمانم؟",
      a: "گوگل چند روز تا چند هفته طول می‌کشد آدرس‌های جدید را بخزد و بازتاب بدهد. در این مدت سرچ کنسول و گزارش ۴۰۴ را زیر نظر بگیر و آدرس‌های جاافتاده را سریع ریدایرکت کن.",
    },
  ],
  schema: [
    {
      "@type": "WebPage",
      "@id": "https://nexcart.ir/blog/woocommerce-to-store-builder/#webpage",
      url: "https://nexcart.ir/blog/woocommerce-to-store-builder/",
      name: TITLE,
      description: DESC,
      isPartOf: { "@id": "https://nexcart.ir/#website" },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/blog-woocommerce-to-store-builder.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-11-25",
      breadcrumb: { "@id": "https://nexcart.ir/blog/woocommerce-to-store-builder/#breadcrumb" },
    },
    {
      "@type": "BlogPosting",
      "@id": "https://nexcart.ir/blog/woocommerce-to-store-builder/#article",
      mainEntityOfPage: { "@id": "https://nexcart.ir/blog/woocommerce-to-store-builder/#webpage" },
      headline: TITLE,
      description: DESC,
      image: "https://nexcart.ir/og/blog-woocommerce-to-store-builder.jpg",
      datePublished: "2026-11-25",
      dateModified: "2026-11-25",
      author: { "@type": "Organization", name: "تیم نکس‌کارت", url: "https://nexcart.ir/about/" },
      publisher: { "@id": "https://nexcart.ir/#organization" },
      inLanguage: "fa-IR",
      articleSection: "راهنمای فنی",
    },
  ],
};
