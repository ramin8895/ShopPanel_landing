import Link from "next/link";
import { Icon } from "./Icon";
import { FOOTER_COLUMNS } from "@/lib/nav";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PANEL_LOGIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/site";

const ENAMAD_HREF = "https://trustseal.enamad.ir/?id=6955973&Code=atTcslBIPIrOjXqBQ0Cx4ZXT8TMkgn1z";
const ENAMAD_IMG = "https://trustseal.enamad.ir/logo.aspx?id=6955973&Code=atTcslBIPIrOjXqBQ0Cx4ZXT8TMkgn1z";
// The e-Namad seal markup requires a non-standard `code` attribute on <img>.
const enamadAttrs = { code: "atTcslBIPIrOjXqBQ0Cx4ZXT8TMkgn1z" };

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" className="brand">
            <img className="brand__logo" src="/logo-mark-white.svg" width={51} height={28} alt="" />
            <span>NexCart</span>
          </Link>
          <p>
            نکس‌کارت (NexCart) یک فروشگاه‌ساز ایرانی است: پلتفرم آنلاین برای ساخت، راه‌اندازی و مدیریت فروشگاه
            اینترنتی، بدون کدنویسی.
          </p>
          <address>
            <ul className="footer__contact">
              <li>
                <Icon name="phone" />
                <a href={`tel:${PHONE_TEL}`} className="ltr">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <Icon name="brand-whatsapp" />
                <a href={WHATSAPP_URL} rel="noopener" target="_blank">
                  واتساپ پشتیبانی
                </a>
              </li>
              <li>
                <Icon name="brand-instagram" />
                <a href={INSTAGRAM_URL} rel="me noopener" target="_blank">
                  اینستاگرام <span className="ltr">@{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li>
                <Icon name="login" />
                <a href={PANEL_LOGIN_URL}>ورود به پنل فروشنده</a>
              </li>
            </ul>
          </address>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© ۱۴۰۵ نکس‌کارت (NexCart). تمام حقوق محفوظ است.</span>
        <span>ساخته‌شده در ایران، برای فروشنده‌های ایرانی</span>
      </div>
      <div className="container footer__trust">
        <a
          referrerPolicy="origin"
          target="_blank"
          rel="noopener"
          aria-label="نماد اعتماد الکترونیکی (اینماد) نکس‌کارت"
          href={ENAMAD_HREF}
        >
          <img
            referrerPolicy="origin"
            loading="lazy"
            src={ENAMAD_IMG}
            alt="نماد اعتماد الکترونیکی (اینماد)"
            height={72}
            style={{ cursor: "pointer" }}
            {...enamadAttrs}
          />
        </a>
      </div>
    </footer>
  );
}
