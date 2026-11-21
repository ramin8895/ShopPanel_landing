import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-live-chat";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">پشتیبانی زنده</span>
            <h1>چت آنلاین فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              مشتری‌ای که سؤالش بی‌جواب بماند، معمولاً از سایت می‌رود. با چت آنلاین نکس‌کارت، مشتری از گوشه‌ی
              فروشگاه پیام می‌دهد و تو از پنل، در لحظه جواب می‌دهی؛ بدون نصب افزونه یا سرویس جدا.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                چت آنلاین در پلن رشد (یک پرسنل) و پلن حرفه‌ای (چند پرسنل) ·{" "}
                <Link href="/pricing/#compare-h">مقایسه‌ی پلن‌ها</Link>
              </span>
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
          <div className="page-hero__visual">
            <div className="mk">
              <p className="mk__title">
                <Icon name="message-chatbot" /> گفتگو با مشتری{" "}
                <span className="status" style={{ marginInlineStart: "auto" }}>
                  آنلاین
                </span>
              </p>
              <div className="chat">
                <div className="bubble bubble--in">
                  سلام، سایز ۴۳ رنگ مشکی کی موجود می‌شه؟<small>۱۰:۲۴</small>
                </div>
                <div className="bubble bubble--out">
                  سلام! اواخر هفته شارژ می‌شه. براتون خبر بذارم؟<small>۱۰:۲۵ · خوانده شد</small>
                </div>
                <div className="typing">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                <span className="fab">
                  <Icon name="message-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container doc">
          <article className="prose">
            <div className="answer">
              <p className="answer__label">
                <Icon name="bulb" /> خلاصه
              </p>
              <p>
                چت آنلاین نکس‌کارت یک حباب گفتگو روی فروشگاه است که مشتری (حتی بدون ثبت‌نام) از آن پیام
                می‌دهد. پیام‌ها در صندوق چت پنل فروشنده با اعلان صوتی و مرورگر می‌رسند؛ وقتی پنل باز است،
                فروشگاه «آنلاین» نمایش داده می‌شود.
              </p>
            </div>
            <h2 id="customer">چت از دید مشتری</h2>
            <ul>
              <li>
                یک حباب گرد در گوشه‌ی فروشگاه؛ روی موبایل تمام‌صفحه و روی دسکتاپ یک کارت شناور باز می‌شود.
              </li>
              <li>جای حباب طوری تنظیم شده که روی نوار پایین موبایل و دکمه‌ی خرید صفحه‌ی محصول نیفتد.</li>
              <li>مهمان با اطلاعات تماس کوتاه گفتگو را شروع می‌کند.</li>
              <li>پیام خوش‌آمدی که خودت نوشته‌ای نمایش داده می‌شود.</li>
              <li>نشانه‌ی «خوانده شد» و «در حال نوشتن» مثل پیام‌رسان‌ها.</li>
              <li>
                اگر اتصال اینترنت مشتری قطع و وصل شود، گفتگو خودکار دوباره وصل می‌شود و پیامی از دست نمی‌رود.
              </li>
            </ul>
            <h2 id="seller">چت از دید فروشنده</h2>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="layout-sidebar" />{" "}
                <span>صندوق دوستونه: فهرست گفتگوها با فیلتر و جستجو، و متن گفتگو</span>
              </li>
              <li>
                <Icon name="bell-ringing" /> <span>اعلان مرورگر و صدای کوتاه برای پیام جدید</span>
              </li>
              <li>
                <Icon name="circle-dot" /> <span>نشان پیام‌های خوانده‌نشده روی منوی پنل</span>
              </li>
              <li>
                <Icon name="pencil" /> <span>پیش‌نویس جواب برای هر گفتگو جدا حفظ می‌شود</span>
              </li>
              <li>
                <Icon name="circle-check" /> <span>بستن گفتگوی حل‌شده و بازکردن دوباره</span>
              </li>
              <li>
                <Icon name="toggle-right" /> <span>روشن و خاموش کردن چت و تنظیم پیام خوش‌آمد</span>
              </li>
            </ul>
            <h2 id="online">وضعیت آنلاین چطور کار می‌کند؟</h2>
            <p>
              وقتی صفحه‌ی چت پنل باز است، فروشگاه برای مشتری‌ها «آنلاین» نشان داده می‌شود. اگر پنل را ببندی،
              بعد از چند ثانیه وضعیت به «آفلاین» تغییر می‌کند، ولی مشتری همچنان می‌تواند پیام بگذارد.
            </p>
            <h2 id="tips">چند پیشنهاد برای استفاده‌ی بهتر</h2>
            <ul>
              <li>در پیام خوش‌آمد، ساعت پاسخ‌گویی را بنویس تا انتظار مشتری درست تنظیم شود.</li>
              <li>
                سؤال‌هایی که زیاد تکرار می‌شوند (زمان ارسال، مرجوعی، راهنمای سایز) را در صفحه‌ی محصول یا
                صفحه‌ی سؤالات متداول فروشگاه جواب بده.
              </li>
              <li>
                اگر مشتری بعد از خرید سؤال دارد، شماره‌ی سفارش را بپرس و از{" "}
                <Link href="/features/order-management/">جزئیات سفارش</Link> وضعیت را دقیق ببین.
              </li>
            </ul>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#customer">چت از دید مشتری</a>
              </li>
              <li>
                <a href="#seller">چت از دید فروشنده</a>
              </li>
              <li>
                <a href="#online">وضعیت آنلاین چطور کار می‌کند؟</a>
              </li>
              <li>
                <a href="#tips">چند پیشنهاد برای استفاده‌ی بهتر</a>
              </li>
            </ol>
            <div className="toc__cta">
              <a className="btn btn--primary btn--sm btn--block" href="https://dash.nexcart.ir/register">
                ساخت فروشگاه رایگان
              </a>
            </div>
          </aside>
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
            <h2 id="related-h">امکانات مرتبط</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/features/order-management/">
              <span className="card__ic ic-teal">
                <Icon name="truck-delivery" />
              </span>
              <h3>مدیریت سفارش</h3>
              <p>پیامک سفارش جدید، کد رهگیری، جزئیات کامل اقلام و ریز مبلغ هر سفارش.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/themes/">
              <span className="card__ic ic-violet">
                <Icon name="palette" />
              </span>
              <h3>قالب‌های فروشگاه</h3>
              <p>سه قالب که هر کدام مثل یک سایت جداست، با پیش‌نمایش زنده و شخصی‌سازی.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/solutions/instagram-sellers/">
              <span className="card__ic ic-rose">
                <Icon name="brand-instagram" />
              </span>
              <h3>فروشندگان اینستاگرام</h3>
              <p>انتقال سفارش و پرداخت از دایرکت به فروشگاه اینترنتی، با لینک مستقیم محصول.</p>
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
