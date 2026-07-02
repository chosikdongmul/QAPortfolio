import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 프로젝트 사이트: https://chosikdongmul.github.io/QAPortfolio/
export default defineConfig({
  site: 'https://chosikdongmul.github.io',
  base: '/QAPortfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
