# دیپلوی لندینگ (جایگزینی نسخه‌ی قبلی)

ساختار URL و فایل‌ها با نسخه‌ی قبلی یکی است؛ **تنظیم nginx تغییر نمی‌کند**
(فقط یک پوشه‌ی جدید `_next/` به ریشه اضافه می‌شود).

## روش A — بدون بیلد روی سرور (مثل قبل)
`nexcart-landing-dist-next.zip` همان خروجی آماده است. پوشه‌ی داخل زیپ باز هم `nexcart-landing-dist/` است.
```bash
# ۱) بکاپ نسخه‌ی فعلی
cp -a <مسیر ریشه‌ی لندینگ> <مسیر ریشه‌ی لندینگ>.bak-$(date +%F)

# ۲) جایگزینی
rm -rf /tmp/landing-new && unzip -o nexcart-landing-dist-next.zip -d /tmp/landing-new
rsync -a --delete /tmp/landing-new/nexcart-landing-dist/ <مسیر ریشه‌ی لندینگ>/
nginx -t && systemctl reload nginx
```
سپس Cloudflare → Caching → **Purge Everything**.

## روش C — سرور جدید (پارس‌هاست) با گیت؛ روش پیشنهادی
```bash
# یک‌بار: پیدا کردن ریشه‌ی لندینگ و نسخه‌ی Node (باید >= 20.9 باشد)
nginx -T 2>/dev/null | grep -n -B2 -A12 'server_name.*nexcart.ir' | grep -E 'server_name|root'
sudo -u nexcart node -v

# یک‌بار: کلون با کاربر nexcart (نه root)
cd /var/www && sudo -u nexcart git clone <آدرس ریپو> nexcart-landing && cd nexcart-landing

# هر بار انتشار
nx git pull && nx npm ci && nx npm run build        # بیلد با کاربر nexcart
LANDING_ROOT=<ریشه‌ی لندینگ> DRY_RUN=1 ./scripts/deploy.sh   # پیش‌نمایش تغییرها
LANDING_ROOT=<ریشه‌ی لندینگ> ./scripts/deploy.sh             # بکاپ + rsync + reload nginx + smoke test
```
اسکریپت قبل از جایگزینی بکاپ کامل می‌گیرد، ریشه‌های خطرناک (`/`، `/var/www`، ...) را رد می‌کند و دستور برگشت را چاپ می‌کند.

## روش B — بیلد از سورس
```bash
npm ci && npm run build
rsync -a --delete out/ <مسیر ریشه‌ی لندینگ>/
```

## nginx (اختیاری ولی توصیه‌شده)
فایل‌های `/_next/static/` نام هش‌دار دارند و هرگز عوض نمی‌شوند:
```nginx
location /_next/static/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
  try_files $uri =404;
}
```
(اگر `snippets/nexcart-static-hardening.conf` را داری، با این هم‌خوان است؛ `_next` با نقطه شروع نمی‌شود.)
بقیه‌ی تنظیم‌ها مثل قبل: `error_page 404 /404.html;` و MIME مخصوص `site.webmanifest`.

## تست بعد از دیپلوی
```bash
curl -sI https://nexcart.ir/features/torob/ | head -3          # 200
curl -sI https://nexcart.ir/features/torob   | head -3          # 301 به آدرس با اسلش
curl -s -o /dev/null -w '%{http_code}\n' https://nexcart.ir/nope/   # 404
curl -s https://nexcart.ir/sitemap.xml | grep -c '<loc>'        # 25
```
بعد در Search Console: sitemap را دوباره Submit کن و روی `/pricing/` و `/features/torob/` «Test live URL» بزن.

## برگشت
```bash
rsync -a --delete <مسیر ریشه‌ی لندینگ>.bak-<تاریخ>/ <مسیر ریشه‌ی لندینگ>/
```
