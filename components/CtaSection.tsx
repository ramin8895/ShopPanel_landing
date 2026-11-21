import { Icon } from "./Icon";
import { PANEL_REGISTER_URL, PHONE_TEL } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="container">
        <div className="cta__inner reveal">
          <h2 id="cta-h">فروشگاه اینترنتی‌ات را همین امروز بساز</h2>
          <p>
            ثبت‌نام کن، محصول اضافه کن، درگاه را وصل کن و فروش را شروع کن. اگر سؤالی داری، قبل از ثبت‌نام تماس
            بگیر.
          </p>
          <div className="cta__actions">
            <a href={PANEL_REGISTER_URL} className="btn btn--light btn--lg">
              شروع رایگان <Icon name="arrow-left" />
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--glass btn--lg">
              <Icon name="phone" /> مشاوره تلفنی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
