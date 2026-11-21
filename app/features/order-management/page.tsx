import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-order-management";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">سفارش و ارسال</span>
            <h1>مدیریت سفارش‌های فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              از لحظه‌ی پرداخت تا تحویل مرسوله: فروشنده پیامک سفارش جدید می‌گیرد، جزئیات کامل هر قلم را
              می‌بیند، کد رهگیری ثبت می‌کند و مشتری در هر مرحله باخبر می‌شود.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                در همه‌ی پلن‌ها؛ پیامک گروهی به مشتریان از پلن رشد ·{" "}
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
                <Icon name="shopping-cart" /> سفارش #۱۲۴۸
              </p>
              <div className="mk__row">
                <span>
                  کفش رانینگ · رنگ: سرمه‌ای / سایز: ۴۳
                  <br />
                  <span className="mk__muted">
                    SKU: <span className="en">RN-43-NV</span>
                  </span>
                </span>
                <b>۱٬۸۰۰٬۰۰۰</b>
              </div>
              <div className="mk__row">
                <span>کوپن</span>
                <span>−۱۰۰٬۰۰۰</span>
              </div>
              <div className="mk__row">
                <span>ارسال</span>
                <span>۶۰٬۰۰۰</span>
              </div>
              <div className="mk__row">
                <span>درگاه · کد پیگیری</span>
                <span className="ltr mk__muted">
                  <span className="en">ZP-58213</span>
                </span>
              </div>
              <div className="mk__row">
                <span>مشتری</span>
                <span className="mk__muted">۳ سفارش قبلی</span>
              </div>
              <div className="mk__row">
                <span>کد رهگیری پست</span>
                <span className="status">
                  <Icon name="truck-delivery" /> ثبت شد
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
                در نکس‌کارت هر سفارش قطعی برای حداکثر سه شماره‌ی فروشنده پیامک می‌شود. جزئیات سفارش شامل عکس،
                تنوع، SKU، قیمت واحد، ریز مبلغ (کالا، کوپن، مالیات، ارسال، امتیاز)، درگاه و کد پیگیری پرداخت و
                سابقه‌ی خرید مشتری است. کد رهگیری مرسوله را ثبت می‌کنی و مشتری باخبر می‌شود.
              </p>
            </div>
            <h2 id="sms">پیامک سفارش جدید به فروشنده</h2>
            <p>
              در «تنظیمات ← فروشگاه ← پیامک سفارش جدید» تا سه شماره وارد می‌کنی (یا با یک دکمه شماره‌ی حساب
              خودت را می‌گذاری) و یک پیامک تست می‌فرستی.
            </p>
            <ul>
              <li>
                سفارش <strong>پرداخت در محل</strong>: پیامک همان لحظه‌ی ثبت سفارش.
              </li>
              <li>
                سفارش <strong>پرداخت آنلاین</strong>: پیامک فقط بعد از پرداخت موفق.
              </li>
            </ul>
            <p>
              به این ترتیب گوشی‌ات با سفارش‌های رهاشده یا پرداخت‌های ناموفق شلوغ نمی‌شود و هر پیامک یعنی یک
              سفارش واقعی.
            </p>
            <h2 id="details">جزئیات کامل هر سفارش</h2>
            <p>با باز کردن یک سفارش، همه‌چیز را در یک نگاه می‌بینی:</p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="photo" /> <span>عکس هر قلم و تنوع انتخابی (مثلاً رنگ: قرمز / سایز: L)</span>
              </li>
              <li>
                <Icon name="barcode" /> <span>SKU، برند و دسته، قیمت واحد و جمع ردیف</span>
              </li>
              <li>
                <Icon name="receipt" /> <span>ریز مبلغ: جمع کالا، کوپن، مالیات، ارسال و امتیاز باشگاه</span>
              </li>
              <li>
                <Icon name="credit-card" /> <span>درگاه پرداخت و کد پیگیری تراکنش</span>
              </li>
              <li>
                <Icon name="user" /> <span>تعداد سفارش‌های قبلی و جمع خرید مشتری</span>
              </li>
              <li>
                <Icon name="external-link" /> <span>لینک مستقیم به صفحه‌ی محصول در فروشگاه</span>
              </li>
            </ul>
            <p>
              در فهرست سفارش‌ها هم عکس و نام اولین کالا با تنوع انتخابی نمایش داده می‌شود تا بدون باز کردن
              سفارش بفهمی چه چیزی سفارش داده شده است.
            </p>
            <h2 id="shipping">ارسال و کد رهگیری</h2>
            <p>
              وضعیت سفارش را مرحله‌به‌مرحله جلو می‌بری و کد رهگیری مرسوله را ثبت می‌کنی؛ مشتری با پیامک خبردار
              می‌شود. هزینه‌ی ارسال و ارسال رایگان در ریز مبلغ سفارش جدا دیده می‌شود.
            </p>
            <h2 id="cancel">لغو سفارش و موجودی</h2>
            <p>
              با لغو سفارش، موجودی به همان تنوعی برمی‌گردد که خریداری شده بود. برای سفارش‌های ترب‌پی، لغو باعث
              درخواست بازپرداخت خودکار می‌شود و اگر ترب‌پی آن را رد کند، سفارش لغو نمی‌شود تا وضعیت پول و
              سفارش ناهمخوان نشود. اگر فاکتور رسمی صادر شده باشد، خودکار باطل می‌شود.
            </p>
            <h2 id="customer">تجربه‌ی مشتری بعد از خرید</h2>
            <ul>
              <li>
                در «سفارش‌های من» فقط سفارش‌های واقعی دیده می‌شوند؛ پرداخت‌های ناموفق آنلاین فهرست را شلوغ
                نمی‌کنند.
              </li>
              <li>رسید فروش با لینک امن از «سفارش‌های من»، صفحه‌ی نتیجه‌ی پرداخت و پیامک در دسترس است.</li>
              <li>
                اگر سؤالی داشته باشد، از <Link href="/features/live-chat/">چت آنلاین فروشگاه</Link> مستقیم با
                تو صحبت می‌کند.
              </li>
            </ul>
            <h2 id="cod-shipping">پس‌کرایه: هزینه‌ی ارسال هنگام تحویل</h2>
            <p>
              خیلی از فروشنده‌ها هزینه‌ی ارسال را همراه کالا نمی‌گیرند و مشتری آن را درب منزل به پیک یا پست
              می‌دهد. برای این حالت یک نوع روش ارسال جدا به نام «پس‌کرایه» داریم.
            </p>
            <ul>
              <li>
                <strong>در تسویه شفاف است:</strong> هزینه‌ی آنلاین صفر است ولی با برچسب «پس‌کرایه» نشان داده
                می‌شود، نه «رایگان»، و زیر مبلغ نوشته می‌شود که هزینه‌ی ارسال هنگام تحویل جدا گرفته می‌شود.
              </li>
              <li>
                <strong>توضیح اختصاصی:</strong> می‌توانی تخمین را بنویسی، مثلاً «حدود ۸۰ هزار تومان هنگام
                تحویل».
              </li>
              <li>
                <strong>در فاکتور و جزئیات سفارش:</strong> فاکتور رسمی، رسید فروش و صفحه‌ی جزئیات سفارش ردیف
                «هزینه‌ی ارسال: پس‌کرایه — هنگام تحویل» را دارند، پس بعداً بین تو و مشتری سوءتفاهم پیش
                نمی‌آید.
              </li>
            </ul>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                <strong>نکته:</strong> اگر روشی با نوع «هزینه‌ی ثابت» و مبلغ صفر بسازی، مشتری آن را «رایگان»
                می‌بیند. برای ارسال با پس‌کرایه حتماً نوع «پس‌کرایه» را انتخاب کن؛ پنل هم در این مورد هشدار
                می‌دهد.
              </div>
            </div>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#sms">پیامک سفارش جدید به فروشنده</a>
              </li>
              <li>
                <a href="#details">جزئیات کامل هر سفارش</a>
              </li>
              <li>
                <a href="#shipping">ارسال و کد رهگیری</a>
              </li>
              <li>
                <a href="#cancel">لغو سفارش و موجودی</a>
              </li>
              <li>
                <a href="#customer">تجربه‌ی مشتری بعد از خرید</a>
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
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
