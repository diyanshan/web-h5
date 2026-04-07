# `File-based Routing`

Routes will be auto-generated for Vue files in each entry pages dir:

- **src/entries/index/pages**
- **src/entries/auth/pages**

And routes are auto-tagged by entry so each app can consume only its own routes.
Check out [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) for more details.

会在每个入口页面目录自动生成路由：

- **src/entries/index/pages**
- **src/entries/auth/pages**

并自动按 entry 打标，让不同入口应用只使用自己的路由。

查看[`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router)了解更多细节。

## Vue Router 5

Vue Router 5 已将 `unplugin-vue-router`合并到了核心包中，无需再使用 `unplugin-vue-router`。

查看 [Vue Router 5 迁移指南](https://router.vuejs.org/guide/migration/v4-to-v5.html#Migrating-to-Vue-Router-5) 了解更多细节。
