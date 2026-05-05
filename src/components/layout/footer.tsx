import Link from "next/link";
import { FOOTER_LINKS, PRIMARY_NAV } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/seo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-deep-green)] px-8 pb-10 pt-20 text-[var(--color-cream)] md:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-[var(--color-cream)]">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(247,243,238,0.7)]">
            A 17th-century farm in the Coombe Valley offering cottages, yurts, an indoor pool, and
            the warmest of Cornish welcomes.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-warm-stone)]">
            Explore
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[rgba(247,243,238,0.75)] transition-colors hover:text-[var(--color-cream)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-warm-stone)]">
            Visit
          </p>
          <address className="mt-5 not-italic text-sm leading-7 text-[rgba(247,243,238,0.75)]">
            Woodlands Manor Farm
            <br />
            {SITE.contact.address.street}, {SITE.contact.address.city}
            <br />
            {SITE.contact.address.region} {SITE.contact.address.postalCode}
          </address>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a href={`tel:${SITE.contact.phone}`} className="hover:text-white">
              {SITE.contact.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-white">
              {SITE.contact.email}
            </a>
            <a
              href={SITE.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[rgba(247,243,238,0.12)] pt-6 text-xs text-[rgba(247,243,238,0.55)] md:flex-row">
        <span>© {year} Woodlands Manor Farm. All rights reserved.</span>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-[var(--color-cream)]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
