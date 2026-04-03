import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { createVitePlugins } from './build/vite'
import { exclude, include } from './build/vite/optimize'
import { getHtmlInputs } from './build/vite/pages'

const API_PREFIX_RE = /^\/api/

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(mode, command),

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: '', // Your backend API base URL
          ws: false,
          changeOrigin: true,
          rewrite: requestPath => requestPath.replace(API_PREFIX_RE, ''),
        },
      },
    },

    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
        '~root': path.join(__dirname, '.'),
      },
    },

    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 2048,
      outDir: env.VITE_APP_OUT_DIR || 'dist',
      rollupOptions: {
        input: getHtmlInputs(),
      },
    },

    optimizeDeps: { include, exclude },
  }
}
