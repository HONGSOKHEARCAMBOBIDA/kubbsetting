<script setup>
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
const year = new Date().getFullYear()
</script>

<template>
  <el-footer class="app-footer">
    <div class="container app-footer__inner">
      <div class="app-footer__brand">
        <span class="app-footer__name">{{ settingStore.get('app_name', 'School') }}</span>
        <p class="app-footer__address">{{ settingStore.get('address') }}</p>
      </div>

      <div class="app-footer__contact">
        <a v-if="settingStore.settings.phone" :href="`tel:${settingStore.settings.phone}`">
          {{ settingStore.settings.phone }}
        </a>
        <a v-if="settingStore.settings.email" :href="`mailto:${settingStore.settings.email}`">
          {{ settingStore.settings.email }}
        </a>
      </div>

      <div class="app-footer__social">
        <a
          v-if="settingStore.settings.telegram"
          :href="settingStore.settings.telegram"
          target="_blank"
          rel="noopener"
        >Telegram</a>
        <a
          v-if="settingStore.settings.facebook"
          :href="settingStore.settings.facebook"
          target="_blank"
          rel="noopener"
        >Facebook</a>
      </div>
    </div>

    <el-divider style="margin: 0" />

    <div class="container app-footer__bottom">
      &copy; {{ year }} {{ settingStore.get('app_name', 'School') }}. All rights reserved.
    </div>
  </el-footer>
</template>

<style lang="scss" scoped>
.app-footer {
  height: auto;
  background-color: var(--color-bg-soft);
  border-top: 1px solid var(--color-border);
  padding: 0;
  margin-top: 48px;
}

.app-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 32px;
  }
}

.app-footer__name {
  font-weight: 700;
  font-size: 18px;
}

.app-footer__address {
  color: var(--color-text-soft);
  font-size: 14px;
  margin: 6px 0 0;
}

.app-footer__contact,
.app-footer__social {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-soft);

  a:hover {
    color: var(--color-primary);
  }
}

.app-footer__bottom {
  padding: 16px 20px;
  font-size: 13px;
  color: var(--color-text-muted);
  text-align: center;

  @media (min-width: 768px) {
    padding: 20px 32px;
  }
}
</style>
