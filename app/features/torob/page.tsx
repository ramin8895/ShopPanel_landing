import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-torob";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">ترب و مقایسه قیمت</span>
            <h1>اتصال فروشگاه اینترنتی به ترب</h1>
            <p className="page-hero__lead">
              ترب موتور جستجو و مقایسه‌ی قیمت کالاست و برای خیلی از فروشگاه‌های ایرانی منبع مهم مشتری است.
              نکس‌کارت اتصال به ترب را به‌صورت «فروشگاه‌ساز همکار» پیاده کرده است: API نسخه ۳ و متاتگ‌های
              محصول بدون هیچ تنظیم فنی از طرف تو آماده‌اند.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                اتصال به ترب در پلن‌های رشد و حرفه‌ای ·{" "}
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
                <Icon name="zoom-money" /> یکپارچه‌سازی ← ترب
              </p>
              <div className="mk__row">
                <span>آدرس API</span>
                <b className="ltr" style={{ fontSize: "12px" }}>
                  myshop.ir/torob_api/v3/products
                </b>
              </div>
              <div className="mk__row">
                <span>آدرس سایت‌مپ</span>
                <b className="ltr" style={{ fontSize: "12px" }}>
                  myshop.ir/sitemap.xml
                </b>
              </div>
              <div className="mk__row">
                <span>متاتگ‌های محصول</span>
                <span className="status">
                  <Icon name="circle-check" /> فعال
                </span>
              </div>
              <div className="mk__row">
                <span>ارسال تنوع‌ها</span>
                <span className="status">
                  <Icon name="circle-check" /> هر تنوع جدا
                </span>
              </div>
              <p className="mk__muted" style={{ marginTop: "8px" }}>
                این دو آدرس را برای پشتیبانی ترب بفرست.
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
                ترب محصولات فروشگاه را از دو راه می‌خواند: متاتگ‌های صفحه‌ی محصول یا API نسخه ۳. نکس‌کارت هر
                دو را پیاده کرده است. تو فقط در ترب ثبت‌نام می‌کنی و آدرس API و سایت‌مپ را که پنل نشان می‌دهد
                برای پشتیبانی ترب می‌فرستی.
              </p>
            </div>
            <h2 id="why">چرا اتصال به ترب برای فروشگاه مهم است؟</h2>
            <p>
              بسیاری از خریداران ایرانی قبل از خرید، قیمت کالا را در ترب جستجو و مقایسه می‌کنند. وقتی محصولاتت
              در ترب دیده شوند، مشتری‌ای که دنبال همان کالاست مستقیم به صفحه‌ی محصولت در فروشگاه می‌آید. این
              ترافیک به‌خصوص برای کالاهای قابل مقایسه، مثل موبایل، لوازم دیجیتال، لوازم خانگی و آرایشی،
              ارزشمند است.
            </p>
            <p>
              شرط اصلی ترب این است که اطلاعات محصول (نام، قیمت، موجودی، تصویر) دقیق و به‌روز باشد. اگر قیمت
              سایت با قیمت ترب نخواند یا کالای ناموجود «موجود» نمایش داده شود، هم تجربه‌ی مشتری خراب می‌شود و
              هم ترب ممکن است فروشگاه را محدود کند.
            </p>
            <h2 id="api">API نسخه ۳ ترب</h2>
            <p>
              نکس‌کارت مشخصات API نسخه ۳ ترب را کامل پیاده کرده است. ترب این آدرس را روی دامنه‌ی خود فروشگاه
              صدا می‌زند:
            </p>
            <p>
              <code>{"https://<دامنه‌ی فروشگاه>/torob_api/v3/products"}</code>
            </p>
            <ul>
              <li>
                <strong>احراز هویت:</strong> درخواست‌ها با توکن JWT و کلید عمومی{" "}
                <span className="en">Ed25519</span> ترب بررسی می‌شوند و فقط درخواست واقعی ترب برای همان دامنه
                پذیرفته می‌شود.
              </li>
              <li>
                <strong>همه‌ی حالت‌های درخواست:</strong> درخواست با آدرس صفحه، با شناسه‌ی یکتای کالا،
                صفحه‌بندی با هر سه نوع مرتب‌سازی (از جمله «جدیدترین تغییرات» که برای فروشگاه‌سازها الزامی است)
                و حالت cursor.
              </li>
              <li>
                <strong>تنوع‌ها:</strong> هر تنوع (مثلاً رنگ آبی، حافظه‌ی ۲۵۶ گیگ) یک ردیف جدا با شناسه‌ی گروه
                مشترک است، پس ترب قیمت و موجودی هر تنوع را جدا می‌بیند.
              </li>
            </ul>
            <h2 id="meta">متاتگ‌های محصول برای ترب</h2>
            <p>
              علاوه بر API، صفحه‌ی هر محصول این متاتگ‌ها را در HTML سمت سرور دارد؛ یعنی ترب بدون اجرای
              جاوااسکریپت هم آن‌ها را می‌بیند:
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: متاتگ‌های محصول برای ترب (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">متاتگ</th>
                    <th scope="col">محتوا</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>product_id</code>
                    </td>
                    <td>شناسه‌ی یکتای کالا یا تنوع (همان شناسه‌ی API)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>product_name</code>
                    </td>
                    <td>نام کالا</td>
                  </tr>
                  <tr>
                    <td>
                      <code>product_price</code> و <code>product_old_price</code>
                    </td>
                    <td>قیمت نهایی و قیمت قبل از تخفیف</td>
                  </tr>
                  <tr>
                    <td>
                      <code>availability</code>
                    </td>
                    <td>وضعیت موجودی</td>
                  </tr>
                  <tr>
                    <td>
                      <code>guarantee</code>
                    </td>
                    <td>گارانتی (اگر تعریف شده باشد)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>og:image</code>
                    </td>
                    <td>تصویر اصلی</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              اگر آدرس صفحه پارامتر <code>?variant=</code> داشته باشد، متاتگ‌ها مقدار همان تنوع را نشان
              می‌دهند و صفحه همان تنوع را از پیش انتخاب می‌کند. به این ترتیب ترب می‌تواند مستقیم به تنوع درست
              لینک بدهد.
            </p>
            <h2 id="steps">مراحل اتصال فروشگاه به ترب</h2>
            <ol className="numbered">
              <li>
                <strong>ثبت‌نام در پنل فروشندگان ترب</strong> اطلاعات فروشگاه و دامنه را در ترب ثبت کن.
              </li>
              <li>
                <strong>کپی آدرس‌ها از پنل نکس‌کارت</strong> در «یکپارچه‌سازی‌ها ← ترب»، آدرس API و آدرس
                سایت‌مپ نمایش داده می‌شود.
              </li>
              <li>
                <strong>ارسال برای پشتیبانی ترب</strong> بگو فروشگاهت روی فروشگاه‌ساز نکس‌کارت است و API نسخه
                ۳ دارد، و آدرس‌ها را بفرست.
              </li>
              <li>
                <strong>بررسی و فعال‌سازی</strong> بعد از بررسی ترب، محصولات به‌صورت خودکار و دوره‌ای
                به‌روزرسانی می‌شوند.
              </li>
            </ol>
            <h2 id="feed">سایت‌مپ و فید XML</h2>
            <p>
              سایت‌مپ فروشگاه به ترتیب جدیدترین محصولات مرتب می‌شود و محصولات حذف‌شده در آن نیستند. فید XML
              قدیمی هم برای سازگاری حفظ شده و حالا دامنه‌ی اختصاصی، آدرس درست تصویر، قیمت قبل از تخفیف و
              تنوع‌ها را پوشش می‌دهد.
            </p>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                <strong>نکته:</strong> قیمت‌ها در داده‌های ساختاریافته‌ی گوگل به ریال اعلام می‌شوند (قیمت
                تومانی × ۱۰) تا با استاندارد ارز IRR سازگار باشند.
              </div>
            </div>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#why">چرا اتصال به ترب برای فروشگاه مهم است؟</a>
              </li>
              <li>
                <a href="#api">API نسخه ۳ ترب</a>
              </li>
              <li>
                <a href="#meta">متاتگ‌های محصول برای ترب</a>
              </li>
              <li>
                <a href="#steps">مراحل اتصال فروشگاه به ترب</a>
              </li>
              <li>
                <a href="#feed">سایت‌مپ و فید XML</a>
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
            <Link className="card reveal" href="/solutions/digital-products/">
              <span className="card__ic ic-sky">
                <Icon name="device-mobile" />
              </span>
              <h3>فروشگاه کالای دیجیتال</h3>
              <p>قالب مگامارکت، اتصال کامل به ترب و خرید اقساطی برای کالای دیجیتال.</p>
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
