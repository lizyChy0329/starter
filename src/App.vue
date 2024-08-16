<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { codeToHtml } from 'shiki'
import { isDark, toggleDarkmode } from '~/composables/useDarkmode'

const demoCode0 = `# install dependencies
> pnpm install

# start the doc app with HMR
> pnpm run dev

# build the doc app, available under /dist
> pnpm run build:docs

# build the library, available under /lib
> pnpm run build:lib

# create the changelog
> pnpm run changelog
`

const html = ref('')
onBeforeMount(async () => {
  html.value = await codeToHtml(demoCode0, {
    lang: 'shell',
    themes: {
      light: 'min-light',
      dark: 'synthwave-84',
    },
  })
})
</script>

<template>
  <div class="w-full h-full min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto max-w-5xl relative">
      <nav class="h-20 py-4 flex-between text-primary">
        <div class="font-semibold text-xl flex-center gap-2">
          <Logo class="h-6 w-6" />
          Vue Library Starter
        </div>
        <div class="flex-center gap-4">
          <button
            class="!bg-transparent opacity-50 hover:opacity-100 transition"
            @click="(e) => toggleDarkmode()"
          >
            <carbon:moon v-if="isDark" class="w-6 h-6" />
            <carbon:sun v-else class="w-6 h-6" />
          </button>
          <a
            class="opacity-50 hover:opacity-100 transition"
            href="https://github.com/xiaoluoboding/vue-library-starter"
          >
            <carbon:logo-github class="h-6 w-6" />
          </a>
        </div>
      </nav>
      <header class="py-20">
        <div class="font-extrabold">
          <span class="text-6xl text-neon">Build your own</span>
          <div class="text-6xl text-primary">
            Vue Component Library
          </div>
        </div>
        <div
          class="text-2xl font-semibold text-slate-700 py-4 dark:text-slate-200"
        >
          A minimal Vue library starter, built on top of Vite & Vue 3
        </div>
        <div class="flex gap-4 mt-8">
          <a
            class="bg-gray-200 hover:bg-gray-300 transition rounded-full text-lg font-semibold py-3 px-6 w-full sm:w-auto text-center"
            href="https://github.com/xiaoluoboding/vue-library-starter"
            target="_blank"
          >
            <span>Documentation</span>
          </a>
          <a
            class="bg-emerald-400 hover:bg-emerald-500 flex items-center justify-center space-x-3 transition rounded-full text-white text-lg font-semibold py-3 px-6 w-full sm:w-auto cursor-pointer"
            href="https://github.com/new?template_name=vue-library-starter&template_owner=xiaoluoboding"
            target="_blank"
          >
            <span>Use the template</span>
          </a>
        </div>
      </header>

      <main class=" text-xs 2xl:text-sm [&>pre]:(p-4 rounded-xl)" v-html="html" />
      <footer
        class="mt-16 w-full flex-center text-primary"
        text="slate-900 dark:slate-300 opacity-60 sm"
      >
        <div class="copyright flex flex-col justify-center items-center">
          <p>
            Code with ❤ & ☕️ by
            <a class="text-neon" href="https://github.com/xiaoluoboding">
              @xiaoluoboding
            </a>
            <span> © {{ new Date().getFullYear() }}</span>
          </p>
          <p class="flex items-center space-x-1">
            <carbon:logo-twitter class="text-emerald-500" />
            <span>
              <a
                href="https://twitter.com/xiaoluoboding"
                class="text-neon"
                target="_blank"
              >
                Follow me on Twitter
              </a>
            </span>
            <span class="px-2 text-emerald-300">|</span>
            <carbon:cafe class="text-emerald-500" />
            <span>
              <a
                href="https://www.buymeacoffee.com/xlbd"
                target="_blank"
                class="text-neon"
              >
                Buy me a coffee
              </a>
            </span>
            <span class="px-2 text-emerald-300">|</span>
            <mdi:heart class="text-emerald-500" />
            <span>
              <a
                href="https://github.com/sponsors/xiaoluoboding"
                target="_blank"
                class="text-neon"
              >
                Sponsor me on GitHub
              </a>
            </span>
          </p>
        </div>
      </footer>

      <div class="w-full mx-auto" />
    </div>
  </div>
</template>

<style>
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  /* Optional, if you also want font styles */
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>
