import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-payment-gateway";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">پرداخت آنلاین</span>
            <h1>درگاه پرداخت فروشگاه اینترنتی: زرین‌پال و خرید اقساطی ترب‌پی</h1>
            <p className="page-hero__lead">
              در نکس‌کارت هر فروشنده درگاه پرداخت خودش را وصل می‌کند و پول هر سفارش مستقیم به حساب خودش واریز
              می‌شود. علاوه بر پرداخت آنلاین زرین‌پال، می‌توانی خرید اقساطی ترب‌پی و پرداخت در محل را هم فعال
              کنی.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                زرین‌پال و پرداخت در محل در همه‌ی پلن‌ها؛ خرید اقساطی ترب‌پی از پلن رشد ·{" "}
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
                <Icon name="credit-card" /> انتخاب روش پرداخت
              </p>
              <div className="payopt payopt--on">
                <span className="payopt__radio"></span>
                <div>
                  <b>پرداخت آنلاین زرین‌پال</b>
                  <small>کارت‌های عضو شبکه‌ی شتاب</small>
                </div>
              </div>
              <div className="payopt">
                <span className="payopt__radio"></span>
                <div>
                  <b>خرید اقساطی با ترب‌پی</b>
                  <small>فقط وقتی برای مبلغ این سبد مجاز باشد</small>
                </div>
              </div>
              <div className="payopt">
                <span className="payopt__radio"></span>
                <div>
                  <b>پرداخت در محل</b>
                  <small>اگر فروشنده فعال کرده باشد</small>
                </div>
              </div>
              <div className="mk__row">
                <span>مبلغ قابل پرداخت</span>
                <b>۲٬۴۸۰٬۰۰۰ تومان</b>
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
                نکس‌کارت سه روش پرداخت دارد: درگاه آنلاین زرین‌پال، خرید اقساطی ترب‌پی و پرداخت در محل.
                درگاه‌ها با اطلاعات خود فروشنده وصل می‌شوند، پس پول مستقیم به حساب فروشنده می‌رود و نکس‌کارت
                از فروش کارمزد نمی‌گیرد.
              </p>
            </div>
            <h2 id="zarinpal">پرداخت آنلاین با زرین‌پال</h2>
            <p>
              زرین‌پال درگاه پیش‌فرض فروشگاه‌های نکس‌کارت است. اطلاعات درگاه را در پنل وارد می‌کنی و از همان
              لحظه مشتری‌ها با کارت‌های عضو شبکه‌ی شتاب پرداخت می‌کنند.
            </p>
            <ul>
              <li>
                <strong>آدرس بازگشت درست برای هر فروشگاه:</strong> بعد از پرداخت، مشتری به همان دامنه‌ی
                فروشگاه تو برمی‌گردد؛ چه زیردامنه‌ی <span className="ltr">nexcart.ir</span> باشد چه دامنه‌ی
                اختصاصی.
              </li>
              <li>
                <strong>تأیید امن پرداخت:</strong> هر پرداخت فقط با کد مرجع ذخیره‌شده برای همان سفارش تأیید
                می‌شود؛ تکرار یک پرداخت موفق نمی‌تواند سفارش دیگری را «پرداخت‌شده» کند.
              </li>
              <li>
                <strong>پیامک در زمان درست:</strong> پیامک تأیید سفارش برای مشتری و پیامک سفارش جدید برای
                فروشنده فقط بعد از پرداخت موفق ارسال می‌شود، نه موقع ثبت سفارشی که هنوز پرداخت نشده.
              </li>
              <li>
                <strong>پاک‌سازی سفارش‌های رهاشده:</strong> سفارش‌هایی که به درگاه رفته‌اند ولی پرداخت
                نشده‌اند، خودکار مدیریت می‌شوند و در «سفارش‌های من» مشتری نمایش داده نمی‌شوند.
              </li>
            </ul>
            <h2 id="torobpay">خرید اقساطی با ترب‌پی</h2>
            <p>
              ترب‌پی به مشتری اجازه می‌دهد خریدش را قسطی بپردازد، در حالی که فروشنده مبلغ را از ترب‌پی دریافت
              می‌کند. برای کالاهای گران‌تر مثل موبایل، لپ‌تاپ یا لوازم خانگی، این گزینه می‌تواند تصمیم خرید را
              ساده‌تر کند.
            </p>
            <h3>فعال‌سازی</h3>
            <p>
              در پنل، بخش «درگاه پرداخت ← ترب‌پی»، چهار مقدار اتصال را که ترب‌پی به تو می‌دهد وارد می‌کنی و
              دکمه‌ی آزمایش اتصال را می‌زنی. این مقادیر رمزنگاری‌شده (<span className="en">AES-256-GCM</span>)
              ذخیره می‌شوند و مقادیر محرمانه هیچ‌وقت دوباره در صفحه نمایش داده نمی‌شوند.
            </p>
            <h3>تجربه‌ی مشتری</h3>
            <ul>
              <li>
                گزینه‌ی «خرید اقساطی با ترب‌پی» فقط وقتی نمایش داده می‌شود که ترب‌پی آن مبلغ را مجاز بداند، و
                با تغییر سبد دوباره بررسی می‌شود.
              </li>
              <li>برای ترب‌پی، استان، شهر و کد پستی در صفحه‌ی پرداخت اجباری است.</li>
              <li>
                صفحه‌ی نتیجه سه حالت دارد: موفق، «در حال بررسی» (که خودکار چند دقیقه وضعیت را پیگیری می‌کند) و
                ناموفق.
              </li>
            </ul>
            <h3>جلوگیری از گم‌شدن پول</h3>
            <p>
              در پرداخت اقساطی، بعد از تأیید پرداخت یک مرحله‌ی «تسویه» هم لازم است. نکس‌کارت اول موجودی را
              رزرو می‌کند، بعد پرداخت را تأیید و تسویه می‌کند. اگر کالا در همین فاصله تمام شده باشد، مبلغ بدون
              هزینه به مشتری برمی‌گردد. یک فرایند تطبیق هر دو دقیقه پرداخت‌های نیمه‌کاره را بررسی می‌کند.
            </p>
            <div className="callout callout--warn">
              <Icon name="alert-triangle" />
              <div>
                <strong>پیش‌نیاز ترب‌پی:</strong> ترب‌پی از فروشنده ثبت در ترب و اینماد می‌خواهد و قرارداد آن
                مستقیم بین تو و ترب‌پی است. اگر هنوز در ترب ثبت نیستی، صفحه‌ی{" "}
                <Link href="/features/torob/">اتصال فروشگاه به ترب</Link> را ببین.
              </div>
            </div>
            <h2 id="cod">پرداخت در محل و پرداخت دستی</h2>
            <p>
              برای مشتری‌هایی که پرداخت حضوری را ترجیح می‌دهند، یا در دوره‌ای که هنوز درگاه نگرفته‌ای، پرداخت
              در محل قابل استفاده است. سفارش پرداخت در محل همان لحظه‌ی ثبت قطعی حساب می‌شود و پیامک سفارش جدید
              برای فروشنده ارسال می‌شود.
            </p>
            <h2 id="card-to-card">کارت‌به‌کارت با تأیید فروشنده</h2>
            <p>
              اگر هنوز درگاه نداری یا مشتری‌هایت کارت‌به‌کارت را ترجیح می‌دهند، شماره کارت و نام صاحب کارت را
              در «تنظیمات ← پرداخت» ثبت می‌کنی. مشتری در تسویه‌حساب «کارت به کارت» را می‌زند، مبلغ و شماره
              کارت را با دکمه‌ی کپی می‌بیند، واریز می‌کند و ۴ رقم آخر کارت خودش را وارد می‌کند. تو پیامک
              می‌گیری، واریز را در اپ بانکت پیدا می‌کنی و در پنل «تأیید واریز» یا «رد واریز» را می‌زنی.
            </p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="shield-check" />{" "}
                <span>
                  <strong>جلوی خطای تایپ:</strong> شماره کارت ۱۶ رقمی و با الگوریتم Luhn اعتبارسنجی می‌شود تا
                  پول به کارت اشتباه نرود.
                </span>
              </li>
              <li>
                <Icon name="box" />{" "}
                <span>
                  <strong>موجودی رزرو می‌شود:</strong> سفارش با موجودی رزروشده ثبت می‌شود. اگر مشتری تا ۲۴
                  ساعت (قابل تنظیم) ۴ رقم را نزند، سفارش بسته و موجودی آزاد می‌شود.
                </span>
              </li>
              <li>
                <Icon name="check" />{" "}
                <span>
                  <strong>بعد از تأیید:</strong> مثل سایر روش‌های پرداخت، فاکتور، امتیاز باشگاه، آزادسازی
                  کالای دانلودی و پیامک مشتری انجام می‌شود. با رد واریز، سفارش لغو و موجودی برمی‌گردد.
                </span>
              </li>
            </ul>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                <strong>صادقانه:</strong> ۴ رقم آخر کارت اثبات پرداخت نیست؛ فقط کمک می‌کند واریز را در لیست
                تراکنش‌های بانکت پیدا کنی. تأیید نهایی همیشه با خود توست. کارت‌به‌کارت در همه‌ی پلن‌ها فعال
                است.
              </div>
            </div>
            <h2 id="refund">لغو سفارش و بازپرداخت</h2>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: لغو سفارش و بازپرداخت (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">روش پرداخت</th>
                    <th scope="col">با لغو سفارش در پنل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ترب‌پی</td>
                    <td>
                      درخواست بازپرداخت خودکار برای ترب‌پی ارسال می‌شود؛ اگر رد شود، سفارش لغو نمی‌شود و خطا
                      نمایش داده می‌شود
                    </td>
                  </tr>
                  <tr>
                    <td>زرین‌پال</td>
                    <td>
                      سفارش لغو و موجودی برگردانده می‌شود؛ بازگشت وجه طبق روال حساب زرین‌پال خودت انجام می‌شود
                    </td>
                  </tr>
                  <tr>
                    <td>پرداخت در محل</td>
                    <td>سفارش لغو و موجودی به همان تنوع کالا برمی‌گردد</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="fees">هزینه‌ها و کارمزدها</h2>
            <p>
              نکس‌کارت از هیچ فروشی کارمزد برنمی‌دارد و تنها هزینه‌اش اشتراک ماهانه است (
              <Link href="/pricing/">قیمت‌ها</Link>). کارمزد تراکنش درگاه‌ها و شرایط اقساط ترب‌پی طبق قرارداد
              مستقیم تو با همان سرویس‌هاست.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#zarinpal">پرداخت آنلاین با زرین‌پال</a>
              </li>
              <li>
                <a href="#torobpay">خرید اقساطی با ترب‌پی</a>
              </li>
              <li>
                <a href="#cod">پرداخت در محل و پرداخت دستی</a>
              </li>
              <li>
                <a href="#card-to-card">کارت‌به‌کارت با تأیید فروشنده</a>
              </li>
              <li>
                <a href="#refund">لغو سفارش و بازپرداخت</a>
              </li>
              <li>
                <a href="#fees">هزینه‌ها و کارمزدها</a>
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
            <Link className="card reveal" href="/features/order-management/">
              <span className="card__ic ic-teal">
                <Icon name="truck-delivery" />
              </span>
              <h3>مدیریت سفارش</h3>
              <p>پیامک سفارش جدید، کد رهگیری، جزئیات کامل اقلام و ریز مبلغ هر سفارش.</p>
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
