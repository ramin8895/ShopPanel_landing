import { Icon } from "./Icon";
import { PANEL_REGISTER_URL, WHATSAPP_URL } from "@/lib/site";

export function MobileCta() {
  return (
    <nav className="mobile-cta" aria-label="دسترسی سریع">
      <a className="btn btn--outline" href={WHATSAPP_URL} rel="noopener" target="_blank">
        <Icon name="brand-whatsapp" /> مشاوره
      </a>
      <a className="btn btn--primary" href={PANEL_REGISTER_URL}>
        شروع رایگان
      </a>
    </nav>
  );
}
