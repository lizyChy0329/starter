import { resolve } from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import libCss from '@bimdata/vite-plugin-libcss'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const userConfig: UserConfig = {}

  const defaultPlugins = [
    vue(),
    UnoCSS({
      mode: 'per-module',
    }),
    Components({
      dts: true,
    }),
  ]

  if (mode === 'lib') {
    userConfig.build = {
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: 'VueLibraryStarter',
        fileName: 'index',
      },
      outDir: 'lib',
      emptyOutDir: true,
      cssCodeSplit: false,
      sourcemap: true,
      rollupOptions: {
        external: ['vue'],
      },
    }
    userConfig.plugins = [
      ...defaultPlugins,
      libCss({
        include: 'packages/**/*',
      }),
    ]
  }

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './packages'),
        '~': resolve(__dirname, './src'),
      },
    },
    plugins: [...defaultPlugins],
    ...userConfig,
  }
})
