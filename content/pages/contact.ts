import type { PageData } from "@/lib/types";

export const page: PageData = {
  path: "/contact/",
  title: "تماس با نکس‌کارت | مشاوره ساخت فروشگاه اینترنتی و پشتیبانی",
  description:
    "تماس با نکس‌کارت: مشاوره‌ی قبل از خرید و پشتیبانی فروشندگان از طریق تلفن و واتساپ ۰۹۱۴۵۲۷۵۶۵۸ یا ثبت تیکت از داخل پنل فروشنده.",
  image: "/og/contact.jpg",
  imageAlt: "تماس با نکس‌کارت",
  lastmod: "2026-10-01",
  crumbs: [
    {
      name: "خانه",
      href: "/",
    },
    {
      name: "تماس با ما",
      href: "/contact/",
    },
  ],
  faq: [
    {
      q: "فروشنده‌ی فعلی هستم؛ بهترین راه گرفتن پشتیبانی چیست؟",
      a: "از داخل پنل فروشنده تیکت ثبت کن تا سابقه‌ی درخواست و پاسخ‌ها ثبت بماند. برای موارد فوری، تماس تلفنی یا واتساپ.",
    },
    {
      q: "برای انتقال فروشگاه از سایت دیگر چه اطلاعاتی آماده کنم؟",
      a: "آدرس سایت فعلی، تعداد تقریبی محصولات، و اگر ممکن است فهرست آدرس صفحه‌های مهم (برای ساخت ریدایرکت ۳۰۱ و حفظ رتبه‌ی گوگل).",
    },
  ],
  schema: [
    {
      "@type": "ContactPage",
      "@id": "https://nexcart.ir/contact/#webpage",
      url: "https://nexcart.ir/contact/",
      name: "تماس با نکس‌کارت | مشاوره ساخت فروشگاه اینترنتی و پشتیبانی",
      description:
        "تماس با نکس‌کارت: مشاوره‌ی قبل از خرید و پشتیبانی فروشندگان از طریق تلفن و واتساپ ۰۹۱۴۵۲۷۵۶۵۸ یا ثبت تیکت از داخل پنل فروشنده.",
      isPartOf: {
        "@id": "https://nexcart.ir/#website",
      },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/contact.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-10-01",
      breadcrumb: {
        "@id": "https://nexcart.ir/contact/#breadcrumb",
      },
    },
  ],
};
