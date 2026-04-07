import type { RouteMeta, RouteRecordName, RouteRecordRaw, Router } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export type AppEntryName = 'index' | 'auth'

type EntryRouteMeta = RouteMeta & {
  entry?: AppEntryName
}

function getRouteEntry(route: RouteRecordRaw) {
  const meta = route.meta as EntryRouteMeta | undefined
  return meta?.entry
}

function pickRouteByEntry(route: RouteRecordRaw, entry: AppEntryName): RouteRecordRaw | null {
  const nextChildren = route.children
    ?.map(child => pickRouteByEntry(child, entry))
    .filter((child): child is RouteRecordRaw => Boolean(child))

  const matchedByEntry = getRouteEntry(route) === entry

  if (!matchedByEntry && (!nextChildren || nextChildren.length === 0))
    return null

  const nextRoute: RouteRecordRaw = { ...route }

  if (nextChildren && nextChildren.length > 0)
    nextRoute.children = nextChildren
  else
    delete nextRoute.children

  return nextRoute
}

export function getEntryRoutes(entry: AppEntryName): RouteRecordRaw[] {
  return routes
    .map(route => pickRouteByEntry(route, entry))
    .filter((route): route is RouteRecordRaw => Boolean(route))
}

export function pruneNonEntryRoutes(router: Router, entry: AppEntryName) {
  router.getRoutes().forEach((route) => {
    const routeEntry = (route.meta as EntryRouteMeta | undefined)?.entry
    if (!routeEntry || routeEntry === entry)
      return

    const routeName = route.name as RouteRecordName | null | undefined
    if (routeName)
      router.removeRoute(routeName)
  })
}
