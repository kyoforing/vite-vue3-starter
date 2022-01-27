import { resolve } from 'path';
import { loadEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

export default ({ mode }) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_NAME,
    plugins: [vue(), eslintPlugin()],
    server: {
      https: false,
      port: 3001
    },
    resolve: {
      alias: {
        src: resolve(__dirname, 'src')
      }
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js1/[name]-[hash].js',
          entryFileNames: 'static/js2/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  });
};
