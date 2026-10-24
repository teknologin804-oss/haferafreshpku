"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navigation, siteConfig } from "@/config/site";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const solid = !isHome || scrolled;
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
          solid
            ? "border-b border-line bg-ivory/95 shadow-[0_10px_35px_-28px_rgba(3,42,33,0.65)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "hidden overflow-hidden bg-forest text-ivory/70 transition-[max-height,opacity] duration-500 lg:block",
            scrolled || !isHome ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
        >
          <div className="shell flex h-9 items-center justify-between text-[0.6875rem] tracking-[0.08em]">
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gold" aria-hidden="true" />
              {siteConfig.location.label}
              <span className="mx-1 h-3 w-px bg-ivory/20" aria-hidden="true" />
              Distributor buah, daging, dan frozen food
            </p>
            <p className="text-ivory/70">Melayani kebutuhan grosir dan bisnis</p>
          </div>
        </div>

        <div className="shell flex h-20 items-center justify-between gap-4 lg:h-[5.25rem]">
          <Logo tone="dark" />

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 xl:flex xl:gap-2">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors",
                    "text-charcoal hover:text-deep",
                    active && "text-deep",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px bg-gold transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi Kami
            </a>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Buka menu navigasi"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-deep transition-colors hover:bg-white xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) {
            setMenuOpen(false);
          }
        }}
        aria-modal="true"
        aria-label="Menu navigasi HAFERA FRESH"
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-ivory transition-opacity duration-300 xl:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="shell flex h-20 items-center justify-between border-b border-line">
          <Logo tone="dark" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => {
              setMenuOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Tutup menu navigasi"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-deep hover:bg-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navigasi seluler" className="shell flex-1 overflow-y-auto py-6">
          <ul className="divide-y divide-line">
            {navigation.map((item, index) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[0.625rem] font-semibold tracking-[0.2em] text-gold-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-serif text-2xl",
                          active ? "text-deep" : "text-charcoal",
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 space-y-4 border-t border-line pt-6">
            <p className="inline-flex items-center gap-2 text-[0.8125rem] text-muted">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              {siteConfig.location.label}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi via WhatsApp
            </a>
            <p className="text-center text-xs leading-relaxed text-muted">
              Ketersediaan, satuan, dan harga dikonfirmasi saat pemesanan.
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
