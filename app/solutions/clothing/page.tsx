import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/solutions-clothing";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner">
          <div>
            <span className="eyebrow">پوشاک، کیف و کفش</span>
            <h1>ساخت فروشگاه اینترنتی پوشاک</h1>
            <p className="page-hero__lead">
              فروش آنلاین لباس دو چالش اصلی دارد: مدیریت سایز و رنگ، و اعتماد مشتری به اندازه و کیفیت. این
              صفحه توضیح می‌دهد امکانات نکس‌کارت چطور به این دو کمک می‌کنند و برای شروع چه کارهایی لازم است.
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
            <div className="phone-mock">
              <div className="phone-mock__top"></div>
              <div className="pm2-img">
                <Icon name="shirt" />
                <span className="pm2-off">پاییزه</span>
              </div>
              <div className="pm2-swatch">
                <i className="on" style={{ background: "#1f3a8a" }}></i>
                <i style={{ background: "#7c2d12" }}></i>
                <i style={{ background: "#d6d3d1" }}></i>
              </div>
              <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
                <span className="tag">S</span>
                <span className="tag" style={{ background: "var(--brand)", color: "#fff" }}>
                  M
                </span>
                <span className="tag">L</span>
                <span className="tag tag--warn">XL · تمام شد</span>
              </div>
              <div className="pm2-price">
                <b>۱٬۲۶۰٬۰۰۰</b>
                <s>۱٬۵۸۰٬۰۰۰</s>
              </div>
              <div className="pm2-btn">
                <Icon name="shopping-bag" /> افزودن به سبد
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
                برای فروشگاه اینترنتی پوشاک در نکس‌کارت، هر لباس یک محصول با تنوع سایز و رنگ است که موجودی جدا
                دارد. قالب بوتیک برای نمایش عکس لباس طراحی شده، رویدادهای فروش برای حراج‌های فصلی و چت آنلاین
                برای سؤال‌های سایز به کار می‌آیند.
              </p>
            </div>
            <h2 id="challenges">چالش‌های فروش آنلاین لباس</h2>
            <ul>
              <li>
                <strong>سایز و رنگ:</strong> یک مدل لباس می‌تواند ده‌ها ترکیب داشته باشد که هر کدام موجودی جدا
                دارند. اگر موجودی دقیق نباشد، سفارشی ثبت می‌شود که قابل ارسال نیست.
              </li>
              <li>
                <strong>اعتماد به اندازه و جنس:</strong> مشتری لباس را لمس نمی‌کند؛ عکس خوب، جدول سایز و جواب
                سریع به سؤال‌ها جای پرو را می‌گیرد.
              </li>
              <li>
                <strong>فصلی بودن:</strong> کالکشن‌ها عوض می‌شوند و حراج پایان فصل بخش مهمی از فروش است.
              </li>
              <li>
                <strong>مرجوعی و تعویض:</strong> سیاست تعویض سایز باید روشن و قبل از خرید قابل دیدن باشد.
              </li>
            </ul>
            <h2 id="variants">مدیریت سایز و رنگ</h2>
            <p>
              در نکس‌کارت هر مدل لباس یک محصول است و سایز و رنگ تنوع‌های آن. هر تنوع موجودی، قیمت و SKU خودش
              را دارد؛ وقتی سایز M تمام شود، فقط همان ترکیب غیرقابل خرید می‌شود. با لغو سفارش، موجودی دقیقاً
              به همان سایز و رنگ برمی‌گردد. در جزئیات سفارش هم تنوع انتخاب‌شده با عکس نمایش داده می‌شود، پس در
              بسته‌بندی اشتباه کمتری پیش می‌آید.
            </p>
            <p>
              هر تنوع لینک مستقیم دارد؛ مثلاً می‌توانی لینک «مانتو سرمه‌ای سایز ۳۸» را در استوری یا پیام‌رسان
              بفرستی و مشتری همان را انتخاب‌شده ببیند.{" "}
              <Link href="/features/product-management/">جزئیات مدیریت محصول</Link>
            </p>
            <h2 id="theme">قالب بوتیک برای پوشاک</h2>
            <p>قالب بوتیک برای برندهای لباس، کیف و کفش طراحی شده است:</p>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="photo" /> <span>عکس محصول با نسبت ۴:۵ که برای عکس مدل و لباس مناسب است</span>
              </li>
              <li>
                <Icon name="hand-click" /> <span>نمایش عکس دوم (پشت لباس یا عکس روی مدل) هنگام hover</span>
              </li>
              <li>
                <Icon name="layout-navbar" /> <span>لوگو در وسط هدر و تصویر تمام‌عرض در صفحه‌ی اصلی</span>
              </li>
              <li>
                <Icon name="columns" /> <span>صفحه‌ی محصول دوستونه با فضای خالی بیشتر</span>
              </li>
            </ul>
            <p>
              رنگ برند، فونت و گوشه‌ها را با پیش‌نمایش زنده تنظیم می‌کنی.{" "}
              <Link href="/features/themes/">مقایسه‌ی قالب‌ها</Link>
            </p>
            <h2 id="photos">عکس و توضیح محصول لباس</h2>
            <ol className="numbered">
              <li>
                <strong>چند زاویه</strong> جلو، پشت، جزئیات دوخت یا جنس، و یک عکس روی مدل.
              </li>
              <li>
                <strong>نور و پس‌زمینه‌ی یکدست</strong> برای همه‌ی محصولات؛ فروشگاه مرتب‌تر و حرفه‌ای‌تر دیده
                می‌شود.
              </li>
              <li>
                <strong>جدول سایز با سانتی‌متر</strong> نه فقط S و M؛ اندازه‌ی قد مدل و سایزی که پوشیده را هم
                بنویس.
              </li>
              <li>
                <strong>جنس و نگهداری</strong> درصد الیاف و دستور شستشو را در مشخصات محصول بیاور.
              </li>
              <li>
                <strong>متن جایگزین تصویر</strong> برای هر عکس یک توضیح کوتاه بنویس؛ هم برای دسترس‌پذیری و هم
                برای سئو.
              </li>
            </ol>
            <h2 id="sales">حراج فصلی و مشتری وفادار</h2>
            <p>
              با <Link href="/features/discounts-loyalty/">رویدادهای فروش</Link>، حراج پایان فصل را برای یک
              دسته (مثلاً «زمستانه») یا یک برند در بازه‌ی مشخص اجرا کن؛ برچسب «حراج» روی کارت محصول می‌نشیند و
              بعد از پایان، قیمت‌ها خودکار برمی‌گردند. باشگاه مشتریان هم برای خرید دوباره‌ی مشتری‌های لباس که
              معمولاً هر فصل برمی‌گردند، مفید است.
            </p>
            <h2 id="trust">اعتماد و مرجوعی</h2>
            <ul>
              <li>شرایط تعویض و مرجوعی را در یک صفحه‌ی محتوایی بنویس و از توضیحات محصول به آن لینک بده.</li>
              <li>
                نظر و امتیاز مشتری‌ها (با تأیید تو) زیر محصول نمایش داده می‌شود؛ برای لباس، نظر درباره‌ی سایز
                خیلی ارزشمند است.
              </li>
              <li>
                <Link href="/features/live-chat/">چت آنلاین</Link> را فعال کن؛ «این سایز به من می‌خوره؟»
                پرتکرارترین سؤال فروشگاه لباس است.
              </li>
            </ul>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#challenges">چالش‌های فروش آنلاین لباس</a>
              </li>
              <li>
                <a href="#variants">مدیریت سایز و رنگ</a>
              </li>
              <li>
                <a href="#theme">قالب بوتیک برای پوشاک</a>
              </li>
              <li>
                <a href="#photos">عکس و توضیح محصول لباس</a>
              </li>
              <li>
                <a href="#sales">حراج فصلی و مشتری وفادار</a>
              </li>
              <li>
                <a href="#trust">اعتماد و مرجوعی</a>
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
            <h2 id="related-h">برای فروشگاه پوشاک ببین</h2>
          </div>
          <div className="cards">
            <Link className="card reveal" href="/features/themes/">
              <span className="card__ic ic-violet">
                <Icon name="palette" />
              </span>
              <h3>قالب‌های فروشگاه</h3>
              <p>سه قالب که هر کدام مثل یک سایت جداست، با پیش‌نمایش زنده و شخصی‌سازی.</p>
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
            <Link className="card reveal" href="/features/product-management/">
              <span className="card__ic ic-blue">
                <Icon name="box" />
              </span>
              <h3>مدیریت محصولات</h3>
              <p>تنوع رنگ و سایز با موجودی و SKU جدا، دسته‌بندی درختی، برند، نظرات و پرسش‌وپاسخ.</p>
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
