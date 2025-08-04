import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base:'/ars-rf/',
  build:{
    outDir:'dist',
    emptyOutDir: true, // Очищать папку перед сборкой
    sourcemap: true, // Генерировать sourcemaps для дебага
  },
});
