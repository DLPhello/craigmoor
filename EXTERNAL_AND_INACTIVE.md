# External domains and inactive features

## Buy Wine (`buywine.craigmoor.com.au`)

The live WordPress site links wine club and portfolio CTAs to:

- `https://buywine.craigmoor.com.au/home/wines/`
- Brand query variants such as `?brand=craigmoor-footnote-series`, `?brand=montrose`, `?brand=craigmoor-winemakers-collection`, and anchors under `#brand`.

**Rebuild stance:** We are not replicating the shop. Static pages use a placeholder route (`buy-wine-inactive.html`) that explains wine purchasing is not available on this GitHub Pages preview. Optional later: link out to a new commerce stack if the customer provides one.

## Members / account links

Footer and menus reference member flows (examples from the live chrome):

- View & update details
- Your Orders
- Unsubscribe
- Logout

These assume an authenticated wine-club / shop account on the commerce stack.

**Rebuild stance:** Not implemented. `members-inactive.html` summarises this in the static site.

## Hamilton Island

Automated fetches to likely on-site slugs (for example `/hamilton-island/`) returned 404 or timed out. The footer still exposes a “Hamilton Island” item; it is almost certainly an outbound marketing link (the downloaded asset bundle includes `hamilton-island-logo.svg`).

**Rebuild stance:** `hamilton-island.html` is a short static page that points visitors to Hamilton Island’s public website for tourism content, without copying their copy.

## Contact form

The live `contact-us` page includes a WordPress enquiry form (“Enquire Today” with First Name, Last Name, etc.).

**Rebuild stance:** The static rebuild lists the same contact details but does **not** POST to WordPress. The form is shown “in spirit” as disabled / informational, or omitted in favour of mailto links only—see `docs/contact-us.html`.

## Legacy `.html` links

The live liquor page references `terms.html`, `privacy-policy.html`, and `contact.html`. The current WordPress routes use trailing-slash permalinks (`/terms-of-use/`, etc.). The static site uses the permalink-style filenames listed in `SITEMAP.md`.
