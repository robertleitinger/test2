// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.coderocker.at',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  redirects: {
    // Webdesign-Detailseite ist in /leistungen/ aufgegangen – alte URL erhalten.
    '/leistungen/webdesign/': '/leistungen/',
  },
  integrations: [sitemap()],
});
