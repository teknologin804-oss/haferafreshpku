import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-deep">
            Beranda
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-line" aria-hidden="true" />
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-deep">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-deep" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
