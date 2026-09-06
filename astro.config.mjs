import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a project site:
// https://antonydaewoospace.github.io/daewoo-space-landing/
export default defineConfig({
  site: 'https://antonydaewoospace.github.io',
  base: '/daewoo-space-landing',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
