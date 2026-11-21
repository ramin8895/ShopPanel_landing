import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-seo";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">مرکز سئو</span>
            <h1>ابزارهای سئوی فروشگاه در نکس‌کارت</h1>
            <p className="page-hero__lead">
              نکس‌کارت پایه‌ی فنی سئو (آدرس خوانا، نقشه‌ی سایت، داده‌ی ساختاریافته، کد وضعیت درست) را خودش
              انجام می‌دهد و ابزارهایی می‌دهد که محتوای فروشگاه را برای جستجو بهتر کنی: امتیاز سئو، ریدایرکت،
              مانیتور 404، گزارش سرعت و وبلاگ.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                سئوی پایه در همه‌ی پلن‌ها؛ امتیاز سئو، ریدایرکت و وبلاگ از پلن رشد؛ گزارش‌ها و ردیابی گوگل در
                پلن حرفه‌ای · <Link href="/pricing/#compare-h">مقایسه‌ی پلن‌ها</Link>
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
                <Icon name="seo" /> پیش‌نمایش در گوگل
              </p>
              <div className="serp">
                <div className="serp__url">myshop.ir › product › کفش-رانینگ</div>
                <div className="serp__title">کفش رانینگ مردانه مدل X | فروشگاه من</div>
                <div className="serp__desc">
                  خرید کفش رانینگ مردانه با زیره‌ی EVA، در چهار رنگ و سایز ۴۰ تا ۴۵. ارسال به سراسر ایران...
                </div>
              </div>
              <div className="score">
                <div className="score__ring" style={{ "--p": "82" } as React.CSSProperties}>
                  <span>۸۲</span>
                </div>
                <ul className="checks" role="list">
                  <li className="ok">
                    <Icon name="circle-check" /> کلمه‌ی کانونی در عنوان
                  </li>
                  <li className="ok">
                    <Icon name="circle-check" /> طول توضیحات مناسب
                  </li>
                  <li className="bad">
                    <Icon name="alert-triangle" /> لینک داخلی ندارد
                  </li>
                </ul>
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
                مرکز سئوی نکس‌کارت شامل ویرایشگر و امتیاز سئو (برای محصول، دسته، صفحه و مقاله)، قالب خودکار
                عنوان و توضیحات، ریدایرکت ۳۰۱ با ایمپورت CSV، مانیتور 404، گزارش Core Web Vitals واقعی، بررسی
                سلامت سئو با امتیاز ۰ تا ۱۰۰، robots.txt و sitemap قابل تنظیم، وبلاگ فروشگاه و کدهای گوگل است.
              </p>
            </div>
            <h2 id="editor">ویرایشگر و امتیاز سئو</h2>
            <p>
              زیر فرم هر محصول، دسته، صفحه و مقاله یک پنل سئو هست که مثل افزونه‌های معروف وردپرس کار می‌کند،
              با این تفاوت که برای متن فارسی ساخته شده است:
            </p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="target" />{" "}
                <span>کلمه‌ی کلیدی کانونی و تکرار آن در عنوان، نامک، متن و تیترها</span>
              </li>
              <li>
                <Icon name="eye" /> <span>پیش‌نمایش نتیجه‌ی گوگل با طول عنوان و توضیحات</span>
              </li>
              <li>
                <Icon name="photo" /> <span>بررسی متن جایگزین (alt) تصاویر</span>
              </li>
              <li>
                <Icon name="link" /> <span>بررسی لینک داخلی و چگالی کلمه‌ی کلیدی</span>
              </li>
              <li>
                <Icon name="eye-off" /> <span>کنترل noindex برای صفحه‌هایی که نباید در گوگل باشند</span>
              </li>
              <li>
                <Icon name="language" /> <span>یکسان‌سازی ی/ک عربی، نیم‌فاصله و اعراب قبل از تحلیل</span>
              </li>
            </ul>
            <p>خروجی، یک امتیاز با چک‌لیست قابل کلیک است؛ می‌دانی دقیقاً کدام مورد را درست کنی.</p>
            <h2 id="templates">قالب عنوان و توضیحات</h2>
            <p>
              برای صدها محصول نمی‌شود عنوان سئو را دستی نوشت. در تنظیمات سئو یک قالب پیش‌فرض با متغیر می‌سازی
              و برای هر محصولی که عنوان دستی ندارد، خودکار ساخته می‌شود. متغیرهای در دسترس:
            </p>
            <p>
              <code>{"{name}"}</code> نام کالا · <code>{"{store}"}</code> نام فروشگاه ·{" "}
              <code>{"{category}"}</code> دسته · <code>{"{brand}"}</code> برند · <code>{"{price}"}</code> قیمت
            </p>
            <p>
              مثلاً قالب «خرید <code>{"{name}"}</code> | <code>{"{brand}"}</code> | <code>{"{store}"}</code>»
              برای همه‌ی محصولات عنوان یکدست و منحصربه‌فرد می‌سازد.
            </p>
            <h2 id="redirects">ریدایرکت ۳۰۱ و مانیتور 404</h2>
            <h3>ریدایرکت</h3>
            <ul>
              <li>ریدایرکت دائمی (۳۰۱) یا موقت (۳۰۲) دستی، با شمارش تعداد بازدید هر ریدایرکت.</li>
              <li>جلوگیری خودکار از زنجیره و حلقه‌ی ریدایرکت.</li>
              <li>
                <strong>ایمپورت CSV</strong> برای انتقال از سایت قبلی.
              </li>
              <li>با تغییر نامک یا حذف محصول، دسته، صفحه یا مقاله، ریدایرکت خودکار ساخته می‌شود.</li>
            </ul>
            <h3>مانیتور 404</h3>
            <p>
              آدرس‌های خرابی که بازدیدکننده‌ها به آن‌ها می‌رسند تجمیعی ثبت می‌شوند؛ ربات‌ها و مسیرهای بی‌ارزش
              (مثل تلاش برای باز کردن صفحه‌های وردپرس) فیلتر می‌شوند. کنار هر مورد دکمه‌ی «ریدایرکت بساز» یا
              «نادیده بگیر» هست. محصول ناموجود هم کد 404 واقعی برمی‌گرداند، نه یک صفحه‌ی خالی با کد ۲۰۰ که
              گوگل آن را «soft 404» می‌داند.
            </p>
            <h2 id="health">بررسی سلامت و سرعت سایت</h2>
            <p>
              <strong>بررسی سلامت سئو</strong> به فروشگاه امتیاز ۰ تا ۱۰۰ می‌دهد و مشکل‌ها را به ترتیب اهمیت
              فهرست می‌کند: توضیحات کم، عنوان تکراری، تصویر بدون alt، 404 حل‌نشده و تنظیمات ناقص.
            </p>
            <p>
              <strong>گزارش سرعت</strong> بر اساس داده‌ی واقعی بازدیدکننده‌هاست، نه تست آزمایشگاهی: شاخص‌های
              LCP، INP، CLS، FCP و TTFB از نمونه‌ای از بازدیدها جمع می‌شوند و صدک ۷۵ آن‌ها به تفکیک صفحه و
              دستگاه نمایش داده می‌شود؛ همان معیاری که گوگل برای Core Web Vitals استفاده می‌کند.
            </p>
            <h2 id="technical">سئوی فنی خودکار</h2>
            <ul>
              <li>
                <strong>نقشه‌ی سایت تصویری:</strong> شامل محصولات، دسته‌ها و مقاله‌ها؛ صفحه‌های noindex و
                دسته‌های خالی در آن نیستند.
              </li>
              <li>
                <strong>robots.txt قابل تنظیم</strong> با پیش‌فرض امن.
              </li>
              <li>
                <strong>داده‌ی ساختاریافته‌ی محصول</strong> با قیمت به ریال و تاریخ اعتبار قیمت؛ اگر رویداد
                فروش فعال باشد، تاریخ پایان رویداد.
              </li>
              <li>
                <strong>اتصال سرچ کنسول گوگل</strong> از پنل.
              </li>
            </ul>
            <h2 id="blog">وبلاگ فروشگاه</h2>
            <p>
              محتوای آموزشی و راهنمای خرید یکی از راه‌های اصلی گرفتن ورودی از گوگل است. وبلاگ نکس‌کارت داخل
              خود فروشگاه است (آدرس <code>/blog</code>) و این امکانات را دارد:
            </p>
            <ul>
              <li>ویرایشگر Markdown با نوار ابزار و پیش‌نمایش؛ HTML خام اجرا نمی‌شود، پس امن است.</li>
              <li>تصویر شاخص، دسته و برچسب، و انتشار زمان‌بندی‌شده.</li>
              <li>
                کد <code>[[product:نامک]]</code> که کارت محصول با قیمت روز را وسط مقاله می‌گذارد؛ لینک داخلی
                به محصول هم خودکار ساخته می‌شود.
              </li>
              <li>فهرست مطالب، مقاله‌های مرتبط، شمارش بازدید و داده‌ی ساختاریافته‌ی BlogPosting.</li>
            </ul>
            <h2 id="tracking">
              کدهای گوگل: <span className="en">GA4</span>، GTM و گوگل ادز
            </h2>
            <p>
              این بخش در پلن حرفه‌ای فعال است. در «مرکز سئو ← تنظیمات و کدهای گوگل» شناسه‌ی{" "}
              <span className="en">GA4</span>، GTM و Google Ads را وارد می‌کنی. رویدادهای مشاهده‌ی کالا،
              افزودن به سبد، شروع پرداخت و خرید (بدون ثبت تکراری) و conversion گوگل ادز ارسال می‌شوند.
            </p>
            <div className="callout callout--warn">
              <Icon name="alert-triangle" />
              <div>
                <strong>محدودیت:</strong> این کدها فقط روی دامنه‌ی اختصاصی تأییدشده‌ای بارگذاری می‌شوند که با
                ‎.ir‎ تمام نمی‌شود (مثل ‎.com‎). روی زیردامنه‌ی nexcart.ir و دامنه‌های ‎.ir‎ هیچ کدی لود
                نمی‌شود. تبلیغات گوگل برای کسب‌وکار ایرانی ممکن است با محدودیت‌های گوگل روبه‌رو شود و مسئولیت
                آن با فروشنده است.
              </div>
            </div>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#editor">ویرایشگر و امتیاز سئو</a>
              </li>
              <li>
                <a href="#templates">قالب عنوان و توضیحات</a>
              </li>
              <li>
                <a href="#redirects">ریدایرکت ۳۰۱ و مانیتور 404</a>
              </li>
              <li>
                <a href="#health">بررسی سلامت و سرعت سایت</a>
              </li>
              <li>
                <a href="#technical">سئوی فنی خودکار</a>
              </li>
              <li>
                <a href="#blog">وبلاگ فروشگاه</a>
              </li>
              <li>
                <a href="#tracking">کدهای گوگل: GA4، GTM و گوگل ادز</a>
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
            <h2 id="related-h">یاد بگیر و اجرا کن</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/blog/online-store-seo/">
              <span className="card__ic ic-green">
                <Icon name="chart-line" />
              </span>
              <h3>سئو فروشگاه اینترنتی</h3>
              <p>سئو محصول و دسته، تصاویر، سرعت، داده‌ی ساختاریافته و سرچ کنسول.</p>
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
            <Link className="card reveal" href="/features/custom-domain/">
              <span className="card__ic ic-violet">
                <Icon name="world-www" />
              </span>
              <h3>دامنه اختصاصی</h3>
              <p>اتصال دامنه‌ی خودت با گواهی SSL رایگان که خودکار صادر و تمدید می‌شود.</p>
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
