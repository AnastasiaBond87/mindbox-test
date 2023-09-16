/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      exclude: [
        ...configDefaults.exclude,
        'src/shared/types',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'src/app/theme',
      ],
      include: ['src/**/*'],
    },
  },
});
