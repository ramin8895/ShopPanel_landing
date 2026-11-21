import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-accounting-inventory";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">حسابداری و انبار</span>
            <h1>حسابداری و انبارداری فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              بدانی چه کالایی چقدر موجود است، هر کالا را به چه قیمتی خریده‌ای، به چه کسی بدهکاری و در پایان
              ماه واقعاً چقدر سود کرده‌ای؛ همه در همان پنل فروشگاه، بدون نرم‌افزار جدا و بدون ورود دوباره‌ی
              اطلاعات.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                در پلن حرفه‌ای · ثبت حرکت موجودی در همه‌ی پلن‌ها ·{" "}
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
                <Icon name="chart-bar" /> سود و زیان · ۳۰ روز اخیر (نمونه)
              </p>
              <div className="mk__row">
                <span>فروش کالا</span>
                <b>۱۲۴٬۵۰۰٬۰۰۰</b>
              </div>
              <div className="mk__row">
                <span>بهای تمام‌شده</span>
                <span>−۷۲٬۰۰۰٬۰۰۰</span>
              </div>
              <div className="mk__row">
                <span>سود ناخالص</span>
                <b>۵۲٬۵۰۰٬۰۰۰</b>
              </div>
              <div className="mk__row">
                <span>هزینه‌ها (اجاره، تبلیغات، بسته‌بندی)</span>
                <span>−۱۸٬۲۰۰٬۰۰۰</span>
              </div>
              <div className="mk__row">
                <span>سود خالص</span>
                <span className="status">
                  <Icon name="trending-up" /> ۳۴٬۳۰۰٬۰۰۰
                </span>
              </div>
              <p className="mk__muted" style={{ marginTop: "8px" }}>
                پوشش بها: ۱۰۰٪ از فروش · اعداد نمونه‌اند.
              </p>
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
                پلن حرفه‌ای نکس‌کارت سه بخش مالی دارد: «انبار و موجودی» برای دیدن و اصلاح موجودی و
                انبارگردانی، «خرید و تأمین‌کنندگان» برای فاکتور خرید و بدهی‌ها، و «حسابداری» برای سود و زیان و
                هزینه‌ها. بهای تمام‌شده با میانگین موزون خریدها حساب می‌شود و بها و سود فقط برای مالک و مدیر
                دیده می‌شود.
              </p>
            </div>
            <h2 id="inventory">انبار و موجودی</h2>
            <p>
              در صفحه‌ی «انبار و موجودی» خلاصه‌ی وضعیت انبارت را می‌بینی: تعداد کالاها، واحدها، ناموجودها،
              کالاهای رو‌به‌اتمام و ارزش موجودی. کالا را جست‌وجو و بر اساس وضعیت (همه، کم‌موجود، ناموجود)
              فیلتر می‌کنی.
            </p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="pencil" />{" "}
                <span>
                  <strong>اصلاح موجودی:</strong> یا عدد نهایی را بنویس یا افزایش و کاهش بده؛ دلیل را هم انتخاب
                  می‌کنی، مثل ضایعات یا موجودی اولیه.
                </span>
              </li>
              <li>
                <Icon name="list-check" />{" "}
                <span>
                  <strong>انبارگردانی:</strong> شمارش چند کالا را یک‌جا وارد می‌کنی و اختلاف با موجودی سیستم
                  ثبت می‌شود.
                </span>
              </li>
              <li>
                <Icon name="bell-ringing" />{" "}
                <span>
                  <strong>آستانه‌ی هشدار:</strong> برای هر کالا تعیین می‌کنی از چه تعدادی «رو‌به‌اتمام» حساب
                  شود.
                </span>
              </li>
              <li>
                <Icon name="tag" /> <span>بهای خرید هر کالا و هر تنوع (رنگ، سایز، وزن) جدا ثبت می‌شود.</span>
              </li>
            </ul>
            <h2 id="ledger">دفتر حرکت موجودی</h2>
            <p>
              هر تغییر موجودی یک ردیف در دفتر حرکت می‌سازد: نوع تغییر (فروش، لغو، سفارش رهاشده، پرداخت از
              درگاه یا کارت‌به‌کارت، اصلاح دستی، دریافت خرید)، تعداد، موجودی قبل و بعد، سفارش یا فاکتور مربوطه
              و کاربری که آن را انجام داد.
            </p>
            <p>
              ثبت ردیف در همان تراکنشی انجام می‌شود که موجودی را تغییر می‌دهد؛ اگر تراکنش برگردد، ردیف هم
              برمی‌گردد. دفتر برای همه‌ی پلن‌ها ثبت می‌شود و مشاهده‌ی آن در پلن حرفه‌ای است، پس هر وقت ارتقا
              بدهی تاریخچه‌ی کامل از اول در دسترس است.
            </p>
            <h2 id="purchases">خرید و تأمین‌کنندگان</h2>
            <p>
              فاکتور خرید سه مرحله دارد: پیش‌نویس، دریافت کالا و پرداخت‌ها. تأمین‌کننده‌هایت را با اطلاعات
              تماس ثبت می‌کنی و بدهی هر کدام را می‌بینی.
            </p>
            <ul>
              <li>
                <strong>دریافت کالا:</strong> موجودی زیاد می‌شود و بهای تمام‌شده با{" "}
                <strong>میانگین موزون</strong> به‌روز می‌شود. اگر موجودی فعلی صفر یا بها ثبت نشده باشد، بهای
                همین خرید جایگزین می‌شود.
              </li>
              <li>
                <strong>پرداخت‌ها:</strong> هر فاکتور چند پرداخت (مبلغ، تاریخ، روش) می‌پذیرد و پرداخت بیشتر از
                مانده رد می‌شود. مانده‌ی فاکتورهای دریافت‌شده همان بدهی به تأمین‌کننده است و با فیلتر
                «بدهکاری‌ها» فهرستش را می‌بینی.
              </li>
              <li>
                <strong>ایمنی:</strong> دریافت یک فاکتور فقط یک بار انجام می‌شود؛ حتی اگر دو نفر هم‌زمان دکمه
                را بزنند موجودی دوبار اضافه نمی‌شود.
              </li>
            </ul>
            <h2 id="profit">سود و زیان و هزینه‌ها</h2>
            <p>
              در صفحه‌ی «حسابداری» بازه‌ی ۷، ۳۰ یا ۹۰ روز (یا تاریخ دلخواه تا ۴۰۰ روز) را انتخاب می‌کنی و
              این‌ها را می‌بینی: سود و زیان، نمودار روزانه‌ی فروش در برابر بهای تمام‌شده، پرسودترین کالاها،
              هزینه‌ها به تفکیک دسته و مطالبات. هزینه‌هایی مثل اجاره، تبلیغات و بسته‌بندی را در تب «هزینه‌ها»
              ثبت، ویرایش یا حذف می‌کنی.
            </p>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="جدول: تعریف اعداد گزارش (۱)">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">عدد</th>
                    <th scope="col">چطور حساب می‌شود</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>فروش</td>
                    <td>سفارش‌های پرداخت‌شده‌ی لغونشده (همان تعریف داشبورد)</td>
                  </tr>
                  <tr>
                    <td>بهای تمام‌شده</td>
                    <td>بهای ثبت‌شده‌ی همان لحظه‌ی سفارش؛ اگر نبود بهای فعلی تنوع یا محصول</td>
                  </tr>
                  <tr>
                    <td>سود ناخالص</td>
                    <td>فروش کالا − تخفیف − امتیاز باشگاه − بهای تمام‌شده</td>
                  </tr>
                  <tr>
                    <td>سود خالص</td>
                    <td>سود ناخالص − هزینه‌های ثبت‌شده</td>
                  </tr>
                  <tr>
                    <td>مطالبات</td>
                    <td>سفارش‌های در انتظار پرداخت: پرداخت در محل، کارت‌به‌کارت و در جریان</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              هزینه‌ی ارسال و مالیات در سود نمی‌آید و جدا گزارش می‌شود. تاریخ‌ها به وقت تهران حساب می‌شوند.
            </p>
            <h2 id="access">چه کسی چه چیزی را می‌بیند؟</h2>
            <ul>
              <li>
                <strong>همه‌ی اعضای فروشگاه:</strong> مشاهده و اصلاح موجودی و انبارگردانی.
              </li>
              <li>
                <strong>فقط مالک و مدیر:</strong> بها، ارزش موجودی، تأمین‌کننده، فاکتور خرید، هزینه‌ها و سود.
                برای کارمند عادی این فیلدها اصلاً از سرور ارسال نمی‌شود، نه اینکه فقط در صفحه پنهان باشند.
              </li>
            </ul>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                <strong>محدودیت‌ها، صادقانه:</strong> این گزارش مدیریتی است، نه جایگزین حسابدار رسمی. اگر برای
                بخشی از فروش بها ثبت نکرده باشی، درصد پوشش بها زیر ۱۰۰ می‌شود و سود ناخالص آن بخش خوش‌بینانه
                است. سفارش‌های قبل از فعال شدن این امکان بهای لحظه‌ی سفارش ندارند. موجودی فعلاً تک‌انباره است
                و برگشت از خرید با «اصلاح» دستی انجام می‌شود.
              </div>
            </div>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#inventory">انبار و موجودی</a>
              </li>
              <li>
                <a href="#ledger">دفتر حرکت موجودی</a>
              </li>
              <li>
                <a href="#purchases">خرید و تأمین‌کنندگان</a>
              </li>
              <li>
                <a href="#profit">سود و زیان و هزینه‌ها</a>
              </li>
              <li>
                <a href="#access">چه کسی چه چیزی را می‌بیند؟</a>
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
            <Link className="card reveal" href="/features/product-management/">
              <span className="card__ic ic-blue">
                <Icon name="box" />
              </span>
              <h3>مدیریت محصولات</h3>
              <p>تنوع رنگ و سایز با موجودی و SKU جدا، دسته‌بندی درختی و برند.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/order-management/">
              <span className="card__ic ic-teal">
                <Icon name="truck-delivery" />
              </span>
              <h3>مدیریت سفارش</h3>
              <p>پیامک سفارش جدید، جزئیات هر قلم، کد رهگیری و بازگشت موجودی.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/invoice/">
              <span className="card__ic ic-violet">
                <Icon name="file-invoice" />
              </span>
              <h3>فاکتور رسمی</h3>
              <p>صدور فاکتور رسمی با شماره‌ی ترتیبی، ابطال و رسید فروش.</p>
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
