<script setup>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <div class="about section container">
    <h1 class="section-title">About {{ settingStore.get('app_name', 'Us') }}</h1>
    <p class="section-subtitle">{{ settingStore.get('hero_description') }}</p>

    <el-card shadow="never" class="about__card">
      <p>
        {{ settingStore.get('app_name', 'Our school') }} is committed to providing a supportive
        and modern learning environment for every student. Located in
        {{ settingStore.get('address', 'our community') }}, we welcome families who value
        quality education and personal growth.
      </p>
    </el-card>
  </div>
</template>

<style scoped>
.about__card {
  line-height: 1.7;
  color: var(--color-text-soft);
}
</style>
