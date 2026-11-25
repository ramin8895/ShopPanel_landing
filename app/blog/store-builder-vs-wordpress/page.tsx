import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/blog-store-builder-vs-wordpress";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">مقایسه</span>
            <h1>فروشگاه‌ساز یا وردپرس؟ مقایسه‌ی سه روش ساخت فروشگاه اینترنتی</h1>
            <p className="page-hero__lead">
              هر کدام از این سه روش برای یک گروه از فروشنده‌ها بهترین است. این مقاله مزایا و محدودیت‌های هر
              کدام را بدون اغراق کنار هم می‌گذارد تا بر اساس شرایط خودت انتخاب کنی.
            </p>
            <div className="page-hero__meta">
              <span>
                <Icon name="calendar" /> به‌روزرسانی: ۹ مهر ۱۴۰۵
              </span>
              <span>
                <Icon name="clock" /> زمان مطالعه: ۳ دقیقه
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
                <strong>فروشگاه‌ساز</strong> برای کسی مناسب است که می‌خواهد سریع و بدون درگیری فنی بفروشد و
                هزینه‌ی ماهانه‌ی ثابت را ترجیح می‌دهد. <strong>وردپرس و ووکامرس</strong> برای کسی مناسب است که
                انعطاف و افزونه‌های زیاد می‌خواهد و مدیریت فنی را می‌پذیرد. <strong>طراحی اختصاصی</strong>{" "}
                برای کسب‌وکارهای بزرگ با نیازهای خاص و تیم فنی مناسب است.
              </p>
            </div>
            <h2 id="definitions">سه روش در یک نگاه</h2>
            <ul>
              <li>
                <strong>فروشگاه‌ساز (SaaS):</strong> سرویسی آنلاین که فروشگاه آماده با پنل مدیریت می‌دهد؛
                هاست، امنیت و به‌روزرسانی با ارائه‌دهنده است. نمونه: نکس‌کارت.
              </li>
              <li>
                <strong>وردپرس و ووکامرس:</strong> وردپرس سیستم مدیریت محتوای متن‌باز است و ووکامرس افزونه‌ای
                که آن را به فروشگاه تبدیل می‌کند. روی هاست خودت نصب می‌شود.
              </li>
              <li>
                <strong>طراحی اختصاصی:</strong> فروشگاهی که برنامه‌نویس‌ها از صفر یا با یک فریم‌ورک برای تو
                می‌سازند.
              </li>
            </ul>
            <h2 id="table">مقایسه‌ی کلی</h2>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="جدول: مقایسه‌ی کلی (۱)">
              <table className="table table--wide">
                <thead>
                  <tr>
                    <th scope="col">معیار</th>
                    <th scope="col">فروشگاه‌ساز</th>
                    <th scope="col">وردپرس و ووکامرس</th>
                    <th scope="col">طراحی اختصاصی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>زمان راه‌اندازی</td>
                    <td>
                      <span className="yes">
                        <Icon name="circle-check" /> همان روز
                      </span>
                    </td>
                    <td>
                      <span className="mid">
                        <Icon name="clock" /> چند روز تا چند هفته
                      </span>
                    </td>
                    <td>
                      <span className="no">
                        <Icon name="clock" /> چند هفته تا چند ماه
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>هزینه‌ی اولیه</td>
                    <td>
                      <span className="yes">
                        <Icon name="circle-check" /> ندارد
                      </span>
                    </td>
                    <td>
                      <span className="mid">
                        <Icon name="minus" /> متوسط
                      </span>
                    </td>
                    <td>
                      <span className="no">
                        <Icon name="x" /> بالا
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>هزینه‌ی جاری</td>
                    <td>اشتراک ثابت ماهانه</td>
                    <td>هاست، تمدید افزونه‌ها، پشتیبانی</td>
                    <td>هاست و نگهداری برنامه‌نویس</td>
                  </tr>
                  <tr>
                    <td>دانش فنی لازم</td>
                    <td>
                      <span className="yes">
                        <Icon name="circle-check" /> ندارد
                      </span>
                    </td>
                    <td>
                      <span className="mid">
                        <Icon name="minus" /> متوسط
                      </span>
                    </td>
                    <td>
                      <span className="no">
                        <Icon name="x" /> تیم فنی
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>امنیت و به‌روزرسانی</td>
                    <td>با پلتفرم</td>
                    <td>با خودت؛ افزونه‌ها باید مرتب به‌روز شوند</td>
                    <td>با تیم فنی</td>
                  </tr>
                  <tr>
                    <td>انعطاف و سفارشی‌سازی</td>
                    <td>
                      <span className="mid">
                        <Icon name="minus" /> در حد تنظیمات پلتفرم
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <Icon name="circle-check" /> زیاد، با افزونه و کد
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <Icon name="circle-check" /> نامحدود
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>مالکیت کد و سرور</td>
                    <td>با پلتفرم</td>
                    <td>با خودت</td>
                    <td>با خودت (طبق قرارداد)</td>
                  </tr>
                  <tr>
                    <td>امکانات ایرانی (درگاه، ترب، شمسی)</td>
                    <td>داخلی در پلتفرم‌های ایرانی</td>
                    <td>با افزونه‌های جدا</td>
                    <td>باید پیاده‌سازی شود</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="store-builder">فروشگاه‌ساز: مزایا و محدودیت‌ها</h2>
            <h3>مزایا</h3>
            <ul>
              <li>بدون هزینه‌ی اولیه و با هزینه‌ی ماهانه‌ی قابل پیش‌بینی.</li>
              <li>هاست، SSL، پشتیبان‌گیری و به‌روزرسانی امنیتی بر عهده‌ی پلتفرم است.</li>
              <li>
                امکانات جدید برای همه‌ی فروشگاه‌ها اضافه می‌شود؛ مثلاً در نکس‌کارت قالب‌ها، فاکتور رسمی و مرکز
                سئو بدون هزینه‌ی اضافه به همه‌ی فروشگاه‌ها رسید.
              </li>
              <li>اتصال‌های ایرانی مثل زرین‌پال، ترب‌پی و ترب آماده است.</li>
            </ul>
            <h3>محدودیت‌ها</h3>
            <ul>
              <li>دسترسی به کد و سرور نداری؛ سفارشی‌سازی در حد تنظیمات و قالب‌های پلتفرم است.</li>
              <li>اگر قابلیتی کاملاً خاص بخواهی که پلتفرم ندارد، باید منتظر بمانی یا آن را درخواست بدهی.</li>
              <li>تا وقتی اشتراک فعال است، فروشگاه فعال است؛ هزینه‌ی ماهانه همیشگی است.</li>
            </ul>
            <h2 id="wordpress">وردپرس و ووکامرس: مزایا و محدودیت‌ها</h2>
            <h3>مزایا</h3>
            <ul>
              <li>متن‌باز و رایگان؛ کد و داده کاملاً در اختیار خودت است.</li>
              <li>هزاران قالب و افزونه برای تقریباً هر نیاز.</li>
              <li>جامعه‌ی بزرگ کاربران و طراحان فارسی‌زبان.</li>
            </ul>
            <h3>محدودیت‌ها</h3>
            <ul>
              <li>خرید و مدیریت هاست، نصب، پیکربندی و پشتیبان‌گیری با خودت است.</li>
              <li>
                به‌روزرسانی هسته، قالب و افزونه‌ها باید مرتب انجام شود؛ افزونه‌ی قدیمی یکی از راه‌های رایج
                نفوذ است.
              </li>
              <li>با افزایش افزونه‌ها، سرعت سایت معمولاً افت می‌کند و بهینه‌سازی دانش فنی می‌خواهد.</li>
              <li>قالب‌ها و افزونه‌های حرفه‌ای اغلب پولی‌اند و تمدید سالانه دارند.</li>
            </ul>
            <p>
              اگر از ووکامرس می‌خواهی به فروشگاه‌ساز بروی، این راهنما را بخوان:{" "}
              <Link href="/blog/woocommerce-to-store-builder/">مهاجرت از ووکامرس بدون افت سئو</Link>.
            </p>
            <h2 id="custom">طراحی اختصاصی: مزایا و محدودیت‌ها</h2>
            <ul>
              <li>
                <strong>مزیت:</strong> هر چیزی که بخواهی، دقیقاً همان‌طور که می‌خواهی.
              </li>
              <li>
                <strong>محدودیت:</strong> بیشترین هزینه و زمان، و وابستگی به همان تیم یا برنامه‌نویس برای هر
                تغییر و رفع اشکال.
              </li>
              <li>
                <strong>مناسب برای:</strong> کسب‌وکاری که مدل فروشش با الگوهای استاندارد جور نیست و بودجه و
                تیم فنی دارد.
              </li>
            </ul>
            <h2 id="choose">کدام را انتخاب کنم؟</h2>
            <div className="table-wrap" tabIndex={0} role="region" aria-label="جدول: کدام را انتخاب کنم؟ (۲)">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">اگر...</th>
                    <th scope="col">پیشنهاد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>تازه شروع می‌کنی و می‌خواهی سریع بفروشی</td>
                    <td>فروشگاه‌ساز</td>
                  </tr>
                  <tr>
                    <td>دانش فنی یا طراح همراه نداری</td>
                    <td>فروشگاه‌ساز</td>
                  </tr>
                  <tr>
                    <td>با وردپرس آشنایی و به افزونه‌ی خاصی نیاز داری</td>
                    <td>وردپرس و ووکامرس</td>
                  </tr>
                  <tr>
                    <td>کنترل کامل روی سرور و کد برایت ضروری است</td>
                    <td>وردپرس یا طراحی اختصاصی</td>
                  </tr>
                  <tr>
                    <td>فرایند فروش خیلی خاص و بودجه و تیم فنی داری</td>
                    <td>طراحی اختصاصی</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              اگر فروشگاه‌ساز با شرایطت جور است، <Link href="/features/">امکانات نکس‌کارت</Link> و{" "}
              <Link href="/pricing/">قیمت‌ها</Link> را ببین. اگر هنوز مطمئن نیستی، مقاله‌ی{" "}
              <Link href="/blog/what-is-store-builder/">فروشگاه‌ساز چیست و چطور انتخابش کنیم</Link> معیارهای
              انتخاب را دقیق‌تر توضیح می‌دهد.
            </p>
          </article>
          <aside className="toc" aria-label="فهرست مطالب">
            <p className="toc__title">در این صفحه</p>
            <ol>
              <li>
                <a href="#definitions">سه روش در یک نگاه</a>
              </li>
              <li>
                <a href="#table">مقایسه‌ی کلی</a>
              </li>
              <li>
                <a href="#store-builder">فروشگاه‌ساز: مزایا و محدودیت‌ها</a>
              </li>
              <li>
                <a href="#wordpress">وردپرس و ووکامرس: مزایا و محدودیت‌ها</a>
              </li>
              <li>
                <a href="#custom">طراحی اختصاصی: مزایا و محدودیت‌ها</a>
              </li>
              <li>
                <a href="#choose">کدام را انتخاب کنم؟</a>
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
            <Link className="card reveal" href="/blog/what-is-store-builder/">
              <span className="card__ic ic-blue">
                <Icon name="help-circle" />
              </span>
              <h3>فروشگاه‌ساز چیست؟</h3>
              <p>تعریف فروشگاه‌ساز و ده معیار عملی برای انتخاب بهترین گزینه.</p>
              <span className="card__more">
                بیشتر بخوانید <Icon name="arrow-left" />
              </span>
            </Link>
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
            <Link className="card reveal" href="/features/">
              <span className="card__ic ic-blue">
                <Icon name="layout-grid" />
              </span>
              <h3>همه‌ی امکانات</h3>
              <p>فهرست کامل قابلیت‌های فروشگاه‌ساز نکس‌کارت.</p>
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
