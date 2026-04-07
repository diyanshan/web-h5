declare module 'vue-router' {
  interface RouteMeta {
    /** page title */
    title?: string
    /** keepalive */
    keepAlive?: boolean
    /** entry namespace */
    entry?: 'index' | 'auth'
  }
}
export {}
