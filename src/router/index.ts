import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('../views/01-basic.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

