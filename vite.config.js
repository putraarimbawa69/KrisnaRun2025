import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  base: '/KrisnaRun2025/', // Ganti dengan nama repositori GitHub kamu
})