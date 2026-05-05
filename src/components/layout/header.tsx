"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOK_HREF, PRIMARY_NAV } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/seo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[9000] flex items-center justify-between px-12 py-5 transition-all duration-300",
          scrolled
            ? "bg-[rgba(74,100,89,0.97)] py-3 shadow-[0_1px_0_rgba(173,191,185,0.12)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <Link href="/" className="font-serif text-cream text-xl leading-tight tracking-wide text-[var(--color-cream)]">
          {SITE.name}
          <span className="mt-0.5 block font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-warm-stone)]">
            {SITE.tagline}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={BOOK_HREF}
            className="rounded-sm bg-[var(--color-violet)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#7a6aa4]"
          >
            Book Direct
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-[var(--color-cream)]"
          >
            <span
              className={cn(
                "h-px w-6 bg-current transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span className={cn("h-px w-6 bg-current transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "h-px w-6 bg-current transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[8000] bg-[rgba(74,100,89,0.98)] backdrop-blur-lg transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className="flex h-full flex-col items-center justify-center gap-6 px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-center gap-5">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-[var(--color-cream)] transition-colors hover:text-[var(--color-warm-stone)] md:text-4xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-[var(--color-warm-stone)]">
            <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
            <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
