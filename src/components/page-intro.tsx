import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: ReactNode;
}

export function PageIntro({ eyebrow, title, description, breadcrumbs, children }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-[#f7f4ec] pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-40">
      <div className="editorial-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-24 top-16 h-80 w-80 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div className="shell relative">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow mt-8">{eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="max-w-3xl text-[2.1rem] leading-[1.08] text-deep sm:text-[2.7rem] lg:col-span-8 lg:text-[3.2rem]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-[0.9375rem] lg:col-span-4">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
