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

Open `docs/index.html` in a browser, or run any static server with `docs` as the web root (for example `npx serve docs`).
