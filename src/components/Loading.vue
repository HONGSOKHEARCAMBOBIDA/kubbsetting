<script setup>
defineProps({
  rows: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <div class="loading-skeleton container">
    <el-skeleton :rows="rows" animated style="margin-top: 32px">
      <template #template>
        <el-skeleton-item variant="image" style="width: 100%; height: 240px; border-radius: 20px" />
        <div style="padding: 24px 0; display: flex; flex-direction: column; gap: 12px">
          <el-skeleton-item variant="h3" style="width: 45%" />
          <el-skeleton-item variant="text" style="width: 90%" />
          <el-skeleton-item variant="text" style="width: 80%" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped>
.loading-skeleton {
  padding-top: 32px;
}
</style>
