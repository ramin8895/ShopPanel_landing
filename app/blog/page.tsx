import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">راهنما و آموزش</span>
            <h1>وبلاگ نکس‌کارت</h1>
            <p className="page-hero__lead">
              مقاله‌هایی برای کسی که می‌خواهد فروش آنلاین را شروع کند یا فروشگاهش را بهتر کند؛ بدون حرف کلی،
              با جزئیات قابل اجرا.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="start-h" style={{ paddingTop: "8px" }}>
        <div className="container">
          <div className="section__head section__head--start reveal">
            <span className="eyebrow">شروع کار</span>
            <h2 id="start-h">قبل از ساخت فروشگاه</h2>
          </div>
          <div className="post-cards">
            <Link className="post-card reveal" href="/blog/what-is-store-builder/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-what-is-store-builder.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">شروع کار</span>
                <h3>فروشگاه‌ساز چیست و چطور بهترینش را انتخاب کنیم؟</h3>
                <p>تعریف دقیق فروشگاه‌ساز و ده معیار عملی برای مقایسه‌ی گزینه‌ها.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>{" "}
            <Link className="post-card reveal" href="/blog/online-store-cost/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-online-store-cost.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">کسب‌وکار</span>
                <h3>هزینه‌ی راه‌اندازی فروشگاه اینترنتی؛ برآورد تکه‌به‌تکه</h3>
                <p>از سایت و دامنه تا اینماد، عکاسی، بسته‌بندی و تبلیغات، با یک مثال.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>{" "}
            <Link className="post-card reveal" href="/blog/store-builder-vs-wordpress/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-store-builder-vs-wordpress.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">مقایسه</span>
                <h3>فروشگاه‌ساز یا وردپرس؟ مقایسه‌ی سه روش ساخت فروشگاه</h3>
                <p>هزینه، زمان، امنیت، انعطاف و مالکیت؛ بی‌طرفانه و کنار هم.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--tight section--soft" aria-labelledby="grow-h">
        <div className="container">
          <div className="section__head section__head--start reveal">
            <span className="eyebrow">راه‌اندازی و رشد</span>
            <h2 id="grow-h">پرداخت، اعتماد و دیده‌شدن</h2>
          </div>
          <div className="post-cards">
            <Link className="post-card reveal" href="/blog/enamad-guide/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-enamad-guide.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">راهنمای فنی</span>
                <h3>اینماد چیست و چطور برای فروشگاه اینترنتی بگیریم؟</h3>
                <p>پیش‌نیازها، مدارک و صفحه‌هایی که فروشگاه قبل از بررسی لازم دارد.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>{" "}
            <Link className="post-card reveal" href="/blog/online-store-seo/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-online-store-seo.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">سئو</span>
                <h3>سئو فروشگاه اینترنتی؛ راهنمای عملی از محصول تا سرچ کنسول</h3>
                <p>کلمه‌ی کلیدی، صفحه‌ی محصول و دسته، تصاویر، سرعت و داده‌ی ساختاریافته.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>{" "}
            <Link className="post-card reveal" href="/create-online-store/">
              <div className="post-card__cover">
                <img
                  src="/og/create-online-store.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">راهنمای جامع</span>
                <h3>ساخت فروشگاه اینترنتی: راهنمای قدم‌به‌قدم راه‌اندازی</h3>
                <p>پیش‌نیازها، روش‌ها و هفت مرحله‌ی راه‌اندازی فروشگاه آنلاین.</p>
                <span className="post-card__meta">
                  <span>۹ مهر ۱۴۰۵</span>
                </span>
              </div>
            </Link>{" "}
            <Link className="post-card reveal" href="/blog/woocommerce-to-store-builder/">
              <div className="post-card__cover">
                <img
                  src="/og/blog-woocommerce-to-store-builder.jpg"
                  width={1200}
                  height={630}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="post-card__body">
                <span className="tag">راهنمای فنی</span>
                <h3>مهاجرت از ووکامرس به فروشگاه‌ساز بدون افت سئو</h3>
                <p>فهرست آدرس‌ها، نقشه‌ی ریدایرکت ۳۰۱ و پایش بعد از انتقال.</p>
                <span className="post-card__meta">
                  <span>۴ آذر ۱۴۰۵</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="related-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">ادامه مسیر</span>
            <h2 id="related-h">اگر آماده‌ی شروعی</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/create-online-store/">
              <span className="card__ic ic-blue">
                <Icon name="route" />
              </span>
              <h3>ساخت فروشگاه اینترنتی</h3>
              <p>پیش‌نیازها، روش‌ها و مراحل راه‌اندازی فروشگاه آنلاین، قدم‌به‌قدم.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/">
              <span className="card__ic ic-blue">
                <Icon name="layout-grid" />
              </span>
              <h3>همه‌ی امکانات</h3>
              <p>فهرست کامل قابلیت‌های فروشگاه‌ساز نکس‌کارت.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/pricing/">
              <span className="card__ic ic-green">
                <Icon name="receipt" />
              </span>
              <h3>قیمت فروشگاه‌ساز</h3>
              <p>سه پلن شروع، رشد و حرفه‌ای و مقایسه‌ی کامل امکانات.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
