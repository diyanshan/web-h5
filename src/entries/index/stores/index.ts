import { createAppPinia } from './create-pinia'
import useUserStore from './modules/user'
import useCounterStore from './modules/counter'
import useRouteCacheStore from './modules/routeCache'

const pinia = createAppPinia()

export { useUserStore, useCounterStore, useRouteCacheStore, createAppPinia }
export default pinia
