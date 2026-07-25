import { defineStore } from 'pinia'
import { loadSettings, clearSettingsCache } from '@/composables/useSetting'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    settings: {},
    isLoading: false,
    error: null,
    loaded: false
  }),

  getters: {
    // Fallback-safe getter so templates never break on a missing key.
    get: (state) => (key, fallback = '') => state.settings[key] ?? fallback
  },

  actions: {
    /**
     * Loads settings from the Google Sheet into the store.
     * Safe to call multiple times; only refetches when forced
     * or when it hasn't loaded successfully yet.
     */
    async load(force = false) {
      if (this.loaded && !force) return

      this.isLoading = true
      this.error = null

      try {
        this.settings = await loadSettings(force)
        this.loaded = true
      } catch (err) {
        this.error = err.message || 'Failed to load settings.'
        this.loaded = false
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Forces a fresh fetch, bypassing any cache.
     */
    async retry() {
      clearSettingsCache()
      await this.load(true)
    }
  }
})
