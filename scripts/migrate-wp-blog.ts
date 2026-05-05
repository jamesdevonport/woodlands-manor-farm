/**
 * Scrape the existing WordPress blog from woodlandsmanorfarm.co.uk and
 * convert each post into a markdown file under content/blog/.
 *
 * Steps:
 *   1. fetch the WP post-sitemap.xml to enumerate post URLs
 *   2. for each URL, fetch the HTML, extract title/date/author/feature image/body
 *   3. download images into public/images/blog/<slug>/
 *   4. convert body HTML → markdown (turndown), rewriting image URLs
 *   5. write content/blog/<slug>.md with YAML frontmatter
 *
 * The slug used is the trailing path segment of the WP URL — so the new
 * site's `/[slug]/` route resolves at exactly the same path as before
 * and SEO history is preserved.
 *
 * Usage: `npm run migrate:blog`
 */

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { load } from "cheerio";
import TurndownService from "turndown";

const ROOT = join(import.meta.dirname ?? __dirname, "..");
const CONTENT_DIR = join(ROOT, "content", "blog");
const BLOG_IMAGES_DIR = join(ROOT, "public", "images", "blog");
const SITEMAP_URL = "https://woodlandsmanorfarm.co.uk/post-sitemap.xml";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
turndown.keep(["figure", "figcaption"]);

function slugFromUrl(url: string): string {
  return new URL(url).pathname.replace(/^\/|\/$/g, "");
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "User-Agent": "woodlands-blog-migrator/1.0" } });
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  return res.text();
}

async function fetchSitemap(): Promise<string[]> {
  const xml = await fetchText(SITEMAP_URL);
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  // Drop any /posts/ index page; keep only individual post URLs.
  return matches.filter((u) => !u.endsWith("/posts/"));
}

async function downloadImage(url: string, slug: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const hash = createHash("sha1").update(buf).digest("hex").slice(0, 12);
    const ext = (url.split(".").pop() ?? "jpg").split("?")[0].slice(0, 5);
    const dir = join(BLOG_IMAGES_DIR, slug);
    mkdirSync(dir, { recursive: true });
    const filename = `${hash}.${ext}`;
    writeFileSync(join(dir, filename), buf);
    return `/images/blog/${slug}/${filename}`;
  } catch (err) {
    console.warn(`[img-fail] ${url}: ${(err as Error).message}`);
    return null;
  }
}

function escapeFrontmatter(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

async function migratePost(url: string) {
  const slug = slugFromUrl(url);
  const outPath = join(CONTENT_DIR, `${slug}.md`);
  if (existsSync(outPath)) {
    console.log(`[skip] ${slug} (already exists — delete the file to re-migrate)`);
    return;
  }

  const html = await fetchText(url);
  const $ = load(html);

  const title =
    $("h1.entry-title").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    $("title").text().trim();
  const date =
    $('meta[property="article:published_time"]').attr("content") ||
    $("time").attr("datetime") ||
    "";
  const author = $('meta[name="author"]').attr("content") || $(".author").first().text().trim() || "Woodlands Manor Farm";
  const excerpt = $('meta[property="og:description"]').attr("content") || $('meta[name="description"]').attr("content") || "";
  const featureImageUrl = $('meta[property="og:image"]').attr("content");

  // WordPress typically wraps body in .entry-content; fall back to <article>.
  let body = $(".entry-content").first().html();
  if (!body) body = $("article").first().html();
  if (!body) {
    console.warn(`[no-body] ${slug}`);
    return;
  }

  const $body = load(`<div>${body}</div>`);

  // Download every image and rewrite to local path.
  const imgs = $body("img").toArray();
  for (const el of imgs) {
    const src = $body(el).attr("src");
    if (!src) continue;
    const local = await downloadImage(src, slug);
    if (local) $body(el).attr("src", local);
  }

  let featureImageLocal: string | undefined;
  if (featureImageUrl) {
    featureImageLocal = (await downloadImage(featureImageUrl, slug)) ?? undefined;
  }

  const cleanedHtml = $body("div").first().html() ?? "";
  const md = turndown.turndown(cleanedHtml);

  const frontmatter = [
    "---",
    `title: ${escapeFrontmatter(title)}`,
    `slug: ${escapeFrontmatter(slug)}`,
    date ? `date: ${escapeFrontmatter(date)}` : "",
    `author: ${escapeFrontmatter(author)}`,
    excerpt ? `excerpt: ${escapeFrontmatter(excerpt)}` : "",
    featureImageLocal ? `feature_image: ${escapeFrontmatter(featureImageLocal)}` : "",
    `source_url: ${escapeFrontmatter(url)}`,
    "---",
    "",
    md,
    "",
  ]
    .filter(Boolean)
    .join("\n");

  mkdirSync(CONTENT_DIR, { recursive: true });
  writeFileSync(outPath, frontmatter);
  console.log(`[ok] ${slug}`);
}

async function main() {
  const urls = await fetchSitemap();
  console.log(`Found ${urls.length} posts to migrate.\n`);

  for (const url of urls) {
    try {
      await migratePost(url);
    } catch (err) {
      console.error(`[fail] ${url}: ${(err as Error).message}`);
    }
  }

  console.log("\nDone. Review files in content/blog/ and edit slugs/excerpts if needed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
