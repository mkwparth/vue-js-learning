import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_PROD_URL || 'https://vue-jobs-backend-server.onrender.com',
          changeOrigin: true,
          secure: false, // Bypass SSL verification if needed
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy, options) => {
            // Proxy debug logging
            proxy.on('proxyReq', (proxyReq) => {
              console.log('Proxy Request:', proxyReq.method, proxyReq.path);
            });
            proxy.on('error', (err) => {
              console.error('Proxy Error:', err);
            });
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // Optional: Define global constants
    define: {
      'process.env': env,
      '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    }
  };
});