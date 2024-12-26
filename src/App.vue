<script lang="ts" setup>
import { codeToHtml } from 'shiki'
import { onBeforeMount, ref } from 'vue'
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
  <div class="h-full min-h-screen w-full bg-neutral-50 dark:bg-neutral-900">
    <div class="relative mx-auto max-w-5xl container">
      <nav class="h-20 flex-between py-4 text-primary">
        <div class="flex-center gap-2 text-xl font-semibold">
          <Logo class="h-6 w-6" />
          Vue Library Starter
        </div>
        <div class="flex-center gap-4">
          <button
            class="opacity-50 transition !bg-transparent hover:opacity-100"
            @click="(e) => toggleDarkmode()"
          >
            <carbon:moon v-if="isDark" class="h-6 w-6" />
            <carbon:sun v-else class="h-6 w-6" />
          </button>
          <a
            class="opacity-50 transition hover:opacity-100"
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
          class="py-4 text-2xl text-slate-700 font-semibold dark:text-slate-200"
        >
          A minimal Vue library starter, built on top of Vite & Vue 3
        </div>
        <div class="mt-8 flex gap-4">
          <a
            class="w-full rounded-full bg-gray-200 px-6 py-3 text-center text-lg font-semibold transition sm:w-auto hover:bg-gray-300"
            href="https://github.com/xiaoluoboding/vue-library-starter"
            target="_blank"
          >
            <span>Documentation</span>
          </a>
          <a
            class="w-full flex cursor-pointer items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-lg text-white font-semibold transition sm:w-auto space-x-3 hover:bg-emerald-500"
            href="https://github.com/new?template_name=vue-library-starter&template_owner=xiaoluoboding"
            target="_blank"
          >
            <span>Use the template</span>
          </a>
        </div>
      </header>

      <main
        class="text-xs [&>pre]:(rounded-xl p-4) 2xl:text-sm"
        v-html="html"
      />
      <footer
        class="mt-16 w-full flex-center text-primary"
        text="slate-900 dark:slate-300 opacity-60 sm"
      >
        <div class="copyright flex flex-col items-center justify-center">
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
                href="https://twitter.com/xiaoluoboding" class="text-neon"
                target="_blank"
              >
                Follow me on Twitter
              </a>
            </span>
            <span class="px-2 text-emerald-300">|</span>
            <carbon:cafe class="text-emerald-500" />
            <span>
              <a
                href="https://www.buymeacoffee.com/xlbd" target="_blank"
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
                target="_blank" class="text-neon"
              >
                Sponsor me on GitHub
              </a>
            </span>
          </p>
        </div>
      </footer>

      <div class="mx-auto w-full" />
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
