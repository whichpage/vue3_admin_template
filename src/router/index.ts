import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import NotFound from '@/views/404/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})
export default router