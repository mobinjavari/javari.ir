import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: 'Welcome to my personal website. I\'m a software developer specializing in web development and open source projects.'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView,
      meta: {
        title: 'Blog',
        description: 'Read my latest thoughts and insights about software development, web technologies, and open source.'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404 Not Found'
      }
    }
  ]
})

export default router
