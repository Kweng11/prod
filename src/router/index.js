import { createRouter, createWebHistory } from 'vue-router'
import finexo from '../views/Finexo.vue'
import kira from '../views/Kira.vue'

const routes = [
  {
    path: '/',
    name: 'finexo',
    component: finexo
  },
  {
    path: '/manage',
    name: 'kira',
    component: kira
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
