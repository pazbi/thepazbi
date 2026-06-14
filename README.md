# THE PAZBI — thepazbi.com

A fast, git-driven personal site for Pazbi Zavatzki: **keynote speaking, workshops, and AI/digital-transformation consultancy.**

Built with [Astro](https://astro.build). Everything — blog posts, events, workshops — is content-as-files. **You (or an agent) add a post, a talk, or a workshop by committing one markdown file.** No CMS, no dashboard.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview  # preview the build
```

Node 18.20+, 20.3+ or 22+ required.

---

## The agentic / git-driven workflow

All content lives in `src/content/`. Each file is validated against a schema at build time (`src/content.config.ts`), so a malformed entry **fails the build loudly** instead of silently breaking the live site. That's exactly what you want when an agent is committing on your behalf.

### Add a blog post
Create `src/content/blog/my-post.md`:

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

### Add an event
Create `src/content/events/my-event.md`:

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

### Add a workshop
Create `src/content/workshops/my-workshop.md` (see `ai-day.md` for the full shape). Required: `title`, `tagline`, `duration`, `audience`, `outcomes` (list), `summary`. `order` controls position.

---

## Editing the essentials

- **Booking link, nav, social, positioning** → `src/lib/site.ts` (single source of truth).
- **The Map · Build · Scale spine** → `pillars` in `src/lib/site.ts`.
- **Colours, fonts, spacing** → CSS variables at the top of `src/styles/global.css`.
- **Hero portrait** → drop the generated image at `public/images/pazbi-hero.jpg` (4:5 portrait). The frame is styled to look intentional even before the image lands.
- **Social share image** → `public/og/default.png` (1200×630).

---

## Deploy (git push = live)

Connect this repo to any of these — all auto-deploy on push to `main`:

- **Vercel / Netlify / Cloudflare Pages** — zero config, detects Astro. Build command `npm run build`, output `dist`.
- **GitHub Pages** — add the official Astro GitHub Action.

Point the `thepazbi.com` DNS at the host once the first deploy is green.

---

## Structure

```
src/
  content/            ← the git-driven content (blog, events, workshops)
  content.config.ts   ← schemas that validate every content file
  lib/site.ts         ← nav, links, booking CTA, the T/B/G spine
  layouts/Base.astro  ← shell, SEO meta, JSON-LD, scroll reveal
  components/          ← Nav, Footer, PageHero
  pages/              ← routes (index, speaking, workshops, consultancy, writing, events, about, contact)
  styles/global.css   ← design system
public/               ← images, og, favicon, robots
```
