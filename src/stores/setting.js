import { defineStore } from 'pinia'
import { clearSettingsCache, loadSettings } from '@/composables/useSetting'

export const useSettingStore = defineStore('setting', {
  state: () => ({ settings: {}, isLoading: false, error: null, loaded: false }),
  getters: {
    get: (state) => (key, fallback = '') => state.settings[key] ?? fallback
  },
  actions: {
    async load(force = false) {
      if (this.loaded && !force) return
      this.isLoading = true
      this.error = null
      try {
        this.settings = await loadSettings(force)
        this.loaded = true
      } catch (error) {
        this.error = error.message || 'Failed to load settings.'
      } finally {
        this.isLoading = false
      }
    },
    async retry() {
      clearSettingsCache()
      this.loaded = false
      await this.load(true)
    }
  }
})
