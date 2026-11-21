import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/create-online-store";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">راهنمای ساخت فروشگاه</span>
            <h1>ساخت فروشگاه اینترنتی: راهنمای قدم‌به‌قدم راه‌اندازی</h1>
            <p className="page-hero__lead">
              این صفحه توضیح می‌دهد برای راه‌اندازی فروشگاه اینترنتی در ایران به چه چیزهایی نیاز داری، چه
              روش‌هایی وجود دارد و ساخت فروشگاه آنلاین با فروشگاه‌ساز نکس‌کارت دقیقاً چه مراحلی دارد.
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
                برای ساخت فروشگاه اینترنتی به محصول و عکس، یک آدرس اینترنتی (دامنه)، فضای میزبانی (هاست) با
                گواهی SSL، درگاه پرداخت و معمولاً اینماد نیاز داری. ساده‌ترین مسیر استفاده از فروشگاه‌ساز است:
                در نکس‌کارت هاست و SSL داخل اشتراک است و فروشگاه از روز اول آماده‌ی فروش است؛ تو محصول را
                اضافه می‌کنی و درگاه خودت را وصل می‌کنی.
              </p>
            </div>
            <h2 id="what">فروشگاه اینترنتی چیست و به درد چه کسی می‌خورد؟</h2>
            <p>
              فروشگاه اینترنتی سایتی است که محصولاتت را با قیمت و موجودی نشان می‌دهد، سبد خرید و پرداخت آنلاین
              دارد و سفارش‌ها را برایت ثبت می‌کند. فرقش با فروش در دایرکت اینستاگرام یا پیام‌رسان این است که
              مشتری بدون منتظر ماندن برای جواب، خودش انتخاب و پرداخت می‌کند و تو یک فهرست مرتب از سفارش‌ها،
              مشتری‌ها و موجودی داری.
            </p>
            <p>این مدل برای این‌ها کاربردی است:</p>
            <ul>
              <li>
                <strong>مغازه‌ها و فروشگاه‌های فیزیکی</strong> که می‌خواهند بیرون از ساعت کاری و بیرون از شهر
                خودشان هم بفروشند.
              </li>
              <li>
                <strong>فروشنده‌های اینستاگرام و تلگرام</strong> که حجم پیام‌ها از کنترل خارج شده است.
                (راهنمای جدا:{" "}
                <Link href="/solutions/instagram-sellers/">سایت فروشگاهی برای پیج اینستاگرام</Link>)
              </li>
              <li>
                <strong>تولیدکننده‌ها و برندهای کوچک</strong> که می‌خواهند مستقیم به مصرف‌کننده بفروشند.
              </li>
              <li>
                <strong>عمده‌فروش‌ها</strong> که کاتالوگ مرتب و سفارش‌گیری منظم لازم دارند.
              </li>
            </ul>
            <h2 id="requirements">برای ساخت فروشگاه اینترنتی چه چیزهایی لازم است؟</h2>
            <p>
              فهرست زیر همه‌ی چیزهایی است که یک فروشگاه اینترنتی در ایران لازم دارد. ستون آخر نشان می‌دهد هر
              مورد در نکس‌کارت چطور تأمین می‌شود.
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: برای ساخت فروشگاه اینترنتی چه چیزهایی لازم است؟ (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">مورد</th>
                    <th scope="col">چرا لازم است</th>
                    <th scope="col">در نکس‌کارت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>محصول، عکس و توضیحات</td>
                    <td>مشتری فقط از روی عکس و متن تصمیم می‌گیرد</td>
                    <td>با تو؛ پنل برای هر محصول چند عکس، تنوع و مشخصات می‌پذیرد</td>
                  </tr>
                  <tr>
                    <td>دامنه</td>
                    <td>آدرس فروشگاه در اینترنت</td>
                    <td>
                      زیردامنه‌ی رایگان <span className="ltr">nexcart.ir</span> یا اتصال دامنه‌ی خودت
                    </td>
                  </tr>
                  <tr>
                    <td>هاست</td>
                    <td>جایی که فایل‌ها و اطلاعات فروشگاه روی آن اجرا می‌شود</td>
                    <td>داخل اشتراک؛ نیازی به خرید جدا نیست</td>
                  </tr>
                  <tr>
                    <td>گواهی SSL</td>
                    <td>اتصال امن (https) و اعتماد مشتری و گوگل</td>
                    <td>خودکار و رایگان، حتی برای دامنه‌ی اختصاصی</td>
                  </tr>
                  <tr>
                    <td>درگاه پرداخت</td>
                    <td>دریافت پول آنلاین از کارت بانکی مشتری</td>
                    <td>اتصال زرین‌پال و ترب‌پی به حساب خودت</td>
                  </tr>
                  <tr>
                    <td>اینماد</td>
                    <td>نماد اعتماد الکترونیکی؛ معمولاً پیش‌نیاز درگاه</td>
                    <td>
                      با تو؛ <Link href="/blog/enamad-guide/">راهنمای گرفتن اینماد</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>روش ارسال</td>
                    <td>پست، پیک یا تحویل حضوری و هزینه‌ی آن</td>
                    <td>تنظیم هزینه‌ی ارسال و ثبت کد رهگیری روی سفارش</td>
                  </tr>
                  <tr>
                    <td>صفحه‌های اعتمادساز</td>
                    <td>درباره ما، تماس، قوانین؛ برای مشتری و اینماد</td>
                    <td>مدیریت صفحه‌های محتوایی از پنل</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="methods">سه روش ساخت سایت فروشگاهی</h2>
            <p>
              هر فروشگاه اینترنتی به یکی از این سه روش ساخته می‌شود. هیچ‌کدام برای همه بهترین نیست؛ انتخاب به
              بودجه، زمان و نیاز فنی تو بستگی دارد.
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: سه روش ساخت سایت فروشگاهی (۲)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">روش</th>
                    <th scope="col">مناسب برای</th>
                    <th scope="col">نکته‌ی مهم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>طراحی اختصاصی (کدنویسی)</td>
                    <td>کسب‌وکارهای بزرگ با نیازهای خاص و تیم فنی</td>
                    <td>هزینه و زمان اولیه‌ی بالا؛ نگهداری مداوم لازم دارد</td>
                  </tr>
                  <tr>
                    <td>وردپرس و ووکامرس</td>
                    <td>کسی که با هاست و افزونه آشناست یا طراح دارد</td>
                    <td>انعطاف زیاد، ولی به‌روزرسانی، امنیت و سرعت با خودت است</td>
                  </tr>
                  <tr className="hl">
                    <td>فروشگاه‌ساز (مثل نکس‌کارت)</td>
                    <td>بیشتر فروشگاه‌های کوچک و متوسط</td>
                    <td>هزینه‌ی ماهانه‌ی ثابت؛ امکانات در اختیار پلتفرم است</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              مقایسه‌ی کامل و بی‌طرفانه‌ی این سه روش را در مقاله‌ی{" "}
              <Link href="/blog/store-builder-vs-wordpress/">فروشگاه‌ساز یا وردپرس؟</Link> خوانده‌ای؟ اگر نه،
              قبل از تصمیم یک نگاه بینداز.
            </p>
            <h2 id="steps">مراحل ساخت فروشگاه اینترنتی با نکس‌کارت</h2>
            <p>
              این هفت مرحله همان کاری است که بعد از ثبت‌نام در پنل نکس‌کارت انجام می‌دهی. ترتیب پیشنهادی است؛
              می‌توانی هر بخش را بعداً هم تغییر بدهی.
            </p>
            <ol className="numbered">
              <li>
                <strong>ثبت‌نام و انتخاب آدرس فروشگاه</strong> نام فروشگاه و زیردامنه (مثلاً{" "}
                <span className="ltr">myshop.nexcart.ir</span>) را انتخاب کن. فروشگاه همان لحظه ساخته می‌شود.
              </li>
              <li>
                <strong>انتخاب قالب و تنظیم ظاهر</strong> بین{" "}
                <Link href="/features/themes/">قالب‌های کلاسیک، بوتیک و مگامارکت</Link> یکی را انتخاب کن، رنگ
                برند، فونت و لوگو را با پیش‌نمایش زنده تنظیم کن و منتشر کن.
              </li>
              <li>
                <strong>تعریف دسته‌بندی و افزودن محصولات</strong> دسته‌بندی درختی و برندها را بساز، بعد
                محصولات را با عکس، قیمت، تنوع (رنگ، سایز) و موجودی وارد کن.{" "}
                <Link href="/features/product-management/">جزئیات مدیریت محصول</Link>
              </li>
              <li>
                <strong>تنظیم ارسال و مالیات</strong> هزینه‌ی ارسال و تنظیمات مالیات را مشخص کن تا مبلغ نهایی
                سبد درست محاسبه شود.
              </li>
              <li>
                <strong>اتصال درگاه پرداخت</strong> اطلاعات{" "}
                <Link href="/features/payment-gateway/">درگاه زرین‌پال</Link> را وارد کن. اگر ترب‌پی داری،
                خرید اقساطی را هم فعال کن. پرداخت در محل هم وجود دارد.
              </li>
              <li>
                <strong>تکمیل صفحه‌های اعتمادساز</strong> درباره ما، تماس با ما و قوانین فروشگاه را بنویس. این
                صفحه‌ها هم اعتماد مشتری را بالا می‌برند و هم در بررسی اینماد دیده می‌شوند.
              </li>
              <li>
                <strong>انتشار و معرفی به گوگل و ترب</strong>{" "}
                <Link href="/features/custom-domain/">دامنه‌ی اختصاصی</Link> را وصل کن، سرچ کنسول را متصل کن و
                آدرس API فروشگاه را برای <Link href="/features/torob/">اتصال به ترب</Link> بفرست.
              </li>
            </ol>
            <h2 id="domain-host">دامنه، هاست و SSL به زبان ساده</h2>
            <h3>دامنه چیست؟</h3>
            <p>
              دامنه آدرس فروشگاه در اینترنت است؛ مثل <span className="ltr">myshop.ir</span>. دامنه‌ی{" "}
              <span className="ltr">.ir</span> را از ایرنیک و دامنه‌های بین‌المللی (مثل{" "}
              <span className="ltr">.com</span>) را از ثبت‌کننده‌های خارجی یا نمایندگی‌هایشان می‌خری. اگر هنوز
              دامنه نداری، می‌توانی با زیردامنه‌ی رایگان نکس‌کارت شروع کنی و بعداً دامنه را وصل کنی.
            </p>
            <h3>هاست چیست؟</h3>
            <p>
              هاست سروری است که فروشگاه روی آن اجرا می‌شود. در طراحی اختصاصی یا وردپرس باید هاست بخری، تنظیمش
              کنی و نگرانش باشی. در فروشگاه‌ساز هاست بخشی از سرویس است و تو با آن سروکار نداری.
            </p>
            <h3>SSL چیست؟</h3>
            <p>
              SSL همان قفل کنار آدرس سایت است که اتصال را رمزنگاری می‌کند. بدون SSL مرورگرها سایت را «ناامن»
              نشان می‌دهند و درگاه‌های پرداخت هم آن را لازم دارند. در نکس‌کارت گواهی SSL خودکار صادر و تمدید
              می‌شود.
            </p>
            <h2 id="payment">درگاه پرداخت و اینماد</h2>
            <p>
              <strong>درگاه پرداخت</strong> واسطه‌ای است که پول را از کارت مشتری می‌گیرد و به حساب تو واریز
              می‌کند. در نکس‌کارت هر فروشنده درگاه خودش را وصل می‌کند، پس پول مستقیم به حساب خودش می‌رود و
              نکس‌کارت از فروش کارمزد برنمی‌دارد.
            </p>
            <p>
              <strong>اینماد</strong> نماد اعتماد الکترونیکی است که مرکز توسعه تجارت الکترونیکی صادر می‌کند.
              بیشتر درگاه‌های پرداخت و سرویس‌هایی مثل ترب‌پی آن را لازم دارند.
            </p>
            <div className="callout">
              <Icon name="info-circle" />
              <div>
                <strong>ترتیب پیشنهادی:</strong> اول فروشگاه را بساز و صفحه‌های درباره ما، تماس و قوانین را
                کامل کن؛ بعد اینماد را درخواست بده. ارزیاب اینماد سایت آماده و کامل می‌خواهد، نه یک صفحه‌ی
                خالی.
              </div>
            </div>
            <h2 id="manage">بعد از راه‌اندازی: مدیریت محصول و سفارش</h2>
            <p>کار اصلی بعد از راه‌اندازی، مدیریت روزانه است. در پنل نکس‌کارت:</p>
            <ul>
              <li>
                با ثبت هر سفارش قطعی (پرداخت‌شده یا پرداخت در محل)، پیامک سفارش جدید به حداکثر سه شماره‌ی
                فروشنده می‌رود.
              </li>
              <li>
                در جزئیات سفارش، تنوع انتخاب‌شده، SKU، ریز مبلغ (کالا، کوپن، مالیات، ارسال) و تعداد خریدهای
                قبلی مشتری را می‌بینی.
              </li>
              <li>کد رهگیری مرسوله را ثبت می‌کنی و مشتری پیامک می‌گیرد.</li>
              <li>با لغو سفارش، موجودی به همان تنوع برمی‌گردد.</li>
            </ul>
            <p>
              جزئیات بیشتر در صفحه‌ی{" "}
              <Link href="/features/order-management/">مدیریت سفارش فروشگاه اینترنتی</Link>.
            </p>
            <h2 id="cost">هزینه ساخت فروشگاه اینترنتی</h2>
            <p>
              هزینه‌ی فروشگاه‌ساز نکس‌کارت با پلن شروع از ۸۹۰ هزار تومان در ماه شروع می‌شود و در اشتراک
              دوازده‌ماهه به ۷۱۰ هزار تومان در ماه می‌رسد؛ پلن‌های رشد و حرفه‌ای امکانات و پشتیبانی بیشتری
              دارند. ولی هزینه‌ی کل راه‌اندازی فقط این نیست: دامنه، عکاسی محصول، بسته‌بندی و تبلیغات هم هزینه
              دارند. همه‌ی این موارد را در مقاله‌ی{" "}
              <Link href="/blog/online-store-cost/">هزینه راه‌اندازی فروشگاه اینترنتی</Link> جدا کرده‌ایم و
              قیمت و مقایسه‌ی پلن‌ها در <Link href="/pricing/">صفحه‌ی قیمت</Link> است.
            </p>
            <h2 id="visibility">دیده‌شدن فروشگاه در گوگل و ترب</h2>
            <p>
              فروشگاه بدون بازدیدکننده نمی‌فروشد. دو منبع رایگان و مهم بازدید برای فروشگاه ایرانی، جستجوی گوگل
              و موتور مقایسه‌ی قیمت ترب است:
            </p>
            <ul>
              <li>
                <strong>گوگل:</strong> نکس‌کارت نقشه‌ی سایت، داده‌ی ساختاریافته‌ی محصول و ابزار امتیاز سئو را
                آماده دارد. در <Link href="/blog/online-store-seo/">راهنمای سئو فروشگاه اینترنتی</Link>{" "}
                گفته‌ایم از کجا شروع کنی.
              </li>
              <li>
                <strong>ترب:</strong> API نسخه ۳ ترب و متاتگ‌های محصول پیاده شده‌اند؛ آدرس API را از پنل برای
                پشتیبانی ترب می‌فرستی.
              </li>
            </ul>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#what">فروشگاه اینترنتی چیست و به درد چه کسی می‌خورد؟</a>
              </li>
              <li>
                <a href="#requirements">برای ساخت فروشگاه اینترنتی چه چیزهایی لازم است؟</a>
              </li>
              <li>
                <a href="#methods">سه روش ساخت سایت فروشگاهی</a>
              </li>
              <li>
                <a href="#steps">مراحل ساخت فروشگاه اینترنتی با نکس‌کارت</a>
              </li>
              <li>
                <a href="#domain-host">دامنه، هاست و SSL به زبان ساده</a>
              </li>
              <li>
                <a href="#payment">درگاه پرداخت و اینماد</a>
              </li>
              <li>
                <a href="#manage">بعد از راه‌اندازی: مدیریت محصول و سفارش</a>
              </li>
              <li>
                <a href="#cost">هزینه ساخت فروشگاه اینترنتی</a>
              </li>
              <li>
                <a href="#visibility">دیده‌شدن فروشگاه در گوگل و ترب</a>
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
            <Link className="card reveal" href="/blog/online-store-cost/">
              <span className="card__ic ic-green">
                <Icon name="calculator" />
              </span>
              <h3>هزینه راه‌اندازی فروشگاه اینترنتی</h3>
              <p>همه‌ی هزینه‌های شروع فروش آنلاین، از سایت و دامنه تا عکاسی و تبلیغات.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
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
