import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import caseView from '../views/CaseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/caseView',
    name: 'caseView',
    component: caseView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
