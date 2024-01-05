import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      // Set up an alias for the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});