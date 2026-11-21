import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-custom-domain";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">دامنه و SSL</span>
            <h1>فروشگاه اینترنتی با دامنه اختصاصی</h1>
            <p className="page-hero__lead">
              هر فروشگاه نکس‌کارت از روز اول یک زیردامنه‌ی رایگان دارد. هر وقت آماده بودی، با پلن رشد یا
              حرفه‌ای دامنه‌ی خودت را وصل کن؛ گواهی SSL رایگان خودکار صادر و تمدید می‌شود.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                دامنه‌ی اختصاصی از پلن رشد؛ پلن شروع روی زیردامنه‌ی nexcart.ir با SSL ·{" "}
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
                <Icon name="world-www" /> دامنه اختصاصی{" "}
                <span className="status" style={{ marginInlineStart: "auto" }}>
                  <Icon name="lock" /> SSL فعال
                </span>
              </p>
              <table className="dns">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>@</td>
                    <td>IP سرور نکس‌کارت</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>www</td>
                    <td>IP سرور نکس‌کارت</td>
                  </tr>
                </tbody>
              </table>
              <p className="mk__muted" style={{ marginTop: "10px" }}>
                رکوردها را در پنل DNS دامنه‌ات ثبت کن؛ مقدار دقیق در پنل نکس‌کارت نمایش داده می‌شود.
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
                برای اتصال دامنه‌ی اختصاصی، دامنه را در پنل نکس‌کارت ثبت می‌کنی، رکوردهای DNS که پنل نشان
                می‌دهد را در پنل دامنه وارد می‌کنی و منتظر تأیید می‌مانی. بعد از تأیید، گواهی SSL رایگان
                خودکار صادر می‌شود. اگر از ابر آروان یا کلادفلر استفاده می‌کنی، پراکسی را خاموش کن.
              </p>
            </div>
            <h2 id="why">زیردامنه یا دامنه‌ی اختصاصی؟</h2>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: زیردامنه یا دامنه‌ی اختصاصی؟ (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">مقایسه</th>
                    <th scope="col">
                      زیردامنه (<span className="ltr">myshop.nexcart.ir</span>)
                    </th>
                    <th scope="col">
                      دامنه‌ی اختصاصی (<span className="ltr">myshop.ir</span>)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>پلن</td>
                    <td>همه‌ی پلن‌ها</td>
                    <td>پلن رشد و حرفه‌ای</td>
                  </tr>
                  <tr>
                    <td>هزینه‌ی جدا</td>
                    <td>ندارد</td>
                    <td>فقط هزینه‌ی سالانه‌ی دامنه</td>
                  </tr>
                  <tr>
                    <td>برند و اعتماد</td>
                    <td>مناسب شروع کار</td>
                    <td>حرفه‌ای‌تر و به‌یادماندنی‌تر</td>
                  </tr>
                  <tr>
                    <td>اینماد</td>
                    <td>—</td>
                    <td>اینماد برای دامنه‌ی خودت صادر می‌شود</td>
                  </tr>
                  <tr>
                    <td>SSL</td>
                    <td>فعال</td>
                    <td>رایگان و خودکار</td>
                  </tr>
                  <tr>
                    <td>
                      کدهای گوگل (<span className="en">GA4</span>، ادز)
                    </td>
                    <td>بارگذاری نمی‌شود</td>
                    <td>در پلن حرفه‌ای، فقط روی دامنه‌های غیر ‎.ir‎</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="steps">مراحل اتصال دامنه</h2>
            <ol className="numbered">
              <li>
                <strong>خرید دامنه</strong> دامنه‌ی ‎.ir‎ را از ایرنیک یا نمایندگی‌ها، یا یک دامنه‌ی
                بین‌المللی بخر.
              </li>
              <li>
                <strong>ثبت دامنه در پنل نکس‌کارت</strong> در تنظیمات دامنه، نام دامنه را وارد کن؛ پنل
                رکوردهای DNS لازم را نشان می‌دهد.
              </li>
              <li>
                <strong>ثبت رکوردها در پنل DNS</strong> رکوردها را دقیقاً همان‌طور که نمایش داده شده ثبت کن.
                اگر <span className="ltr">www</span> هم می‌خواهی، رکورد آن را هم اضافه کن.
              </li>
              <li>
                <strong>تأیید و صدور SSL</strong> سیستم به‌صورت دوره‌ای DNS را بررسی می‌کند؛ بعد از تأیید،
                گواهی SSL صادر و فروشگاه روی دامنه‌ی جدید فعال می‌شود.
              </li>
            </ol>
            <div className="callout callout--warn">
              <Icon name="alert-triangle" />
              <div>
                <strong>ابر آروان و کلادفلر:</strong> اگر DNS دامنه روی ابر آروان یا کلادفلر است، پراکسی (حالت
                ابری یا نارنجی) را برای رکوردهای فروشگاه خاموش کن. با پراکسی روشن، بررسی DNS آدرس شبکه‌ی توزیع
                محتوا را می‌بیند و دامنه تأیید نمی‌شود.
              </div>
            </div>
            <h2 id="propagation">چقدر طول می‌کشد؟</h2>
            <p>
              به‌روز شدن DNS در اینترنت (propagation) معمولاً بین چند دقیقه تا چند ساعت طول می‌کشد و گاهی
              بیشتر. تا وقتی تأیید کامل نشده، فروشگاه روی زیردامنه‌ی قبلی در دسترس است و فروش متوقف نمی‌شود.
            </p>
            <h2 id="seo">دامنه و سئو</h2>
            <p>
              دامنه‌ی اختصاصی را از همان ابتدای کار وصل کن تا اعتبار جستجو روی آدرس نهایی جمع شود، نه روی
              زیردامنه. بعد از اتصال، دامنه‌ی جدید را در سرچ کنسول گوگل ثبت کن و آدرس سایت‌مپ را بفرست. اگر
              قبلاً سایت دیگری روی این دامنه داشتی، با <Link href="/features/seo/">ریدایرکت ۳۰۱</Link>{" "}
              آدرس‌های قدیمی را به صفحه‌های جدید هدایت کن.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#why">زیردامنه یا دامنه‌ی اختصاصی؟</a>
              </li>
              <li>
                <a href="#steps">مراحل اتصال دامنه</a>
              </li>
              <li>
                <a href="#propagation">چقدر طول می‌کشد؟</a>
              </li>
              <li>
                <a href="#seo">دامنه و سئو</a>
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
            <Link className="card reveal" href="/blog/enamad-guide/">
              <span className="card__ic ic-teal">
                <Icon name="certificate" />
              </span>
              <h3>راهنمای اینماد</h3>
              <p>اینماد چیست، چه مدارکی می‌خواهد و سایت فروشگاهی را چطور برایش آماده کنیم.</p>
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
