// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
g
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
});
