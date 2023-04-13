import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayModules from '../views/DisplayModules.vue'
import ManageCurriculum from '../views/ManageCurriculum.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: DisplayModules
    },
    { 
      path: '/curriculum/manage',
      name: 'manage',
      component: ManageCurriculum
    }
  ]
})

export default router
