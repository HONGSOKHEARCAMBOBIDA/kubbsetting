<script setup>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <section class="hero">
    <div
      class="hero__bg"
      :style="settingStore.settings.banner ? { backgroundImage: `url(${settingStore.settings.banner})` } : {}"
    />
    <div class="hero__overlay" />

    <div class="container hero__content">
      <h1 class="hero__title">{{ settingStore.get('hero_title', 'Welcome') }}</h1>
      <p class="hero__description">{{ settingStore.get('hero_description') }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 360px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;

  @media (min-width: 768px) {
    min-height: 480px;
  }
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-color: var(--color-primary-dark);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 30, 48, 0.55) 0%, rgba(20, 30, 48, 0.75) 100%);
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 56px;
  padding-bottom: 56px;
}

.hero__title {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 46px;
  }
}

.hero__description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 560px;
  margin: 0 0 28px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
