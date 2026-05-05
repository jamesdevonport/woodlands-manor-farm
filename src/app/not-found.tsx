import Link from "next/link";
import { PRIMARY_NAV } from "@/lib/constants/nav";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6 pb-20 pt-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl text-[var(--color-deep-green)] md:text-6xl">
        That page has wandered off
      </h1>
      <p className="mt-6 text-base leading-8 text-[var(--color-text-mid)]">
        We couldn&rsquo;t find what you were looking for. It may have been moved, or
        it may never have existed. Try one of these instead.
      </p>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        <li>
          <Link href="/" className="text-[var(--color-violet)] hover:underline">
            Home
          </Link>
        </li>
        {PRIMARY_NAV.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[var(--color-violet)] hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
