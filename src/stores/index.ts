import useUserStore from './modules/user'
import useCounterStore from './modules/counter'
import useRouteCacheStore from './modules/routeCache'
import { createAppPinia } from './create-pinia'

const pinia = createAppPinia()

export { useUserStore, useCounterStore, useRouteCacheStore, createAppPinia }
export default pinia
