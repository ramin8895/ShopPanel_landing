# nexcart-landing (Next.js)

لندینگ nexcart.ir — Next.js (App Router) با **static export**: خروجی HTML خالص با همان ساختار URL قبلی
(`/features/torob/index.html`، `404.html`، ...). روی سرور Node اجرا نمی‌شود؛ همان nginx فایل‌ها را سرو می‌کند.

## دستورها
```bash
npm ci
npm run dev        # توسعه روی http://localhost:3000
npm run build      # خروجی در ./out  (+ حذف مسیرهای تکراری /404/ و /_not-found/)
npm run typecheck
npm run format
```

## ساختار
```
app/                 هر پوشه = یک URL (page.tsx = بدنه‌ی صفحه)
  layout.tsx         <html lang=fa-IR dir=rtl>، هدر، فوتر، نوار موبایل
  not-found.tsx      → out/404.html (noindex)
  sitemap.ts         → sitemap.xml (از content/ ساخته می‌شود)
  robots.ts          → robots.txt
  site.css           همان CSS قبلی (توکن‌ها، RTL، ایران‌یکان)
content/pages/*.ts   داده‌ی هر صفحه: title، description، تصویر OG، lastmod، breadcrumb، FAQ، JSON-LD اختصاصی
content/index.ts     فهرست همه‌ی صفحه‌ها (برای sitemap)
content/schema-base.json   Organization و WebSite (مشترک همه‌ی صفحه‌ها)
components/          Header (منوی امکانات/موبایل)، Footer، Faq، Breadcrumbs، CtaSection، Icon، JsonLd
lib/nav.ts           لینک‌های منوی امکانات، منوی اصلی و ستون‌های فوتر
lib/site.ts          شماره تماس، لینک ثبت‌نام و ورود، آدرس سایت
public/              og/، fonts/، assets/icons.svg، favicon، manifest، llms.txt
```

## ویرایش
- **متن یک صفحه:** `app/<مسیر>/page.tsx` (JSX).
- **عنوان، توضیح، FAQ، تاریخ:** `content/pages/<نام>.ts`.
  - FAQ و BreadcrumbList در JSON-LD **خودکار** از همین داده ساخته می‌شوند؛ دیگر لازم نیست دو جا ویرایش شود.
  - در پاسخ FAQ لینک را به شکل `[متن](/مسیر/)` بنویس.
  - بعد از تغییر واقعی محتوا `lastmod` (و `dateModified` در `schema`) را به‌روز کن؛ فقط برای صفحه‌ای که واقعاً عوض شده.
- **منو/فوتر:** `lib/nav.ts` — **شماره/لینک‌ها:** `lib/site.ts`.
- **صفحه‌ی جدید:** ۱) `content/pages/x.ts` ۲) اضافه به `content/index.ts` ۳) `app/x/page.tsx`
  (از یک صفحه‌ی مشابه کپی کن). صفحه خودکار وارد sitemap می‌شود.
- **تأیید Search Console:** کامنت داخل `<head>` در `app/layout.tsx`؛ برای متاتگ از `metadata.verification.google` استفاده کن.

## نکته
`build.py` قبلی دیگر لازم نیست؛ منبع حقیقت همین پروژه است.
