// vite.config.js
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  base: process.env.NODE_ENV === 'production' ? '/KrisnaRun2025/' : '/',
});