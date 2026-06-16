// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitemap nur im Live-Modus ausspielen. Im Staging (Default) bleibt sie weg,
// passend zum noindex – kein widersprüchliches Signal an Suchmaschinen.
const live = process.env.PUBLIC_SITE_LIVE === 'true';

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
    // simple-moving leitet wie auf der Live-Seite auf die Referenzübersicht.
    '/referenzen/simple-moving/': '/referenzen/',
  },
  integrations: live ? [sitemap()] : [],
});
