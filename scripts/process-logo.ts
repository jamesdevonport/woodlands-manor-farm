/**
 * One-shot: take wmf-logo.png (dark text on solid white) and produce
 * wmf-logo-light.png (white/cream text on transparent) for the dark nav.
 *
 * Steps:
 *   1. Convert solid white pixels to transparent
 *   2. Invert the remaining (dark) pixels so they become light (cream)
 *
 * Run once: `npx tsx scripts/process-logo.ts`
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC = join(import.meta.dirname ?? __dirname, "..", "public", "images", "wmf-logo.png");
const OUT = join(import.meta.dirname ?? __dirname, "..", "public", "images", "wmf-logo-light.png");

// Cream colour from the brand palette (matches --color-cream)
const CREAM_R = 247;
const CREAM_G = 243;
const CREAM_B = 238;

// White-detection threshold: any pixel where all RGB channels are above
// this becomes transparent.
const WHITE_THRESHOLD = 240;

async function main() {
  const input = readFileSync(SRC);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected 4 channels (RGBA), got ${channels}`);
  }

  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const isNearWhite = r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;

    if (isNearWhite) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
    } else {
      // Map dark pixels to cream, weighted by how dark they were.
      // Pure black → full cream; mid-grey → semi-cream.
      const luminance = (r + g + b) / 3;
      const darkness = (255 - luminance) / 255; // 0..1
      out[i] = Math.round(r + (CREAM_R - r) * darkness);
      out[i + 1] = Math.round(g + (CREAM_G - g) * darkness);
      out[i + 2] = Math.round(b + (CREAM_B - b) * darkness);
      // Use the darkness as alpha — fully dark stays opaque, near-white pixels fade out.
      // This anti-aliases the edges nicely.
      out[i + 3] = Math.round(darkness * 255);
    }
  }

  const png = await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(OUT, png);

  console.log(`Wrote ${OUT} (${png.length} bytes, ${width}×${height})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
