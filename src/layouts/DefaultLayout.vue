<script setup>
import { onMounted } from 'vue'
import { useSettingStore } from '@/stores/setting'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Loading from '@/components/Loading.vue'
import ErrorState from '@/components/ErrorState.vue'

const settingStore = useSettingStore()

onMounted(() => {
  settingStore.load()
})
</script>

<template>
  <el-container class="app-shell">
    <Loading v-if="settingStore.isLoading" />

    <ErrorState
      v-else-if="settingStore.error"
      :message="settingStore.error"
      @retry="settingStore.retry"
    />

    <template v-else>
      <AppHeader />
      <el-main class="app-shell__main">
        <router-view />
      </el-main>
      <AppFooter />
      <el-backtop :right="24" :bottom="24" />
    </template>
  </el-container>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-shell__main {
  padding: 0;
  flex: 1;
}
</style>
