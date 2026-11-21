import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/about";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div className="container page-hero__inner page-hero__inner--solo">
          <div>
            <span className="eyebrow">درباره ما</span>
            <h1>درباره نکس‌کارت</h1>
            <p className="page-hero__lead">
              نکس‌کارت (NexCart) یک فروشگاه‌ساز ایرانی است که در ایران طراحی، ساخته و نگهداری می‌شود تا
              فروشنده‌های ایرانی بدون درگیری فنی، فروشگاه اینترنتی خودشان را داشته باشند.
            </p>
            <div className="page-hero__actions">
              <Link className="btn btn--outline btn--lg" href="/contact/">
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container doc doc--full">
          <article className="prose">
            <h2 id="what">نکس‌کارت چیست؟</h2>
            <p>
              نکس‌کارت یک پلتفرم فروشگاه‌ساز (SaaS) است. هر فروشنده با ثبت‌نام، یک فروشگاه اینترنتی مستقل با
              آدرس خودش، قالب خودش و پنل مدیریت فارسی می‌گیرد. پلتفرم از سه بخش تشکیل شده است:
            </p>
            <ul>
              <li>
                <strong>فروشگاه (storefront):</strong> سایتی که مشتری‌های تو می‌بینند، روی زیردامنه‌ی{" "}
                <span className="ltr">nexcart.ir</span> یا دامنه‌ی اختصاصی.
              </li>
              <li>
                <strong>پنل فروشنده:</strong> جایی که محصول، سفارش، مشتری، پرداخت، تخفیف، فاکتور، سئو و ظاهر
                فروشگاه را مدیریت می‌کنی.
              </li>
              <li>
                <strong>زیرساخت:</strong> سرور، پایگاه داده، گواهی SSL، امنیت و به‌روزرسانی‌ها که با ماست.
              </li>
            </ul>
            <h2 id="principles">اصولی که به آن پایبندیم</h2>
            <ul className="keypoints" role="list">
              <li>
                <Icon name="wallet" />{" "}
                <span>
                  <strong>پول فروش مال فروشنده است.</strong> درگاه به نام خودت وصل می‌شود و از فروش کارمزد
                  برنمی‌داریم.
                </span>
              </li>
              <li>
                <Icon name="list-check" />{" "}
                <span>
                  <strong>قیمت شفاف.</strong> سه پلن با امکانات مشخص و بدون کارمزد فروش؛ هر وقت لازم شد، ارتقا
                  می‌دهی.
                </span>
              </li>
              <li>
                <Icon name="map-2" />{" "}
                <span>
                  <strong>ساخته‌شده برای ایران.</strong> زرین‌پال، ترب، ترب‌پی، فاکتور فارسی، راست‌چین و
                  موبایل‌محور.
                </span>
              </li>
              <li>
                <Icon name="shield-check" />{" "}
                <span>
                  <strong>امنیت و جداسازی داده.</strong> اطلاعات هر فروشگاه از بقیه جداست و اطلاعات محرمانه‌ی
                  درگاه‌ها رمزنگاری‌شده ذخیره می‌شود.
                </span>
              </li>
            </ul>
            <h2 id="tech">با چه فناوری‌ای ساخته شده؟</h2>
            <p>
              فروشگاه‌ها و پنل فروشنده با Next.js و پشت‌صحنه با NestJS و پایگاه داده‌ی PostgreSQL ساخته
              شده‌اند. صفحه‌های فروشگاه سمت سرور رندر می‌شوند تا هم سریع باز شوند و هم گوگل و ترب محتوای کامل
              را ببینند. همه‌ی فروشگاه‌ها روی HTTPS هستند و گواهی SSL خودکار صادر و تمدید می‌شود.
            </p>
            <h2 id="changelog">آخرین به‌روزرسانی‌ها</h2>
            <p>
              نکس‌کارت به‌طور مداوم به‌روز می‌شود و امکانات جدید بدون هزینه‌ی اضافه به همه‌ی فروشگاه‌ها
              می‌رسد. چند به‌روزرسانی اخیر:
            </p>
            <div
              className="table-wrap"
              tabIndex={0}
              role="region"
              aria-label="جدول: آخرین به‌روزرسانی‌ها (۱)"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">تاریخ</th>
                    <th scope="col">به‌روزرسانی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>آبان ۱۴۰۵</td>
                    <td>
                      <Link href="/features/themes/">بازطراحی قالب بوتیک</Link> با گالری ادیتوریال و پنل خرید
                      چسبان، تعداد ستون جدا برای دسکتاپ، تبلت و موبایل، و نمایش کالاهای زیردسته‌ها در دسته‌ی
                      والد
                    </td>
                  </tr>
                  <tr>
                    <td>مهر ۱۴۰۵ (نیمه‌ی دوم)</td>
                    <td>
                      دوره‌ی آزمایشی ۱۴ روزه با فعال‌سازی فوری فروشگاه، چک‌لیست راه‌اندازی در داشبورد، ورود به
                      پنل فقط با شماره‌ی موبایل و کد پیامکی،{" "}
                      <Link href="/features/product-management/">
                        کالای فایلی (دانلودی) و کنترل کامل موجودی
                      </Link>{" "}
                      و <Link href="/features/order-management/">ارسال با پس‌کرایه</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>۹ مهر ۱۴۰۵</td>
                    <td>
                      <Link href="/features/themes/">سه قالب فروشگاه</Link> با پیش‌نمایش زنده،{" "}
                      <Link href="/features/invoice/">فاکتور رسمی و رسید فروش</Link>،{" "}
                      <Link href="/features/discounts-loyalty/">رویدادهای فروش</Link>،{" "}
                      <Link href="/features/seo/">مرکز سئو و وبلاگ فروشگاه</Link>، و کدهای گوگل برای دامنه‌های
                      غیر ‎.ir‎
                    </td>
                  </tr>
                  <tr>
                    <td>۸ مهر ۱۴۰۵</td>
                    <td>
                      <Link href="/features/torob/">اتصال به ترب با API نسخه ۳</Link> و متاتگ‌های محصول،{" "}
                      <Link href="/features/payment-gateway/">خرید اقساطی ترب‌پی</Link>، پیامک سفارش جدید به
                      فروشنده و جزئیات کامل سفارش
                    </td>
                  </tr>
                  <tr>
                    <td>مهر ۱۴۰۵</td>
                    <td>
                      <Link href="/features/live-chat/">چت آنلاین</Link> بین مشتری و فروشنده
                    </td>
                  </tr>
                  <tr>
                    <td>شهریور ۱۴۰۵</td>
                    <td>
                      رندر سمت سرور صفحه‌های فروشگاه برای سئوی بهتر، و{" "}
                      <Link href="/features/custom-domain/">اتصال دامنه‌ی اختصاصی</Link> با SSL خودکار
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="business">اطلاعات کسب‌وکار</h2>
            <ul>
              <li>
                <strong>نام تجاری:</strong> نکس‌کارت (NexCart)
              </li>
              <li>
                <strong>وب‌سایت:</strong> <span className="ltr">nexcart.ir</span>
              </li>
              <li>
                <strong>تلفن و واتساپ:</strong> <a href="tel:+989145275658">۰۹۱۴۵۲۷۵۶۵۸</a>
              </li>
              <li>
                <strong>محدوده‌ی خدمت:</strong> سراسر ایران
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section" aria-labelledby="related-h">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">ادامه مسیر</span>
            <h2 id="related-h">بیشتر بدان</h2>
          </div>
          <div className="cards">
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
            <Link className="card reveal" href="/contact/">
              <span className="card__ic ic-blue">
                <Icon name="headset" />
              </span>
              <h3>تماس با ما</h3>
              <p>مشاوره‌ی قبل از خرید و پشتیبانی فروشندگان.</p>
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
