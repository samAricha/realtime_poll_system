import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/firebaseConfig'
import NotFoundView from "@/views/NotFoundView.vue";

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
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/public-polls',
      name: 'public-polls',
      component: () => import('../views/PublicPolls.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/create-poll',
      name: 'create-poll',
      component: () => import('../views/CreatePoll.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if(isAuthRequired  && !isAuthenticated) next({name: 'login'})
  else next()
})
export default router
