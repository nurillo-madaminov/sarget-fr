import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SingleCourseView from '@/views/SingleCourseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    document.getElementById('app').scrollIntoView();
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses/:id',
      name: 'courseDetails',
      component: SingleCourseView
    }
  ]
})

export default router
