<script setup>
import { useSettingStore } from '@/stores/setting'
import HeroSection from '@/components/HeroSection.vue'

const settingStore = useSettingStore()

const highlights = [
  {
    title: 'Lap Computer Wifi Password',
    description: '13032023'
  },
  {
    title: 'Library Wifi Password',
    description: 'library5256'
  },
  {
    title: 'khemarak.BTB 001',
    description: '012825256'
  },
  {
    title: 'KU Office',
    description: 'kubb825256'
  },
  {
    title: 'khemarak.BTB 002',
    description: '012825256'
  },
    {
    title: 'KU BB-2',
    description: '012825256'
  },

]
</script>

<template>
  <div class="home">
    <HeroSection />

    <section class="section container">
      <h2 class="section-title">{{ settingStore.get('app_name', 'Us') }}</h2>
      <p class="section-subtitle">
        Setting of  {{ settingStore.get('app_name', 'our school') }}.
      </p>

      <el-row :gutter="20">
        <el-col
          v-for="item in highlights"
          :key="item.title"
          :xs="24"
          :sm="12"
          :md="8"
          style="margin-bottom: 20px"
        >
          <el-card shadow="never">
            <h3 class="highlight-card__title">{{ item.title }}</h3>
            <p class="highlight-card__desc">{{ item.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style scoped>
.highlight-card__title {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 700;
  color: var(--color-text-soft);
}

.highlight-card__desc {
  margin: 0;
  color: var(--color-text-soft);
  font-size: 14px;
  line-height: 1.6;
}
</style>
