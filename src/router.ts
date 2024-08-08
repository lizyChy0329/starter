import { createRouter, createWebHashHistory } from 'vue-router'
import Page3 from './components/Page3.vue'

const Page1 = () => import('./components/Page1.vue')
const Page2 = () => import('./components/Page2.vue')
const Page4 = () => import('./components/Page4.vue')

const routes = [
  {
    path: '/',
    name: 'page1',
    component: Page1,
    meta: {
      zIndex: 1,
    },
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
  },
  {
    path: '/sub/page4',
    name: 'page4',
    component: Page4,
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

export default router
