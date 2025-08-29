// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tekmoral.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        try {
          const url = new URL(page.url);
          const p = url.pathname;
          // Exclude non-indexable routes
          if (p.includes('404')) return false;
          if (p.endsWith('.json')) return false;
          return true;
        } catch {
          return true;
        }
      },
      serialize: (page) => {
        let changefreq = 'monthly';
        let priority = 0.6;
        try {
          const { pathname } = new URL(page.url);
          const path = pathname.endsWith('/') ? pathname : `${pathname}/`;

          if (path === '/') {
            changefreq = 'weekly';
            priority = 1.0;
          } else if (['/services/', '/school-solutions/', '/book-a-call/'].includes(path)) {
            changefreq = 'monthly';
            priority = 0.85;
          } else if (path === '/contact/') {
            changefreq = 'yearly';
            priority = 0.5;
          } else if (
            path === '/work/' ||
            path === '/blog/' ||
            path.startsWith('/work/') ||
            path.startsWith('/blog/')
          ) {
            changefreq = 'weekly';
            priority = 0.75;
          }
        } catch {}
        return {
          url: page.url,
          changefreq,
          priority,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  adapter: netlify()
});