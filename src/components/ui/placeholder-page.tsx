import Link from "next/link";

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  sourceFile?: string;
};

/**
 * Renders a "scaffold" page for routes whose React conversion from the
 * design-references HTML hasn't been done yet. Once a page is fully built,
 * delete this component import and replace with the real page.
 */
export function PlaceholderPage({
  eyebrow,
  title,
  description,
  sourceFile,
}: PlaceholderPageProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 pb-20 pt-40">
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h1 className="font-serif text-4xl text-[var(--color-deep-green)] md:text-6xl">{title}</h1>
      {description ? (
        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-text-mid)]">
          {description}
        </p>
      ) : null}
      {sourceFile ? (
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[var(--color-text-light)]">
          Awaiting React conversion · source: <code>{sourceFile}</code>
        </p>
      ) : null}
      <Link
        href="/"
        className="mt-12 inline-block self-start text-sm tracking-wide text-[var(--color-violet)] hover:underline"
      >
        ← Back to home
      </Link>
    </section>
  );
}
