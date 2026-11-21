export type MegaLink = { href: string; icon: string; tone: string; title: string; sub: string };

export const FEATURE_LINKS: MegaLink[] = [
  {
    href: "/features/payment-gateway/",
    icon: "credit-card",
    tone: "ic-blue",
    title: "درگاه پرداخت و اقساطی",
    sub: "زرین‌پال، ترب‌پی، کارت‌به‌کارت، پرداخت در محل",
  },
  {
    href: "/features/torob/",
    icon: "zoom-money",
    tone: "ic-amber",
    title: "اتصال به ترب",
    sub: "API نسخه ۳ و متاتگ محصول",
  },
  {
    href: "/features/seo/",
    icon: "seo",
    tone: "ic-green",
    title: "ابزارهای سئو",
    sub: "امتیاز سئو، ریدایرکت، 404، وبلاگ",
  },
  {
    href: "/features/themes/",
    icon: "palette",
    tone: "ic-violet",
    title: "قالب‌های فروشگاه",
    sub: "کلاسیک، بوتیک، مگامارکت",
  },
  {
    href: "/features/invoice/",
    icon: "file-invoice",
    tone: "ic-violet",
    title: "فاکتور رسمی",
    sub: "صورتحساب رسمی و رسید فروش",
  },
  {
    href: "/features/discounts-loyalty/",
    icon: "rosette-discount",
    tone: "ic-rose",
    title: "تخفیف و باشگاه مشتریان",
    sub: "رویداد فروش، کد تخفیف، امتیاز",
  },
  {
    href: "/features/accounting-inventory/",
    icon: "chart-bar",
    tone: "ic-green",
    title: "حسابداری و انبارداری",
    sub: "موجودی، خرید، هزینه و سود",
  },
  {
    href: "/features/order-management/",
    icon: "truck-delivery",
    tone: "ic-teal",
    title: "مدیریت سفارش",
    sub: "پیامک، رهگیری، جزئیات کامل",
  },
  {
    href: "/features/product-management/",
    icon: "box",
    tone: "ic-blue",
    title: "مدیریت محصولات",
    sub: "تنوع، موجودی، دسته و برند",
  },
  {
    href: "/features/live-chat/",
    icon: "message-chatbot",
    tone: "ic-sky",
    title: "چت آنلاین",
    sub: "گفتگوی زنده با مشتری",
  },
  {
    href: "/features/custom-domain/",
    icon: "world-www",
    tone: "ic-violet",
    title: "دامنه اختصاصی",
    sub: "اتصال دامنه و SSL رایگان",
  },
];

/** Plain nav links. `match`: "exact" or "prefix" decides when aria-current="page" is set. */
export const NAV_LINKS = [
  { href: "/create-online-store/", label: "ساخت فروشگاه", match: "exact" },
  { href: "/pricing/", label: "قیمت‌ها", match: "exact" },
  { href: "/blog/", label: "وبلاگ", match: "prefix" },
  { href: "/about/", label: "درباره ما", match: "exact" },
  { href: "/contact/", label: "تماس", match: "exact" },
] as const;

export const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "فروشگاه‌ساز",
    links: [
      { href: "/", label: "فروشگاه ساز نکس‌کارت" },
      { href: "/create-online-store/", label: "ساخت فروشگاه اینترنتی" },
      { href: "/features/", label: "همه‌ی امکانات" },
      { href: "/pricing/", label: "قیمت و تعرفه" },
    ],
  },
  {
    title: "امکانات کلیدی",
    links: [
      { href: "/features/payment-gateway/", label: "درگاه پرداخت و اقساطی" },
      { href: "/features/torob/", label: "اتصال به ترب" },
      { href: "/features/seo/", label: "ابزارهای سئو" },
      { href: "/features/themes/", label: "قالب‌های فروشگاه" },
      { href: "/features/invoice/", label: "فاکتور رسمی" },
      { href: "/features/accounting-inventory/", label: "حسابداری و انبارداری" },
    ],
  },
  {
    title: "راهنما",
    links: [
      { href: "/blog/", label: "وبلاگ" },
      { href: "/blog/what-is-store-builder/", label: "فروشگاه‌ساز چیست؟" },
      { href: "/blog/online-store-cost/", label: "هزینه راه‌اندازی فروشگاه" },
      { href: "/blog/store-builder-vs-wordpress/", label: "فروشگاه‌ساز یا وردپرس" },
      { href: "/blog/enamad-guide/", label: "راهنمای اینماد" },
      { href: "/blog/online-store-seo/", label: "سئو فروشگاه اینترنتی" },
    ],
  },
  {
    title: "مناسب برای",
    links: [
      { href: "/solutions/clothing/", label: "فروشگاه پوشاک" },
      { href: "/solutions/digital-products/", label: "کالای دیجیتال" },
      { href: "/solutions/instagram-sellers/", label: "فروشندگان اینستاگرام" },
      { href: "/about/", label: "درباره ما" },
      { href: "/contact/", label: "تماس با ما" },
    ],
  },
];
