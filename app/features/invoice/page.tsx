import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-invoice";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">فاکتور و صورتحساب</span>
            <h1>فاکتور رسمی و رسید فروش در فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              مشتری‌های شرکتی و خیلی از خریداران حقیقی فاکتور رسمی می‌خواهند. در نکس‌کارت مشتری موقع پرداخت یا
              بعد از خرید درخواست می‌دهد، تو از پنل بررسی و صادر می‌کنی، و فاکتور به‌صورت صفحه‌ی چاپی{" "}
              <span className="en">A4</span> فارسی آماده‌ی دانلود و چاپ است.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                رسید فروش در همه‌ی پلن‌ها؛ فاکتور رسمی از پلن رشد ·{" "}
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
            <div className="inv" aria-hidden="true">
              <div className="inv__head">
                <strong>صورتحساب فروش کالا و خدمات</strong>
                <span className="mk__muted">
                  شماره: <span className="en">INV-1024</span>
                </span>
              </div>
              <div className="mk__muted" style={{ marginBottom: "6px" }}>
                فروشنده: فروشگاه نمونه · خریدار: شرکت آلفا (حقوقی)
              </div>
              <table>
                <thead>
                  <tr>
                    <th>شرح</th>
                    <th>تعداد</th>
                    <th>مبلغ</th>
                    <th>تخفیف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>هدفون بی‌سیم</td>
                    <td>۲</td>
                    <td>۴٬۲۰۰٬۰۰۰</td>
                    <td>۸۴۰٬۰۰۰</td>
                  </tr>
                  <tr>
                    <td>کابل شارژ</td>
                    <td>۳</td>
                    <td>۵۴۰٬۰۰۰</td>
                    <td>۰</td>
                  </tr>
                </tbody>
              </table>
              <p className="inv__words">مبلغ به حروف: سه میلیون و نهصد هزار تومان</p>
              <span className="inv__stamp">مهر</span>
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
                نکس‌کارت دو نوع فاکتور دارد: <strong>رسید فروش (فاکتور غیررسمی)</strong> که برای هر سفارش
                خودکار در دسترس مشتری است، و <strong>فاکتور رسمی</strong> با مشخصات فروشنده و خریدار، شماره‌ی
                ترتیبی بدون جاافتادگی و مبلغ به حروف، که فروشنده صادر می‌کند و پس از صدور فقط قابل ابطال یا
                صدور مجدد است.
              </p>
            </div>
            <h2 id="types">رسید فروش و فاکتور رسمی چه فرقی دارند؟</h2>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: رسید فروش و فاکتور رسمی چه فرقی دارند؟ (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ویژگی</th>
                    <th scope="col">رسید فروش (غیررسمی)</th>
                    <th scope="col">فاکتور رسمی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>چه کسی صادر می‌کند</td>
                    <td>خودکار برای هر سفارش</td>
                    <td>فروشنده از پنل (یا صدور خودکار، اگر فعال باشد)</td>
                  </tr>
                  <tr>
                    <td>مشخصات خریدار</td>
                    <td>اطلاعات سفارش</td>
                    <td>حقیقی با کد ملی، یا حقوقی با شناسه‌ی ملی و کد اقتصادی، با کد پستی و نشانی</td>
                  </tr>
                  <tr>
                    <td>شماره</td>
                    <td>شماره‌ی سفارش</td>
                    <td>شماره‌ی ترتیبی با پیشوند دلخواه و بدون جاافتادگی</td>
                  </tr>
                  <tr>
                    <td>تغییر بعد از صدور</td>
                    <td>همیشه از روی سفارش فعلی ساخته می‌شود</td>
                    <td>تغییرناپذیر؛ فقط ابطال یا ابطال و صدور مجدد</td>
                  </tr>
                  <tr>
                    <td>دسترسی مشتری</td>
                    <td>لینک امن از «سفارش‌های من»، صفحه‌ی نتیجه‌ی پرداخت و پیامک</td>
                    <td>با لینک اختصاصی فاکتور پس از صدور</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="request">مشتری چطور فاکتور رسمی درخواست می‌کند؟</h2>
            <ol className="numbered">
              <li>
                <strong>موقع پرداخت</strong> تیک «فاکتور رسمی می‌خواهم» را می‌زند و نوع شخص را انتخاب می‌کند:
                حقیقی (نام و کد ملی) یا حقوقی (نام شرکت، شناسه‌ی ملی، کد اقتصادی)، به‌علاوه‌ی کد پستی و نشانی.
                کد ملی و کد پستی اعتبارسنجی می‌شوند.
              </li>
              <li>
                <strong>بعد از خرید</strong> از صفحه‌ی «سفارش‌های من»، تا پایان مهلتی که فروشنده تعیین کرده
                است.
              </li>
              <li>
                <strong>بدون درخواست</strong> فروشنده یا پشتیبانی می‌تواند خودش از جزئیات سفارش فاکتور صادر
                کند.
              </li>
            </ol>
            <h2 id="panel">مدیریت فاکتورها در پنل</h2>
            <p>در «فروشگاه ← فاکتورها» سه بخش داری:</p>
            <ul>
              <li>
                <strong>درخواست‌ها:</strong> درخواست‌های فاکتور رسمی مشتری‌ها که منتظر بررسی‌اند.
              </li>
              <li>
                <strong>فاکتورهای صادرشده:</strong> فهرست کامل با وضعیت (صادرشده یا باطل‌شده).
              </li>
              <li>
                <strong>تنظیمات:</strong> مشخصات فروشنده، تصویر مهر و امضا، پیشوند و شماره‌ی شروع، واحد (ریال
                یا تومان)، مهلت درخواست و صدور خودکار.
              </li>
            </ul>
            <p>
              در جزئیات هر سفارش هم بخش فاکتور هست: صدور، ویرایش مشخصات خریدار پیش از صدور، ابطال و صدور مجدد.
            </p>
            <h2 id="pdf">چاپ و PDF</h2>
            <p>
              فاکتور به‌صورت صفحه‌ی چاپی <span className="en">A4</span> با فونت ایران‌یکان باز می‌شود و مشتری
              می‌تواند آن را چاپ یا با دکمه‌ی «ذخیره به PDF» مرورگر ذخیره کند. اگر روی سرور فعال باشد، خروجی
              PDF مستقیم هم در دسترس است.
            </p>
            <h2 id="accuracy">دقت مبالغ</h2>
            <ul>
              <li>
                اگر کالا در یک رویداد فروش تخفیف خورده باشد، قیمت قبل از رویداد روی سفارش ذخیره می‌شود تا ستون
                تخفیف فاکتور درست باشد.
              </li>
              <li>
                شماره‌گذاری با قفل پایگاه داده انجام می‌شود، پس دو فاکتور هم‌زمان هیچ‌وقت شماره‌ی تکراری
                نمی‌گیرند.
              </li>
              <li>
                صدور فاکتور در حالت ورود پشتیبانی به پنل (جانشینی) مسدود است؛ فقط خود فروشنده صادر می‌کند.
              </li>
            </ul>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#types">رسید فروش و فاکتور رسمی چه فرقی دارند؟</a>
              </li>
              <li>
                <a href="#request">مشتری چطور فاکتور رسمی درخواست می‌کند؟</a>
              </li>
              <li>
                <a href="#panel">مدیریت فاکتورها در پنل</a>
              </li>
              <li>
                <a href="#pdf">چاپ و PDF</a>
              </li>
              <li>
                <a href="#accuracy">دقت مبالغ</a>
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
            <Link className="card reveal" href="/features/discounts-loyalty/">
              <span className="card__ic ic-rose">
                <Icon name="rosette-discount" />
              </span>
              <h3>تخفیف و باشگاه مشتریان</h3>
              <p>تخفیف زمان‌دار بدون کد، کد تخفیف، شمارش معکوس و امتیاز وفاداری.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/payment-gateway/">
              <span className="card__ic ic-blue">
                <Icon name="credit-card" />
              </span>
              <h3>درگاه پرداخت و اقساطی</h3>
              <p>اتصال زرین‌پال و خرید اقساطی ترب‌پی؛ پول مستقیم به حساب فروشنده.</p>
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
