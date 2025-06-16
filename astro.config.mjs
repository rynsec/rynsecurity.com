import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rynsecurity.com", // veya özel domain: https://rynsecurity.com
  base: '/rynsecurity.com',   // GitHub repo adın neyse onu yaz
  output: 'static',
  trailingSlash: 'always',     // SEO için önerilen ayar
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
