#!/usr/bin/env bash
# Deploy the built static site (./out) into the nginx landing root, with automatic backup.
#
#   LANDING_ROOT=/path/to/landing/root ./scripts/deploy.sh          # real deploy
#   DRY_RUN=1 LANDING_ROOT=... ./scripts/deploy.sh                  # show what would change
#
# Run as root (or a user allowed to write to the landing root). Build first: `npm run build`
# (as the nexcart user, so file ownership in the repo stays correct).
set -Eeuo pipefail

ROOT="${LANDING_ROOT:?set LANDING_ROOT to the nginx root of nexcart.ir}"
ROOT="${ROOT%/}"
SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$SRC/out"

die() { echo "ERROR: $*" >&2; exit 1; }

command -v rsync >/dev/null 2>&1 || die "rsync is not installed (apt install rsync)"
[ -f "$OUT/index.html" ] && [ -f "$OUT/404.html" ] || die "$OUT is missing — run: npm run build"
pages=$(find "$OUT" -name index.html | wc -l)
[ "$pages" -ge 25 ] || die "only $pages index.html files in out/ (expected 25) — build looks incomplete"
[ -d "$ROOT" ] || die "$ROOT does not exist"
case "$ROOT" in /|/var|/var/www|/home|/root|/etc|/usr) die "refusing to deploy into '$ROOT'";; esac
[ -f "$ROOT/index.html" ] || die "$ROOT has no index.html — is it really the landing root?"

if [ "${DRY_RUN:-0}" = "1" ]; then
  echo "DRY RUN — changes that would be made to $ROOT:"
  rsync -a --delete --dry-run --itemize-changes --chmod=D755,F644 "$OUT/" "$ROOT/" | head -60
  exit 0
fi

BAK="$ROOT.bak-$(date +%F-%H%M%S)"
cp -a "$ROOT" "$BAK"
echo "backup:  $BAK"

rsync -a --delete --chmod=D755,F644 "$OUT/" "$ROOT/"
echo "synced:  $OUT -> $ROOT"

if command -v nginx >/dev/null 2>&1; then
  nginx -t
  systemctl reload nginx
  echo "nginx reloaded"
fi

if command -v curl >/dev/null 2>&1 && command -v nginx >/dev/null 2>&1; then
  for p in / /features/torob/ /pricing/ /sitemap.xml; do
    code=$(curl -sk -o /dev/null -w '%{http_code}' --resolve nexcart.ir:443:127.0.0.1 "https://nexcart.ir$p" || true)
    echo "smoke:   $p -> $code"
  done
fi

cat <<MSG

Done. Next: Cloudflare -> Caching -> Purge Everything; re-submit sitemap in Search Console.
Rollback:  rsync -a --delete "$BAK/" "$ROOT/" && nginx -t && systemctl reload nginx
MSG
