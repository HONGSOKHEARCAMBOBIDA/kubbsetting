<script setup>
defineProps({
  message: {
    type: String,
    default: 'Something went wrong while loading content.'
  }
})

const emit = defineEmits(['retry'])
</script>

<template>
  <div class="error-state container">
    <el-result icon="warning" title="Unable to load content" :sub-title="message">
      <template #extra>
        <el-button type="primary" round @click="emit('retry')">Retry</el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>
.error-state {
  padding: 64px 0;
}
</style>
