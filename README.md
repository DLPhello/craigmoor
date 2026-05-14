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

## Look & feel

- **Palette:** warm paper backgrounds, wine and gold accents, and dark type for readability (closer to a classic cellar-door site than a dark UI theme).
- **Home hero:** full-bleed **crossfading photographs** (`img/hero-home.jpg` plus several `img/gallery/*` frames), with copy on a light panel. Slideshow timing lives in `docs/js/site.js`.
- **Typography:** Cormorant Garamond + Outfit via Google Fonts.
- **Motion:** header shadow on scroll, scroll-in reveals on inner pages, and the hero slideshow (all respect `prefers-reduced-motion`).
- **Gallery page:** responsive mosaic using `docs/img/gallery/01.jpg` onward from the estate export.

Design tokens (`--s-*`, colours, radii, easings) are defined in `docs/css/site.css` under `:root`.

## GitHub Pages base

Keep `<base href="/craigmoor/">` aligned with the repository name so relative assets resolve at **`https://<user>.github.io/craigmoor/`** (with or without a trailing slash on the first path segment).

## Beyond static Pages

For animations, CMS previews, i18n, or a bespoke design system, a **Next.js** (or similar) app deployed by **GitHub Actions** to Pages or Vercel is the natural upgrade path; the Markdown in `content/` can feed MDX or a static generation pipeline.
