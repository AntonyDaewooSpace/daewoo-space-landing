import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project site:
// https://antonydaewoospace.github.io/daewoo-space-landing/
export default defineConfig({
  site: 'https://antonydaewoospace.github.io',
  base: '/daewoo-space-landing',
  build: { inlineStylesheets: 'auto' },
});
