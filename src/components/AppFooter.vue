<script setup>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <footer class="app-footer">
    <div class="container">© {{ new Date().getFullYear() }} {{ settingStore.get('app_name', 'សាកលវិទ្យាល័យខេមរាវិទូ') }}</div>
  </footer>
</template>

<style scoped>
.app-footer { padding: 24px 0; color: var(--color-text-soft); background: var(--color-bg-soft); text-align: center; }
</style>
