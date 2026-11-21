import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-product-management";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">کاتالوگ محصول</span>
            <h1>مدیریت محصولات فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              محصولات را با چند عکس، توضیح کوتاه و بلند، مشخصات، قیمت و موجودی وارد کن. برای کالایی که رنگ یا
              سایز دارد، هر تنوع موجودی، قیمت و SKU خودش را دارد.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                در همه‌ی پلن‌ها؛ شروع تا ۲۰۰، رشد تا ۲٬۰۰۰ و حرفه‌ای محصول نامحدود ·{" "}
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
                <Icon name="box" /> تنوع‌های محصول
              </p>
              <div className="table-wrap" style={{ boxShadow: "none" }}>
                <table className="table" style={{ minWidth: "0", fontSize: "12.5px" }}>
                  <thead>
                    <tr>
                      <th>تنوع</th>
                      <th>SKU</th>
                      <th>موجودی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>سرمه‌ای / ۴۲</td>
                      <td className="ltr">
                        <span className="en">RN-42-NV</span>
                      </td>
                      <td>۶</td>
                    </tr>
                    <tr>
                      <td>سرمه‌ای / ۴۳</td>
                      <td className="ltr">
                        <span className="en">RN-43-NV</span>
                      </td>
                      <td>۲</td>
                    </tr>
                    <tr>
                      <td>مشکی / ۴۳</td>
                      <td className="ltr">
                        <span className="en">RN-43-BK</span>
                      </td>
                      <td>۰</td>
                    </tr>
                  </tbody>
                </table>
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
                در نکس‌کارت هر محصول چند تصویر، توضیح کوتاه و بلند، مشخصات، قیمت و موجودی دارد. تنوع‌ها (رنگ،
                سایز و...) موجودی، قیمت و SKU جدا دارند. محصولات در دسته‌بندی درختی و زیر برندها سازمان‌دهی
                می‌شوند و نظرات و پرسش‌وپاسخ مشتری‌ها زیر هر محصول نمایش داده می‌شود.
              </p>
            </div>
            <h2 id="product">اطلاعات هر محصول</h2>
            <ul>
              <li>
                <strong>چند تصویر</strong> برای گالری صفحه‌ی محصول.
              </li>
              <li>
                <strong>توضیح کوتاه و بلند</strong> و <strong>مشخصات</strong> (ویژگی‌ها) که در تب جدا نمایش
                داده می‌شوند.
              </li>
              <li>
                <strong>قیمت، قیمت قبل از تخفیف و موجودی.</strong>
              </li>
              <li>
                <strong>عنوان و توضیحات سئو</strong> با امتیاز سئو و پیش‌نمایش گوگل (
                <Link href="/features/seo/">ابزارهای سئو</Link>).
              </li>
            </ul>
            <h2 id="variants">تنوع محصول: رنگ، سایز و بیشتر</h2>
            <p>برای پوشاک، کفش، موبایل و هر کالایی که مدل‌های مختلف دارد، تنوع تعریف کن. هر تنوع:</p>
            <ul>
              <li>موجودی جدا دارد؛ وقتی سایز ۴۳ تمام شود، بقیه‌ی سایزها همچنان قابل خرید است.</li>
              <li>SKU (کد کالا) جدا دارد که در سفارش و انبار به کار می‌آید.</li>
              <li>در سفارش با نام کامل (مثلاً «رنگ: قرمز / سایز: L») ثبت می‌شود.</li>
              <li>با لغو سفارش، موجودی به همان تنوع برمی‌گردد.</li>
              <li>لینک مستقیم دارد و در ترب هم جدا نمایش داده می‌شود.</li>
            </ul>
            <h2 id="catalog">دسته‌بندی درختی و برند</h2>
            <p>
              دسته‌ها را چندسطحی بساز (مثلاً پوشاک ← مردانه ← تی‌شرت). هر دسته صفحه‌ی خودش را در فروشگاه دارد
              و می‌تواند عنوان و توضیحات سئوی جدا بگیرد. برندها را هم تعریف کن تا برند روی محصول نمایش داده
              شود و در رویدادهای فروش بتوانی تخفیف را فقط روی یک برند بگذاری.
            </p>
            <h2 id="social-proof">نظر، امتیاز و پرسش‌وپاسخ</h2>
            <ul>
              <li>
                <strong>نظر و امتیاز:</strong> مشتری‌ها به محصول امتیاز می‌دهند و نظر می‌نویسند؛ قبل از نمایش،
                تو تأیید می‌کنی.
              </li>
              <li>
                <strong>پرسش‌وپاسخ:</strong> مشتری زیر محصول سؤال می‌پرسد و تو از پنل جواب می‌دهی. جواب‌ها
                برای همه‌ی بازدیدکننده‌ها نمایش داده می‌شود و سؤال‌های تکراری کم می‌شود.
              </li>
            </ul>
            <h2 id="merch">نمایش محصول در صفحه‌ی اصلی</h2>
            <p>
              با صفحه‌ساز صفحه‌ی اصلی، اسلایدر و بنرهای سفارشی (تصویر، عنوان و لینک دلخواه)، دسته‌های منتخب و
              محصولات ویژه را می‌چینی. صفحه‌های محتوایی مثل درباره ما، تماس و قوانین هم از همین پنل مدیریت
              می‌شوند.
            </p>
            <h2 id="digital-files">کالای فایلی (دانلودی)</h2>
            <p>
              اگر کتاب، جزوه، طرح، فونت، صوت یا ویدیو می‌فروشی، محصول را از نوع «فایلی» بساز. فایل‌ها داخل
              فضای خصوصی سرور ذخیره می‌شوند، نه پوشه‌ی عمومی عکس‌ها، و فقط خریدار با لینک اختصاصی می‌تواند
              دانلودشان کند.
            </p>
            <ul>
              <li>
                <strong>تحویل بعد از پرداخت:</strong> با پرداخت آنلاین موفق، لینک صفحه‌ی دانلود همان لحظه با
                پیامک برای خریدار می‌رود. برای سفارش دستی یا کارت‌به‌کارت، دانلود وقتی باز می‌شود که وضعیت
                سفارش را «در حال پردازش» یا جلوتر ببری. سفارش لغوشده هیچ‌وقت دانلود ندارد.
              </li>
              <li>
                <strong>سقف دفعات و مدت اعتبار:</strong> برای هر محصول تعیین می‌کنی هر فایل چند بار و تا چند
                روز قابل دانلود باشد. اگر مشتری دانلودش نیمه‌کاره ماند و ادامه داد، دوباره شمرده نمی‌شود، و
                می‌توانی شمارش را از جزئیات سفارش صفر کنی.
              </li>
              <li>
                <strong>بدون ارسال و موجودی:</strong> سفارشی که همه‌ی اقلامش فایلی باشد آدرس و روش ارسال
                نمی‌خواهد، هزینه‌ی ارسالش صفر است و محصول فایلی هرگز «ناموجود» نمی‌شود.
              </li>
              <li>
                <strong>محدودیت‌ها:</strong> به‌صورت پیش‌فرض هر فایل تا ۲۰۰ مگابایت؛ فقط سند، کتاب، فشرده، صوت
                و ویدیو، طراحی و فونت پذیرفته می‌شود و فایل اجرایی یا HTML آپلود نمی‌شود.
              </li>
            </ul>
            <h2 id="stock-control">کنترل موجودی: فروش کالای تمام‌شده را متوقف کن</h2>
            <p>موجودی فقط عدد روی صفحه نیست؛ نکس‌کارت جلوی فروش کالای تمام‌شده را در همه‌ی راه‌ها می‌گیرد:</p>
            <ul>
              <li>
                <strong>رزرو هنگام ثبت سفارش:</strong> با ثبت سفارشِ پرداخت آنلاین، موجودی همان لحظه رزرو
                می‌شود. اگر دو مشتری هم‌زمان آخرین عدد را بخرند، دومی با پیام «موجودی تمام شد» روبه‌رو می‌شود
                و موجودی منفی نمی‌شود.
              </li>
              <li>
                <strong>آزادسازی خودکار:</strong> اگر پرداخت لغو یا رها شود، موجودی رزروشده پس از حدود ۳۰
                دقیقه به انبار برمی‌گردد.
              </li>
              <li>
                <strong>محصول تنوع‌دار:</strong> موجودی محصول برابر جمع موجودی تنوع‌های فعال است و با هر فروش
                یا لغو هم‌گام می‌ماند.
              </li>
              <li>
                <strong>سبد خرید زنده:</strong> کالایی که وسط خرید تمام شود در سبد مشتری با برچسب «ناموجود شد»
                علامت می‌خورد و تعداد بیش از موجودی خودکار کم می‌شود.
              </li>
              <li>
                <strong>ویرایش سریع از فهرست:</strong> موجودی را بدون باز کردن فرم محصول عوض کن یا با «ناموجود
                کن» کالایی را که حضوری فروخته‌ای از فروش آنلاین خارج کن. برچسب‌های «ناموجود» و «رو‌به‌اتمام» و
                فیلترشان هم در فهرست هست.
              </li>
            </ul>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#product">اطلاعات هر محصول</a>
              </li>
              <li>
                <a href="#variants">تنوع محصول: رنگ، سایز و بیشتر</a>
              </li>
              <li>
                <a href="#catalog">دسته‌بندی درختی و برند</a>
              </li>
              <li>
                <a href="#social-proof">نظر، امتیاز و پرسش‌وپاسخ</a>
              </li>
              <li>
                <a href="#merch">نمایش محصول در صفحه‌ی اصلی</a>
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
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
