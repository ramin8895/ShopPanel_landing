import Link from "next/link";
import type { Crumb } from "@/lib/types";

export function Breadcrumbs({ items }: { items: Crumb[] | undefined }) {
  if (!items?.length) return null;
  return (
    <nav className="crumbs container" aria-label="مسیر صفحه">
      <ol>
        {items.map((c, i) => (
          <li key={c.href}>
            {i === items.length - 1 ? (
              <span aria-current="page">{c.name}</span>
            ) : (
              <Link href={c.href}>{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
