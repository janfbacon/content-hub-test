import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // This line must be present

export default defineConfig({
  output: 'static',
  integrations: [react()], // This enables the React renderer
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});