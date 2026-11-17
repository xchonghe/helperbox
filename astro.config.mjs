// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.helperbox.cc', // 以后买了域名，把这里换成你的域名
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});