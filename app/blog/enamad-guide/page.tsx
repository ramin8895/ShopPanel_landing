import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-enamad-guide";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">راهنمای فنی</span>
            <h1>اینماد چیست و چطور برای فروشگاه اینترنتی بگیریم؟</h1>
            <p className="page-hero__lead">
              بدون اینماد معمولاً درگاه پرداخت نمی‌گیری و ترب‌پی هم فعال نمی‌شود. این راهنما توضیح می‌دهد
              اینماد چیست، چه پیش‌نیازهایی دارد و فروشگاهت را چطور برای بررسی آماده کنی.
            </p>
            <div className="page-hero__meta">
              <span>
                <Icon name="calendar" /> به‌روزرسانی: ۹ مهر ۱۴۰۵
              </span>
              <span>
                <Icon name="clock" /> زمان مطالعه: ۳ دقیقه
              </span>
              <span>
                <Icon name="user" /> نویسنده: تیم نکس‌کارت
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container doc">
          <article className="prose">
            <div className="answer">
              <p className="answer__label">
                <Icon name="bulb" /> پاسخ کوتاه
              </p>
              <p>
                <strong>اینماد</strong> (نماد اعتماد الکترونیکی) گواهی‌ای است که مرکز توسعه تجارت الکترونیکی
                برای سایت‌های فروشگاهی صادر می‌کند و نشان می‌دهد هویت و نشانی صاحب سایت احراز شده است.
                درگاه‌های پرداخت اینترنتی معمولاً آن را پیش‌نیاز می‌دانند. برای گرفتنش در سایت{" "}
                <span className="ltr">enamad.ir</span> ثبت‌نام می‌کنی، اطلاعات هویتی، نشانی و دامنه را ثبت و
                تأیید می‌کنی و سایت توسط کارشناس بررسی می‌شود.
              </p>
            </div>
            <div className="callout callout--warn">
              <Icon name="alert-triangle" />
              <div>
                <strong>قوانین تغییر می‌کنند.</strong> شرایط، انواع و هزینه‌ی اینماد را مرکز توسعه تجارت
                الکترونیکی تعیین می‌کند و ممکن است تغییر کند. این مقاله یک راهنمای کلی است؛ قبل از اقدام،
                آخرین ضوابط را در سایت رسمی <span className="ltr">enamad.ir</span> بخوان.
              </div>
            </div>
            <h2 id="why">چرا اینماد برای فروشگاه اینترنتی مهم است؟</h2>
            <ul>
              <li>
                <strong>درگاه پرداخت:</strong> درگاه‌های پرداخت اینترنتی معمولاً برای فعال‌سازی، اینماد سایت
                را می‌خواهند.
              </li>
              <li>
                <strong>سرویس‌های دیگر:</strong> خرید اقساطی{" "}
                <Link href="/features/payment-gateway/">ترب‌پی</Link> هم اینماد را لازم دارد.
              </li>
              <li>
                <strong>اعتماد مشتری:</strong> خیلی از خریداران قبل از پرداخت به دنبال نشان اینماد در سایت
                می‌گردند.
              </li>
            </ul>
            <h2 id="types">انواع اینماد</h2>
            <p>
              اینماد سطح‌های مختلفی دارد. طبق اطلاعات منتشرشده، سطح‌ها از اینماد بدون ستاره (برای کسب‌وکارهای
              خیلی کوچک) و یک‌ستاره شروع می‌شوند، اینماد دوستاره پیش‌نیازهای بیشتری مثل گواهی SSL معتبر دارد و
              سطح‌های بالاتر به سابقه و ارزیابی کسب‌وکار وابسته‌اند. بیشتر فروشگاه‌های تازه‌کار با سطح‌های
              اولیه شروع می‌کنند.
            </p>
            <p>
              در فروشگاه‌های نکس‌کارت گواهی SSL برای دامنه‌ی اختصاصی خودکار صادر می‌شود، پس این پیش‌نیاز از
              طرف سایت آماده است.
            </p>
            <h2 id="documents">پیش‌نیازها و مدارک</h2>
            <p>برای اشخاص حقیقی، معمولاً این موارد خواسته می‌شود:</p>
            <ul>
              <li>حداقل ۱۸ سال سن.</li>
              <li>تصویر کارت ملی و شناسنامه.</li>
              <li>برای آقایان، کارت پایان خدمت یا معافیت.</li>
              <li>شماره‌ی موبایل به نام خودت، ایمیل، و نشانی و تلفن ثابت قابل تأیید.</li>
            </ul>
            <p>برای اشخاص حقوقی، مدارک ثبتی شرکت (آگهی تأسیس، آخرین تغییرات و...) هم لازم است.</p>
            <h2 id="site-ready">قبل از درخواست: فروشگاه را آماده کن</h2>
            <p>
              رایج‌ترین دلیل رد یا تأخیر اینماد، سایت ناقص است. قبل از ثبت درخواست، مطمئن شو فروشگاهت این‌ها
              را دارد:
            </p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="world-www" />{" "}
                <span>
                  <strong>دامنه‌ی اختصاصی</strong> متصل و با SSL فعال
                </span>
              </li>
              <li>
                <Icon name="language" />{" "}
                <span>
                  <strong>محتوای فارسی</strong> در همه‌ی صفحه‌ها
                </span>
              </li>
              <li>
                <Icon name="id" />{" "}
                <span>
                  <strong>صفحه‌ی درباره ما</strong> با اطلاعات کامل صاحب کسب‌وکار
                </span>
              </li>
              <li>
                <Icon name="map-pin" />{" "}
                <span>
                  <strong>صفحه‌ی تماس</strong> با نشانی و تلفن ثابت، همان که در اینماد ثبت می‌کنی
                </span>
              </li>
              <li>
                <Icon name="file-text" />{" "}
                <span>
                  <strong>صفحه‌ی قوانین و شرایط</strong> خرید، ارسال و مرجوعی
                </span>
              </li>
              <li>
                <Icon name="shopping-cart" />{" "}
                <span>
                  <strong>محصول واقعی با قیمت</strong> و امکان ثبت سفارش آنلاین، با هزینه‌های شفاف
                </span>
              </li>
            </ul>
            <p>
              در نکس‌کارت، صفحه‌های درباره ما، تماس و قوانین از بخش صفحه‌های محتوایی پنل ساخته می‌شوند و{" "}
              <Link href="/features/custom-domain/">دامنه‌ی اختصاصی</Link> را هم از تنظیمات وصل می‌کنی.
            </p>
            <h2 id="steps">مراحل کلی دریافت اینماد</h2>
            <ol className="numbered">
              <li>
                <strong>ثبت‌نام در سایت اینماد</strong> با اطلاعات هویتی، موبایل و ایمیل؛ موبایل و ایمیل با کد
                تأیید می‌شوند.
              </li>
              <li>
                <strong>ثبت اطلاعات کسب‌وکار و دامنه</strong> نام کسب‌وکار، حوزه‌ی فعالیت و دامنه‌ی فروشگاه را
                وارد کن.
              </li>
              <li>
                <strong>تأیید مالکیت دامنه</strong> اینماد یک کد یا فایل تأیید می‌دهد که باید در سایت قرار
                بگیرد. برای انجام این مرحله روی فروشگاه نکس‌کارت، از پشتیبانی راهنمایی بگیر.
              </li>
              <li>
                <strong>تأیید نشانی و تلفن</strong> نشانی و تلفن ثابت کسب‌وکار طبق روال مرکز تأیید می‌شوند.
              </li>
              <li>
                <strong>بارگذاری مدارک و پذیرش تعهدنامه</strong> مدارک هویتی را بارگذاری و تعهدنامه‌ی
                الکترونیکی را تأیید کن.
              </li>
              <li>
                <strong>بررسی سایت و صدور</strong> کارشناس سایت را بررسی می‌کند؛ اگر نقصی باشد اعلام می‌شود.
                بعد از صدور، کد نمایش نشان اینماد را در سایت قرار بده.
              </li>
            </ol>
            <h2 id="mistakes">اشتباه‌های رایج</h2>
            <ul>
              <li>نشانی یا تلفنی که در سایت نوشته شده با اطلاعات ثبت‌شده در اینماد فرق دارد.</li>
              <li>سایت هنوز محصول یا قیمت ندارد یا صفحه‌ها «در حال ساخت» هستند.</li>
              <li>صفحه‌ی قوانین کپی از سایت دیگر است و با نحوه‌ی فروش واقعی تو جور نیست.</li>
              <li>درخواست برای زیردامنه به‌جای دامنه‌ی اختصاصی.</li>
            </ul>
            <p>
              بعد از گرفتن اینماد، قدم بعدی اتصال درگاه است:{" "}
              <Link href="/features/payment-gateway/">درگاه پرداخت در نکس‌کارت</Link>.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#why">چرا اینماد برای فروشگاه اینترنتی مهم است؟</a>
              </li>
              <li>
                <a href="#types">انواع اینماد</a>
              </li>
              <li>
                <a href="#documents">پیش‌نیازها و مدارک</a>
              </li>
              <li>
                <a href="#site-ready">قبل از درخواست: فروشگاه را آماده کن</a>
              </li>
              <li>
                <a href="#steps">مراحل کلی دریافت اینماد</a>
              </li>
              <li>
                <a href="#mistakes">اشتباه‌های رایج</a>
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
            <h2 id="related-h">ادامه بده</h2>
          </div>
          <div className="cards">
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
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
