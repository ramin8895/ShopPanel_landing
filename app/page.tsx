import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/home";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <Link className="pill" href="/pricing/">
              <span className="pill__tag">جدید</span> ۱۴ روز آزمایشی رایگان با امکانات پلن رشد{" "}
              <Icon name="arrow-left" />
            </Link>
            <h1 className="hero__title">
              فروشگاه‌ساز نکس‌کارت؛ فروشگاه اینترنتی‌ات را <span className="grad">بدون کدنویسی</span> بساز
            </h1>
            <p className="hero__sub">
              محصول اضافه کن، درگاه زرین‌پال یا خرید اقساطی ترب‌پی را وصل کن، قالب فروشگاه را انتخاب کن و فروش
              را شروع کن. سفارش، تخفیف، فاکتور، اتصال به ترب و سئو را هم از همان پنل فارسی مدیریت می‌کنی.
            </p>
            <div className="hero__actions">
              <a href="https://dash.nexcart.ir/register" className="btn btn--primary btn--lg">
                ساخت فروشگاه رایگان <Icon name="arrow-left" />
              </a>{" "}
              <Link href="/features/" className="btn btn--outline btn--lg">
                <Icon name="layout-grid" /> دیدن امکانات
              </Link>
            </div>
            <ul className="hero__trust">
              <li>
                <Icon name="circle-check" /> بدون کارمزد فروش
              </li>
              <li>
                <Icon name="circle-check" /> پول مستقیم به حساب خودت
              </li>
              <li>
                <Icon name="circle-check" /> دامنه اختصاصی و SSL رایگان
              </li>
              <li>
                <Icon name="circle-check" /> ۱۴ روز آزمایشی رایگان؛ بدون کارت بانکی
              </li>
            </ul>
          </div>
          <div className="hero__art" aria-hidden="true">
            <div className="window">
              <div className="window__bar">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>{" "}
                <span className="window__url">
                  <Icon name="lock" /> myshop.nexcart.ir
                </span>
              </div>
              <div className="window__body">
                <div className="ann">
                  رویداد فروش نوروزی <b>۲۰٪</b> <span className="ltr">02:14:38</span>
                </div>
                <div className="mock-hero">
                  <div className="mock-hero__txt">
                    <strong>کالکشن بهاره رسید</strong> <small>ارسال سریع به سراسر ایران</small>{" "}
                    <span className="mock-btn">خرید</span>
                  </div>
                  <div className="mock-hero__img">
                    <Icon name="photo" />
                  </div>
                </div>
                <div className="mock-grid">
                  <div className="mock-card">
                    <span className="ph">
                      <span className="off">نوروزی</span>
                    </span>
                    <div className="ln"></div>
                    <s>۹۵۰٬۰۰۰</s>
                    <div className="price">۷۶۰٬۰۰۰</div>
                  </div>
                  <div className="mock-card">
                    <span className="ph"></span>
                    <div className="ln"></div>
                    <s>{" "}</s>
                    <div className="price">۲۹۰٬۰۰۰</div>
                  </div>
                  <div className="mock-card">
                    <span className="ph">
                      <span className="off">نوروزی</span>
                    </span>
                    <div className="ln"></div>
                    <s>۱٬۵۶۰٬۰۰۰</s>
                    <div className="price">۱٬۲۴۸٬۰۰۰</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card float-card--a">
              <span className="float-card__ic ic-green">
                <Icon name="message-2-check" />
              </span>
              <div>
                <strong>سفارش جدید پرداخت شد</strong>
                <small>پیامک برای فروشنده ارسال شد</small>
              </div>
            </div>
            <div className="float-card float-card--b">
              <span className="float-card__ic ic-violet">
                <Icon name="credit-card-pay" />
              </span>
              <div>
                <strong>خرید اقساطی با ترب‌پی</strong>
                <small>برای این سبد فعال است</small>
              </div>
            </div>
            <div className="float-card float-card--c">
              <span className="float-card__ic ic-amber">
                <Icon name="file-invoice" />
              </span>
              <div>
                <strong>فاکتور رسمی صادر شد</strong>
                <small>صورتحساب فروش کالا و خدمات</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="strip">
        <div className="container strip__inner">
          <span className="strip__label">اتصال‌های آماده:</span>{" "}
          <span className="strip__item">
            <Icon name="credit-card" /> زرین‌پال
          </span>{" "}
          <span className="strip__item">
            <Icon name="credit-card-pay" /> ترب‌پی
          </span>{" "}
          <span className="strip__item">
            <Icon name="zoom-money" /> ترب
          </span>{" "}
          <span className="strip__item">
            <Icon name="brand-google" /> سرچ کنسول گوگل
          </span>{" "}
          <span className="strip__item">
            <Icon name="chart-line" /> <span className="en">GA4</span> و گوگل ادز
          </span>{" "}
          <span className="strip__item">
            <Icon name="message-2" /> پیامک
          </span>
        </div>
      </div>
      <section className="section" aria-labelledby="what-h">
        <div className="container showcase">
          <div className="showcase__text reveal">
            <span className="eyebrow">فروشگاه‌ساز چیست؟</span>
            <h2 id="what-h">نکس‌کارت یک فروشگاه‌ساز ایرانی برای فروش آنلاین است</h2>
            <p>
              فروشگاه‌ساز سرویسی است که به‌جای طراحی سایت از صفر، یک فروشگاه اینترنتی آماده با پنل مدیریت به
              تو می‌دهد. در نکس‌کارت هاست، امنیت، به‌روزرسانی و نگهداری فنی با ماست؛ تو روی محصول، مشتری و
              فروش تمرکز می‌کنی.
            </p>
            <p>
              اگر تازه می‌خواهی شروع کنی،{" "}
              <Link className="text-link" href="/create-online-store/">
                راهنمای ساخت فروشگاه اینترنتی
              </Link>{" "}
              قدم‌به‌قدم توضیح می‌دهد چه چیزهایی لازم داری؛ و اگر هنوز بین روش‌ها مردّدی،{" "}
              <Link className="text-link" href="/blog/what-is-store-builder/">
                معیارهای انتخاب فروشگاه‌ساز
              </Link>{" "}
              را بخوان.
            </p>
          </div>
          <div className="reveal">
            <ul className="keypoints" role="list">
              <li>
                <Icon name="cash" />{" "}
                <span>
                  <strong>قیمت:</strong> سه پلن شروع، رشد و حرفه‌ای؛ از ۸۹۰ هزار تومان در ماه
                </span>
              </li>
              <li>
                <Icon name="percentage" />{" "}
                <span>
                  <strong>کارمزد فروش:</strong> ندارد؛ پول مستقیم به درگاه خودت می‌رود
                </span>
              </li>
              <li>
                <Icon name="server" />{" "}
                <span>
                  <strong>هاست و SSL:</strong> داخل اشتراک، بدون هزینه‌ی جدا
                </span>
              </li>
              <li>
                <Icon name="world-www" />{" "}
                <span>
                  <strong>آدرس:</strong> زیردامنه‌ی nexcart.ir یا دامنه‌ی اختصاصی
                </span>
              </li>
              <li>
                <Icon name="palette" />{" "}
                <span>
                  <strong>قالب:</strong> کلاسیک، بوتیک و مگامارکت با شخصی‌سازی
                </span>
              </li>
              <li>
                <Icon name="language" />{" "}
                <span>
                  <strong>پنل:</strong> فارسی و راست‌چین، با منوی دوزبانه
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section--soft" id="features" aria-labelledby="features-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">امکانات فروشگاه‌ساز</span>
            <h2 id="features-h">هر چیزی که برای فروش آنلاین در ایران لازم داری</h2>
            <p>
              امکانات پایه در همه‌ی پلن‌هاست و ابزارهای رشد از پلن رشد باز می‌شوند. روی هر کارت بزن تا جزئیات
              کامل آن قابلیت را ببینی.
            </p>
          </div>
          <div className="bento">
            <Link className="bento__item bento__item--wide reveal" href="/features/payment-gateway/">
              {" "}
              <span className="bento__ic ic-blue">
                <Icon name="credit-card" />
              </span>
              <h3>درگاه زرین‌پال و خرید اقساطی ترب‌پی</h3>
              <p>
                درگاه پرداخت خودت را وصل کن؛ اگر ترب‌پی فعال باشد، گزینه‌ی خرید اقساطی فقط برای سبدهای مجاز
                نمایش داده می‌شود. پرداخت در محل هم قابل استفاده است.
              </p>
              <div className="bento__visual">
                <div className="payopt payopt--on">
                  <span className="payopt__radio"></span>
                  <div>
                    <b>پرداخت آنلاین زرین‌پال</b>
                    <small>همه‌ی کارت‌های عضو شتاب</small>
                  </div>
                </div>
                <div className="payopt">
                  <span className="payopt__radio"></span>
                  <div>
                    <b>خرید اقساطی با ترب‌پی</b>
                    <small>بعد از بررسی مبلغ سبد</small>
                  </div>
                </div>
              </div>
              <span className="bento__more">
                درگاه پرداخت فروشگاه <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item bento__item--wide reveal" href="/features/seo/">
              {" "}
              <span className="bento__ic ic-green">
                <Icon name="seo" />
              </span>
              <h3>
                مرکز سئو و وبلاگ فروشگاه <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                امتیاز سئو برای محصول، دسته و مقاله، پیش‌نمایش نتیجه‌ی گوگل، ریدایرکت ۳۰۱، مانیتور صفحه‌های
                404، سرعت واقعی سایت و وبلاگ با انتشار زمان‌بندی‌شده.
              </p>
              <div className="bento__visual score">
                <div className="score__ring" style={{ "--p": "82" } as React.CSSProperties}>
                  <span>۸۲</span>
                </div>
                <ul className="checks" role="list">
                  <li className="ok">
                    <Icon name="circle-check" /> کلمه کلیدی در عنوان و نامک
                  </li>
                  <li className="ok">
                    <Icon name="circle-check" /> طول توضیحات متا مناسب
                  </li>
                  <li className="bad">
                    <Icon name="alert-triangle" /> دو تصویر بدون متن جایگزین
                  </li>
                </ul>
              </div>
              <span className="bento__more">
                ابزارهای سئو <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/torob/">
              {" "}
              <span className="bento__ic ic-amber">
                <Icon name="zoom-money" />
              </span>
              <h3>اتصال به ترب</h3>
              <p>
                API نسخه ۳ ترب، متاتگ‌های قیمت و موجودی روی صفحه‌ی محصول و ارسال هر تنوع به‌عنوان یک کالای
                جدا.
              </p>
              <span className="bento__more">
                اتصال فروشگاه به ترب <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/invoice/">
              {" "}
              <span className="bento__ic ic-violet">
                <Icon name="file-invoice" />
              </span>
              <h3>
                فاکتور رسمی و رسید فروش <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                صورتحساب رسمی با شماره‌ی ترتیبی و مبلغ به حروف، ابطال و صدور مجدد، و رسید فروش برای همه‌ی
                سفارش‌ها.
              </p>
              <span className="bento__more">
                صدور فاکتور <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/live-chat/">
              {" "}
              <span className="bento__ic ic-sky">
                <Icon name="message-chatbot" />
              </span>
              <h3>چت آنلاین با مشتری</h3>
              <p>حباب چت روی فروشگاه، صندوق پیام دوستونه در پنل، اعلان صوتی و نمایش «در حال نوشتن».</p>
              <span className="bento__more">
                چت آنلاین فروشگاه <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item bento__item--xl bento__item--ink reveal" href="/features/themes/">
              {" "}
              <span className="bento__ic ic-ink" style={{ background: "rgba(255,255,255,.12)" }}>
                <Icon name="palette" />
              </span>
              <h3>
                سه قالب فروشگاه که هر کدام مثل یک سایت جداست <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                کلاسیک برای همه‌ی کسب‌وکارها، بوتیک برای پوشاک و زیبایی، مگامارکت برای دیجیتال و سوپرمارکت.
                رنگ، فونت، گوشه‌ها، هدر و کارت محصول را با پیش‌نمایش زنده تغییر می‌دهی و هر وقت آماده بود
                منتشر می‌کنی.
              </p>
              <span className="bento__more">
                قالب‌های فروشگاه <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/discounts-loyalty/">
              {" "}
              <span className="bento__ic ic-rose">
                <Icon name="rosette-discount" />
              </span>
              <h3>
                رویدادهای فروش و تخفیف <span className="tag tag--new">جدید</span>
              </h3>
              <p>
                تخفیف زمان‌دار بدون کد برای نوروز، یلدا یا جمعه سیاه، به‌علاوه‌ی کد تخفیف و باشگاه مشتریان.
              </p>
              <span className="bento__more">
                سیستم تخفیف <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/order-management/">
              {" "}
              <span className="bento__ic ic-teal">
                <Icon name="truck-delivery" />
              </span>
              <h3>مدیریت سفارش</h3>
              <p>
                جزئیات کامل هر قلم، کد رهگیری، پیامک به مشتری و پیامک سفارش جدید به حداکثر سه شماره‌ی فروشنده.
              </p>
              <span className="bento__more">
                مدیریت سفارش‌ها <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/product-management/">
              {" "}
              <span className="bento__ic ic-blue">
                <Icon name="box" />
              </span>
              <h3>مدیریت محصولات</h3>
              <p>تنوع رنگ و سایز با موجودی و SKU جدا، دسته‌بندی درختی، برند، نظر و امتیاز، و پرسش‌وپاسخ.</p>
              <span className="bento__more">
                مدیریت محصول <Icon name="arrow-left" />
              </span>{" "}
            </Link>{" "}
            <Link className="bento__item reveal" href="/features/custom-domain/">
              {" "}
              <span className="bento__ic ic-violet">
                <Icon name="world-www" />
              </span>
              <h3>دامنه اختصاصی</h3>
              <p>دامنه‌ی خودت را وصل کن؛ گواهی SSL رایگان خودکار صادر و تمدید می‌شود.</p>
              <span className="bento__more">
                اتصال دامنه <Icon name="arrow-left" />
              </span>{" "}
            </Link>
          </div>
        </div>
      </section>
      <section className="section" id="how" aria-labelledby="how-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">شروع آسان</span>
            <h2 id="how-h">راه‌اندازی فروشگاه اینترنتی در سه قدم</h2>
            <p>بدون برنامه‌نویس، بدون خرید هاست و بدون انتظار برای طراحی.</p>
          </div>
          <ol className="steps" role="list">
            <li className="step reveal">
              <span className="step__num">۱</span>
              <h3>ثبت‌نام و ساخت فروشگاه</h3>
              <p>
                حساب بساز، نام فروشگاه و آدرس <span className="ltr">nexcart.ir</span> را انتخاب کن و یکی از سه
                قالب را بردار.
              </p>
            </li>
            <li className="step reveal">
              <span className="step__num">۲</span>
              <h3>محصول و درگاه را اضافه کن</h3>
              <p>محصولات را با عکس، قیمت، تنوع و موجودی وارد کن و درگاه زرین‌پال یا ترب‌پی خودت را وصل کن.</p>
            </li>
            <li className="step reveal">
              <span className="step__num">۳</span>
              <h3>منتشر کن و بفروش</h3>
              <p>
                فروشگاه را روی زیردامنه یا دامنه‌ی خودت منتشر کن، به ترب و سرچ کنسول وصل شو و سفارش‌ها را از
                پنل مدیریت کن.
              </p>
            </li>
          </ol>
          <p style={{ textAlign: "center", marginTop: "28px" }}>
            <Link className="btn btn--soft" href="/create-online-store/">
              راهنمای کامل ساخت فروشگاه اینترنتی <Icon name="arrow-left" />
            </Link>
          </p>
        </div>
      </section>
      <section className="section section--soft" aria-labelledby="themes-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">قالب فروشگاه</span>
            <h2 id="themes-h">یک فروشگاه، سه ظاهر کاملاً متفاوت</h2>
            <p>منطق سبد خرید، پرداخت و حساب کاربری در هر سه قالب یکی است؛ فقط ظاهر و چیدمان عوض می‌شود.</p>
          </div>
          <div className="themes" tabIndex={0} role="region" aria-label="نمونه قالب‌های فروشگاه">
            <figure className="theme reveal">
              <div className="theme__frame th-classic" aria-hidden="true">
                <div className="th-bar">
                  <span className="th-logo"></span>
                  <span className="th-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
                <div className="th-hero"></div>
                <div className="th-grid">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <figcaption>
                <h3>کلاسیک</h3>
                <p>همه‌منظوره و آشنا؛ مناسب بیشتر فروشگاه‌ها.</p>
              </figcaption>
            </figure>
            <figure className="theme reveal">
              <div className="theme__frame th-boutique" aria-hidden="true">
                <div className="th-bar">
                  <span className="th-dots">
                    <i></i>
                    <i></i>
                  </span>
                  <span className="th-logo"></span>
                  <span></span>
                </div>
                <div className="th-hero"></div>
                <div className="th-grid">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <figcaption>
                <h3>بوتیک</h3>
                <p>لوگو وسط، تصاویر بزرگ ۴:۵ و فضای خالی؛ برای پوشاک و زیبایی.</p>
              </figcaption>
            </figure>
            <figure className="theme reveal">
              <div className="theme__frame th-mega" aria-hidden="true">
                <div className="th-top">
                  <span className="th-logo"></span>
                  <span className="th-search"></span>
                </div>
                <div className="th-deal"></div>
                <div className="th-grid">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <figcaption>
                <h3>مگامارکت</h3>
                <p>جستجوی بزرگ، مگامنو و گرید متراکم؛ برای دیجیتال و سوپرمارکت.</p>
              </figcaption>
            </figure>
          </div>
          <p style={{ textAlign: "center", marginTop: "28px" }}>
            <Link className="btn btn--soft" href="/features/themes/">
              مقایسه قالب‌ها و شخصی‌سازی <Icon name="arrow-left" />
            </Link>
          </p>
        </div>
      </section>
      <section className="section" aria-labelledby="panel-h">
        <div className="container">
          <div className="showcase reveal">
            <div className="showcase__text">
              <span className="eyebrow">پنل فروشنده</span>
              <h2 id="panel-h">یک پنل برای کل کسب‌وکار</h2>
              <p>
                محصول، سفارش، مشتری، چت، تخفیف، فاکتور و سئو را از یک جا مدیریت کن و برای همکارانت دسترسی جدا
                بساز.
              </p>
              <ul className="ticks" role="list">
                <li>
                  <Icon name="circle-check" /> داشبورد درآمد، سفارش و بازدید
                </li>
                <li>
                  <Icon name="circle-check" /> جزئیات کامل سفارش: تنوع، SKU، ریز مبلغ و سابقه‌ی خرید مشتری
                </li>
                <li>
                  <Icon name="circle-check" /> دسترسی چندکاربره برای کارمندان
                </li>
                <li>
                  <Icon name="circle-check" /> پنل فارسی با منوی دوزبانه (فارسی/انگلیسی)
                </li>
              </ul>
            </div>
            <figure aria-label="نمای نمادین پنل فروشنده">
              <div className="panel-mock" aria-hidden="true">
                <div className="panel-mock__side">
                  <span className="pm-logo">
                    <Icon name="building-store" />
                  </span>{" "}
                  <span className="pm-item pm-item--on">
                    <Icon name="layout-dashboard" /> داشبورد
                  </span>{" "}
                  <span className="pm-item">
                    <Icon name="box" /> محصولات
                  </span>{" "}
                  <span className="pm-item">
                    <Icon name="shopping-cart" /> سفارش‌ها
                  </span>{" "}
                  <span className="pm-item">
                    <Icon name="message-chatbot" /> چت <span className="pm-badge">۲</span>
                  </span>{" "}
                  <span className="pm-item">
                    <Icon name="rosette-discount" /> رویدادها
                  </span>{" "}
                  <span className="pm-item">
                    <Icon name="seo" /> مرکز سئو
                  </span>
                </div>
                <div className="panel-mock__main">
                  <div className="pm-kpis">
                    <div className="pm-kpi">
                      <small>درآمد امروز</small>
                      <strong>—</strong>
                    </div>
                    <div className="pm-kpi">
                      <small>سفارش‌ها</small>
                      <strong>—</strong>
                    </div>
                    <div className="pm-kpi">
                      <small>بازدید</small>
                      <strong>—</strong>
                    </div>
                  </div>
                  <div className="pm-chart">
                    <span style={{ height: "40%" }}></span>
                    <span style={{ height: "62%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "78%" }}></span>
                    <span style={{ height: "58%" }}></span>
                    <span style={{ height: "90%" }}></span>
                    <span style={{ height: "70%" }}></span>
                  </div>
                </div>
              </div>
              <figcaption className="pm-note">
                نمای نمادین پنل؛ اعداد واقعی هر فروشگاه در داشبورد خودش نمایش داده می‌شود.
              </figcaption>
            </figure>
          </div>
          <div className="showcase showcase--rev reveal">
            <div className="showcase__text">
              <span className="eyebrow">تجربه خریدار</span>
              <h2>فروشگاهی سریع و راحت برای خرید با موبایل</h2>
              <p>
                صفحه‌ی محصول با گالری، انتخاب تنوع، نظرات و پرسش‌وپاسخ؛ سبد خرید و پرداخت چندمرحله‌ای ساده؛ و
                حساب کاربری با سفارش‌ها و امتیاز باشگاه.
              </p>
              <ul className="ticks" role="list">
                <li>
                  <Icon name="circle-check" /> لینک مستقیم به هر تنوع محصول (مثلاً رنگ قرمز، سایز L)
                </li>
                <li>
                  <Icon name="circle-check" /> قیمت و برچسب رویداد فروش روی کارت محصول
                </li>
                <li>
                  <Icon name="circle-check" /> رسید فروش و درخواست فاکتور رسمی از «سفارش‌های من»
                </li>
                <li>
                  <Icon name="circle-check" /> حالت تیره و طراحی واکنش‌گرا
                </li>
              </ul>
            </div>
            <div aria-hidden="true">
              <div className="phone-mock">
                <div className="phone-mock__top"></div>
                <div className="pm2-img">
                  <Icon name="shirt" />
                  <span className="pm2-off">۲۰٪</span>
                </div>
                <div className="pm2-swatch">
                  <i className="on" style={{ background: "#1f3a8a" }}></i>
                  <i style={{ background: "#c2410c" }}></i>
                  <i style={{ background: "#e5e7eb" }}></i>
                </div>
                <div className="pm2-title"></div>
                <div className="pm2-price">
                  <b>۸۹۰٬۰۰۰</b>
                  <s>۱٬۱۱۲٬۵۰۰</s>
                </div>
                <div className="pm2-btn">
                  <Icon name="shopping-bag" /> افزودن به سبد
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft" id="why" aria-labelledby="why-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">مقایسه</span>
            <h2 id="why-h">فروشگاه‌ساز یا طراحی سایت فروشگاهی اختصاصی؟</h2>
            <p>قبل از سفارش طراحی سایت از صفر، این دو مسیر را کنار هم ببین.</p>
          </div>
          <div className="compare">
            <div className="compare__col compare__col--old reveal">
              <div className="compare__head">
                <span className="compare__badge">
                  <Icon name="tool" />
                </span>
                <h3>طراحی اختصاصی از صفر</h3>
              </div>
              <ul className="compare__list" role="list">
                <li>
                  <Icon name="x" /> هزینه‌ی اولیه‌ی طراحی و برنامه‌نویسی، قبل از اولین فروش
                </li>
                <li>
                  <Icon name="x" /> چند هفته تا چند ماه زمان تا آماده‌شدن سایت
                </li>
                <li>
                  <Icon name="x" /> برای هر تغییر کوچک باید سراغ برنامه‌نویس بروی
                </li>
                <li>
                  <Icon name="x" /> هاست، SSL، بکاپ و به‌روزرسانی امنیتی جدا حساب می‌شود
                </li>
              </ul>
            </div>
            <div className="compare__col compare__col--new reveal">
              <div className="compare__head">
                <span className="compare__badge">
                  <Icon name="rocket" />
                </span>
                <h3>با فروشگاه‌ساز نکس‌کارت</h3>
              </div>
              <ul className="compare__list" role="list">
                <li>
                  <Icon name="circle-check" />{" "}
                  <span>
                    اشتراک ماهانه از <b>۸۹۰ هزار تومان</b>، بدون هزینه‌ی راه‌اندازی
                  </span>
                </li>
                <li>
                  <Icon name="circle-check" />{" "}
                  <span>
                    فروشگاه <b>همان روز</b> آماده‌ی فروش است
                  </span>
                </li>
                <li>
                  <Icon name="circle-check" />{" "}
                  <span>
                    تغییرات را <b>خودت</b> از پنل انجام می‌دهی
                  </span>
                </li>
                <li>
                  <Icon name="circle-check" />{" "}
                  <span>
                    هاست، SSL، امنیت و به‌روزرسانی <b>داخل اشتراک</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "28px" }}>
            <Link className="btn btn--soft" href="/blog/store-builder-vs-wordpress/">
              مقایسه‌ی فروشگاه‌ساز، وردپرس و طراحی اختصاصی <Icon name="arrow-left" />
            </Link>
          </p>
        </div>
      </section>
      <section className="section" id="usecases" aria-labelledby="uc-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">مناسب کسب‌وکار تو</span>
            <h2 id="uc-h">برای هر صنفی که آنلاین می‌فروشد</h2>
            <p>ساختار محصول، تنوع، دسته‌بندی، قالب و پرداخت برای مدل‌های مختلف فروش قابل تنظیم است.</p>
          </div>
          <ul className="verticals reveal" role="list">
            <li>
              <Link className="vertical" href="/solutions/clothing/">
                <Icon name="shirt" /> پوشاک و مد{" "}
                <span className="vertical__go">
                  <Icon name="arrow-left" />
                </span>
              </Link>
            </li>
            <li>
              <Link className="vertical" href="/solutions/digital-products/">
                <Icon name="device-mobile" /> موبایل و کالای دیجیتال{" "}
                <span className="vertical__go">
                  <Icon name="arrow-left" />
                </span>
              </Link>
            </li>
            <li>
              <Link className="vertical" href="/solutions/instagram-sellers/">
                <Icon name="brand-instagram" /> فروشندگان اینستاگرام{" "}
                <span className="vertical__go">
                  <Icon name="arrow-left" />
                </span>
              </Link>
            </li>
            <li>
              <span className="vertical">
                <Icon name="spray" /> آرایشی و بهداشتی
              </span>
            </li>
            <li>
              <span className="vertical">
                <Icon name="apple" /> سوپرمارکت و مواد غذایی
              </span>
            </li>
            <li>
              <span className="vertical">
                <Icon name="armchair" /> لوازم خانگی و دکوراسیون
              </span>
            </li>
            <li>
              <span className="vertical">
                <Icon name="book" /> کتاب و لوازم‌التحریر
              </span>
            </li>
            <li>
              <span className="vertical">
                <Icon name="tool" /> ابزار و یراق‌آلات
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--soft" id="pricing" aria-labelledby="pricing-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">قیمت فروشگاه‌ساز</span>
            <h2 id="pricing-h">سه پلن برای سه مرحله‌ی کسب‌وکار</h2>
            <p>
              با پلن شروع راه بیفت و هر وقت فروشت بیشتر شد ارتقا بده. هر چه اشتراک بلندتر، هزینه‌ی ماهانه
              کمتر.
            </p>
          </div>
          <div className="pricing" data-prefix="h">
            <fieldset className="term-switch">
              <legend className="sr-only">مدت اشتراک</legend>
              <input type="radio" name="h-term" id="h-t1" value="1" defaultChecked />
              <label htmlFor="h-t1">۱ ماهه</label>
              <input type="radio" name="h-term" id="h-t3" value="3" />
              <label htmlFor="h-t3">
                ۳ ماهه<em>۱۰٪ تخفیف</em>
              </label>
              <input type="radio" name="h-term" id="h-t6" value="6" />
              <label htmlFor="h-t6">
                ۶ ماهه<em>۱۵٪ تخفیف</em>
              </label>
              <input type="radio" name="h-term" id="h-t12" value="12" />
              <label htmlFor="h-t12">
                ۱۲ ماهه<em>۲۰٪ تخفیف</em>
              </label>
            </fieldset>
            <div className="tiers">
              <article className="tier" aria-labelledby="h-start-h">
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="plant" />
                  </span>
                  <h3 id="h-start-h">پلن شروع</h3>
                </div>
                <p className="tier__for">برای شروع فروش آنلاین و فروشنده‌های اینستاگرامی</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۸۹۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۸۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۲٬۴۰۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۷۶۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۴٬۵۶۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۷۱۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۸٬۵۲۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--soft btn--block">
                  شروع با پلن شروع
                </a>
                <p className="tier__lead">همه‌ی چیزی که برای راه‌اندازی و اولین فروش‌ها لازم داری:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>تا ۲۰۰ محصول با تنوع و موجودی</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>درگاه زرین‌پال و پرداخت در محل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>قالب کلاسیک با رنگ و لوگوی خودت</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>کد تخفیف و رسید فروش</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>سئوی پایه: متا، سایت‌مپ و داده‌ی ساختاریافته</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>زیردامنه‌ی nexcart.ir با SSL</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی با تیکت</span>
                  </li>
                </ul>
              </article>
              <article className="tier tier--feat" aria-labelledby="h-growth-h">
                <span className="tier__badge">پیشنهاد ما</span>
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="trending-up" />
                  </span>
                  <h3 id="h-growth-h">پلن رشد</h3>
                </div>
                <p className="tier__for">برای فروشگاهی که فروش مستمر دارد و می‌خواهد بیشتر بفروشد</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۱٬۸۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۱٬۶۲۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۴٬۸۶۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۱٬۵۳۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۹٬۱۸۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۱٬۴۴۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۱۷٬۲۸۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--primary btn--block">
                  شروع با پلن رشد
                </a>
                <p className="tier__lead">همه‌ی امکانات شروع، به‌علاوه:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>تا ۲٬۰۰۰ محصول و ۳ کاربر پنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>دامنه‌ی اختصاصی با SSL رایگان</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>هر سه قالب با شخصی‌سازی کامل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>خرید اقساطی ترب‌پی و اتصال به ترب</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>رویدادهای فروش، باشگاه مشتریان و پیامک گروهی</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>فاکتور رسمی، چت آنلاین و وبلاگ</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>امتیاز سئو، ریدایرکت ۳۰۱ و مانیتور 404</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی تیکت و واتساپ</span>
                  </li>
                </ul>
              </article>
              <article className="tier" aria-labelledby="h-pro-h">
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="crown" />
                  </span>
                  <h3 id="h-pro-h">پلن حرفه‌ای</h3>
                </div>
                <p className="tier__for">برای برندها و فروشگاه‌های بزرگ که پشتیبانی ویژه می‌خواهند</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۳٬۰۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۲٬۷۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۸٬۱۰۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۲٬۵۵۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۱۵٬۳۰۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۲٬۴۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۲۸٬۸۰۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--soft btn--block">
                  شروع با پلن حرفه‌ای
                </a>
                <p className="tier__lead">همه‌ی امکانات رشد، به‌علاوه:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>محصول نامحدود و ۱۰ کاربر پنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>راه‌اندازی تحویلی: ورود محصولات و تنظیم فروشگاه با ما</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>گزارش سلامت سئو، سرعت واقعی سایت و Search Console</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>
                      ردیابی گوگل (<span className="en">GA4</span>، GTM و Google Ads)
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>چت آنلاین با چند پرسنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی اولویت‌دار با واتساپ و تماس</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>اولویت در درخواست قابلیت جدید</span>
                  </li>
                </ul>
              </article>
            </div>
            <p className="plans__note">
              <Icon name="shield-check" /> بدون کارمزد فروش · هاست و SSL در همه‌ی پلن‌ها ·{" "}
              <Link href="/pricing/#compare-h" className="text-link">
                مقایسه‌ی کامل پلن‌ها
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="section section--soft" aria-labelledby="faq">
        <div className="container container--narrow">
          <div className="section__head reveal">
            <span className="eyebrow">پرسش و پاسخ</span>
            <h2 id="faq">سؤالات متداول درباره فروشگاه‌ساز نکس‌کارت</h2>
          </div>
          <Faq items={page.faq} />
        </div>
      </section>
      <section className="section" id="contact" aria-labelledby="contact-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">مشاوره قبل از خرید</span>
            <h2 id="contact-h">سؤالی داری؟ مستقیم بپرس</h2>
            <p>درباره‌ی امکانات، دامنه، اتصال به ترب یا انتقال فروشگاه فعلی‌ات راهنمایی بگیر.</p>
          </div>
          <div className="contact-cards reveal">
            <a className="ccard" href="tel:+989145275658">
              <span className="ccard__icon">
                <Icon name="phone" />
              </span>
              <h3>تماس تلفنی</h3>
              <span className="ccard__value">0914 527 5658</span>
              <p>مشاوره و فروش</p>
            </a>{" "}
            <a className="ccard ccard--wa" href="https://wa.me/989145275658" target="_blank" rel="noopener">
              <span className="ccard__icon">
                <Icon name="brand-whatsapp" />
              </span>
              <h3>واتساپ</h3>
              <span className="ccard__value">0914 527 5658</span>
              <p>پیام بده، همین‌جا جواب می‌گیری</p>
            </a>{" "}
            <a className="ccard" href="https://dash.nexcart.ir/login">
              <span className="ccard__icon">
                <Icon name="headset" />
              </span>
              <h3>پشتیبانی در پنل</h3>
              <span className="ccard__value ccard__value--sm">ثبت تیکت پشتیبانی</span>
              <p>برای فروشنده‌های فعلی</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section section--soft" aria-labelledby="guides-h">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">راهنماها</span>
            <h2 id="guides-h">قبل از ساخت فروشگاه اینترنتی بخوان</h2>
            <p>
              راهنماهای کاربردی برای انتخاب فروشگاه‌ساز، برآورد هزینه و راه‌اندازی درست. همه‌ی مقاله‌ها در{" "}
              <Link href="/blog/">وبلاگ نکس‌کارت</Link> هستند.
            </p>
          </div>
          <div className="cards">
            <Link className="card" href="/blog/what-is-store-builder/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>فروشگاه‌ساز چیست؟ ۱۰ معیار انتخاب</h3>
              <p>فروشگاه‌ساز چطور کار می‌کند و قبل از انتخاب چه چیزهایی را باید بسنجی.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card" href="/create-online-store/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>ساخت فروشگاه اینترنتی؛ قدم‌به‌قدم</h3>
              <p>دامنه، درگاه پرداخت، اینماد و مراحل راه‌اندازی فروشگاه آنلاین بدون کدنویسی.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card" href="/blog/online-store-cost/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>هزینه راه‌اندازی فروشگاه اینترنتی</h3>
              <p>جدول برآورد هزینه‌ها: سایت، دامنه، درگاه، اینماد، عکاسی و تبلیغات.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card" href="/blog/store-builder-vs-wordpress/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>فروشگاه‌ساز یا وردپرس (ووکامرس)؟</h3>
              <p>مقایسه‌ی بی‌طرفانه‌ی هزینه، نگهداری، امنیت و مالکیت.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card" href="/blog/enamad-guide/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>راهنمای دریافت اینماد</h3>
              <p>مدارک، صفحه‌های لازم و ارتباط اینماد با درگاه پرداخت.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card" href="/blog/online-store-seo/">
              <span className="card__ic ic-blue">
                <Icon name="book" />
              </span>
              <h3>سئو فروشگاه اینترنتی</h3>
              <p>سئو صفحه‌ی محصول و دسته‌بندی، سرعت، ریدایرکت ۳۰۱ و سرچ کنسول.</p>
              <span className="card__more">
                بخوان <Icon name="arrow-left" />
              </span>
            </Link>
          </div>
          <p style={{ textAlign: "center", marginTop: "28px" }}>
            بیشتر درباره‌ی ما: <Link href="/about/">درباره‌ی نکس‌کارت و آخرین به‌روزرسانی‌ها</Link> ·{" "}
            <Link href="/contact/">تماس و مشاوره قبل از خرید</Link>
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
