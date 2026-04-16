import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.miguelvargas.dev',
  output: 'static',
  integrations: [react()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
