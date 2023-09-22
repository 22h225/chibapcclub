import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['normalize.css']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/vars.scss";'
        }
      }
    }
  }
});
