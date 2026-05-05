# Woodlands Manor Farm

Production website for [woodlandsmanorfarm.co.uk](https://woodlandsmanorfarm.co.uk) — a Cornish holiday farm with cottages and yurts in Bude.

Built with **Next.js 15 / React 19 / Tailwind v4** and deployed to **Cloudflare Workers** via the [OpenNext](https://opennext.js.org/cloudflare) adapter.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Standard Next.js build |
| `npm run lint` | ESLint |
| `npm run preview` | Build with OpenNext + run locally on Wrangler (full prod simulation) |
| `npm run deploy` | Build + deploy to Cloudflare Workers |
| `npm run extract:assets` | One-off: strip base64 images from `design-references/*.html` into `public/images/` |
| `npm run migrate:blog` | One-off: scrape WP blog posts → `content/blog/*.md` |

## Project layout

```
src/app/         # App-Router pages + globals.css
src/components/  # Layout, UI primitives, page sections
src/lib/         # Utilities, blog loader, constant data
public/images/   # Optimised images per page + per blog post
content/blog/    # Markdown blog posts (frontmatter + body)
design-references/  # Original WIP HTML mocks (excluded from build)
scripts/         # One-off tsx migration scripts
```

## Deployment

The repo is connected to Cloudflare's Git integration: every push to `main` triggers a Workers Build that runs `npm run deploy`. See `wrangler.jsonc` for the worker config.
