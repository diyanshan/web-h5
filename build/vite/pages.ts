import path from 'node:path'
import process from 'node:process'

export interface VitePageConfig {
  /**
   * Rollup input key.
   */
  name: string
  /**
   * Html file path in project root.
   */
  html: string
  /**
   * Entry file path in src.
   */
  entry: string
}

const pageConfigs: readonly VitePageConfig[] = [
  {
    name: 'main',
    html: 'index.html',
    entry: 'src/entries/main/main.ts',
  },
  {
    name: 'auth',
    html: 'auth.html',
    entry: 'src/entries/auth/main.ts',
  },
] as const

export function getPageConfigs() {
  return pageConfigs
}

export function getHtmlInputs() {
  return Object.fromEntries(
    pageConfigs.map(page => [
      page.name,
      path.resolve(process.cwd(), page.html),
    ]),
  )
}

export function getEntryFiles() {
  return pageConfigs.map(page => path.resolve(process.cwd(), page.entry))
}
