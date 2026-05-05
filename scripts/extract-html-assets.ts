/**
 * Strip base64 images out of every HTML file in design-references/.
 *
 * For each <img src="data:..."> and inline `background-image:url(data:...)`:
 *   1. decode the base64 payload
 *   2. dedupe by sha1 → write to public/images/<page-slug>/<hash>.<ext>
 *   3. rewrite the reference in the HTML
 *
 * Slimmed HTML is written to design-references/extracted/ — those files
 * are the working source for the manual React conversion.
 *
 * Usage: `npm run extract:assets`
 */

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { load } from "cheerio";

const ROOT = join(import.meta.dirname ?? __dirname, "..");
const SRC_DIR = join(ROOT, "design-references");
const OUT_HTML_DIR = join(SRC_DIR, "extracted");
const PUBLIC_IMAGES = join(ROOT, "public", "images");

/** Map source HTML filename → public/images/<slug> folder name. */
const FILE_TO_SLUG: Record<string, string> = {
  "woodlands_manor_farm.html": "home",
  "woodlands_about.html": "about",
  "woodlands_cottages.html": "cottages",
  "woodlands_yurts.html": "yurts",
  "woodlands_manor_house.html": "the-manor-house",
  "woodlands_rose.html": "rose-cottage",
  "woodlands_jasmine.html": "jasmine-cottage",
  "woodlands_lavender.html": "lavender-cottage",
  "woodlands_coach_house.html": "the-coach-house",
  "woodlands_stables.html": "the-stables",
  "woodlands_honeysuckle.html": "honeysuckle-cottage",
  "woodlands_budhyn.html": "budhyn-yurt",
  "woodlands_fenton.html": "fenton-yurt",
  "woodlands_animals.html": "animals",
  "woodlands_on_the_farm.html": "on-the-farm",
  "woodlands_places_to_eat.html": "places-to-eat",
  "woodlands_things_to_do.html": "things-to-do",
  "woodlands_little_extras.html": "little-extras",
  "woodlands_inventory.html": "inventory",
  "woodlands_dog_rules.html": "dog-rules",
  "woodlands_contact.html": "contact",
  "woodlands_book_direct.html": "book-direct",
  "woodlands_special_offers.html": "special-offers",
  "woodlands_experiences.html": "experiences",
  "woodlands_reviews.html": "reviews",
  "woodlands_terms.html": "terms",
  "woodlands_privacy.html": "privacy",
  "woodlands_blog_post.html": "blog-template",
};

const MIME_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

type Report = {
  file: string;
  slug: string;
  imageCount: number;
  uniqueCount: number;
  bytesIn: number;
  bytesOut: number;
  failures: string[];
};

const seenHashes = new Map<string, string>(); // sha1 → public path
const reports: Report[] = [];

function decodeAndStore(dataUri: string, slug: string): string | null {
  const m = dataUri.match(/^data:([^;]+);base64,(.*)$/s);
  if (!m) return null;
  const [, mime, b64] = m;
  const ext = MIME_EXT[mime.toLowerCase()] ?? "bin";
  const bytes = Buffer.from(b64, "base64");
  const hash = createHash("sha1").update(bytes).digest("hex").slice(0, 16);

  const cached = seenHashes.get(hash);
  if (cached) return cached;

  const dir = join(PUBLIC_IMAGES, slug);
  mkdirSync(dir, { recursive: true });
  const filename = `${hash}.${ext}`;
  writeFileSync(join(dir, filename), bytes);
  const publicPath = `/images/${slug}/${filename}`;
  seenHashes.set(hash, publicPath);
  return publicPath;
}

function processFile(filename: string) {
  const slug = FILE_TO_SLUG[filename];
  if (!slug) {
    console.warn(`[skip] no slug mapping for ${filename}`);
    return;
  }

  const fullPath = join(SRC_DIR, filename);
  const original = readFileSync(fullPath, "utf8");
  const bytesIn = Buffer.byteLength(original);

  let imageCount = 0;
  const newPathsThisFile = new Set<string>();
  const failures: string[] = [];

  // Single regex pass over the raw HTML. Matches every base64 image data URI
  // — whether it's in <img src>, inline style url(), <script> arrays, etc.
  // Captures up to the next quote/paren so it works in all common contexts.
  const DATA_URI_RE = /data:image\/[a-zA-Z+]+;base64,[A-Za-z0-9+/=]+/g;
  const html = original.replace(DATA_URI_RE, (uri) => {
    imageCount++;
    const out = decodeAndStore(uri, slug);
    if (!out) {
      failures.push(`malformed data URI`);
      return uri;
    }
    newPathsThisFile.add(out);
    return out;
  });

  mkdirSync(OUT_HTML_DIR, { recursive: true });
  writeFileSync(join(OUT_HTML_DIR, filename), html);

  reports.push({
    file: filename,
    slug,
    imageCount,
    uniqueCount: newPathsThisFile.size,
    bytesIn,
    bytesOut: Buffer.byteLength(html),
    failures,
  });

  console.log(
    `[ok] ${filename} → ${slug}: ${imageCount} images (${newPathsThisFile.size} unique), ` +
      `${(bytesIn / 1e6).toFixed(2)} MB → ${(Buffer.byteLength(html) / 1e3).toFixed(0)} KB`,
  );
}

function main() {
  mkdirSync(PUBLIC_IMAGES, { recursive: true });
  const files = readdirSync(SRC_DIR).filter((f) => f.endsWith(".html"));
  if (files.length === 0) {
    console.error(`No HTML files found in ${SRC_DIR}`);
    process.exit(1);
  }

  for (const file of files) processFile(file);

  const totalBytesIn = reports.reduce((s, r) => s + r.bytesIn, 0);
  const totalBytesOut = reports.reduce((s, r) => s + r.bytesOut, 0);
  const totalImages = reports.reduce((s, r) => s + r.imageCount, 0);

  console.log("\n=== Summary ===");
  console.log(`Files processed:    ${reports.length}`);
  console.log(`Images extracted:   ${totalImages} (${seenHashes.size} unique after dedupe)`);
  console.log(`HTML before:        ${(totalBytesIn / 1e6).toFixed(2)} MB`);
  console.log(`HTML after:         ${(totalBytesOut / 1e6).toFixed(2)} MB`);

  const reportPath = join(ROOT, "scripts", "extraction-report.json");
  mkdirSync(dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, JSON.stringify({ totalImages, uniqueImages: seenHashes.size, reports }, null, 2));
  console.log(`\nReport written to ${reportPath}`);
}

main();
