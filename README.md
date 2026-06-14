# thepazbi.com

The personal site of **Pazbi Zavatzki** — keynote speaking, workshops, and AI / digital-transformation consultancy, built around the **Map · Build · Scale** method.

Built with [Astro](https://astro.build) as a fast static site. Content (blog posts, events, workshops, media) lives as files in the repo — add one by committing a Markdown or data entry. No CMS, no database.

## Tech

- **[Astro](https://astro.build)** — static output, zero client JS by default
- Type-safe content collections validated at build time
- Hosted on **Netlify** (auto-deploys on push to `main`); contact form via **Netlify Forms**
- DNS / email forwarding via **Cloudflare**

## Develop locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview  # preview the production build
```

Requires Node 20.3+ or 22+.

## Adding content

All content lives in `src/content/`. Each file is validated against a schema (`src/content.config.ts`) at build time, so a malformed entry fails the build instead of breaking the live site.

**Blog post** — `src/content/blog/my-post.md`:

```markdown
---
title: "Your headline"
description: "One-line summary for cards and SEO."
pubDate: 2026-06-20
tags: ["AI", "Strategy"]
# draft: true          # hide until ready
---

Your markdown body here.
```

**Event** — `src/content/events/my-event.md`:

```markdown
---
title: "Talk or session title"
type: "Keynote"        # Keynote | Workshop | Talk | Panel | Podcast | Fireside
date: 2026-08-01
location: "Venue, City"
city: "London"
country: "United Kingdom"
url: "https://tickets.example.com"   # optional
description: "One line for the listing."
featured: false
---
```

Past events move to the "Past" list automatically once the date passes.

**Workshop** — `src/content/workshops/my-workshop.md` (see `ai-day.md` for the full shape). Required: `title`, `tagline`, `duration`, `audience`, `outcomes` (list), `summary`; `order` controls position and `price` is optional.

**Media appearance** — add an entry to the `media` array in `src/lib/media.ts` (podcast, talk, TV, award, etc.).

## Editing the essentials

- **Name, nav, booking CTA, socials, the Map · Build · Scale method** → `src/lib/site.ts`
- **Client logos** → `public/images/logos/` + the `clients` list in `src/pages/index.astro`
- **Colours, fonts, spacing** → CSS variables at the top of `src/styles/global.css`
- **Hero portrait** → `public/images/pazbi-hero.jpg` (4:5 portrait)
- **Social share image** → `public/og/default.png` (1200×630)
- **Old-URL redirects** → `public/_redirects`

## Structure

```
src/
  content/            content files (blog, events, workshops)
  content.config.ts   schemas that validate every content file
  lib/
    site.ts           name, nav, links, socials, the Map · Build · Scale method
    media.ts          press / media appearances
  layouts/Base.astro  shell, SEO meta, JSON-LD
  components/         Nav, Footer, PageHero
  pages/              routes (home, speaking, workshops, consultancy,
                      writing, events, media, about, contact, success, 404)
  styles/global.css   design system
public/               images, og, favicon, robots, _redirects
netlify.toml          build settings
```

## Deploy

Pushing to `main` triggers a Netlify build (`npm run build` → `dist`). Old WordPress URLs are 301-redirected to their new paths via `public/_redirects`.

---

© Pazbi Zavatzki. All rights reserved.
