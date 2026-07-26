<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <el-container class="app-shell">
    <AppHeader />
    <el-main class="app-shell__main">
      <router-view />
    </el-main>
    <AppFooter />
    <el-backtop :right="24" :bottom="24" />
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
