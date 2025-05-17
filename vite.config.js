import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  base: '/KrisnaRun2025/', // Sesuaikan dengan nama repo
});
