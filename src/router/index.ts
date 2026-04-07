import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate } from 'vue-router/auto-routes'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getEntryRoutes, pruneNonEntryRoutes } from './entry-routes'
import type { EnhancedRouteLocation } from './types'
import { useRouteCacheStore, useUserStore } from '@/entries/index/stores'

import { isLogin } from '@/utils/auth'
import setPageTitle from '@/utils/set-page-title'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  history: createWebHashHistory(),
  routes: getEntryRoutes('index'),
})

// This will update routes at runtime without reloading the page
if (import.meta.hot)
  handleHotUpdate(router, () => pruneNonEntryRoutes(router, 'index'))

router.beforeEach(async (to: EnhancedRouteLocation) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  const userStore = useUserStore()

  // Route cache
  routeCacheStore.addRoute(to)

  // Set page title
  setPageTitle(to.name)

  if (isLogin() && !userStore.userInfo?.uid)
    await userStore.info()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
