import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate } from 'vue-router/auto-routes'
import type { RouteRecordRaw } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getEntryRoutes, pruneNonEntryRoutes } from '@/router/entry-routes'
import setPageTitle from '@/utils/set-page-title'

NProgress.configure({ showSpinner: true, parent: '#app' })

const routes: readonly RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  ...getEntryRoutes('auth'),
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/login',
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

if (import.meta.hot)
  handleHotUpdate(router, () => pruneNonEntryRoutes(router, 'auth'))

router.beforeEach((to) => {
  NProgress.start()

  if (typeof to.name === 'string')
    setPageTitle(to.name)
  else
    setPageTitle()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
