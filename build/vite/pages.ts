import path from 'node:path'
import process from 'node:process'

export interface VitePageConfig {
  /**
   * Rollup input key.
   */
  name: string
  /**
   * Html file path.
   */
  html: string
  /**
   * Entry file path in src.
   */
  entry: string
  /**
   * Route pages directory in src.
   */
  pagesDir: string
  /**
   * Output html file name in dist directory.
   */
  output: string
  /**
   * Request paths in dev server.
   */
  routes: readonly string[]
}

/**
 * Multi-page entries.
 * Add new pages here to keep dev and build in sync.
 */
const entries: readonly VitePageConfig[] = [
  {
    name: 'index',
    html: 'src/entries/index/index.html',
    entry: 'src/entries/index/main.ts',
    pagesDir: 'src/entries/index/pages',
    output: 'index.html',
    routes: ['/', '/index.html'],
  },
  {
    name: 'auth',
    html: 'src/entries/auth/index.html',
    entry: 'src/entries/auth/main.ts',
    pagesDir: 'src/entries/auth/pages',
    output: 'auth.html',
    routes: ['/auth.html'],
  },
] as const

export function getPageConfigs() {
  return entries
}

export function getHtmlInputs() {
  return Object.fromEntries(
    entries.map(page => [
      page.name,
      path.resolve(process.cwd(), page.html),
    ]),
  )
}

export function getEntryFiles() {
  return entries.map(page => path.resolve(process.cwd(), page.entry))
}

export function getRouteFolders() {
  return entries.map(page => page.pagesDir)
}

function normalizeSlash(pathname: string) {
  return pathname.replace(/\\/g, '/')
}

const entryRouteFolders = entries.map(page => ({
  name: page.name,
  routeFolder: `${normalizeSlash(path.resolve(process.cwd(), page.pagesDir))}/`,
}))

export function resolveEntryNameFromRouteFilePath(routeFilePath: string) {
  const normalizedPath = normalizeSlash(routeFilePath)

  const found = entryRouteFolders.find(entry => normalizedPath.startsWith(entry.routeFolder))
  return found?.name
}

export function getDevHtmlRewriteMap() {
  return Object.fromEntries(
    entries.flatMap(page => page.routes.map(route => [route, `/${normalizeSlash(page.html)}`])),
  )
}

export function getBuildHtmlRenameMap() {
  return Object.fromEntries(
    entries.map(page => [normalizeSlash(page.html), page.output]),
  )
}
