import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        originality: resolve(__dirname, 'originality.html'),
        pipeline: resolve(__dirname, 'pipeline.html'),
        engineering: resolve(__dirname, 'engineering.html'),
        results: resolve(__dirname, 'results.html'),
        aiTransparency: resolve(__dirname, 'ai-transparency.html'),
      }
    }
  }
});
