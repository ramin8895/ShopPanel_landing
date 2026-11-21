import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">امکانات</span>
            <h1>امکانات فروشگاه‌ساز نکس‌کارت</h1>
            <p className="page-hero__lead">
              امکانات پایه در همه‌ی پلن‌ها فعال است و ابزارهای رشد از پلن رشد باز می‌شوند؛ روی هر صفحه
              نوشته‌ایم در کدام پلن است. روی هر بخش بزن تا توضیح کامل، نحوه‌ی استفاده و محدودیت‌هایش را ببینی.
            </p>
            <div className="page-hero__actions">
              <a className="btn btn--primary btn--lg" href="https://dash.nexcart.ir/register">
                شروع رایگان <Icon name="arrow-left" />
              </a>
              <a className="btn btn--outline btn--lg" href="tel:+989145275658">
                مشاوره تلفنی
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="sell-h" style={{ paddingTop: "8px" }}>
        <div className="container">
          <div className="section__head section__head--start reveal">
            <span className="eyebrow">فروش و پرداخت</span>
            <h2 id="sell-h">پول بگیر، سفارش ثبت کن، فاکتور بده</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/features/payment-gateway/">
              <span className="card__ic ic-blue">
                <Icon name="credit-card" />
              </span>
              <h3>درگاه پرداخت و خرید اقساطی</h3>
              <p>زرین‌پال، خرید اقساطی ترب‌پی برای سبدهای مجاز و پرداخت در محل. پول مستقیم به حساب خودت.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/accounting-inventory/">
              <span className="card__ic ic-green">
                <Icon name="chart-bar" />
              </span>
              <h3>
                حسابداری و انبارداری <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                انبارگردانی، فاکتور خرید و تأمین‌کننده، هزینه‌ها و گزارش سود و زیان با بهای میانگین موزون. در
                پلن حرفه‌ای.
              </p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/order-management/">
              <span className="card__ic ic-teal">
                <Icon name="truck-delivery" />
              </span>
              <h3>مدیریت سفارش</h3>
              <p>پیامک سفارش جدید به سه شماره، جزئیات کامل هر قلم، کد رهگیری و بازگشت موجودی به همان تنوع.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/invoice/">
              <span className="card__ic ic-violet">
                <Icon name="file-invoice" />
              </span>
              <h3>
                فاکتور رسمی و رسید فروش <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                صورتحساب رسمی برای حقیقی و حقوقی با شماره‌ی ترتیبی، ابطال و صدور مجدد، و خروجی چاپی{" "}
                <span className="en">A4.</span>
              </p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--tight section--soft" aria-labelledby="grow-h">
        <div className="container">
          <div className="section__head section__head--start reveal">
            <span className="eyebrow">دیده‌شدن و رشد</span>
            <h2 id="grow-h">مشتری بیاور، دوباره بفروش</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/features/seo/">
              <span className="card__ic ic-green">
                <Icon name="seo" />
              </span>
              <h3>
                مرکز سئو و وبلاگ <span className="tag tag--new">جدید</span>
              </h3>
              <p>امتیاز سئو با تحلیلگر فارسی، ریدایرکت ۳۰۱، مانیتور 404، سرعت واقعی سایت و وبلاگ فروشگاه.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/torob/">
              <span className="card__ic ic-amber">
                <Icon name="zoom-money" />
              </span>
              <h3>اتصال به ترب</h3>
              <p>API نسخه ۳ ترب و متاتگ‌های قیمت و موجودی؛ هر تنوع جدا در ترب دیده می‌شود.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/discounts-loyalty/">
              <span className="card__ic ic-rose">
                <Icon name="rosette-discount" />
              </span>
              <h3>
                رویداد فروش، تخفیف و باشگاه <span className="tag tag--new">جدید</span>
              </h3>
              <p>تخفیف زمان‌دار بدون کد با شمارش معکوس، کد تخفیف و امتیاز وفاداری مشتری.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="store-h">
        <div className="container">
          <div className="section__head section__head--start reveal">
            <span className="eyebrow">فروشگاه و کاتالوگ</span>
            <h2 id="store-h">فروشگاهی که مال خودت است</h2>
          </div>
          <div className="cards cards--4">
            <Link className="card reveal" href="/features/themes/">
              <span className="card__ic ic-violet">
                <Icon name="palette" />
              </span>
              <h3>سه قالب فروشگاه</h3>
              <p>کلاسیک، بوتیک و مگامارکت با پیش‌نمایش زنده.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/product-management/">
              <span className="card__ic ic-blue">
                <Icon name="box" />
              </span>
              <h3>مدیریت محصولات</h3>
              <p>تنوع، موجودی، SKU، دسته‌بندی درختی و برند.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/live-chat/">
              <span className="card__ic ic-sky">
                <Icon name="message-chatbot" />
              </span>
              <h3>چت آنلاین</h3>
              <p>گفتگوی زنده با مشتری از داخل فروشگاه.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>{" "}
            <Link className="card reveal" href="/features/custom-domain/">
              <span className="card__ic ic-violet">
                <Icon name="world-www" />
              </span>
              <h3>دامنه اختصاصی</h3>
              <p>اتصال دامنه با SSL رایگان و خودکار.</p>
              <span className="card__more">
                جزئیات <Icon name="arrow-left" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--tight section--soft" aria-labelledby="more-h">
        <div className="container container--narrow prose">
          <h2 id="more-h">امکانات دیگر پنل فروشنده</h2>
          <ul className="keypoints" role="list">
            <li>
              <Icon name="chart-bar" />{" "}
              <span>
                <strong>گزارش و داشبورد:</strong> درآمد، سفارش‌ها و بازدید فروشگاه
              </span>
            </li>
            <li>
              <Icon name="users-group" />{" "}
              <span>
                <strong>کارمندان:</strong> دسترسی چندکاربره با حساب جدا برای هر نفر
              </span>
            </li>
            <li>
              <Icon name="star" />{" "}
              <span>
                <strong>نظر و امتیاز</strong> محصولات با تأیید مدیر
              </span>
            </li>
            <li>
              <Icon name="messages" />{" "}
              <span>
                <strong>پرسش‌وپاسخ</strong> زیر صفحه‌ی محصول
              </span>
            </li>
            <li>
              <Icon name="file-text" />{" "}
              <span>
                <strong>صفحه‌های محتوایی:</strong> درباره ما، تماس، قوانین، سؤالات متداول
              </span>
            </li>
            <li>
              <Icon name="slideshow" />{" "}
              <span>
                <strong>صفحه‌ساز صفحه‌ی اصلی:</strong> اسلایدر، بنر، دسته‌ها و محصولات ویژه
              </span>
            </li>
            <li>
              <Icon name="brand-google" />{" "}
              <span>
                <strong>اتصال سرچ کنسول گوگل</strong> از پنل
              </span>
            </li>
            <li>
              <Icon name="language" />{" "}
              <span>
                <strong>پنل فارسی</strong> با منوی دوزبانه (فارسی و انگلیسی)
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--soft" aria-labelledby="faq">
        <div className="container container--narrow">
          <div className="section__head reveal">
            <span className="eyebrow">پرسش و پاسخ</span>
            <h2 id="faq">سؤالات متداول</h2>
          </div>
          <Faq items={page.faq} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
