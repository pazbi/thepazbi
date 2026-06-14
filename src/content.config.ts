import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The git-driven content model.
 * Add a talk, a workshop, an event, or a blog post by dropping ONE markdown
 * file into the matching folder under src/content/ and committing it.
 * The Zod schemas below validate every file at build time, so a malformed
 * entry fails the build loudly instead of breaking the live site quietly.
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Pazbi Zavatzki'),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    // What kind of appearance this is.
    type: z.enum(['Keynote', 'Workshop', 'Talk', 'Panel', 'Podcast', 'Fireside']),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    city: z.string().optional(),
    country: z.string().optional(),
    // Public link to register / watch.
    url: z.string().url().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/workshops' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    duration: z.string(), // e.g. "1 day", "Half day", "90 minutes"
    format: z.array(z.enum(['In-person', 'Remote', 'Hybrid'])).default(['In-person']),
    audience: z.string(), // who it's for
    outcomes: z.array(z.string()), // what they leave with
    price: z.string().optional(),
    summary: z.string(),
    order: z.number().default(99), // controls display order
  }),
});

export const collections = { blog, events, workshops };
