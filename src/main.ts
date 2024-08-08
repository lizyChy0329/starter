import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'
import RouterViewTransition from '@lizychy0329/cupertino-page-router'
import '@lizychy0329/cupertino-page-router/style.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).use(RouterViewTransition).mount('#app')
