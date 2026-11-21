import type { PageData } from "@/lib/types";

export const page: PageData = {
  path: "/features/discounts-loyalty/",
  title: "سیستم تخفیف و باشگاه مشتریان فروشگاه اینترنتی | نکس‌کارت",
  description:
    "رویدادهای فروش با تخفیف زمان‌دار بدون کد (نوروز، یلدا، جمعه سیاه)، کد تخفیف، شمارش معکوس و باشگاه مشتریان با امتیاز خرید در فروشگاه‌ساز نکس‌کارت.",
  image: "/og/features-discounts-loyalty.jpg",
  imageAlt: "سیستم تخفیف و باشگاه مشتریان فروشگاه اینترنتی",
  lastmod: "2026-10-01",
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
      name: "تخفیف و باشگاه مشتریان",
      href: "/features/discounts-loyalty/",
    },
  ],
  faq: [
    {
      q: "بعد از تمام شدن رویداد فروش باید قیمت‌ها را دستی برگردانم؟",
      a: "نه. قیمت اصلی کالا در پایگاه داده تغییر نمی‌کند و تخفیف رویداد هنگام نمایش و ثبت سفارش محاسبه می‌شود. وقتی زمان رویداد تمام شود، قیمت‌ها خودکار به حالت عادی برمی‌گردند.",
    },
    {
      q: "اگر روی یک کالا دو رویداد هم‌زمان باشد چه می‌شود؟",
      a: "بیشترین تخفیف برای مشتری اعمال می‌شود؛ تخفیف‌ها روی هم جمع نمی‌شوند.",
    },
    {
      q: "مشتری می‌تواند روی کالای رویداد، کد تخفیف هم بزند؟",
      a: "به انتخاب خودت. اگر گزینه‌ی «کد تخفیف هم‌زمان مجاز باشد» خاموش باشد، کد تخفیف فقط روی بقیه‌ی کالاهای سبد اثر می‌گذارد.",
    },
    {
      q: "تخفیف رویداد در ترب هم نمایش داده می‌شود؟",
      a: "بله. قیمت با تخفیف رویداد در API و فید ترب و در داده‌ی ساختاریافته‌ی گوگل هم اعمال می‌شود.",
    },
  ],
  schema: [
    {
      "@type": "WebPage",
      "@id": "https://nexcart.ir/features/discounts-loyalty/#webpage",
      url: "https://nexcart.ir/features/discounts-loyalty/",
      name: "سیستم تخفیف و باشگاه مشتریان فروشگاه اینترنتی | نکس‌کارت",
      description:
        "رویدادهای فروش با تخفیف زمان‌دار بدون کد (نوروز، یلدا، جمعه سیاه)، کد تخفیف، شمارش معکوس و باشگاه مشتریان با امتیاز خرید در فروشگاه‌ساز نکس‌کارت.",
      isPartOf: {
        "@id": "https://nexcart.ir/#website",
      },
      inLanguage: "fa-IR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://nexcart.ir/og/features-discounts-loyalty.jpg",
        width: 1200,
        height: 630,
      },
      dateModified: "2026-10-01",
      breadcrumb: {
        "@id": "https://nexcart.ir/features/discounts-loyalty/#breadcrumb",
      },
    },
  ],
};
