import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-woocommerce-to-store-builder";

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
            <h1>مهاجرت از ووکامرس به فروشگاه‌ساز بدون افت سئو</h1>
            <p className="page-hero__lead">
              بیشتر افت رتبه بعد از مهاجرت از آدرس‌های گم‌شده می‌آید، نه از خود فروشگاه‌ساز. این راهنما ترتیب
              کارها را می‌گوید: از فهرست‌کردن آدرس‌های قدیمی تا ریدایرکت ۳۰۱ و پایش بعد از انتقال.
            </p>
            <div className="page-hero__meta">
              <span>
                <Icon name="calendar" /> به‌روزرسانی: ۴ آذر ۱۴۰۵
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
                برای مهاجرت از ووکامرس بدون افت سئو، قبل از انتقال <strong>فهرست همه‌ی آدرس‌های ایندکس‌شده</strong>{" "}
                را بگیر، برای هرکدام <strong>معادل جدید</strong> مشخص کن، بعد از انتقال همه را با{" "}
                <strong>ریدایرکت ۳۰۱</strong> هدایت کن، عنوان و توضیحات را حفظ کن و تا چند هفته سرچ کنسول و
                خطاهای ۴۰۴ را زیر نظر بگیر. نوسان کوتاه عادی است؛ حفظ کامل رتبه را هیچ‌کس تضمین نمی‌کند.
              </p>
            </div>
            <div className="callout callout--warn">
              <Icon name="alert-triangle" />
              <div>
                <strong>پیش از شروع بدان.</strong> ایمپورت خودکار محصول از ووکامرس در نکس‌کارت فعلاً وجود ندارد؛
                محصولات را باید ثبت کنی. چیزی که خودکار و یک‌جا انجام می‌شود، ایمپورت ریدایرکت‌ها با فایل CSV
                است. قبل از تصمیم، {" "}
                <Link href="/contact/">با پشتیبانی تماس بگیر</Link> تا برنامه‌ی انتقال را با هم ببینید.
              </div>
            </div>
            <h2 id="why">چرا مهاجرت رتبه را می‌اندازد؟</h2>
            <p>سه دلیل رایج‌تر از بقیه‌اند:</p>
            <ul>
              <li>
                <strong>آدرس‌ها عوض می‌شوند.</strong> ووکامرس محصول را معمولاً زیر <span className="ltr">/product/</span>{" "}
                و دسته را زیر <span className="ltr">/product-category/</span> می‌گذارد. فروشگاه‌ساز جدید ساختار
                خودش را دارد و آدرس قدیمی بدون ریدایرکت می‌شود ۴۰۴.
              </li>
              <li>
                <strong>محتوا و متاتگ‌ها گم می‌شوند.</strong> عنوان سئو و توضیح متا که در افزونه‌ای مثل Yoast یا
                Rank Math ثبت شده بود، با انتقال خودکار همراه نمی‌آید.
              </li>
              <li>
                <strong>سایت چند روز ناقص است.</strong> صفحه‌های بدون محصول، تصویر شکسته یا سایت‌مپ قدیمی
                سیگنال بدی به گوگل می‌دهند.
              </li>
            </ul>
            <h2 id="baseline">۱. قبل از هر کاری عکس وضعیت فعلی را بگیر</h2>
            <ol className="numbered">
              <li>
                <strong>فهرست آدرس‌های ایندکس‌شده:</strong> از گزارش Pages در سرچ کنسول و سایت‌مپ سایت فعلی
                (مثل <span className="ltr">sitemap_index.xml</span>) همه‌ی آدرس‌های مهم را در یک فایل جمع کن.
              </li>
              <li>
                <strong>صفحه‌های پربازدید و پردرآمد:</strong> از گزارش Performance سرچ کنسول، آدرس‌هایی که
                بیشترین کلیک را دارند علامت بزن. اولویت ریدایرکت و کنترل با این‌هاست.
              </li>
              <li>
                <strong>عنوان و توضیح متا:</strong> برای صفحه‌های مهم، عنوان سئو و توضیح متای فعلی را در یک
                جدول نگه دار تا بعداً در فروشگاه جدید وارد کنی.
              </li>
              <li>
                <strong>نسخه‌ی پشتیبان کامل:</strong> تا مطمئن نشدی همه‌چیز منتقل شده، سایت قدیمی را پاک نکن.
              </li>
            </ol>
            <h2 id="mapping">۲. نقشه‌ی آدرس قدیمی به آدرس جدید بساز</h2>
            <p>
              یک جدول دو‌ستونه بساز: آدرس قدیمی، آدرس جدید. قاعده‌ها ساده‌اند:
            </p>
            <ul>
              <li>محصولی که در فروشگاه جدید هم هست: به همان محصول.</li>
              <li>محصولی که دیگر فروخته نمی‌شود: به نزدیک‌ترین محصول یا دسته، نه صفحه‌ی اصلی.</li>
              <li>دسته‌ها و برچسب‌ها: به دسته‌ی معادل. برچسب‌های کم‌ارزش را می‌شود نادیده گرفت.</li>
              <li>مقاله‌های وبلاگ: به مقاله‌ی معادل در وبلاگ جدید. اگر منتقل نمی‌کنی، به صفحه‌ی مرتبط ریدایرکت کن.</li>
            </ul>
            <div className="callout">
              <Icon name="bulb" />
              <div>
                ریدایرکت همه‌ی صفحه‌های حذف‌شده به صفحه‌ی اصلی کار خوبی نیست؛ گوگل آن را معمولاً مثل ۴۰۴ ساده
                (soft 404) می‌بیند. همیشه نزدیک‌ترین صفحه‌ی مرتبط را انتخاب کن.
              </div>
            </div>
            <h2 id="redirects">۳. ریدایرکت ۳۰۱ را وارد کن</h2>
            <p>
              ریدایرکت ۳۰۱ به گوگل می‌گوید صفحه برای همیشه جابه‌جا شده و بخش زیادی از اعتبار صفحه به آدرس جدید
              منتقل می‌شود. در نکس‌کارت می‌توانی فهرست ریدایرکت‌ها را با{" "}
              <Link href="/features/seo/">ابزار ریدایرکت ۳۰۱</Link> به‌صورت فایل CSV یک‌جا وارد کنی، به‌جای
              ثبت دستی تک‌تک آدرس‌ها. امکانات مرکز سئو بسته به پلن فرق می‌کند؛ جزئیات در{" "}
              <Link href="/pricing/">صفحه‌ی قیمت</Link> آمده است.
            </p>
            <h2 id="content">۴. محتوا و متاتگ را نگه دار</h2>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="file-text" />{" "}
                <span>
                  <strong>عنوان و توضیح متا</strong> صفحه‌های مهم را دوباره وارد کن و با امتیاز سئو بررسی کن
                </span>
              </li>
              <li>
                <Icon name="tag" />{" "}
                <span>
                  <strong>متن توضیحات محصول</strong> را بازنویسی نکن؛ تغییر کم‌تر یعنی ریسک کم‌تر
                </span>
              </li>
              <li>
                <Icon name="world-www" />{" "}
                <span>
                  <strong>دامنه را عوض نکن.</strong> دامنه‌ی فعلی را به فروشگاه جدید وصل کن؛ دامنه‌ی تازه یعنی
                  شروع از صفر
                </span>
              </li>
            </ul>
            <p>
              اتصال دامنه و گواهی SSL خودکار در{" "}
              <Link href="/features/custom-domain/">دامنه‌ی اختصاصی</Link> توضیح داده شده است.
            </p>
            <h2 id="launch">۵. روز انتقال</h2>
            <ol className="numbered">
              <li>
                <strong>همه‌چیز را قبل از سوییچ آماده کن:</strong> محصولات، صفحه‌های قوانین و تماس، درگاه پرداخت
                و ریدایرکت‌ها روی نسخه‌ی جدید آماده باشند.
              </li>
              <li>
                <strong>دامنه را وصل کن</strong> و مطمئن شو SSL فعال است و سایت با https باز می‌شود.
              </li>
              <li>
                <strong>تست سریع:</strong> ده آدرس قدیمی مهم را باز کن و ببین به صفحه‌ی درست می‌روند.
              </li>
              <li>
                <strong>سایت‌مپ جدید را در سرچ کنسول ثبت کن</strong> و سایت‌مپ قدیمی را حذف کن. نکته‌ی
                مرتبط: <Link href="/blog/online-store-seo/">سئو فروشگاه اینترنتی</Link>.
              </li>
            </ol>
            <h2 id="after">۶. بعد از انتقال: چند هفته مراقب باش</h2>
            <ul>
              <li>
                <strong>گزارش ۴۰۴:</strong> مانیتور ۴۰۴ نشان می‌دهد کدام آدرس‌ها خطا می‌دهند؛ هر آدرس جاافتاده‌ی
                مهم را فوراً ریدایرکت کن.
              </li>
              <li>
                <strong>سرچ کنسول:</strong> گزارش Pages و Performance را هر چند روز یک‌بار ببین. نوسان کوتاه
                طبیعی است، افت طولانی نشانه‌ی ریدایرکت یا محتوای ناقص است.
              </li>
              <li>
                <strong>Request Indexing</strong> را برای مهم‌ترین صفحه‌های جدید بزن.
              </li>
            </ul>
            <h2 id="mistakes">اشتباه‌های رایج</h2>
            <ul>
              <li>ریدایرکت نکردن آدرس‌های قدیمی یا هدایت همه به صفحه‌ی اصلی.</li>
              <li>تغییر هم‌زمان دامنه، ساختار آدرس و متن محتوا.</li>
              <li>باز گذاشتن noindex یا بستن robots روی سایت جدید بعد از مرحله‌ی تست.</li>
              <li>حذف سایت قدیمی پیش از اطمینان از انتقال.</li>
            </ul>
            <p>
              برای دید کلی‌تر از انتخاب بین روش‌ها،{" "}
              <Link href="/blog/store-builder-vs-wordpress/">فروشگاه‌ساز یا وردپرس؟</Link> را بخوان و برای
              راه‌اندازی از ابتدا، <Link href="/create-online-store/">ساخت فروشگاه اینترنتی</Link> را ببین.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#why">چرا مهاجرت رتبه را می‌اندازد؟</a>
              </li>
              <li>
                <a href="#baseline">۱. عکس وضعیت فعلی</a>
              </li>
              <li>
                <a href="#mapping">۲. نقشه‌ی آدرس‌ها</a>
              </li>
              <li>
                <a href="#redirects">۳. ریدایرکت ۳۰۱</a>
              </li>
              <li>
                <a href="#content">۴. محتوا و متاتگ</a>
              </li>
              <li>
                <a href="#launch">۵. روز انتقال</a>
              </li>
              <li>
                <a href="#after">۶. بعد از انتقال</a>
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
            <Link className="card reveal" href="/blog/store-builder-vs-wordpress/">
              <span className="card__ic ic-violet">
                <Icon name="help-circle" />
              </span>
              <h3>فروشگاه‌ساز یا وردپرس؟</h3>
              <p>هزینه، زمان، امنیت، انعطاف و مالکیت؛ بی‌طرفانه و کنار هم.</p>
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
