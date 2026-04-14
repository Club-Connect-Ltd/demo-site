import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://club-connect-ltd.github.io',
  base: '/demo-site',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
