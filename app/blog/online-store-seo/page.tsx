import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-online-store-seo";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">سئو</span>
            <h1>سئو فروشگاه اینترنتی؛ راهنمای عملی از محصول تا سرچ کنسول</h1>
            <p className="page-hero__lead">
              سئو فروشگاه با سئو یک وبلاگ فرق دارد: صدها صفحه‌ی محصول شبیه به هم، دسته‌هایی که با فیلتر تکثیر
              می‌شوند و کالاهایی که تمام می‌شوند. این راهنما کارهای اصلی را به ترتیب اولویت توضیح می‌دهد.
            </p>
            <div className="page-hero__meta">
              <span>
                <Icon name="calendar" /> به‌روزرسانی: ۹ مهر ۱۴۰۵
              </span>
              <span>
                <Icon name="clock" /> زمان مطالعه: ۵ دقیقه
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
                سئو فروشگاه اینترنتی یعنی کاری کنی که صفحه‌های محصول و دسته‌بندی برای جستجوهای خرید در گوگل
                دیده شوند. مهم‌ترین کارها به ترتیب: پایه‌ی فنی درست (ایندکس، نقشه‌ی سایت، کد 404 و ریدایرکت
                ۳۰۱)، عنوان و توضیح منحصربه‌فرد برای هر محصول و دسته، عکس سبک با متن جایگزین، سرعت خوب روی
                موبایل، داده‌ی ساختاریافته‌ی محصول، و محتوای راهنما که به محصولات لینک بدهد.
              </p>
            </div>
            <h2 id="keywords">۱. کلمه‌ی کلیدی درست را برای هر صفحه انتخاب کن</h2>
            <p>در فروشگاه، هر نوع صفحه یک نوع جستجو را هدف می‌گیرد:</p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: ۱. کلمه‌ی کلیدی درست را برای هر صفحه انتخاب کن (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">صفحه</th>
                    <th scope="col">نوع جستجو</th>
                    <th scope="col">مثال</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>محصول</td>
                    <td>جستجوی دقیق با نام، مدل یا ویژگی</td>
                    <td>«خرید کفش رانینگ مردانه مدل X سایز ۴۳»</td>
                  </tr>
                  <tr>
                    <td>دسته‌بندی</td>
                    <td>جستجوی کلی‌تر خرید</td>
                    <td>«کفش رانینگ مردانه»</td>
                  </tr>
                  <tr>
                    <td>مقاله‌ی وبلاگ</td>
                    <td>سؤال و مقایسه، قبل از تصمیم خرید</td>
                    <td>«بهترین کفش برای دویدن روی آسفالت»</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              برای پیدا کردن کلمه‌ها، پیشنهادهای خودکار گوگل، بخش «جستجوهای مرتبط» و سؤال‌هایی که مشتری‌ها در
              دایرکت و چت از تو می‌پرسند منبع خوبی‌اند. برای دو صفحه یک کلمه‌ی کلیدی انتخاب نکن؛ این‌طوری
              صفحه‌های خودت با هم رقابت می‌کنند.
            </p>
            <h2 id="technical">۲. پایه‌ی فنی را درست کن</h2>
            <ul>
              <li>
                <strong>صفحه‌ها باید برای گوگل قابل خواندن باشند:</strong> محتوای محصول باید در HTML اولیه‌ی
                صفحه باشد، نه فقط بعد از اجرای جاوااسکریپت.
              </li>
              <li>
                <strong>نقشه‌ی سایت (sitemap):</strong> شامل همه‌ی محصولات، دسته‌ها و مقاله‌ها، و بدون
                صفحه‌های noindex.
              </li>
              <li>
                <strong>کد وضعیت درست:</strong> صفحه‌ی محصول حذف‌شده باید کد 404 (یا ریدایرکت ۳۰۱) برگرداند،
                نه یک صفحه‌ی خالی با کد ۲۰۰.
              </li>
              <li>
                <strong>صفحه‌های فیلتر و مرتب‌سازی:</strong> نسخه‌های «مرتب‌سازی بر اساس قیمت» یا «فقط رنگ
                آبی» از یک دسته، محتوای تکراری می‌سازند؛ نباید جدا ایندکس شوند.
              </li>
              <li>
                <strong>robots.txt:</strong> سبد خرید، پرداخت و حساب کاربری را می‌شود بست، ولی هیچ‌وقت کل سایت
                را.
              </li>
            </ul>
            <p>
              در فروشگاه‌ساز، بیشتر این‌ها را پلتفرم انجام می‌دهد. در نکس‌کارت صفحه‌ها سمت سرور رندر می‌شوند،
              نقشه‌ی سایت تصویری خودکار است و محصول ناموجود 404 واقعی برمی‌گرداند (
              <Link href="/features/seo/">ابزارهای سئوی نکس‌کارت</Link>).
            </p>
            <h2 id="product">۳. سئو صفحه‌ی محصول</h2>
            <ol className="numbered">
              <li>
                <strong>عنوان سئو منحصربه‌فرد</strong> نام کامل محصول (برند، مدل، ویژگی اصلی) + نام فروشگاه.
                اگر صدها محصول داری، از قالب خودکار مثل «خرید <code>{"{name}"}</code> |{" "}
                <code>{"{brand}"}</code> | <code>{"{store}"}</code>» استفاده کن.
              </li>
              <li>
                <strong>توضیحات متا</strong> یک تا دو جمله که بگوید چرا از تو بخرد: موجودی، ارسال، گارانتی یا
                ویژگی خاص.
              </li>
              <li>
                <strong>نامک (slug) کوتاه و خوانا</strong> و بدون تاریخ یا عدد بی‌معنی.
              </li>
              <li>
                <strong>توضیح اختصاصی</strong> نه کپی از تأمین‌کننده. مشخصات فنی را فهرست کن و به سؤال‌های
                رایج جواب بده.
              </li>
              <li>
                <strong>نظرات واقعی مشتری‌ها</strong> هم برای اعتماد مفیدند و هم محتوای تازه به صفحه اضافه
                می‌کنند.
              </li>
              <li>
                <strong>لینک به دسته و محصولات مرتبط</strong> تا گوگل و کاربر راحت در سایت جابه‌جا شوند.
              </li>
            </ol>
            <h2 id="category">۴. سئو صفحه‌ی دسته‌بندی</h2>
            <p>
              صفحه‌ی دسته معمولاً برای کلمه‌های پرجستجوتر رتبه می‌گیرد. یک پاراگراف کوتاه و واقعاً مفید بالای
              فهرست محصولات (مثلاً راهنمای انتخاب) و یک توضیح کامل‌تر پایین صفحه کمک می‌کند گوگل بفهمد این
              دسته درباره‌ی چیست. عنوان و توضیحات سئوی هر دسته را جدا بنویس و دسته‌های خالی را از نقشه‌ی سایت
              بیرون نگه دار.
            </p>
            <h2 id="images">۵. تصاویر</h2>
            <ul>
              <li>عکس را قبل از آپلود فشرده کن؛ عکس سنگین بزرگ‌ترین دلیل کندی صفحه‌ی محصول است.</li>
              <li>
                برای هر عکس متن جایگزین (alt) کوتاه و توصیفی بنویس: «کفش رانینگ سرمه‌ای از نمای کنار»، نه
                تکرار کلمه‌ی کلیدی.
              </li>
              <li>
                نام فایل را معنادار بگذار، نه <code>IMG_2041.jpg</code>.
              </li>
            </ul>
            <h2 id="speed">۶. سرعت و تجربه‌ی موبایل</h2>
            <p>
              گوگل سرعت و پایداری صفحه را با شاخص‌های Core Web Vitals می‌سنجد: LCP (سرعت نمایش محتوای اصلی)،
              INP (سرعت پاسخ به لمس و کلیک) و CLS (جابه‌جایی ناگهانی اجزای صفحه). بیشتر خرید آنلاین در ایران
              با موبایل و اینترنت همراه است، پس صفحه را روی گوشی و اینترنت معمولی تست کن، نه فقط روی لپ‌تاپ
              دفتر. در نکس‌کارت این شاخص‌ها از بازدیدهای واقعی جمع‌آوری و به تفکیک صفحه و دستگاه گزارش
              می‌شوند.
            </p>
            <h2 id="schema">۷. داده‌ی ساختاریافته</h2>
            <p>
              داده‌ی ساختاریافته‌ی Product به گوگل نام، قیمت، ارز، موجودی و تصویر محصول را با زبان استاندارد
              می‌گوید و شانس نمایش قیمت و موجودی در نتایج را بالا می‌برد. دو نکته‌ی مهم برای فروشگاه ایرانی:
            </p>
            <ul>
              <li>
                ارز استاندارد ایران <code>IRR</code> (ریال) است؛ اگر قیمت سایت تومان است، در داده‌ی
                ساختاریافته باید ×۱۰ شود.
              </li>
              <li>
                امتیاز و نظر را فقط وقتی اضافه کن که نظر واقعی وجود دارد؛ امتیاز ساختگی ممکن است جریمه داشته
                باشد.
              </li>
            </ul>
            <h2 id="redirects">۸. ریدایرکت ۳۰۱ و صفحه‌های 404</h2>
            <p>
              هر بار نامک محصول یا دسته را عوض می‌کنی یا محصولی را حذف می‌کنی، آدرس قدیمی باید با ریدایرکت ۳۰۱
              به آدرس جدید یا نزدیک‌ترین صفحه برود. اگر از سایت دیگری (مثلاً وردپرس) مهاجرت می‌کنی، این کار
              حیاتی است: فهرست آدرس‌های قدیمی را دربیاور و یک‌به‌یک به صفحه‌های جدید وصل کن. بعد، فهرست 404ها
              را مرتب چک کن تا آدرس‌های جاافتاده را پیدا کنی. مراحل کامل را در{" "}
              <Link href="/blog/woocommerce-to-store-builder/">مهاجرت از ووکامرس بدون افت سئو</Link> بخوان.
            </p>
            <h2 id="content">۹. محتوا و لینک داخلی</h2>
            <p>
              مقاله‌های راهنما (راهنمای خرید، مقایسه، آموزش استفاده) جستجوهای قبل از خرید را جذب می‌کنند. هر
              مقاله باید به محصولات و دسته‌های مرتبط لینک بدهد؛ این‌طوری هم بازدیدکننده به خرید نزدیک می‌شود و
              هم اعتبار مقاله به صفحه‌های فروش منتقل می‌شود. در وبلاگ نکس‌کارت با کد{" "}
              <code>[[product:نامک]]</code> کارت محصول با قیمت روز را داخل مقاله می‌گذاری.
            </p>
            <h2 id="search-console">۱۰. سرچ کنسول گوگل را وصل کن</h2>
            <p>
              سرچ کنسول تنها جایی است که می‌بینی گوگل سایتت را چطور می‌بیند: کدام صفحه‌ها ایندکس شده‌اند، برای
              چه کلمه‌هایی نمایش داده می‌شوی و چه خطاهایی وجود دارد. بعد از راه‌اندازی، سایت را ثبت کن، نقشه‌ی
              سایت را بفرست و هر چند هفته گزارش «صفحه‌ها» و «عملکرد» را نگاه کن.
            </p>
            <h2 id="torob">ترب را فراموش نکن</h2>
            <p>
              برای فروشگاه ایرانی، ترب کنار گوگل یک منبع مهم ورودی رایگان است، به‌خصوص برای کالاهای قابل
              مقایسه. داده‌های دقیق محصول (نام کامل، قیمت، موجودی) هم برای گوگل لازم است و هم برای ترب.{" "}
              <Link href="/features/torob/">اتصال فروشگاه به ترب</Link>
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#keywords">۱. کلمه‌ی کلیدی درست را برای هر صفحه انتخاب کن</a>
              </li>
              <li>
                <a href="#technical">۲. پایه‌ی فنی را درست کن</a>
              </li>
              <li>
                <a href="#product">۳. سئو صفحه‌ی محصول</a>
              </li>
              <li>
                <a href="#category">۴. سئو صفحه‌ی دسته‌بندی</a>
              </li>
              <li>
                <a href="#images">۵. تصاویر</a>
              </li>
              <li>
                <a href="#speed">۶. سرعت و تجربه‌ی موبایل</a>
              </li>
              <li>
                <a href="#schema">۷. داده‌ی ساختاریافته</a>
              </li>
              <li>
                <a href="#redirects">۸. ریدایرکت ۳۰۱ و صفحه‌های 404</a>
              </li>
              <li>
                <a href="#content">۹. محتوا و لینک داخلی</a>
              </li>
              <li>
                <a href="#search-console">۱۰. سرچ کنسول گوگل را وصل کن</a>
              </li>
              <li>
                <a href="#torob">ترب را فراموش نکن</a>
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
            <h2 id="related-h">ابزار و قدم بعدی</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/features/seo/">
              <span className="card__ic ic-green">
                <Icon name="seo" />
              </span>
              <h3>ابزارهای سئو</h3>
              <p>امتیاز سئو با تحلیلگر فارسی، ریدایرکت ۳۰۱، مانیتور 404، سرعت سایت و وبلاگ.</p>
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
            <Link className="card reveal" href="/blog/what-is-store-builder/">
              <span className="card__ic ic-blue">
                <Icon name="help-circle" />
              </span>
              <h3>فروشگاه‌ساز چیست؟</h3>
              <p>تعریف فروشگاه‌ساز و ده معیار عملی برای انتخاب بهترین گزینه.</p>
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
