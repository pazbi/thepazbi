export const site = {
  name: 'Pazbi Zavatzki',
  brand: 'Pazbi Zavatzki',
  url: 'https://thepazbi.com',
  // The signature three-word spine. Shown as the brand tagline everywhere.
  slogan: 'Map · Build · Scale',
  // One-line positioning used in meta + hero subline contexts.
  tagline: 'Keynote speaker, workshop leader and AI advisor.',
  description:
    'Pazbi Zavatzki helps organisations stay irreplaceable in an AI world: keynotes, workshops and advisory on digital transformation, AI and automation.',
  email: 'hello@thepazbi.com',
  // Primary money action. Change in one place; it updates everywhere.
  bookingUrl: '/contact',
  bookingLabel: 'Book Pazbi',
  // Channels — sourced from stan.store/pazbi. Single source of truth.
  social: {
    linkedin: 'https://www.linkedin.com/in/pazbi',
    instagram: 'https://www.instagram.com/pazbiz',
    youtube: 'https://www.youtube.com/@PazbiZavatzki',
    tiktok: 'https://www.tiktok.com/@pazbizavatzki',
    x: 'https://x.com/pazbi',
    facebook: 'https://www.facebook.com/pazbi.zavatzki',
  },
  nav: [
    { label: 'Speaking', href: '/speaking' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Consultancy', href: '/consultancy' },
    { label: 'Writing', href: '/writing' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
  ],
};

// Ordered social channels for rendering (nav, footer, contact).
export const socialLinks = [
  { label: 'LinkedIn', href: site.social.linkedin },
  { label: 'Instagram', href: site.social.instagram },
  { label: 'YouTube', href: site.social.youtube },
  { label: 'TikTok', href: site.social.tiktok },
  { label: 'X', href: site.social.x },
  { label: 'Facebook', href: site.social.facebook },
];

// Map · Build · Scale — the method I run with each business I work with.
export const pillars = [
  {
    word: 'Map',
    code: 'DISCOVER',
    sub: 'Where you are now',
    line: 'We map how your business runs today: the tools you use, your goals, your pain points and the workflows costing you time.',
  },
  {
    word: 'Build',
    code: 'CREATE',
    sub: 'What you need',
    line: 'We build the fix: a workshop, a training program, an automation, or whatever the problem calls for.',
  },
  {
    word: 'Scale',
    code: 'GROW',
    sub: 'Growth that holds',
    line: 'We scale the business through those solutions and the training behind them, so the growth holds after I leave.',
  },
];
