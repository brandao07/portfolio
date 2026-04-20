import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://brandao07.github.io';
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const base = repo && repo !== `${owner}.github.io` ? `/${repo}` : undefined;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'poimandres',
      wrap: true,
    },
  },
});

