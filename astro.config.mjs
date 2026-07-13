// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://thepazbi.com';

// Build a map of blog-post URL → real last-modified date (updatedDate ?? pubDate)
// by reading each markdown file's frontmatter, so the sitemap reports accurate
// freshness per article instead of the build date.
const blogLastmod = {};
try {
  for (const file of readdirSync('./src/content/blog')) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const raw = readFileSync(`./src/content/blog/${file}`, 'utf8');
    const fm = raw.split(/^---$/m)[1] ?? '';
    const pub = fm.match(/^\s*pubDate:\s*['"]?([^'"\n]+)/m)?.[1];
    const upd = fm.match(/^\s*updatedDate:\s*['"]?([^'"\n]+)/m)?.[1];
    const date = (upd || pub)?.trim();
    if (date) {
      const slug = file.replace(/\.(md|mdx)$/, '');
      blogLastmod[`${SITE}/writing/${slug}/`] = new Date(date).toISOString();
    }
  }
} catch {
  // No blog dir or unreadable — fall back to the global lastmod below.
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Thank-you and funnel-utility pages have no search value — keep them out
      // of the sitemap. /scale itself IS indexed; only its inner steps are not.
      filter: (page) =>
        !page.endsWith('/success/') &&
        !page.endsWith('/message-sent/') &&
        !page.endsWith('/scale/apply/') &&
        !page.endsWith('/scale/book/') &&
        !page.endsWith('/scale/not-yet/'),
      serialize(item) {
        // The home page is the highest-priority entry.
        if (item.url === `${SITE}/`) item.priority = 1.0;
        // Per-article last-modified dates where we have them.
        if (blogLastmod[item.url]) item.lastmod = blogLastmod[item.url];
        return item;
      },
    }),
  ],
  // Old-URL redirects are handled at the edge by Netlify (public/_redirects) for proper 301s.
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
