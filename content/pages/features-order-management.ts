import type { PageData } from "@/lib/types";

export const page: PageData = {
  path: "/features/order-management/",
  title: "مدیریت سفارش فروشگاه اینترنتی: پیامک و کد رهگیری | نکس‌کارت",
  description:
    "مدیریت سفارش‌های فروشگاه اینترنتی در نکس‌کارت: پیامک سفارش جدید به فروشنده، کد رهگیری مرسوله، جزئیات کامل هر قلم با تنوع و SKU، ریز مبلغ، لغو و بازگشت موجودی.",
  image: "/og/features-order-management.jpg",
  imageAlt: "مدیریت سفارش‌های فروشگاه اینترنتی",
  lastmod: "2026-11-04",
  crumbs: [
    {
      name: "خانه",
      href: "/",
    },
    {
      name: "امکانات",
      href: "/features/",
    },
    {
      name: "مدیریت سفارش",
      href: "/features/order-management/",
    },
  ],
  faq: [
    {
      q: "پیامک سفارش جدید برای چند شماره ارسال می‌شود؟",
      a: "تا سه شماره که خودت در تنظیمات فروشگاه وارد می‌کنی. دکمه‌ی «ارسال پیامک تست» هم داری تا مطمئن شوی پیامک می‌رسد.",
    },
    {
      q: "برای سفارشی که پرداختش ناموفق بوده پیامک می‌آید؟",
      a: "نه. پیامک فقط برای سفارش قطعی ارسال می‌شود: پرداخت در محل همان لحظه‌ی ثبت، و پرداخت آنلاین بعد از پرداخت موفق. مشتری هم برای سفارش پرداخت‌نشده پیامک تأیید نمی‌گیرد.",
    },
    {
      q: "با لغو سفارش، موجودی برمی‌گردد؟",
      a: "بله، و دقیقاً به همان تنوعی که سفارش داده شده بود (مثلاً سایز ۴۳ رنگ سرمه‌ای)، نه به محصول مادر.",
    },
    {
      q: "کارمندانم هم می‌توانند سفارش‌ها را مدیریت کنند؟",
      a: "بله. می‌توانی برای کارمندان حساب جدا بسازی تا هر کس با حساب خودش وارد پنل شود.",
    },
  ],
  schema: [
    {
      "@type": "WebPage",
      "@id": "https://nexcart.ir/features/order-management/#webpage",
      url: "https://nexcart.ir/features/order-management/",
      name: "مدیریت سفارش فروشگاه اینترنتی: پیامک و کد رهگیری | نکس‌کارت",
      description:
        "مدیریت سفارش‌های فروشگاه اینترنتی در نکس‌کارت: پیامک سفارش جدید به فروشنده، کد رهگیری مرسوله، جزئیات کامل هر قلم با تنوع و SKU، ریز مبلغ، لغو و بازگشت موجودی.",
      isPartOf: {
        "@id": "https://nexcart.ir/#website",
      },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/features-order-management.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-11-04",
      breadcrumb: {
        "@id": "https://nexcart.ir/features/order-management/#breadcrumb",
      },
    },
  ],
};
