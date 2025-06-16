import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://rynsecurity.com',   // kendi domainin
  adapter: github(),                 // GitHub Pages’e uygun çıktı
});
