import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://vue-jobs-backend-server.onrender.com',
        changeOrigin: true,
        secure: false, // if you're having SSL issues
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq(proxyReq) {
          console.log('Proxy request:', proxyReq.path);
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
