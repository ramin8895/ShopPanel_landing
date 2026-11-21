import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/contact";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">تماس و پشتیبانی</span>
            <h1>تماس با نکس‌کارت</h1>
            <p className="page-hero__lead">
              قبل از ثبت‌نام درباره‌ی امکانات، دامنه، اتصال به ترب یا انتقال فروشگاه فعلی‌ات سؤال داری؟ یا
              فروشنده‌ی نکس‌کارت هستی و کمک لازم داری؟ از یکی از راه‌های زیر با ما در تماس باش.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="ways-h" style={{ paddingTop: "8px" }}>
        <div className="container">
          <h2 id="ways-h" className="sr-only">
            راه‌های تماس
          </h2>
          <div className="contact-cards">
            <a className="ccard" href="tel:+989145275658">
              <span className="ccard__icon">
                <Icon name="phone" />
              </span>
              <h3>تماس تلفنی</h3>
              <span className="ccard__value">0914 527 5658</span>
              <p>مشاوره‌ی قبل از خرید و فروش</p>
            </a>{" "}
            <a className="ccard ccard--wa" href="https://wa.me/989145275658" target="_blank" rel="noopener">
              <span className="ccard__icon">
                <Icon name="brand-whatsapp" />
              </span>
              <h3>واتساپ</h3>
              <span className="ccard__value">0914 527 5658</span>
              <p>پیام بده؛ همین‌جا جواب می‌گیری</p>
            </a>{" "}
            <a className="ccard" href="https://dash.nexcart.ir/login">
              <span className="ccard__icon">
                <Icon name="headset" />
              </span>
              <h3>تیکت در پنل</h3>
              <span className="ccard__value ccard__value--sm">ورود و ثبت تیکت</span>
              <p>برای فروشنده‌های فعلی</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="prep-h">
        <div className="container container--narrow prose">
          <h2 id="prep-h">برای جواب سریع‌تر</h2>
          <ul>
            <li>
              <strong>سؤال قبل از خرید:</strong> بگو چه می‌فروشی و تقریباً چند محصول داری، تا امکانات مرتبط را
              دقیق توضیح بدهیم.
            </li>
            <li>
              <strong>مشکل فنی:</strong> آدرس فروشگاه، صفحه‌ای که مشکل دارد و در صورت امکان یک تصویر از خطا را
              بفرست.
            </li>
            <li>
              <strong>مشکل پرداخت یا سفارش:</strong> شماره‌ی سفارش را بفرست؛ هیچ‌وقت رمز یا اطلاعات کامل کارت
              بانکی را برای کسی ارسال نکن.
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
      <section className="section" aria-labelledby="related-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">ادامه مسیر</span>
            <h2 id="related-h">شاید جوابت این‌جا باشد</h2>
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
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
