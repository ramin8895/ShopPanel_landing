import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-what-is-store-builder";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">شروع کار</span>
            <h1>فروشگاه‌ساز چیست و چطور بهترینش را انتخاب کنیم؟</h1>
            <p className="page-hero__lead">
              فروشگاه‌ساز سرویسی است که بدون برنامه‌نویسی یک فروشگاه اینترنتی آماده به تو می‌دهد. ولی همه‌ی
              فروشگاه‌سازها یکی نیستند؛ در این مقاله تعریف دقیق و ده معیار انتخاب را می‌خوانی.
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
                <Icon name="bulb" /> تعریف
              </p>
              <p>
                <strong>فروشگاه‌ساز</strong> یک سرویس آنلاین (SaaS) است که با ثبت‌نام، یک فروشگاه اینترنتی
                آماده به همراه پنل مدیریت محصول، سفارش، پرداخت و مشتری در اختیارت می‌گذارد. میزبانی، امنیت و
                به‌روزرسانی با ارائه‌دهنده است و تو در ازای آن اشتراک ماهانه یا سالانه می‌پردازی.
              </p>
            </div>
            <h2 id="how">فروشگاه‌ساز چطور کار می‌کند؟</h2>
            <p>
              در فروشگاه‌ساز، صدها یا هزاران فروشگاه روی یک پلتفرم مشترک اجرا می‌شوند ولی داده‌ی هر فروشگاه از
              بقیه جداست. هر فروشگاه آدرس خودش را دارد (زیردامنه یا دامنه‌ی اختصاصی)، ظاهرش را از بین قالب‌ها
              انتخاب و شخصی‌سازی می‌کند و همه‌ی کارها را از پنل مدیریت انجام می‌دهد.
            </p>
            <p>
              مزیت این مدل این است که هر بهبودی در پلتفرم، از رفع یک مشکل امنیتی تا یک امکان جدید، هم‌زمان به
              همه‌ی فروشگاه‌ها می‌رسد، بدون اینکه فروشنده کاری بکند.
            </p>
            <h2 id="who">فروشگاه‌ساز به درد چه کسی می‌خورد؟</h2>
            <ul>
              <li>فروشنده‌هایی که می‌خواهند سریع و با هزینه‌ی اولیه‌ی کم آنلاین شوند.</li>
              <li>کسی که دانش فنی یا وقت مدیریت هاست و افزونه ندارد.</li>
              <li>فروشگاه‌های کوچک و متوسطی که امکانات استاندارد فروش آنلاین برایشان کافی است.</li>
            </ul>
            <p>
              اگر به سفارشی‌سازی عمیق کد یا کنترل کامل سرور نیاز داری، مقاله‌ی{" "}
              <Link href="/blog/store-builder-vs-wordpress/">فروشگاه‌ساز یا وردپرس</Link> را ببین.
            </p>
            <h2 id="criteria">۱۰ معیار برای انتخاب بهترین فروشگاه‌ساز</h2>
            <p>
              «بهترین فروشگاه‌ساز» برای همه یکی نیست. این ده سؤال را از هر گزینه بپرس و جواب‌ها را کنار هم
              بگذار:
            </p>
            <ol className="numbered">
              <li>
                <strong>پول فروش کجا می‌رود؟</strong> درگاه به نام خودت وصل می‌شود یا پول اول به حساب پلتفرم
                می‌رود؟ کارمزدی از فروش برداشته می‌شود؟
              </li>
              <li>
                <strong>کدام روش‌های پرداخت را دارد؟</strong> درگاه‌های ایرانی، پرداخت اقساطی، پرداخت در محل.
              </li>
              <li>
                <strong>اتصال به ترب چطور است؟</strong> API نسخه ۳ و متاتگ‌های محصول یا فقط فید ساده؟ تنوع‌ها
                جدا ارسال می‌شوند؟
              </li>
              <li>
                <strong>سئو چقدر جدی گرفته شده؟</strong> رندر سمت سرور، ویرایش عنوان و توضیحات، ریدایرکت ۳۰۱،
                نقشه‌ی سایت، داده‌ی ساختاریافته، وبلاگ.
              </li>
              <li>
                <strong>قالب‌ها چقدر انعطاف دارند؟</strong> چند قالب واقعاً متفاوت دارد و چه چیزهایی بدون کد
                قابل تغییر است؟
              </li>
              <li>
                <strong>امکانات فروش:</strong> تنوع رنگ و سایز با موجودی جدا، کد تخفیف، تخفیف زمان‌دار، باشگاه
                مشتریان.
              </li>
              <li>
                <strong>امکانات پس از فروش:</strong> پیامک سفارش، کد رهگیری، فاکتور رسمی، چت با مشتری.
              </li>
              <li>
                <strong>دامنه و SSL:</strong> اتصال دامنه‌ی اختصاصی آسان است؟ SSL رایگان و خودکار است؟
              </li>
              <li>
                <strong>هزینه‌ی واقعی:</strong> فقط قیمت اشتراک را نبین؛ بپرس امکانات مهم در پلن پایه هست یا
                جدا فروخته می‌شود.
              </li>
              <li>
                <strong>پشتیبانی:</strong> با چه راهی و چقدر سریع جواب می‌گیری؟ قبل از خرید یک سؤال بپرس و
                زمان جواب را ببین.
              </li>
            </ol>
            <h2 id="nexcart">نکس‌کارت در برابر این معیارها</h2>
            <p>
              برای شفافیت، جواب نکس‌کارت به همین ده سؤال را خلاصه کرده‌ایم تا با گزینه‌های دیگر مقایسه کنی:
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: نکس‌کارت در برابر این معیارها (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">معیار</th>
                    <th scope="col">نکس‌کارت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>مقصد پول و کارمزد</td>
                    <td>درگاه به نام فروشنده؛ بدون کارمزد فروش</td>
                  </tr>
                  <tr>
                    <td>روش‌های پرداخت</td>
                    <td>زرین‌پال، خرید اقساطی ترب‌پی، پرداخت در محل</td>
                  </tr>
                  <tr>
                    <td>ترب</td>
                    <td>API نسخه ۳، متاتگ‌های محصول، هر تنوع جدا</td>
                  </tr>
                  <tr>
                    <td>سئو</td>
                    <td>امتیاز سئوی فارسی، ریدایرکت ۳۰۱، مانیتور 404، سرعت واقعی، وبلاگ</td>
                  </tr>
                  <tr>
                    <td>قالب</td>
                    <td>کلاسیک، بوتیک و مگامارکت با پیش‌نمایش زنده</td>
                  </tr>
                  <tr>
                    <td>امکانات فروش</td>
                    <td>تنوع با موجودی جدا، کد تخفیف، رویداد فروش، باشگاه مشتریان</td>
                  </tr>
                  <tr>
                    <td>پس از فروش</td>
                    <td>پیامک به مشتری و فروشنده، کد رهگیری، فاکتور رسمی، چت آنلاین</td>
                  </tr>
                  <tr>
                    <td>دامنه و SSL</td>
                    <td>دامنه‌ی اختصاصی با SSL رایگان و خودکار</td>
                  </tr>
                  <tr>
                    <td>هزینه</td>
                    <td>سه پلن شروع، رشد و حرفه‌ای از ۸۹۰ هزار تومان در ماه؛ بدون کارمزد فروش</td>
                  </tr>
                  <tr>
                    <td>پشتیبانی</td>
                    <td>تلفن و واتساپ، تیکت از داخل پنل</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              جزئیات هر مورد در <Link href="/features/">صفحه‌ی امکانات</Link> آمده است.
            </p>
            <h2 id="iran-vs-foreign">فروشگاه‌ساز ایرانی یا خارجی؟</h2>
            <p>
              فروشگاه‌سازهای خارجی امکانات زیادی دارند، ولی برای فروش در ایران چند مانع جدی وجود دارد: پرداخت
              اشتراکشان با کارت ایرانی دشوار است، درگاه‌های پرداخت ایرانی و ترب را پشتیبانی نمی‌کنند، تقویم و
              فاکتور شمسی ندارند و ممکن است به‌دلیل تحریم دسترسی حساب محدود شود. برای مشتری ایرانی،
              فروشگاه‌ساز ایرانی انتخاب عملی‌تری است.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#how">فروشگاه‌ساز چطور کار می‌کند؟</a>
              </li>
              <li>
                <a href="#who">فروشگاه‌ساز به درد چه کسی می‌خورد؟</a>
              </li>
              <li>
                <a href="#criteria">۱۰ معیار برای انتخاب بهترین فروشگاه‌ساز</a>
              </li>
              <li>
                <a href="#nexcart">نکس‌کارت در برابر این معیارها</a>
              </li>
              <li>
                <a href="#iran-vs-foreign">فروشگاه‌ساز ایرانی یا خارجی؟</a>
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
            <Link className="card reveal" href="/blog/store-builder-vs-wordpress/">
              <span className="card__ic ic-amber">
                <Icon name="scale" />
              </span>
              <h3>فروشگاه‌ساز یا وردپرس؟</h3>
              <p>مقایسه‌ی بی‌طرفانه‌ی فروشگاه‌ساز، وردپرس و ووکامرس و طراحی اختصاصی.</p>
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
