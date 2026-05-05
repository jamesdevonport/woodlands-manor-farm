import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "News, guides and stories from Woodlands Manor Farm — Bude, Cornwall and what's on at the farm.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <p className="eyebrow mb-4">Journal</p>
      <h1 className="font-serif text-4xl text-[var(--color-deep-green)] md:text-6xl">
        News & stories
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-mid)]">
        Local guides, what&rsquo;s on, farm updates and the small stories from a working
        Cornish farm.
      </p>

      {posts.length === 0 ? (
        <p className="mt-16 text-sm text-[var(--color-text-light)]">
          Posts will appear here once <code>npm run migrate:blog</code> has been run.
        </p>
      ) : (
        <ul className="mt-16 grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-[var(--color-warm-stone)]/50 pt-6">
              <Link href={`/${post.slug}/`} className="group block">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-light)]">
                  {post.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-[var(--color-deep-green)] transition-colors group-hover:text-[var(--color-violet)]">
                  {post.title}
                </h2>
                {post.excerpt ? (
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-mid)]">
                    {post.excerpt}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
