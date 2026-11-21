import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SITE_NAME } from "@/lib/site";

const title = "صفحه پیدا نشد | نکس‌کارت";
const description =
  "صفحه‌ای که دنبالش بودی پیدا نشد. از صفحه‌ی اصلی، امکانات یا وبلاگ فروشگاه‌ساز نکس‌کارت ادامه بده تا به چیزی که لازم داری برسی.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fa_IR",
    url: "/404.html",
    title,
    description,
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "صفحه پیدا نشد" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/home.jpg"] },
};

const LINKS = [
  { href: "/", icon: "home", tone: "ic-blue", title: "صفحه اصلی", text: "معرفی فروشگاه‌ساز نکس‌کارت" },
  {
    href: "/features/",
    icon: "layout-grid",
    tone: "ic-violet",
    title: "امکانات",
    text: "همه‌ی قابلیت‌ها در یک نگاه",
  },
  { href: "/blog/", icon: "news", tone: "ic-green", title: "وبلاگ", text: "راهنمای ساخت و رشد فروشگاه" },
];

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container container--narrow">
        <div className="nf__code">404</div>
        <h1 style={{ fontSize: "clamp(24px,3.4vw,34px)", margin: "10px 0 8px" }}>این صفحه پیدا نشد</h1>
        <p style={{ color: "var(--muted)", fontSize: 17, marginBottom: 28 }}>
          ممکن است آدرس اشتباه تایپ شده باشد یا صفحه جابه‌جا شده باشد. از این‌جاها ادامه بده:
        </p>
        <div className="cards" style={{ textAlign: "start" }}>
          {LINKS.map((l) => (
            <Link className="card" href={l.href} key={l.href}>
              <span className={`card__ic ${l.tone}`}>
                <Icon name={l.icon} />
              </span>
              <h2 style={{ fontSize: 17 }}>{l.title}</h2>
              <p>{l.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
