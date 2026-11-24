import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

const base = process.env.ASTRO_BASE ?? '/';
const site = process.env.ASTRO_SITE ?? 'https://sar.fjbatresv.com';

export default defineConfig({
  site,
  base,
  outDir: './dist',
  fonts: [
    {
      name: 'Barlow',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      name: 'Barlow Semi Condensed',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [600, 700, 800],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Barlow', 'sans-serif'],
    },
    {
      name: 'Material Symbols Outlined',
      cssVariable: '--font-icons',
      provider: fontProviders.googleicons(),
      options: {
        experimental: {
          glyphs: ['storefront', 'schedule', 'expand_more', 'inventory_2', 'payments', 'event_available', 'admin_panel_settings', 'person', 'key', 'verified_user', 'router', 'task_alt', 'smartphone', 'arrow_outward'],
        },
      },
    },
  ],
  integrations: [
    starlight({
      title: 'SAR architecture',
      description: 'Product and architecture notes for a multi-location restaurant operations platform.',
      favicon: '/assets/favicon.svg',
      defaultLocale: 'root',
      locales: { root: { label: 'English', lang: 'en' } },
      pagefind: false,
      customCss: ['./src/styles/starlight.css'],
      components: { Head: './src/components/starlight/Head.astro', Search: './src/components/starlight/Search.astro' },
      sidebar: [
        { label: 'Product', items: [{ label: 'Overview', slug: 'docs' }, { label: 'Product areas', slug: 'docs/product' }, { label: 'Key flows', slug: 'docs/flows' }, { label: 'Security', slug: 'docs/security' }] },
        { label: 'Architecture', items: [{ label: 'Frontend', slug: 'docs/frontend' }, { label: 'Java services', slug: 'docs/java-services' }, { label: 'Serverless', slug: 'docs/serverless' }, { label: 'Infrastructure', slug: 'docs/infrastructure' }] },
        { label: 'Engineering', items: [{ label: 'Decisions', slug: 'docs/decisions' }, { label: 'CI/CD', slug: 'docs/ci-cd' }, { label: 'Local development', slug: 'docs/local-development' }] },
      ],
    }),
    sitemap(),
  ],
});
