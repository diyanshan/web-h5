type QueryValue = string | number | boolean | null | undefined
const LEADING_SLASH_RE = /^\/+/

const routeNameToMainPath: Readonly<Record<string, string>> = {
  Home: '/',
  Profile: '/profile',
  Settings: '/settings',
}

function createBaseUrl() {
  return new URL(import.meta.env.BASE_URL, window.location.origin).toString()
}

function normalizeMainPath(path: string) {
  if (!path || path === '/')
    return ''

  return path.replace(LEADING_SLASH_RE, '')
}

function stringifyQuery(query: Record<string, QueryValue>) {
  const searchParams = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    if (value === null || value === undefined)
      return

    searchParams.set(key, String(value))
  })

  return searchParams.toString()
}

function resolveMainPath(path: string) {
  return new URL(normalizeMainPath(path), createBaseUrl()).toString()
}

function normalizeRoutePath(routePath: string) {
  return routePath.startsWith('/') ? routePath : `/${routePath}`
}

export function resolveMainRedirectPath(redirect: string | null | undefined) {
  if (!redirect)
    return '/'

  if (redirect.startsWith('/'))
    return redirect

  return routeNameToMainPath[redirect] || '/'
}

export function toAuthPage(routePath = '/login', query: Record<string, QueryValue> = {}) {
  const hashPath = normalizeRoutePath(routePath)
  const queryString = stringifyQuery(query)
  const hash = queryString ? `${hashPath}?${queryString}` : hashPath
  const targetUrl = new URL(`${import.meta.env.VITE_APP_PUBLIC_PATH}/auth.html#${hash}`, createBaseUrl()).toString()

  // console.log('targetUrl: ', targetUrl)
  // return
  window.location.assign(targetUrl)
}

export function toMainPage(path = '/', query: Record<string, QueryValue> = {}) {
  const queryString = stringifyQuery(query)
  const targetUrl = resolveMainPath(path)

  if (!queryString) {
    window.location.assign(targetUrl)
    return
  }

  const target = new URL(targetUrl)
  target.search = queryString
  window.location.assign(target.toString())
}
