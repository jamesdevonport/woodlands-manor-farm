import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.featureImage ? [post.featureImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link href="/news/" className="eyebrow inline-block">
        ← News
      </Link>
      <h1 className="mt-6 font-serif text-4xl text-[var(--color-deep-green)] md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-[var(--color-text-light)]">
        {post.date}
        {post.author ? <> · {post.author}</> : null}
      </p>

      {post.featureImage ? (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src={post.featureImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />
        </div>
      ) : null}

      <div
        className="prose prose-lg mt-12 max-w-none text-[var(--color-text-dark)] [&_a]:text-[var(--color-violet)] [&_h2]:font-serif [&_h2]:text-[var(--color-deep-green)] [&_h3]:font-serif [&_h3]:text-[var(--color-deep-green)] [&_p]:leading-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
