import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-discounts-loyalty";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">بازاریابی و فروش</span>
            <h1>سیستم تخفیف و باشگاه مشتریان فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              سه ابزار برای فروش بیشتر: رویدادهای فروش که تخفیف را بدون کد و در بازه‌ی زمانی مشخص روی کالاها
              اعمال می‌کنند، کد تخفیف برای کمپین‌های هدفمند، و باشگاه مشتریان که با هر خرید امتیاز می‌دهد.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                کد تخفیف در همه‌ی پلن‌ها؛ رویدادهای فروش و باشگاه مشتریان از پلن رشد ·{" "}
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
              <div className="camp">
                <div className="camp__top">
                  <strong>رویداد فروش یلدا</strong>
                  <span className="timer">
                    <span>03</span>
                    <span>18</span>
                    <span>42</span>
                  </span>
                </div>
                <div className="camp__meta">
                  <span>۲۵٪ درصدی</span>
                  <span>سقف تخفیف هر کالا</span>
                  <span>دسته‌ی کفش + برند X</span>
                </div>
              </div>
              <div className="mk__row" style={{ marginTop: "10px" }}>
                <span>
                  <span className="label-chip">یلدایی</span> کفش رانینگ
                </span>
                <span className="pricecut">
                  <s>۲٬۴۰۰٬۰۰۰</s>
                  <b>۱٬۸۰۰٬۰۰۰</b>
                </span>
              </div>
              <div className="mk__row">
                <span>امتیاز باشگاه این خرید</span>
                <b>+۱۸۰ امتیاز</b>
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
                در نکس‌کارت «رویداد فروش» تخفیفی است که بدون کد، در بازه‌ی زمانی مشخص و روی همه‌ی کالاها،
                دسته‌ها، برندها یا کالاهای انتخابی اعمال می‌شود. کنار آن کد تخفیف و باشگاه مشتریان (امتیاز
                خرید قابل استفاده در خریدهای بعدی) هم وجود دارد.
              </p>
            </div>
            <h2 id="campaigns">رویدادهای فروش: تخفیف زمان‌دار بدون کد</h2>
            <p>
              از «رشد و بازاریابی ← رویدادهای فروش» یک رویداد می‌سازی. برای شروع سریع، الگوهای آماده هم هست:
              نوروز، یلدا، جمعه‌ی سیاه، بازگشایی مدارس و تولد فروشگاه.
            </p>
            <h3>تنظیمات هر رویداد</h3>
            <ul>
              <li>
                <strong>محدوده:</strong> همه‌ی کالاها، دسته‌ها (زیردسته‌ها هم حساب می‌شوند)، برندها یا کالاهای
                انتخابی.
              </li>
              <li>
                <strong>نوع تخفیف:</strong> درصدی بین ۱ تا ۹۰ با سقف اختیاری برای هر کالا، یا مبلغ ثابت.
              </li>
              <li>
                <strong>زمان:</strong> تاریخ و ساعت شروع و پایان.
              </li>
              <li>
                <strong>برچسب:</strong> یک برچسب کوتاه مثل «نوروزی» که روی کارت محصول نمایش داده می‌شود.
              </li>
            </ul>
            <h3>گزینه‌ها</h3>
            <ul>
              <li>«روی کالاهایی که خودشان تخفیف دارند اعمال نشود»</li>
              <li>«کد تخفیف هم‌زمان مجاز باشد»</li>
              <li>«نوار شمارش معکوس بالای فروشگاه»</li>
            </ul>
            <h3>همه‌جا یکسان</h3>
            <p>
              قیمت رویداد در فهرست محصولات، صفحه‌ی محصول و تنوع‌ها، سبد خرید (که قیمت‌ها را تازه می‌کند)، ثبت
              سفارش، API و فید ترب و داده‌ی ساختاریافته‌ی گوگل یکسان اعمال می‌شود. مشتری هم می‌تواند فقط
              کالاهای تخفیف‌دار را فیلتر کند و بر اساس «بیشترین تخفیف» مرتب کند.
            </p>
            <div className="callout callout--ok">
              <Icon name="circle-check" />
              <div>
                <strong>قیمت اصلی دست نمی‌خورد:</strong> تخفیف هنگام خواندن قیمت محاسبه می‌شود. وقتی رویداد
                تمام شود، همه‌چیز خودکار برمی‌گردد و لازم نیست چیزی را دستی درست کنی. قیمت قبل از رویداد هم
                روی سفارش ذخیره می‌شود تا ستون تخفیف <Link href="/features/invoice/">فاکتور رسمی</Link> درست
                باشد.
              </div>
            </div>
            <h2 id="coupons">کد تخفیف</h2>
            <p>
              برای تخفیف‌های هدفمند (مثلاً فقط برای مشتری‌های پیامکی، اینفلوئنسر یا خرید اول) کد تخفیف بساز.
              مشتری کد را در سبد خرید وارد می‌کند و مبلغ تخفیف در ریز مبلغ سفارش جدا نمایش داده می‌شود.
            </p>
            <h2 id="loyalty">باشگاه مشتریان و امتیاز وفاداری</h2>
            <p>
              با هر خرید به مشتری امتیاز بده تا در خرید بعدی از آن به‌عنوان تخفیف استفاده کند. مشتری امتیازش
              را در حساب کاربری می‌بیند و هنگام پرداخت انتخاب می‌کند که از آن استفاده کند یا نه. امتیاز
              مصرف‌شده هم در ریز مبلغ سفارش جدا ثبت می‌شود.
            </p>
            <p>
              باشگاه مشتریان برای فروشگاه‌هایی که خرید تکراری دارند (آرایشی، مواد غذایی، لوازم مصرفی، پوشاک)
              بیشترین اثر را دارد.
            </p>
            <h2 id="amazing">پیشنهاد شگفت‌انگیز در صفحه‌ی اصلی</h2>
            <p>
              در صفحه‌ساز صفحه‌ی اصلی، بخش «پیشنهاد شگفت‌انگیز» با تایمر شمارش معکوس، کالاهای تخفیف‌دار را
              برجسته می‌کند. در قالب مگامارکت این بخش به‌صورت یک نوار رنگی جدا نمایش داده می‌شود.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#campaigns">رویدادهای فروش: تخفیف زمان‌دار بدون کد</a>
              </li>
              <li>
                <a href="#coupons">کد تخفیف</a>
              </li>
              <li>
                <a href="#loyalty">باشگاه مشتریان و امتیاز وفاداری</a>
              </li>
              <li>
                <a href="#amazing">پیشنهاد شگفت‌انگیز در صفحه‌ی اصلی</a>
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
            <Link className="card reveal" href="/features/torob/">
              <span className="card__ic ic-amber">
                <Icon name="zoom-money" />
              </span>
              <h3>اتصال به ترب</h3>
              <p>API نسخه ۳ ترب، متاتگ‌های قیمت و موجودی، و ارسال هر تنوع به‌صورت جدا.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/features/invoice/">
              <span className="card__ic ic-violet">
                <Icon name="file-invoice" />
              </span>
              <h3>فاکتور رسمی</h3>
              <p>صدور فاکتور رسمی با شماره‌ی ترتیبی، ابطال و صدور مجدد، و رسید فروش.</p>
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
