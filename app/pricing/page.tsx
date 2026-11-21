import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { page } from "@/content/pages/pricing";

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page)} />
      <section className="page-hero">
        <Breadcrumbs items={page.crumbs} />
        <div
          className="container page-hero__inner page-hero__inner--solo"
          style={{ textAlign: "center", marginInline: "auto" }}
        >
          <div>
            <span className="eyebrow">تعرفه اشتراک ۱۴۰۵</span>
            <h1>قیمت فروشگاه‌ساز نکس‌کارت</h1>
            <p className="page-hero__lead" style={{ marginInline: "auto" }}>
              سه پلن برای سه مرحله‌ی کسب‌وکار. با پلن شروع راه بیفت و هر وقت فروشت بیشتر شد، ارتقا بده. بدون
              هزینه‌ی راه‌اندازی و بدون کارمزد فروش.
            </p>
            <div
              className="callout callout--ok"
              style={{ maxWidth: "640px", margin: "20px auto 0", textAlign: "right" }}
            >
              <Icon name="circle-check" />
              <div>
                <strong>۱۴ روز رایگان:</strong> فروشگاهت بعد از ثبت‌نام با شماره‌ی موبایل همان لحظه فعال
                می‌شود و ۱۴ روز همه‌ی امکانات پلن رشد را بدون پرداخت داری. کارت بانکی لازم نیست.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="plans-h" style={{ paddingTop: "8px" }}>
        <div className="container">
          <h2 id="plans-h" className="sr-only">
            پلن‌های اشتراک
          </h2>
          <div className="pricing" data-prefix="p">
            <fieldset className="term-switch">
              <legend className="sr-only">مدت اشتراک</legend>
              <input type="radio" name="p-term" id="p-t1" value="1" defaultChecked />
              <label htmlFor="p-t1">۱ ماهه</label>
              <input type="radio" name="p-term" id="p-t3" value="3" />
              <label htmlFor="p-t3">
                ۳ ماهه<em>۱۰٪ تخفیف</em>
              </label>
              <input type="radio" name="p-term" id="p-t6" value="6" />
              <label htmlFor="p-t6">
                ۶ ماهه<em>۱۵٪ تخفیف</em>
              </label>
              <input type="radio" name="p-term" id="p-t12" value="12" />
              <label htmlFor="p-t12">
                ۱۲ ماهه<em>۲۰٪ تخفیف</em>
              </label>
            </fieldset>
            <div className="tiers">
              <article className="tier" aria-labelledby="p-start-h">
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="plant" />
                  </span>
                  <h3 id="p-start-h">پلن شروع</h3>
                </div>
                <p className="tier__for">برای شروع فروش آنلاین و فروشنده‌های اینستاگرامی</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۸۹۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۸۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۲٬۴۰۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۷۶۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۴٬۵۶۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۷۱۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۸٬۵۲۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--soft btn--block">
                  شروع با پلن شروع
                </a>
                <p className="tier__lead">همه‌ی چیزی که برای راه‌اندازی و اولین فروش‌ها لازم داری:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>تا ۲۰۰ محصول با تنوع و موجودی</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>درگاه زرین‌پال و پرداخت در محل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>قالب کلاسیک با رنگ و لوگوی خودت</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>کد تخفیف و رسید فروش</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>سئوی پایه: متا، سایت‌مپ و داده‌ی ساختاریافته</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>زیردامنه‌ی nexcart.ir با SSL</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی با تیکت</span>
                  </li>
                </ul>
              </article>
              <article className="tier tier--feat" aria-labelledby="p-growth-h">
                <span className="tier__badge">پیشنهاد ما</span>
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="trending-up" />
                  </span>
                  <h3 id="p-growth-h">پلن رشد</h3>
                </div>
                <p className="tier__for">برای فروشگاهی که فروش مستمر دارد و می‌خواهد بیشتر بفروشد</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۱٬۸۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۱٬۶۲۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۴٬۸۶۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۱٬۵۳۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۹٬۱۸۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۱٬۴۴۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۱۷٬۲۸۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--primary btn--block">
                  شروع با پلن رشد
                </a>
                <p className="tier__lead">همه‌ی امکانات شروع، به‌علاوه:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>تا ۲٬۰۰۰ محصول و ۳ کاربر پنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>دامنه‌ی اختصاصی با SSL رایگان</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>هر سه قالب با شخصی‌سازی کامل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>خرید اقساطی ترب‌پی و اتصال به ترب</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>رویدادهای فروش، باشگاه مشتریان و پیامک گروهی</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>فاکتور رسمی، چت آنلاین و وبلاگ</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>امتیاز سئو، ریدایرکت ۳۰۱ و مانیتور 404</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی تیکت و واتساپ</span>
                  </li>
                </ul>
              </article>
              <article className="tier" aria-labelledby="p-pro-h">
                <div className="tier__head">
                  <span className="tier__ic">
                    <Icon name="crown" />
                  </span>
                  <h3 id="p-pro-h">پلن حرفه‌ای</h3>
                </div>
                <p className="tier__for">برای برندها و فروشگاه‌های بزرگ که پشتیبانی ویژه می‌خواهند</p>
                <div className="tier__prices" aria-live="polite">
                  <div className="tier__p" data-t="1">
                    <div className="tier__price">
                      ۳٬۰۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت ماهانه</div>
                  </div>
                  <div className="tier__p" data-t="3">
                    <div className="tier__price">
                      ۲٬۷۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۸٬۱۰۰٬۰۰۰ تومان برای ۳ ماه</div>
                  </div>
                  <div className="tier__p" data-t="6">
                    <div className="tier__price">
                      ۲٬۵۵۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۱۵٬۳۰۰٬۰۰۰ تومان برای ۶ ماه</div>
                  </div>
                  <div className="tier__p" data-t="12">
                    <div className="tier__price">
                      ۲٬۴۰۰٬۰۰۰<small>تومان / ماه</small>
                    </div>
                    <div className="tier__sub">پرداخت یک‌جا ۲۸٬۸۰۰٬۰۰۰ تومان برای ۱۲ ماه</div>
                  </div>
                </div>
                <a href="https://dash.nexcart.ir/register" className="btn btn--soft btn--block">
                  شروع با پلن حرفه‌ای
                </a>
                <p className="tier__lead">همه‌ی امکانات رشد، به‌علاوه:</p>
                <ul className="tier__list" role="list">
                  <li>
                    <Icon name="check" />
                    <span>محصول نامحدود و ۱۰ کاربر پنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>
                      <Link href="/features/accounting-inventory/">حسابداری و انبارداری</Link>: انبارگردانی،
                      فاکتور خرید، هزینه‌ها و گزارش سود و زیان
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>راه‌اندازی تحویلی: ورود محصولات و تنظیم فروشگاه با ما</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>گزارش سلامت سئو، سرعت واقعی سایت و Search Console</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>
                      ردیابی گوگل (<span className="en">GA4</span>، GTM و Google Ads)
                    </span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>چت آنلاین با چند پرسنل</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>پشتیبانی اولویت‌دار با واتساپ و تماس</span>
                  </li>
                  <li>
                    <Icon name="check" />
                    <span>اولویت در درخواست قابلیت جدید</span>
                  </li>
                </ul>
              </article>
            </div>
            <p className="plans__note">
              <Icon name="shield-check" /> همه‌ی قیمت‌ها به تومان است · بدون کارمزد فروش · بدون هزینه‌ی
              راه‌اندازی
            </p>
          </div>
          <h2 className="sr-only" id="incl-h">
            آنچه داخل همه‌ی پلن‌هاست
          </h2>
          <ul className="included" role="list" aria-labelledby="incl-h">
            <li>
              <Icon name="check" /> هاست، SSL و بکاپ
            </li>
            <li>
              <Icon name="check" /> بدون کارمزد فروش
            </li>
            <li>
              <Icon name="check" /> درگاه زرین‌پال و پرداخت در محل
            </li>
            <li>
              <Icon name="check" /> مدیریت محصول، تنوع و موجودی
            </li>
            <li>
              <Icon name="check" /> مدیریت سفارش و کد رهگیری
            </li>
            <li>
              <Icon name="check" /> پیامک سفارش جدید به فروشنده
            </li>
            <li>
              <Icon name="check" /> رسید فروش برای هر سفارش
            </li>
            <li>
              <Icon name="check" /> سئوی پایه و سایت‌مپ
            </li>
          </ul>
        </div>
      </section>
      <section className="section section--soft" aria-labelledby="compare-h" id="compare">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">مقایسه‌ی پلن‌ها</span>
            <h2 id="compare-h">امکانات هر پلن، کنار هم</h2>
            <p>قیمت‌های جدول برای اشتراک ماهانه است؛ با اشتراک چندماهه تا ۲۰٪ کمتر می‌پردازی.</p>
          </div>
          <div className="table-wrap cmp-wrap" tabIndex={0} role="region" aria-label="جدول مقایسه‌ی پلن‌ها">
            <table className="table cmp">
              <caption className="sr-only">مقایسه‌ی امکانات پلن‌های شروع، رشد و حرفه‌ای</caption>
              <colgroup>
                <col className="cmp__label" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">امکان</th>
                  <th scope="col">شروع</th>
                  <th scope="col" className="hl">
                    رشد
                  </th>
                  <th scope="col">حرفه‌ای</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">قیمت</th>
                  <td>
                    <b>۸۹۰ هزار</b> تومان در ماه
                    <br />
                    <small>سالانه ۷۱۰ هزار در ماه</small>
                  </td>
                  <td className="hl">
                    <b>۱٫۸ میلیون</b> تومان در ماه
                    <br />
                    <small>سالانه ۱٫۴۴ میلیون در ماه</small>
                  </td>
                  <td>
                    <b>۳ میلیون</b> تومان در ماه
                    <br />
                    <small>سالانه ۲٫۴ میلیون در ماه</small>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    ظرفیت
                  </th>
                </tr>
                <tr>
                  <th scope="row">تعداد محصول</th>
                  <td>۲۰۰</td>
                  <td className="hl">۲٬۰۰۰</td>
                  <td>نامحدود</td>
                </tr>
                <tr>
                  <th scope="row">کاربر پنل (پرسنل)</th>
                  <td>۱</td>
                  <td className="hl">۳</td>
                  <td>۱۰</td>
                </tr>
                <tr>
                  <th scope="row">هاست، SSL، بکاپ و به‌روزرسانی</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">کارمزد فروش</th>
                  <td>ندارد</td>
                  <td className="hl">ندارد</td>
                  <td>ندارد</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    فروش و پرداخت
                  </th>
                </tr>
                <tr>
                  <th scope="row">درگاه زرین‌پال و پرداخت در محل</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">خرید اقساطی ترب‌پی</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">مدیریت سفارش، کد رهگیری و پیامک سفارش به فروشنده</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">تنوع رنگ و سایز با موجودی و SKU جدا</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">رسید فروش (فاکتور غیررسمی)</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">فاکتور رسمی با شماره‌ی ترتیبی و مبلغ به حروف</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    ظاهر و دامنه
                  </th>
                </tr>
                <tr>
                  <th scope="row">آدرس فروشگاه</th>
                  <td>زیردامنه‌ی nexcart.ir</td>
                  <td className="hl">دامنه‌ی اختصاصی</td>
                  <td>دامنه‌ی اختصاصی</td>
                </tr>
                <tr>
                  <th scope="row">قالب</th>
                  <td>کلاسیک</td>
                  <td className="hl">کلاسیک، بوتیک، مگامارکت</td>
                  <td>کلاسیک، بوتیک، مگامارکت</td>
                </tr>
                <tr>
                  <th scope="row">شخصی‌سازی ظاهر</th>
                  <td>رنگ و لوگو</td>
                  <td className="hl">کامل با پیش‌نمایش زنده</td>
                  <td>کامل با پیش‌نمایش زنده</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    رشد و بازاریابی
                  </th>
                </tr>
                <tr>
                  <th scope="row">کد تخفیف</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">رویدادهای فروش با شمارش معکوس</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">باشگاه مشتریان و امتیاز خرید</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">پیامک گروهی به مشتریان</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">اتصال به ترب (API نسخه ۳)</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">چت آنلاین با مشتری</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">یک پرسنل</td>
                  <td>چند پرسنل</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    سئو
                  </th>
                </tr>
                <tr>
                  <th scope="row">متای قابل ویرایش، سایت‌مپ، robots و داده‌ی ساختاریافته</th>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">امتیاز سئو، ریدایرکت ۳۰۱ و مانیتور 404</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">وبلاگ فروشگاه</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Link href="/features/accounting-inventory/">حسابداری و انبارداری</Link> (خرید، هزینه، سود
                    و زیان)
                  </th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">گزارش سلامت سئو، سرعت واقعی سایت و Search Console</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    ردیابی گوگل (<span className="en">GA4</span>، GTM، Google Ads)
                  </th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="cmp__group">
                  <th scope="colgroup" colSpan={4}>
                    پشتیبانی
                  </th>
                </tr>
                <tr>
                  <th scope="row">کانال پشتیبانی</th>
                  <td>تیکت</td>
                  <td className="hl">تیکت و واتساپ</td>
                  <td>واتساپ و تماس، اولویت‌دار</td>
                </tr>
                <tr>
                  <th scope="row">راه‌اندازی</th>
                  <td>راهنما و ویدیو</td>
                  <td className="hl">راهنمایی قدم‌به‌قدم</td>
                  <td>تحویلی: ما فروشگاه را آماده می‌کنیم</td>
                </tr>
                <tr>
                  <th scope="row">اولویت در درخواست قابلیت جدید</th>
                  <td>
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td className="hl">
                    <Icon name="minus" className="i--no" />
                    <span className="sr-only">ندارد</span>
                  </td>
                  <td>
                    <Icon name="circle-check" className="i--yes" />
                    <span className="sr-only">دارد</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">
                    <span className="sr-only">انتخاب پلن</span>
                  </th>
                  <td>
                    <a className="btn btn--soft btn--sm" href="https://dash.nexcart.ir/register">
                      انتخاب شروع
                    </a>
                  </td>
                  <td className="hl">
                    <a className="btn btn--primary btn--sm" href="https://dash.nexcart.ir/register">
                      انتخاب رشد
                    </a>
                  </td>
                  <td>
                    <a className="btn btn--soft btn--sm" href="https://dash.nexcart.ir/register">
                      انتخاب حرفه‌ای
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="compare-cost-h">
        <div className="container container--narrow prose">
          <h2 id="compare-cost-h">قیمت فروشگاه‌ساز در مقایسه با روش‌های دیگر</h2>
          <p>
            عدد اشتراک فقط بخشی از تصویر است. وقتی هزینه‌ی فروشگاه‌ساز را با طراحی سایت مقایسه می‌کنی، این‌ها
            را هم در نظر بگیر:
          </p>
          <div
            className="table-wrap"
            tabIndex={0}
            role="region"
            aria-label="جدول: قیمت فروشگاه‌ساز در مقایسه با روش‌های دیگر (۱)"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">هزینه</th>
                  <th scope="col">طراحی اختصاصی یا وردپرس</th>
                  <th scope="col" className="hl">
                    نکس‌کارت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>طراحی و راه‌اندازی اولیه</td>
                  <td>جدا، معمولاً یک‌جا و قبل از شروع فروش</td>
                  <td className="hl">ندارد</td>
                </tr>
                <tr>
                  <td>هاست و SSL</td>
                  <td>جدا، سالانه</td>
                  <td className="hl">داخل اشتراک</td>
                </tr>
                <tr>
                  <td>قالب و افزونه‌های پولی</td>
                  <td>بسته به نیاز، گاهی با تمدید سالانه</td>
                  <td className="hl">داخل اشتراک (بسته به پلن)</td>
                </tr>
                <tr>
                  <td>به‌روزرسانی امنیتی و پشتیبان‌گیری</td>
                  <td>با خودت یا با هزینه‌ی پشتیبانی</td>
                  <td className="hl">با نکس‌کارت</td>
                </tr>
                <tr>
                  <td>تغییرات بعدی</td>
                  <td>معمولاً با هزینه‌ی برنامه‌نویس</td>
                  <td className="hl">خودت از پنل</td>
                </tr>
                <tr>
                  <td>کارمزد فروش</td>
                  <td>ندارد</td>
                  <td className="hl">ندارد</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            برای برآورد کامل هزینه‌ها، از دامنه تا عکاسی و تبلیغات، مقاله‌ی{" "}
            <Link href="/blog/online-store-cost/">هزینه راه‌اندازی فروشگاه اینترنتی</Link> را بخوان.
          </p>
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
            <h2 id="related-h">قبل از تصمیم بخوان</h2>
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
