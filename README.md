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

> requires Node 20.19+

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
pnpm dlx tiged vue-zone/vue3-vant-mobile my-mobile-app # If you don't have pnpm installed, run: npm install -g pnpm
cd my-mobile-app
pnpm i
```

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

## License

[MIT](./LICENSE) License

<p align="right">
  <a href="#top">⬆️ Back to Top</a>
</p>
