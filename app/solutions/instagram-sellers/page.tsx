import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/solutions-instagram-sellers";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">از دایرکت به فروشگاه</span>
            <h1>ساخت سایت فروشگاهی برای پیج اینستاگرام</h1>
            <p className="page-hero__lead">
              اگر سفارش‌ها را در دایرکت می‌گیری، احتمالاً این‌ها را تجربه کرده‌ای: سؤال تکراری «قیمت؟»، پیگیری
              کارت‌به‌کارت، و موجودی‌ای که فقط در ذهن خودت است. سایت فروشگاهی این کارها را خودکار می‌کند و
              پیجت را برای جذب مشتری آزاد می‌گذارد.
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
                <Icon name="brand-instagram" /> قبل و بعد از سایت
              </p>
              <div className="mk__row">
                <span className="mk__muted">«قیمت؟ موجوده؟ سایز M داری؟»</span>
                <span className="tag tag--warn">دایرکت</span>
              </div>
              <div className="mk__row">
                <span className="mk__muted">عکس فیش کارت‌به‌کارت</span>
                <span className="tag tag--warn">دایرکت</span>
              </div>
              <div className="mk__row">
                <span>قیمت و موجودی روی صفحه‌ی محصول</span>
                <span className="tag tag--new">سایت</span>
              </div>
              <div className="mk__row">
                <span>پرداخت آنلاین و پیامک تأیید</span>
                <span className="tag tag--new">سایت</span>
              </div>
              <div className="mk__row">
                <span>لینک مستقیم محصول در استوری</span>
                <span className="tag tag--new">سایت</span>
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
                سایت فروشگاهی کنار پیج اینستاگرام، ثبت سفارش و پرداخت را از دایرکت به فروشگاه منتقل می‌کند:
                قیمت و موجودی روی صفحه‌ی محصول است، مشتری آنلاین پرداخت می‌کند، پیامک تأیید می‌گیرد و تو پیامک
                سفارش جدید. اینستاگرام برای جذب مشتری می‌ماند و هر پست و استوری به محصول در سایت لینک می‌دهد.
              </p>
            </div>
            <h2 id="problems">مشکلات فروش فقط با دایرکت</h2>
            <ul>
              <li>
                <strong>زمان:</strong> جواب‌دادن به «قیمت؟» و «موجوده؟» بخش زیادی از روز را می‌گیرد و هر جواب
                دیر یعنی مشتری از دست رفته.
              </li>
              <li>
                <strong>پرداخت:</strong> کارت‌به‌کارت، تطبیق فیش و پیگیری پرداخت‌های ناقص.
              </li>
              <li>
                <strong>موجودی:</strong> وقتی موجودی جایی ثبت نشود، کالای تمام‌شده دوباره فروخته می‌شود.
              </li>
              <li>
                <strong>وابستگی:</strong> همه‌ی مشتری‌ها و سابقه‌ی فروش در یک پلتفرم است که کنترلش دست تو
                نیست.
              </li>
            </ul>
            <h2 id="how">سایت فروشگاهی چه چیزی را عوض می‌کند؟</h2>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: سایت فروشگاهی چه چیزی را عوض می‌کند؟ (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">کار</th>
                    <th scope="col">فقط دایرکت</th>
                    <th scope="col" className="hl">
                      با فروشگاه نکس‌کارت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>اعلام قیمت و موجودی</td>
                    <td>جواب دستی به هر پیام</td>
                    <td className="hl">روی صفحه‌ی محصول، همیشه به‌روز</td>
                  </tr>
                  <tr>
                    <td>سایز و رنگ</td>
                    <td>پرسش و پاسخ</td>
                    <td className="hl">انتخاب تنوع با موجودی جدا</td>
                  </tr>
                  <tr>
                    <td>پرداخت</td>
                    <td>کارت‌به‌کارت و فیش</td>
                    <td className="hl">درگاه زرین‌پال یا اقساطی ترب‌پی</td>
                  </tr>
                  <tr>
                    <td>خبر سفارش جدید</td>
                    <td>باید دایرکت را مدام چک کنی</td>
                    <td className="hl">پیامک به حداکثر سه شماره</td>
                  </tr>
                  <tr>
                    <td>رسید</td>
                    <td>اسکرین‌شات</td>
                    <td className="hl">رسید فروش و فاکتور رسمی</td>
                  </tr>
                  <tr>
                    <td>سؤال مشتری</td>
                    <td>دایرکت</td>
                    <td className="hl">چت آنلاین داخل فروشگاه</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="links">لینک مستقیم محصول برای استوری و بیو</h2>
            <p>
              هر محصول و حتی هر تنوع (مثلاً «رنگ قرمز، سایز L») آدرس مستقیم دارد. همین لینک را در استوری، بیو
              یا جواب دایرکت بفرست تا مشتری مستقیم به همان کالا با گزینه‌ی انتخاب‌شده برسد. در{" "}
              <Link href="/features/discounts-loyalty/">رویدادهای فروش</Link> هم می‌توانی تخفیف زمان‌دار بسازی
              و با شمارش معکوس بالای فروشگاه، حس فوریت استوری را در سایت هم داشته باشی.
            </p>
            <h2 id="start">از کجا شروع کنم؟</h2>
            <ol className="numbered">
              <li>
                <strong>محصولات پرفروش را اول وارد کن</strong> لازم نیست همه‌ی پست‌ها را یک‌جا منتقل کنی؛ از
                ده محصول پرفروش شروع کن.
              </li>
              <li>
                <strong>از عکس‌های پیج استفاده کن</strong> همان عکس‌هایی که مشتری‌هایت می‌شناسند، با توضیح و
                جدول سایز کامل‌تر.
              </li>
              <li>
                <strong>لینک سایت را در بیو بگذار</strong> و در پاسخ به سؤال قیمت، لینک محصول را بفرست.
              </li>
              <li>
                <strong>چت آنلاین را روشن کن</strong> تا مشتری‌ای که از اینستاگرام آمده، سؤالش را همان‌جا
                بپرسد.
              </li>
              <li>
                <strong>درگاه و اینماد را پیگیری کن</strong> تا پرداخت آنلاین فعال شود؛ تا آن موقع پرداخت در
                محل.
              </li>
            </ol>
            <p>
              راهنمای کامل مراحل در <Link href="/create-online-store/">ساخت فروشگاه اینترنتی</Link> آمده است.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#problems">مشکلات فروش فقط با دایرکت</a>
              </li>
              <li>
                <a href="#how">سایت فروشگاهی چه چیزی را عوض می‌کند؟</a>
              </li>
              <li>
                <a href="#links">لینک مستقیم محصول برای استوری و بیو</a>
              </li>
              <li>
                <a href="#start">از کجا شروع کنم؟</a>
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
            <h2 id="related-h">قدم بعدی</h2>
          </div>
          <div className="cards">
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
            <Link className="card reveal" href="/features/live-chat/">
              <span className="card__ic ic-sky">
                <Icon name="message-chatbot" />
              </span>
              <h3>چت آنلاین</h3>
              <p>حباب چت روی فروشگاه و صندوق پیام در پنل، با اعلان و وضعیت آنلاین.</p>
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
