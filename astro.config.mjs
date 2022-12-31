import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://amalpmathews2003.github.io',
  base: '/timetable-prettify',
  integrations: [react()]
});