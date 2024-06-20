import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import url from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(
        url.fileURLToPath(new URL('./src/components/', import.meta.url)),
      ),
      '@theme': path.resolve(
        url.fileURLToPath(new URL('./src/theme/', import.meta.url)),
      ),
      '@page': path.resolve(
        url.fileURLToPath(new URL('./src/pages/', import.meta.url)),
      ),
      '@assets': path.resolve(
        url.fileURLToPath(new URL('./src/assets/', import.meta.url)),
      ),
      '@context': path.resolve(
        url.fileURLToPath(new URL('./src/context/', import.meta.url)),
      ),
      '@hooks': path.resolve(
        url.fileURLToPath(new URL('./src/hooks/', import.meta.url)),
      ),
    },
  },
});
