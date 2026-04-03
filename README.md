<div id="top" align="center">

<img src="https://cdn.jsdelivr.net/gh/vue-zone/static/cover.png" alt="cover" />

<h1 align="center">vue3-vant-mobile</h1>

English / [简体中文](./README.zh-CN.md)

An mobile web apps template based on the Vue 3 ecosystem.

一个基于 Vue 3 生态系统的移动 web 应用模板，帮助你快速完成业务开发。

<p>
<img src="https://img.shields.io/github/license/vue-zone/vue3-vant-mobile" alt="license" />
<img src="https://img.shields.io/github/package-json/v/vue-zone/vue3-vant-mobile" alt="version" />
<img src="https://img.shields.io/github/repo-size/vue-zone/vue3-vant-mobile" alt="repo-size" />
<img src="https://img.shields.io/github/languages/top/vue-zone/vue3-vant-mobile" alt="languages" />
<img src="https://img.shields.io/github/issues-closed/vue-zone/vue3-vant-mobile" alt="issues" />
</p>

[🌐预览](https://vue3-vant-mobile.netlify.app) / [📖文档](https://vue-zone.github.io/docs/vue3-vant-mobile/) / [🗨️交流](https://github.com/vue-zone/vue3-vant-mobile/issues/56) / [📝反馈](https://github.com/vue-zone/vue3-vant-mobile/issues)

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/vue-zone/vue3-vant-mobile) [![Netlify Status](https://api.netlify.com/api/v1/badges/e6828bd2-2904-4c3e-a67c-b97d32aa1275/deploy-status)](https://app.netlify.com/sites/vue3-vant-mobile/deploys)

</div>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 8](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/) - born with fastness

- 🗂 [File based routing](./src/router)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 🌍 [I18n ready](./src/locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 💪 TypeScript, of course

- 💾 [Mock](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) server Support

- 🌈 Git hooks - lint and commit

- 🪶 [Vant](https://github.com/youzan/vant) - Vue UI library for mobile web apps

- 🔭 [vConsole](https://github.com/vadxq/vite-plugin-vconsole) - the developer tool for mobile web page

- 📱 Browser adaptation - use viewport vw/vh units

- 💻 [Desktop optimization](https://github.com/wswmsword/postcss-mobile-forever) - the mobile area

- 🌓 Dark Mode Support

- 🛡️ Configure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) as default

- ☁️ Deploy on [Netlify](https://www.netlify.com), zero-config

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine
- [Vant](https://github.com/youzan/vant) - Vue UI library for mobile web apps
  - [`vant-touch-emulator`](https://github.com/youzan/vant/tree/main/packages/vant-touch-emulator) - Simulate mobile touch events on the desktop
  - [`vant-use`](https://github.com/youzan/vant/tree/main/packages/vant-use) - Built-in composition APIs of Vant

### Plugins

- [Vue Router](https://github.com/vuejs/router)
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
  - [`pinia-plugin-persistedstate`](https://github.com/prazdevs/pinia-plugin-persistedstate) - Configurable persistence and rehydration of Pinia stores
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [vite-plugin-vconsole](https://github.com/vadxq/vite-plugin-vconsole) - A lightweight, extendable front-end developer tool for mobile web page
- [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - Vite Plugin for API mock dev server
- [postcss-mobile-forever](https://github.com/wswmsword/postcss-mobile-forever) - To adapt different displays by one mobile viewport
- [vite-plugin-vue-devtools](https://github.com/vuejs/devtools-next) - Designed to enhance the Vue developer experience
- [vueuse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [@unhead/vue v2](https://github.com/unjs/unhead) - manipulate document head reactively
- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) - PWA
- [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap) - sitemap and robots generator

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS for VS Code
  - [Goto Alias](https://marketplace.visualstudio.com/items?itemName=antfu.goto-alias) - Go to Definition following alias redirections
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [File Nesting](https://marketplace.visualstudio.com/items?itemName=antfu.file-nesting) - Config of File Nesting for VS Code
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Eslint support
  - [Better JSON5](https://marketplace.visualstudio.com/items?itemName=blueglassblock.better-json5) - JSON5 support

## Try it now

> vue3-vant-mobile requires Node 20.19+

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/vue-zone/vue3-vant-mobile/generate)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
pnpm dlx tiged vue-zone/vue3-vant-mobile my-mobile-app # If you don't have pnpm installed, run: npm install -g pnpm
cd my-mobile-app
pnpm i
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit <http://localhost:3000>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

## License

[MIT](./LICENSE) License

<p align="right">
  <a href="#top">⬆️ Back to Top</a>
</p>
