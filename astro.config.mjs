// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // Redirecciones 301 para preservar el SEO de la web antigua indexada en Google
  redirects: {
    '/cuotas': '/#horarios',
    '/horarios': '/#horarios',
    '/nuestra-historia': '/#palmares',
  }
});