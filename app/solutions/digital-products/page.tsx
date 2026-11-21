import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/solutions-digital-products";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">موبایل، لپ‌تاپ، لوازم جانبی</span>
            <h1>راه‌اندازی فروشگاه اینترنتی موبایل و کالای دیجیتال</h1>
            <p className="page-hero__lead">
              خریدار کالای دیجیتال قیمت‌ها را مقایسه می‌کند، به گارانتی اهمیت می‌دهد و برای کالای گران دنبال
              پرداخت اقساطی است. نکس‌کارت برای هر سه جواب دارد: اتصال کامل به ترب، متاتگ گارانتی و خرید اقساطی
              ترب‌پی.
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
                <Icon name="device-mobile" /> گوشی موبایل مدل X
              </p>
              <div className="mk__row">
                <span>آبی · ۲۵۶ گیگابایت</span>
                <b>۴۲٬۵۰۰٬۰۰۰</b>
              </div>
              <div className="mk__row">
                <span>مشکی · ۱۲۸ گیگابایت</span>
                <b>۳۸٬۹۰۰٬۰۰۰</b>
              </div>
              <div className="mk__row">
                <span>گارانتی</span>
                <span className="mk__muted">۱۸ ماهه</span>
              </div>
              <div className="payopt payopt--on" style={{ marginTop: "10px" }}>
                <span className="payopt__radio"></span>
                <div>
                  <b>خرید اقساطی با ترب‌پی</b>
                  <small>برای مبلغ این سبد مجاز است</small>
                </div>
              </div>
              <div className="mk__row">
                <span>ارسال به ترب</span>
                <span className="status">
                  <Icon name="circle-check" /> هر تنوع جدا
                </span>
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
                برای فروشگاه موبایل و کالای دیجیتال، مهم‌ترین امکانات نکس‌کارت این‌هاست: اتصال به ترب با API
                نسخه ۳ که هر تنوع (رنگ، حافظه) را جدا ارسال می‌کند، متاتگ قیمت و گارانتی، خرید اقساطی ترب‌پی،
                قالب مگامارکت با جستجوی بزرگ و مگامنو، و فاکتور رسمی برای خریدار شرکتی.
              </p>
            </div>
            <h2 id="buyer">خریدار کالای دیجیتال چطور خرید می‌کند؟</h2>
            <ul>
              <li>
                <strong>مقایسه‌ی قیمت:</strong> بیشتر خریدارها قبل از خرید موبایل یا لپ‌تاپ، قیمت را در ترب
                مقایسه می‌کنند. اگر در ترب نباشی، بخش بزرگی از مشتری‌ها تو را نمی‌بینند.
              </li>
              <li>
                <strong>گارانتی و اصالت:</strong> نوع و مدت گارانتی و اصالت کالا بخش مهمی از تصمیم است.
              </li>
              <li>
                <strong>مبلغ بالا:</strong> برای کالای گران، امکان پرداخت قسطی می‌تواند فاصله‌ی «می‌خواهم» تا
                «می‌خرم» را کم کند.
              </li>
              <li>
                <strong>خرید سازمانی:</strong> شرکت‌ها برای خرید تجهیزات فاکتور رسمی می‌خواهند.
              </li>
            </ul>
            <h2 id="torob">ترب: از تنوع تا گارانتی</h2>
            <p>
              در کالای دیجیتال یک مدل معمولاً چند رنگ و چند حافظه دارد و قیمت هر کدام فرق می‌کند. نکس‌کارت هر
              تنوع را در API ترب یک ردیف جدا با شناسه‌ی گروه مشترک می‌فرستد؛ پس ترب قیمت دقیق «آبی ۲۵۶ گیگ» را
              جدا از «مشکی ۱۲۸ گیگ» نشان می‌دهد و با لینک مستقیم، مشتری را به همان تنوع می‌آورد. متاتگ‌های
              قیمت، قیمت قبل از تخفیف، موجودی و گارانتی هم در HTML صفحه‌ی محصول هست.{" "}
              <Link href="/features/torob/">جزئیات اتصال به ترب</Link>
            </p>
            <h2 id="installments">خرید اقساطی با ترب‌پی</h2>
            <p>
              با فعال‌کردن ترب‌پی، گزینه‌ی «خرید اقساطی» فقط برای سبدهایی نمایش داده می‌شود که ترب‌پی برای آن
              مبلغ مجاز می‌داند. موجودی قبل از تسویه رزرو می‌شود، پس دو مشتری هم‌زمان آخرین گوشی را نمی‌خرند و
              اگر کالا تمام شده باشد، پول بدون هزینه برمی‌گردد.{" "}
              <Link href="/features/payment-gateway/">جزئیات درگاه و اقساط</Link>
            </p>
            <h2 id="theme">قالب مگامارکت</h2>
            <p>
              فروشگاه دیجیتال معمولاً دسته‌های زیاد (موبایل، لپ‌تاپ، هدفون، لوازم جانبی...) و محصولات زیاد
              دارد. قالب مگامارکت برای همین ساخته شده است: نوار رنگی با جستجوی بزرگ، مگامنو برای دسته‌ها، نوار
              پیشنهاد شگفت‌انگیز و گرید متراکم پنج‌ستونه که کالای بیشتری را در یک نگاه نشان می‌دهد.
            </p>
            <h2 id="b2b">فاکتور رسمی برای خریدار شرکتی</h2>
            <p>
              خریدار حقوقی موقع پرداخت شناسه‌ی ملی و کد اقتصادی را وارد می‌کند و تو از پنل{" "}
              <Link href="/features/invoice/">فاکتور رسمی</Link> با شماره‌ی ترتیبی و مبلغ به حروف صادر می‌کنی.
            </p>
            <h2 id="checklist">چک‌لیست شروع</h2>
            <ol className="numbered">
              <li>
                <strong>دسته‌بندی دقیق</strong> دسته‌ها را بر اساس نوع کالا و برند بساز؛ مشتری دیجیتال با برند
                و مدل جستجو می‌کند.
              </li>
              <li>
                <strong>نام کامل محصول</strong> برند، مدل، حافظه و رنگ در نام یا تنوع؛ همان چیزی که مشتری در
                گوگل و ترب تایپ می‌کند.
              </li>
              <li>
                <strong>مشخصات فنی کامل</strong> در بخش مشخصات محصول، به‌صورت فهرست.
              </li>
              <li>
                <strong>گارانتی</strong> نوع و مدت گارانتی را برای هر محصول وارد کن.
              </li>
              <li>
                <strong>ثبت در ترب</strong> بعد از واردکردن محصولات، آدرس API را برای ترب بفرست.
              </li>
            </ol>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#buyer">خریدار کالای دیجیتال چطور خرید می‌کند؟</a>
              </li>
              <li>
                <a href="#torob">ترب: از تنوع تا گارانتی</a>
              </li>
              <li>
                <a href="#installments">خرید اقساطی با ترب‌پی</a>
              </li>
              <li>
                <a href="#theme">قالب مگامارکت</a>
              </li>
              <li>
                <a href="#b2b">فاکتور رسمی برای خریدار شرکتی</a>
              </li>
              <li>
                <a href="#checklist">چک‌لیست شروع</a>
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
            <h2 id="related-h">برای فروشگاه دیجیتال ببین</h2>
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
            <Link className="card reveal" href="/features/invoice/">
              <span className="card__ic ic-violet">
                <Icon name="file-invoice" />
              </span>
              <h3>فاکتور رسمی</h3>
              <p>صدور فاکتور رسمی با شماره‌ی ترتیبی، ابطال و صدور مجدد، و رسید فروش.</p>
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
