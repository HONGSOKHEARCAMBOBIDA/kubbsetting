<script setup>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <section class="section container">
    <h1 class="section-title">អំពីយើង</h1>
    <p class="section-subtitle">
      {{ settingStore.get('about', settingStore.get('app_name', 'សាកលវិទ្យាល័យខេមរាវិទូ')) }}
    </p>
  </section>
</template>
