<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, Moon, Sunny } from '@element-plus/icons-vue'
import { useSettingStore } from '@/stores/setting'
import { useThemeStore } from '@/stores/theme'

const settingStore = useSettingStore()
const themeStore = useThemeStore()
const route = useRoute()

const drawerVisible = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
]

const activeIndex = computed(() => route.path)

function closeDrawer() {
  drawerVisible.value = false
}
</script>

<template>
  <el-header class="app-header">
    <div class="container app-header__inner">
      <router-link to="/" class="app-header__brand">
        <el-image
          v-if="settingStore.settings.logo"
          :src="settingStore.settings.logo"
          class="app-header__logo"
          fit="cover"
        />
        <span class="app-header__name">{{ settingStore.get('app_name', 'School') }}</span>
      </router-link>

      <!-- Desktop horizontal navigation -->
      <el-menu
        class="app-header__menu"
        mode="horizontal"
        :ellipsis="false"
        :default-active="activeIndex"
        router
      >
        <el-menu-item v-for="item in navItems" :key="item.to" :index="item.to" :route="item.to">
          {{ item.label }}
        </el-menu-item>
      </el-menu>

      <div class="app-header__actions">
        <el-button
          class="app-header__theme-toggle"
          circle
          :icon="themeStore.isDark ? Sunny : Moon"
          @click="themeStore.toggle"
          aria-label="Toggle theme"
        />

        <!-- Mobile hamburger -->
        <el-button
          class="app-header__hamburger"
          circle
          :icon="Menu"
          aria-label="Open menu"
          @click="drawerVisible = true"
        />
      </div>
    </div>

    <!-- Mobile drawer navigation -->
    <el-drawer
      v-model="drawerVisible"
      direction="rtl"
      size="72%"
      :with-header="false"
      class="app-header__drawer"
    >
      <div class="drawer-brand">
        <el-image
          v-if="settingStore.settings.logo"
          :src="settingStore.settings.logo"
          class="app-header__logo"
          fit="cover"
        />
        <span>{{ settingStore.get('app_name', 'School') }}</span>
      </div>
      <el-menu :default-active="activeIndex" router @select="closeDrawer">
        <el-menu-item v-for="item in navItems" :key="item.to" :index="item.to" :route="item.to">
          {{ item.label }}
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </el-header>
</template>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
  padding: 0;
}

.app-header__inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: 24px;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.app-header__logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  flex-shrink: 0;
}

.app-header__menu {
  flex: 1;
  border-bottom: none;
  background: transparent;
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.app-header__hamburger {
  @media (min-width: 992px) {
    display: none;
  }
}

.drawer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 4px 20px;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 12px;
}
</style>
