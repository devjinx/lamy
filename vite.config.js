import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import vClickOutside from 'click-outside-vue3';

// Function to resolve the path
const resolvePath = (file) => {
  return path.resolve(fileURLToPath(import.meta.url), file);
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
  optimizeDeps: {
    include: ['click-outside-vue3'],
  },
});
