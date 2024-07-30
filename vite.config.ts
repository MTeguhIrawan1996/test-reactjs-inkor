/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8', // Atau 'v8' jika Anda menggunakan provider V8
      include: ['src/**/*.{js,jsx,ts,tsx}'], // File yang ingin dicakup
      exclude: [
        'src/styled-system/**', // Mengecualikan folder styled-system
      ],
    },
  },
});
