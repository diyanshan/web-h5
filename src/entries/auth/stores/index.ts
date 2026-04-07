import { createAppPinia } from './create-pinia'
import useUserStore from './modules/user'

const pinia = createAppPinia()

export { useUserStore, createAppPinia }
export default pinia
