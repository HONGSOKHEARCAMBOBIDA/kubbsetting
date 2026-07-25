import { defineStore } from 'pinia'

const STORAGE_KEY = 'school-cms-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: getInitialTheme()
  }),

  getters: {
    isDark: (state) => state.theme === 'dark'
  },

  actions: {
    apply() {
      document.documentElement.classList.toggle('dark', this.isDark)
    },
    toggle() {
      this.theme = this.isDark ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, this.theme)
      this.apply()
    },
    init() {
      this.apply()
    }
  }
})
