<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useSettingStore } from '@/stores/setting'

const themeStore = useThemeStore()
const settingStore = useSettingStore()

onMounted(() => {
  themeStore.init()
  settingStore.load()
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
