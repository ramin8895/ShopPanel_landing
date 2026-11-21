import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/features-themes";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">ظاهر فروشگاه</span>
            <h1>قالب‌های فروشگاه اینترنتی در نکس‌کارت</h1>
            <p className="page-hero__lead">
              نکس‌کارت سه قالب فروشگاه دارد: کلاسیک، بوتیک و مگامارکت. هر قالب هدر، کارت محصول، صفحه‌ی اصلی و
              صفحه‌ی محصول خودش را دارد، پس واقعاً مثل یک سایت جدا به نظر می‌رسد. سبد خرید، پرداخت و سئو در هر
              سه یکسان و آزموده است.
            </p>
            <p className="plan-note">
              <Icon name="tag" />{" "}
              <span>
                قالب کلاسیک در همه‌ی پلن‌ها؛ هر سه قالب و شخصی‌سازی کامل از پلن رشد ·{" "}
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
            <div
              className="themes"
              style={{ gridTemplateColumns: "repeat(3,minmax(0,1fr))", overflow: "visible" }}
            >
              <div className="theme" style={{ padding: "8px" }}>
                <div className="theme__frame th-classic">
                  <div className="th-bar">
                    <span className="th-logo"></span>
                    <span className="th-dots">
                      <i></i>
                      <i></i>
                    </span>
                  </div>
                  <div className="th-hero"></div>
                  <div className="th-grid">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <div className="theme" style={{ padding: "8px", transform: "translateY(-14px)" }}>
                <div className="theme__frame th-boutique">
                  <div className="th-bar">
                    <span className="th-dots">
                      <i></i>
                    </span>
                    <span className="th-logo"></span>
                    <span></span>
                  </div>
                  <div className="th-hero"></div>
                  <div className="th-grid">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <div className="theme" style={{ padding: "8px" }}>
                <div className="theme__frame th-mega">
                  <div className="th-top">
                    <span className="th-logo"></span>
                    <span className="th-search"></span>
                  </div>
                  <div className="th-deal"></div>
                  <div className="th-grid">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
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
                کلاسیک برای بیشتر فروشگاه‌ها، بوتیک برای پوشاک و زیبایی، مگامارکت برای کالای دیجیتال و
                سوپرمارکت. رنگ، فونت، گوشه‌ها، سبک هدر، سبک کارت و حالت تیره قابل تنظیم است و تغییرات قبل از
                انتشار در پیش‌نمایش زنده دیده می‌شوند.
              </p>
            </div>
            <h2 id="three">سه قالب، سه حس متفاوت</h2>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: سه قالب، سه حس متفاوت (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">قالب</th>
                    <th scope="col">مناسب برای</th>
                    <th scope="col">ویژگی‌های متمایز</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>کلاسیک</td>
                    <td>همه‌منظوره</td>
                    <td>ظاهر آشنا و متعادل؛ همان ظاهری که فروشگاه‌های فعلی نکس‌کارت دارند</td>
                  </tr>
                  <tr>
                    <td>بوتیک</td>
                    <td>پوشاک، کیف و کفش، آرایشی، اکسسوری</td>
                    <td>
                      لوگو در وسط هدر، تصویر تمام‌عرض در صفحه‌ی اصلی، عکس محصول ۴:۵ با نمایش عکس دوم هنگام
                      hover، کارت‌های بدون قاب، صفحه‌ی محصول دوستونه و فونت وزیرمتن
                    </td>
                  </tr>
                  <tr>
                    <td>مگامارکت</td>
                    <td>موبایل و دیجیتال، سوپرمارکت، فروشگاه‌های چنددسته</td>
                    <td>نوار رنگی با جستجوی بزرگ، مگامنو، نوار پیشنهاد شگفت‌انگیز و گرید متراکم پنج‌ستونه</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="customize">شخصی‌سازی بدون کدنویسی</h2>
            <p>از «تنظیمات ← ظاهر و تم» این موارد را تغییر می‌دهی:</p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="color-swatch" />{" "}
                <span>
                  <strong>رنگ برند:</strong> از رنگ‌های آماده یا رنگ دلخواه، با هشدار وقتی کنتراست متن کافی
                  نیست
                </span>
              </li>
              <li>
                <Icon name="typography" />{" "}
                <span>
                  <strong>فونت</strong> از فهرست فونت‌های فارسی
                </span>
              </li>
              <li>
                <Icon name="border-radius" />{" "}
                <span>
                  <strong>گردی گوشه‌ها</strong> برای دکمه‌ها و کارت‌ها
                </span>
              </li>
              <li>
                <Icon name="layout-navbar" />{" "}
                <span>
                  <strong>سبک هدر</strong> طبق گزینه‌های هر قالب
                </span>
              </li>
              <li>
                <Icon name="layout-cards" />{" "}
                <span>
                  <strong>سبک کارت محصول</strong>
                </span>
              </li>
              <li>
                <Icon name="moon" />{" "}
                <span>
                  <strong>دکمه‌ی حالت تیره</strong> برای مشتری‌ها
                </span>
              </li>
            </ul>
            <p>
              صفحه‌ساز صفحه‌ی اصلی (اسلایدر، بنرها، دسته‌ها، محصولات ویژه، پیشنهاد شگفت‌انگیز و...) در هر سه
              قالب کار می‌کند؛ بخش‌ها را جابه‌جا یا خاموش و روشن می‌کنی.
            </p>
            <h2 id="preview">پیش‌نمایش زنده و انتشار</h2>
            <ol className="numbered">
              <li>
                <strong>تغییر در پنل، دیدن در لحظه</strong> پیش‌نمایش فروشگاه کنار تنظیمات باز است و تغییرها
                بدون رفرش اعمال می‌شوند.
              </li>
              <li>
                <strong>پیش‌نمایش در تب جدید</strong> برای دیدن دقیق روی صفحه‌ی بزرگ یا گوشی، پیش‌نمایش را در
                تب جدید باز کن. این پیش‌نویس فقط برای خودت دیده می‌شود.
              </li>
              <li>
                <strong>انتشار تغییرات</strong> وقتی راضی بودی، «انتشار تغییرات» را بزن. بعد از حدود یک دقیقه
                همه‌ی مشتری‌ها ظاهر جدید را می‌بینند.
              </li>
            </ol>
            <div className="callout callout--ok">
              <Icon name="circle-check" />
              <div>
                <strong>بدون پرش رنگ:</strong> رنگ‌ها و تنظیمات قالب سمت سرور در صفحه نوشته می‌شوند، پس مشتری
                هنگام بارگذاری صفحه پرش رنگ یا چشمک ظاهر قدیمی را نمی‌بیند.
              </div>
            </div>
            <h2 id="shared">چه چیزی بین قالب‌ها مشترک است؟</h2>
            <p>
              منطق سبد خرید، پرداخت (زرین‌پال و ترب‌پی)، حساب کاربری، داده‌ی ساختاریافته، متاتگ‌های ترب و
              ترکینگ گوگل در هر سه قالب یکی است. یعنی با عوض کردن قالب، هیچ‌کدام از این‌ها خراب نمی‌شود و
              نیازی به تنظیم دوباره نیست.
            </p>
            <h2 id="choose">کدام قالب را انتخاب کنم؟</h2>
            <ul>
              <li>
                اگر تعداد محصولاتت کم تا متوسط است و عکس‌های خوبی داری، و ظاهر برند برایت مهم است:{" "}
                <strong>بوتیک</strong>. (بیشتر در{" "}
                <Link href="/solutions/clothing/">فروشگاه اینترنتی پوشاک</Link>)
              </li>
              <li>
                اگر محصولات زیاد و دسته‌های متنوع داری و مشتری با جستجو کالا پیدا می‌کند:{" "}
                <strong>مگامارکت</strong>. (بیشتر در{" "}
                <Link href="/solutions/digital-products/">فروشگاه کالای دیجیتال</Link>)
              </li>
              <li>
                اگر مطمئن نیستی: <strong>کلاسیک</strong>. هر وقت خواستی با چند کلیک عوضش کن.
              </li>
            </ul>
            <h2 id="deep-customize">شخصی‌سازی عمیق بدون کدنویسی</h2>
            <p>
              هر قالب شخصیت خودش را دارد و تا وقتی تنظیمی را عوض نکنی همان‌طور می‌ماند. هرجا خواستی، حدود ۴۵
              تنظیم در هفت بخش پنل در اختیارت است و تغییرها بدون رفرش در پیش‌نمایش زنده‌ی دسکتاپ و موبایل دیده
              می‌شوند:
            </p>
            <ul>
              <li>
                <strong>قالب و رنگ:</strong> رنگ برند، تُن پس‌زمینه، هدر و فوتر.
              </li>
              <li>
                <strong>فونت، شکل و دکمه:</strong> اندازه و ضخامت متن، گوشه‌ها (تیز تا گرد)، ضخامت کادر، سایه
                و سبک دکمه.
              </li>
              <li>
                <strong>چیدمان:</strong> تعداد ستون محصولات جدا برای دسکتاپ (۲ تا ۶)، تبلت (۲ تا ۴) و موبایل
                (۱ یا ۲)، فاصله‌ی کارت‌ها و عرض صفحه.
              </li>
              <li>
                <strong>کارت محصول:</strong> نسبت عکس، تراز متن، تعداد خط عنوان، دکمه‌ی افزودن به سبد، ستاره،
                نشان تخفیف و برند.
              </li>
              <li>
                <strong>هدر، فوتر و موبایل:</strong> هدر چسبان، جستجو، منوی دسته‌ها و نوار پایین موبایل.
              </li>
              <li>
                <strong>صفحه‌ی محصول:</strong> نوع گالری، نوار خرید چسبان و کالاهای مرتبط.
              </li>
              <li>
                <strong>پیشرفته:</strong> CSS دلخواه (فقط در پلن حرفه‌ای) و چهار سبک آماده برای شروع سریع.
              </li>
            </ul>
            <p>رنگ برند و لوگو در همه‌ی پلن‌ها آزاد است؛ شخصی‌سازی کامل از پلن رشد باز می‌شود.</p>
            <h2 id="boutique-redesign">قالب بوتیک: صفحه‌ی محصول ادیتوریال</h2>
            <p>
              قالب بوتیک برای پوشاک، لوازم تزئینی و هر کالایی که عکس‌هایش فروشنده است، بازطراحی شد: گالری
              ادیتوریال (عکس اول درشت و بقیه جفت‌جفت)، پنل خرید چسبان کنار گالری که قیمت، تنوع و سبد را در
              اولین نگاه نشان می‌دهد، و اسلایدر اسنپ با شمارنده در موبایل. انتخاب تنوع با نام رنگ و سایز مربعی
              انجام می‌شود، گزینه‌ی ناموجود خط می‌خورد و انتخاب هر تنوع گالری را به عکس همان تنوع می‌برد.
              صفحه‌ی دسته هم کاشی‌های عمودی زیردسته‌ها را با تعداد کالا نشان می‌دهد و کالاهای زیردسته‌ها در
              دسته‌ی والد هم دیده می‌شوند.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#three">سه قالب، سه حس متفاوت</a>
              </li>
              <li>
                <a href="#customize">شخصی‌سازی بدون کدنویسی</a>
              </li>
              <li>
                <a href="#preview">پیش‌نمایش زنده و انتشار</a>
              </li>
              <li>
                <a href="#shared">چه چیزی بین قالب‌ها مشترک است؟</a>
              </li>
              <li>
                <a href="#choose">کدام قالب را انتخاب کنم؟</a>
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
            <Link className="card reveal" href="/solutions/clothing/">
              <span className="card__ic ic-rose">
                <Icon name="shirt" />
              </span>
              <h3>فروشگاه اینترنتی پوشاک</h3>
              <p>سایز و رنگ با موجودی جدا، قالب بوتیک و رویدادهای فصلی برای فروشگاه لباس.</p>
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
            <Link className="card reveal" href="/features/discounts-loyalty/">
              <span className="card__ic ic-rose">
                <Icon name="rosette-discount" />
              </span>
              <h3>تخفیف و باشگاه مشتریان</h3>
              <p>تخفیف زمان‌دار بدون کد، کد تخفیف، شمارش معکوس و امتیاز وفاداری.</p>
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
