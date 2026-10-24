import Image from "next/image";
import Link from "next/link";
import { brandImages, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
  showLocation?: boolean;
}

export function Logo({ tone = "dark", className, showLocation = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — kembali ke beranda`}
    >
      <Image
        src={brandImages.logo}
        alt=""
        width={192}
        height={192}
        className="h-12 w-12 shrink-0 rounded-full sm:h-14 sm:w-14"
        aria-hidden="true"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[1.15rem] font-semibold tracking-[0.14em] sm:text-[1.25rem]",
            tone === "light" ? "text-ivory" : "text-deep",
          )}
        >
          HAFERA{" "}
          <span className={tone === "light" ? "text-gold-soft" : "text-gold-ink"}>FRESH</span>
        </span>
        {showLocation ? (
          <span
            className={cn(
              "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.3em]",
              tone === "light" ? "text-ivory/70" : "text-muted",
            )}
          >
            Pekanbaru · Riau
          </span>
        ) : null}
      </span>
    </Link>
  );
}
