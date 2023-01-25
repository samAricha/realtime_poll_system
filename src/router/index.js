import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Home',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Home',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/public-polls',
      name: 'public-polls',
      component: () => import('../views/PublicPolls.vue')
    },
    {
      path: '/create-poll',
      name: 'create-poll',
      component: () => import('../views/CreatePoll.vue'),
      meta: {requiresAuth: true}
    }
  ]
})

export default router
