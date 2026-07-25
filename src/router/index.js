import { createRouter, createWebHistory } from 'vue-router'
import { useSettingStore } from '@/stores/setting'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { title: 'Home' }
      },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue'),
        meta: { title: 'Page Not Found' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Dynamic, SEO friendly page titles built from the sheet's app_name.
router.afterEach((to) => {
  const settingStore = useSettingStore()
  const appName = settingStore.settings.app_name || 'School'
  const pageTitle = to.meta?.title
  document.title = pageTitle ? `${pageTitle} | ${appName}` : appName
})

export default router
