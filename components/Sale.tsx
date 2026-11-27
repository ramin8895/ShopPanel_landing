"use client";

import { useSyncExternalStore, type ReactNode } from "react";

/**
 * حراج زمان‌دار اشتراک. خروجی سایت ایستاست، پس HTML همیشه قیمت عادی دارد و
 * مرورگر داخل بازه آن را با قیمت حراج عوض می‌کند؛ بعد از پایان خودکار برمی‌گردد.
 * تاریخ و قیمت‌ها باید با PLAN_SALE در plans.config.ts بک‌اند یکی باشند.
 */
const STARTS_AT = Date.parse("2026-11-27T00:00:00+03:30");
const ENDS_AT = Date.parse("2026-12-05T00:00:00+03:30");

function subscribe(onChange: () => void) {
  const timer = setInterval(onChange, 30_000);
  return () => clearInterval(timer);
}

function isActive() {
  const now = Date.now();
  return now >= STARTS_AT && now < ENDS_AT;
}

/** داخل بازه‌ی حراج `sale` را نشان می‌دهد، وگرنه children (قیمت عادی) */
export function Sale({ sale, children }: { sale: ReactNode; children?: ReactNode }) {
  const active = useSyncExternalStore(subscribe, isActive, () => false);
  return <>{active ? sale : children}</>;
}
