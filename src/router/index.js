import SignIn from '@/views/Auth/SignIn.vue'
import SignUp from '@/views/Auth/SignUp.vue'
import Dashboard from '@/views/Dashboard.vue'
import Home from '@/views/Home.vue'
import Task from '@/views/Task.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: Dashboard,
      component: Dashboard
    },
    {
      path: '/task',
      name: Task,
      component: Task
    }
  ]
})

export default router
