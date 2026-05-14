# craigmoor

Static rebuild of **craigmoor.com.au** for GitHub Pages (no WordPress, no shop).

## Repository layout

- **`content/`** — Markdown capture of page copy, one file per legacy URL slug (source for edits and future tooling).
- **`docs/`** — The GitHub Pages site (HTML + `css/site.css` + `img/`).
- **`SITEMAP.md`** — Primary nav, footer IA, and mapping to static filenames.
- **`EXTERNAL_AND_INACTIVE.md`** — Buy wine subdomain, member links, Hamilton Island outbound, contact form limitations.
- **`old_images_download/`** — Customer export (mostly SVG chrome; little location photography).

## Enable GitHub Pages

In the GitHub repo settings, set **Pages** → **Build and deployment** → **Source** to **Deploy from a branch**, branch **`main`**, folder **`/docs`**, then publish. The site URL will be `https://dlphello.github.io/craigmoor/` (organisation/user slug + repo name).

## Local preview

Serve the **`docs`** folder at the path **`/craigmoor/`** so it matches GitHub Pages (for example `npx serve` from the repo root after configuring a rewrite, or open the deployed URL). Every HTML page includes `<base href="/craigmoor/">` so assets resolve correctly when the site is published as **`https://<user>.github.io/craigmoor/`** (with or without a trailing slash on the first segment).

## Premium styling

The home hero uses `docs/img/hero-home.jpg` (copied from `wine.jpg` in the image export). Replace that file to change the landing photograph.

## Beyond static Pages

For animations, CMS previews, i18n, or a bespoke design system, a **Next.js** (or similar) app deployed by **GitHub Actions** to Pages or Vercel is the natural upgrade path; the Markdown in `content/` can feed MDX or a static generation pipeline.
