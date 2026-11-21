import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-online-store-cost";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">کسب‌وکار آنلاین</span>
            <h1>هزینه راه‌اندازی فروشگاه اینترنتی؛ برآورد تکه‌به‌تکه</h1>
            <p className="page-hero__lead">
              «ساخت سایت فروشگاهی چند درمیاد؟» سؤال درستی است، ولی هزینه‌ی واقعی شروع فروش آنلاین فقط سایت
              نیست. این مقاله همه‌ی هزینه‌ها را جدا می‌کند تا بتوانی بودجه‌ی خودت را حساب کنی.
            </p>
            <div className="page-hero__meta">
              <span>
                <Icon name="calendar" /> به‌روزرسانی: ۹ مهر ۱۴۰۵
              </span>
              <span>
                <Icon name="clock" /> زمان مطالعه: ۴ دقیقه
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
                هزینه‌ی راه‌اندازی فروشگاه اینترنتی از دو بخش تشکیل می‌شود: <strong>هزینه‌ی سایت</strong> (با
                فروشگاه‌ساز یک اشتراک ماهانه، با وردپرس یا طراحی اختصاصی هزینه‌ی اولیه به‌علاوه‌ی هاست و
                نگهداری) و <strong>هزینه‌های کسب‌وکار</strong> (دامنه، کارمزد درگاه، عکاسی، بسته‌بندی و
                تبلیغات). با فروشگاه‌ساز نکس‌کارت هزینه‌ی سایت از ۸۹۰ هزار تومان در ماه (پلن شروع) شروع می‌شود
                و هاست و SSL داخل آن است.
              </p>
            </div>
            <h2 id="parts">هزینه‌ها را دو دسته کن</h2>
            <p>
              بیشتر برآوردهایی که در اینترنت می‌بینی فقط هزینه‌ی طراحی سایت را حساب می‌کنند. ولی فروشگاهی که
              فروش ندارد، ارزان هم باشد گران است. برای برآورد واقعی، هزینه‌ها را این‌طور جدا کن:
            </p>
            <ul>
              <li>
                <strong>هزینه‌های سایت:</strong> ساخت، میزبانی، امنیت، نگهداری و تغییرات بعدی.
              </li>
              <li>
                <strong>هزینه‌های فروش:</strong> دامنه، اینماد، کارمزد درگاه، عکاسی، بسته‌بندی، ارسال و
                تبلیغات.
              </li>
            </ul>
            <p>
              دسته‌ی اول را با انتخاب روش ساخت کنترل می‌کنی؛ دسته‌ی دوم تقریباً در همه‌ی روش‌ها یکسان است.
            </p>
            <h2 id="site">۱. هزینه‌ی خود سایت</h2>
            <p>سه روش اصلی ساخت سایت فروشگاهی وجود دارد و ساختار هزینه‌ی هر کدام فرق می‌کند:</p>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="جدول: ۱. هزینه‌ی خود سایت (۱)">
              <table className="table table--wide">
                <thead>
                  <tr>
                    <th scope="col">بخش</th>
                    <th scope="col">فروشگاه‌ساز</th>
                    <th scope="col">وردپرس و ووکامرس</th>
                    <th scope="col">طراحی اختصاصی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>هزینه‌ی اولیه</td>
                    <td>ندارد</td>
                    <td>قالب، افزونه‌ها و معمولاً دستمزد طراح</td>
                    <td>بالا؛ طراحی و برنامه‌نویسی</td>
                  </tr>
                  <tr>
                    <td>هاست و SSL</td>
                    <td>داخل اشتراک</td>
                    <td>جدا، سالانه</td>
                    <td>جدا، سالانه</td>
                  </tr>
                  <tr>
                    <td>نگهداری و امنیت</td>
                    <td>با پلتفرم</td>
                    <td>با خودت یا پشتیبان</td>
                    <td>با برنامه‌نویس</td>
                  </tr>
                  <tr>
                    <td>تغییرات بعدی</td>
                    <td>خودت از پنل</td>
                    <td>خودت یا طراح</td>
                    <td>برنامه‌نویس</td>
                  </tr>
                  <tr>
                    <td>هزینه‌ی ماهانه</td>
                    <td>ثابت و قابل پیش‌بینی</td>
                    <td>متغیر</td>
                    <td>متغیر</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              نکس‌کارت سه پلن دارد: <strong>شروع</strong> ۸۹۰ هزار، <strong>رشد</strong> ۱٫۸ میلیون و{" "}
              <strong>حرفه‌ای</strong> ۳ میلیون تومان در ماه. با اشتراک سالانه حدود ۲۰٪ کمتر می‌پردازی؛ مثلاً
              پلن شروع سالانه ۸٬۵۲۰٬۰۰۰ تومان (۷۱۰ هزار تومان در ماه) است. هیچ پلنی کارمزد فروش ندارد. جزئیات
              در <Link href="/pricing/">صفحه‌ی قیمت</Link>. برای مقایسه‌ی کامل‌تر روش‌ها، مقاله‌ی{" "}
              <Link href="/blog/store-builder-vs-wordpress/">فروشگاه‌ساز یا وردپرس</Link> را بخوان.
            </p>
            <h2 id="domain">۲. دامنه</h2>
            <p>
              دامنه‌ی ‎.ir‎ ارزان‌ترین گزینه است و از ایرنیک یا نمایندگی‌هایش خریده می‌شود؛ دامنه‌های
              بین‌المللی مثل ‎.com‎ گران‌تر هستند و تمدید سالانه دارند. در نکس‌کارت می‌توانی بدون دامنه و با
              زیردامنه‌ی رایگان شروع کنی و بعداً <Link href="/features/custom-domain/">دامنه‌ی اختصاصی</Link>{" "}
              را وصل کنی.
            </p>
            <h2 id="enamad-gateway">۳. اینماد و درگاه پرداخت</h2>
            <ul>
              <li>
                <strong>اینماد:</strong> برای گرفتن درگاه معمولاً لازم است. مراحل و پیش‌نیازها در{" "}
                <Link href="/blog/enamad-guide/">راهنمای اینماد</Link> آمده است.
              </li>
              <li>
                <strong>درگاه:</strong> درگاه‌ها از تراکنش‌ها کارمزد می‌گیرند. این هزینه به حجم فروش وابسته
                است، نه به روش ساخت سایت. نکس‌کارت روی این کارمزد چیزی اضافه نمی‌کند.
              </li>
            </ul>
            <h2 id="content">۴. عکاسی و محتوای محصول</h2>
            <p>عکس محصول بیشترین اثر را روی فروش آنلاین دارد. دو مسیر داری:</p>
            <ul>
              <li>
                <strong>عکاسی خودت:</strong> با گوشی خوب، نور روز و پس‌زمینه‌ی یکدست؛ هزینه‌ی کم، زمان بیشتر.
              </li>
              <li>
                <strong>عکاس حرفه‌ای:</strong> معمولاً به ازای هر محصول یا هر روز کاری هزینه می‌گیرد. برای
                محصولات پرفروش و صفحه‌ی اصلی ارزشش را دارد.
              </li>
            </ul>
            <p>نوشتن توضیح دقیق، مشخصات و جدول سایز هم وقت می‌برد؛ آن را در برنامه‌ی هفته‌ی اول حساب کن.</p>
            <h2 id="ops">۵. بسته‌بندی و ارسال</h2>
            <p>
              کارتن، پاکت، برچسب و هزینه‌ی ارسال را برای هر سفارش حساب کن. تصمیم بگیر هزینه‌ی ارسال را مشتری
              بدهد یا بخشی از آن را خودت (مثلاً ارسال رایگان بالای یک مبلغ). در نکس‌کارت هزینه‌ی ارسال در سبد
              خرید محاسبه و در ریز مبلغ سفارش جدا نمایش داده می‌شود.
            </p>
            <h2 id="marketing">۶. جذب مشتری و تبلیغات</h2>
            <p>
              این بخش کاملاً به استراتژی تو بستگی دارد و می‌تواند از صفر تا بزرگ‌ترین هزینه‌ی کسب‌وکار باشد:
            </p>
            <ul>
              <li>
                <strong>رایگان یا کم‌هزینه:</strong> ثبت در <Link href="/features/torob/">ترب</Link>، سئو و
                وبلاگ فروشگاه، محتوای اینستاگرام.
              </li>
              <li>
                <strong>پولی:</strong> تبلیغ در اینستاگرام و پیج‌های دیگر، تبلیغات کلیکی، پیامک تبلیغاتی.
              </li>
            </ul>
            <p>
              توصیه‌ی عملی: در ماه‌های اول بخش بزرگ بودجه‌ی تبلیغات را نگه دار تا ببینی کدام کانال برای کالای
              تو جواب می‌دهد.
            </p>
            <h2 id="example">یک مثال: فروشگاه کوچک پوشاک</h2>
            <p>
              فرض کن یک فروشنده‌ی اینستاگرامی با ۳۰ محصول می‌خواهد فروشگاه اینترنتی راه بیندازد. ساختار
              هزینه‌ی سال اول او با نکس‌کارت این‌طور است:
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: یک مثال: فروشگاه کوچک پوشاک (۲)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">مورد</th>
                    <th scope="col">هزینه</th>
                    <th scope="col">توضیح</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>اشتراک سالانه‌ی نکس‌کارت (پلن شروع)</td>
                    <td>۸٬۵۲۰٬۰۰۰ تومان</td>
                    <td>شامل هاست، SSL و امکانات پلن شروع؛ با رشد فروش می‌توانی ارتقا بدهی</td>
                  </tr>
                  <tr>
                    <td>دامنه‌ی ‎.ir‎</td>
                    <td>طبق تعرفه‌ی ایرنیک</td>
                    <td>اختیاری؛ می‌تواند با زیردامنه شروع کند</td>
                  </tr>
                  <tr>
                    <td>اینماد</td>
                    <td>طبق تعرفه‌ی مرکز</td>
                    <td>پیش‌نیاز درگاه</td>
                  </tr>
                  <tr>
                    <td>کارمزد درگاه</td>
                    <td>درصدی از فروش</td>
                    <td>طبق قرارداد با درگاه</td>
                  </tr>
                  <tr>
                    <td>عکاسی</td>
                    <td>از صفر تا هزینه‌ی عکاس</td>
                    <td>بسته به روش</td>
                  </tr>
                  <tr>
                    <td>بسته‌بندی و ارسال</td>
                    <td>به ازای هر سفارش</td>
                    <td>بخشی از آن را مشتری می‌دهد</td>
                  </tr>
                  <tr>
                    <td>تبلیغات</td>
                    <td>به انتخاب خودش</td>
                    <td>بزرگ‌ترین متغیر</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              نکته‌ی مهم این مثال: هزینه‌ی سایت ثابت و از قبل مشخص است و بقیه‌ی هزینه‌ها یا اختیاری‌اند یا با
              فروش بالا می‌روند. این همان چیزی است که ریسک شروع را پایین نگه می‌دارد.
            </p>
            <h2 id="tips">چطور هزینه را پایین نگه داریم؟</h2>
            <ol className="numbered">
              <li>
                <strong>کوچک شروع کن</strong> با محصولات پرفروش شروع کن، نه کل انبار.
              </li>
              <li>
                <strong>قبل از سایت، کالا را تست کن</strong> اگر در اینستاگرام یا حضوری فروش داری، همان کالاها
                را اول آنلاین کن.
              </li>
              <li>
                <strong>اشتراک بلندمدت</strong> وقتی مطمئن شدی، اشتراک سالانه هزینه‌ی ماهانه را ۲۰٪ کم می‌کند.
              </li>
              <li>
                <strong>از کانال‌های رایگان غافل نشو</strong> ترب و سئو هزینه‌ی مستقیم ندارند و ورودی پایدار
                می‌سازند.
              </li>
            </ol>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                قیمت دامنه، اینماد و کارمزد درگاه‌ها را عمداً عدد ننوشته‌ایم، چون مرتب تغییر می‌کنند. قبل از
                برنامه‌ریزی، تعرفه‌ی روز را از منبع رسمی هر کدام بگیر.
              </div>
            </div>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#parts">هزینه‌ها را دو دسته کن</a>
              </li>
              <li>
                <a href="#site">۱. هزینه‌ی خود سایت</a>
              </li>
              <li>
                <a href="#domain">۲. دامنه</a>
              </li>
              <li>
                <a href="#enamad-gateway">۳. اینماد و درگاه پرداخت</a>
              </li>
              <li>
                <a href="#content">۴. عکاسی و محتوای محصول</a>
              </li>
              <li>
                <a href="#ops">۵. بسته‌بندی و ارسال</a>
              </li>
              <li>
                <a href="#marketing">۶. جذب مشتری و تبلیغات</a>
              </li>
              <li>
                <a href="#example">یک مثال: فروشگاه کوچک پوشاک</a>
              </li>
              <li>
                <a href="#tips">چطور هزینه را پایین نگه داریم؟</a>
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
            <Link className="card reveal" href="/pricing/">
              <span className="card__ic ic-green">
                <Icon name="receipt" />
              </span>
              <h3>قیمت فروشگاه‌ساز</h3>
              <p>سه پلن شروع، رشد و حرفه‌ای و مقایسه‌ی کامل امکانات.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
            <Link className="card reveal" href="/blog/store-builder-vs-wordpress/">
              <span className="card__ic ic-amber">
                <Icon name="scale" />
              </span>
              <h3>فروشگاه‌ساز یا وردپرس؟</h3>
              <p>مقایسه‌ی بی‌طرفانه‌ی فروشگاه‌ساز، وردپرس و ووکامرس و طراحی اختصاصی.</p>
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
