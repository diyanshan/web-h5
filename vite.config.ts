import path from 'node:path'
import process from 'node:process'
import { access, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { loadEnv } from 'vite'
import type { ConfigEnv, PluginOption, UserConfig } from 'vite'
import { createVitePlugins } from './build/vite'
import { exclude, include } from './build/vite/optimize'
import { getBuildHtmlRenameMap, getDevHtmlRewriteMap, getHtmlInputs } from './build/vite/pages'

const API_PREFIX_RE = /^\/api/

function normalizeSlash(pathname: string) {
  return pathname.replace(/\\/g, '/')
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createEntriesHtmlPlugin(): PluginOption {
  const devRewriteMap = getDevHtmlRewriteMap()
  const buildRenameMap = getBuildHtmlRenameMap()
  let outDir = ''
  let basePath = '/'

  function withBase(pathname: string) {
    if (basePath === '/')
      return pathname

    if (pathname === '/')
      return `${basePath}/`

    return `${basePath}${pathname}`
  }

  function rewriteRequestUrl(url: string) {
    const [pathname, ...rest] = url.split('?')
    const candidates = [pathname]

    if (basePath !== '/') {
      if (pathname === basePath) {
        candidates.push('/')
      }
      else if (pathname.startsWith(`${basePath}/`)) {
        const strippedPath = pathname.slice(basePath.length)
        candidates.push(strippedPath || '/')
      }
    }

    let targetPath = ''
    for (const candidate of candidates) {
      const mapped = devRewriteMap[candidate]
      if (mapped) {
        targetPath = withBase(mapped)
        break
      }
    }

    if (!targetPath)
      return url

    if (rest.length === 0)
      return targetPath

    return `${targetPath}?${rest.join('?')}`
  }

  return {
    name: 'entries-html-routing',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
      basePath = config.base.endsWith('/') ? config.base.slice(0, -1) || '/' : config.base
    },
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url)
          req.url = rewriteRequestUrl(req.url)
        next()
      })
    },
    async closeBundle() {
      for (const [sourceName, targetName] of Object.entries(buildRenameMap)) {
        const sourceFile = path.resolve(outDir, sourceName)
        const targetFile = path.resolve(outDir, targetName)

        try {
          await access(sourceFile)
          let html = await readFile(sourceFile, 'utf8')
          const sourceDir = path.dirname(sourceFile)
          const sourceToOutDir = normalizeSlash(path.relative(sourceDir, outDir))

          if (sourceToOutDir && sourceToOutDir !== '.') {
            const relativePrefix = `${sourceToOutDir}/`
            html = html.replace(new RegExp(escapeRegExp(relativePrefix), 'g'), './')
          }

          await writeFile(targetFile, html)
        }
        catch {
          // Ignore missing source html when this plugin runs in non-build contexts.
        }
      }

      const srcDir = path.resolve(outDir, 'src')
      await rm(path.resolve(srcDir, 'entries'), { recursive: true, force: true })

      try {
        const srcChildren = await readdir(srcDir)
        if (srcChildren.length === 0)
          await rm(srcDir, { recursive: true, force: true })
      }
      catch {
        // Ignore missing src directory.
      }
    },
  }
}

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: [createEntriesHtmlPlugin(), ...createVitePlugins(mode, command)],

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
