# Lumberton Visitors Bureau — React Site

A React + Vite implementation rebuilt against a real full-page screenshot
of the Figma design (`Home_Page.png`), pixel-sampled for exact colors,
copy, and structure.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
```

This still hasn't been `npm install`/build-verified inside the sandbox
that produced it (no outbound network access there) — JSX/import
integrity was checked by hand (balanced braces, all imports resolve).
Please run `npm install && npm run build` first and flag anything that
surfaces.

## What changed in this pass

Rebuilt against your full-page screenshot with pixel-sampled values,
correcting several things that were guesses before:

- **Colors**: navy `#004162` (exact sample, used for header/footer/
  buttons/script eyebrows — the eyebrows are navy, not teal as before),
  heading gray `#454545`, alt section background `#fbfbfb`, green
  "Tee Off" banner `#9cc277`, active nav yellow `#f5ff52`.
- **Fonts**: section headings ("Programs," "Restaurants," "Championship,"
  etc.) switched from Playfair Display to **Baloo 2**, a rounded bold
  sans that matches the actual letterforms much more closely.
- **Header**: utility bar is the only solid-navy strip (phone number
  left; Calendar / email / ENG language dropdown right); the main nav
  is transparent over the hero image, not a solid bar; logo sits in a
  white card overlapping the hero; nav labels now match the real site
  (Home, About, Lodging, Dining, Shopping, Attractions, Meeting
  Facilities) instead of invented ones.
- **Hero**: removed CTA buttons that weren't in the design; hero image
  now uses its own baked-in transparent "torn paper" bottom edge
  (previously approximated with a CSS clip-path); added the two
  carousel dots shown in the design.
- **Cards**: all three cards in a row are equal height (no stagger);
  a single circular "next" arrow overlaps the row's right edge (not a
  dot-pagination bar); only the first "Programs" card ("Golf") gets the
  description + "Explore More" treatment, matching the source; every
  row ends in a centered "Explore More Programs" link styled to match.
- **Championship image**: corrected to rounded-top-only (not a full
  pill/capsule).
- **New Events section**: replaced the earlier "Business & Live Music"
  guess with what's actually there — right-aligned text ("Upcoming
  Events") beside two overlapping photo cards ("Eastern Bunny" —
  exact spelling as shown — and "Rob Cole"), each with a centered
  title and circular arrow badge.
- **Business section**: corrected copy and moved to a white background
  (was mistakenly on the alternating gray); cards are "Weddings,"
  "Banquets/ Family Reunion," "Meeting Spaces."
- **Footer**: uses the literal "LOGO" text mark shown in the design
  (not the Lumberton photo logo), corrected link columns (Quick Links /
  Others / Products, including the odd "Send / Receive / Buy" set —
  that's what's actually in the file), corrected newsletter copy, and
  real YouTube/Instagram/Facebook/Twitter icons in place of a
  placeholder icon row.
- **Partners strip**: replaced the repeated logoipsum marks with linked
  logos for Visit NC, SportsNC, the City of Lumberton, Main Street
  Lumberton, North Carolina State Parks and UNC Pembroke. The logos are
  loaded from their public websites and image hosts.

## Still approximate

- Exact spacing/measurements were pixel-sampled where practical, but
  some values (paddings, font sizes) are still close visual matches
  rather than exact Figma numbers, since I'm working from a rendered
  screenshot rather than the Figma layer tree.
- The "Eastern Bunny" and "Rob Cole" title text in the source uses a
  distressed/splatter font treatment I did not attempt to reproduce —
  it's rendered as plain bold text.
- Social icons are hand-built inline SVGs (recognizable brand marks),
  not exports from the file, since individual icon assets for these
  weren't in the export.

## Structure

```
src/
├── components/    # Header, Hero, Card, CardRow, PromoSplit,
│                    EventsShowcase, PartnerStrip, Footer
├── assets/
│   ├── images/    # real Figma-exported photos + logo
│   └── icons/     # real Figma-exported SVG icons
├── styles/
│   ├── variables.css
│   └── globals.css
├── App.jsx
└── main.jsx
```
