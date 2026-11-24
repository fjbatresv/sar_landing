import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
const base = process.env.ASTRO_BASE ?? '/';
const site = process.env.ASTRO_SITE ?? 'https://sar.fjbatresv.com';
export default defineConfig({ site, base, outDir: './dist', fonts: [
  { name: 'Bricolage Grotesque', cssVariable: '--font-display', provider: fontProviders.google(), weights: ['400 800'], subsets: ['latin', 'latin-ext'], fallbacks: ['sans-serif'], options: { experimental: { variableAxis: { wdth: [['75', '100']] } } } },
  { name: 'Public Sans', cssVariable: '--font-body', provider: fontProviders.google(), weights: ['400 700'], subsets: ['latin', 'latin-ext'], fallbacks: ['sans-serif'] },
], integrations: [starlight({ title: 'SAR architecture', description: 'Architecture notes for a restaurant operations platform.', favicon: '/assets/favicon.svg', defaultLocale: 'root', locales: { root: { label: 'English', lang: 'en' } }, pagefind: false, components: { Head: './src/components/starlight/Head.astro', Search: './src/components/starlight/Search.astro' }, sidebar: [
  { label: 'System', items: [{ label: 'Overview', slug: 'docs' }, { label: 'Frontend', slug: 'docs/frontend' }, { label: 'Java services', slug: 'docs/java-services' }, { label: 'Serverless', slug: 'docs/serverless' }] },
  { label: 'Delivery', items: [{ label: 'Infrastructure', slug: 'docs/infrastructure' }, { label: 'CI/CD', slug: 'docs/ci-cd' }, { label: 'Local development', slug: 'docs/local-development' }] },
] }), sitemap()] });
