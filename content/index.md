# Home (`/`)

**Source URL:** https://craigmoor.com.au/

**Browser / meta title:** Craigmoor Estate Wines

**Tagline / hero copy (as shown on live site):**

- Heart and home
- Oldest of Mudgee’s Vineyards
- Craigmoor is the home of Chardonnay in Australia
- Iconic Australian Family

**Primary hero CTAs (live behaviour):**

- “TASTING ROOM & CELLARS” — on the marketing homepage this control is wired to the site root in the accessibility tree; the real cellar-door story lives on `/mudgee/` (see `mudgee.md`).
- “JOIN OUR CLUB FOR EXCLUSIVE MEMBER BENEFITS” — points at the `buywine` subdomain (inactive in this rebuild; see `EXTERNAL_AND_INACTIVE.md`).

**Notes for rebuild:**

- Hero imagery from WordPress is not present in `old_images_download` (bundle is mostly SVG UI). Replace with customer-supplied photography when available.
- Preserve the four short positioning lines above the fold; typography and background treatment can be simplified for GitHub Pages.
