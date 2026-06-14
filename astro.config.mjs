// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thepazbi.com',
  integrations: [sitemap()],
  // Preserve inbound links & SEO from the old WordPress site.
  redirects: {
    '/insights': '/writing',
    '/pazbiz-events': '/events',
    '/press': '/',
    '/will-ai-replace-jobs-in-the-uk': '/writing/will-ai-replace-jobs-in-the-uk',
    '/how-to-get-better-ai-responses-for-your-business': '/writing/how-to-get-better-ai-responses-for-your-business',
    '/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images': '/writing/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images',
    '/is-your-website-working-against-you-key-insights-from-my-discussion-with-natalie-binns': '/writing/is-your-website-working-against-you-key-insights-from-my-discussion-with-natalie-binns',
    '/from-employee-to-entrepreneur-lessons-from-my-leap-of-faith': '/writing/from-employee-to-entrepreneur-lessons-from-my-leap-of-faith',
    '/why-ai-is-the-ultimate-game-changer-for-smes': '/writing/why-ai-is-the-ultimate-game-changer-for-smes',
    '/the-joy-of-sunflower-yellow-how-my-favourite-colour-became-my-brand': '/writing/the-joy-of-sunflower-yellow-how-my-favourite-colour-became-my-brand',
    '/gen-z-is-buying-dumb-phones-on-purpose': '/writing/gen-z-is-buying-dumb-phones-on-purpose',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
