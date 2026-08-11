// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL principal del sitio (necesaria para que el sitemap genere URLs absolutas correctas)
  site: 'https://www.clubnadamas.com',

  vite: {
    plugins: [tailwindcss()]
  },

  // Redirecciones 301 para preservar el SEO de la web antigua indexada en Google
  redirects: {
    '/inicio': '/',
    '/cuotas': '/#horarios',
    '/horarios': '/#horarios',
    '/nuestra-historia': '/#palmares',
  },

  integrations: [
    sitemap({
      // Excluir páginas de redirección del sitemap (no son contenido real)
      filter: (page) =>
        !page.includes('/inicio') &&
        !page.includes('/cuotas') &&
        !page.includes('/horarios') &&
        !page.includes('/nuestra-historia'),
    })
  ]
});