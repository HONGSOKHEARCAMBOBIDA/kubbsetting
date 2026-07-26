<script setup>
import { Message, Location, Phone } from '@element-plus/icons-vue'
import ContactCard from '@/components/ContactCard.vue'
import { useSettingStore } from '@/stores/setting'

const settingStore = useSettingStore()
</script>

<template>
  <section class="section container">
    <h1 class="section-title">ទំនាក់ទំនង</h1>
    <p class="section-subtitle">ព័ត៌មានសម្រាប់ទំនាក់ទំនងជាមួយសាកលវិទ្យាល័យ។</p>
    <el-row :gutter="20" class="contact-grid">
      <el-col :xs="24" :md="8"><ContactCard label="Phone" :value="settingStore.get('phone')" :href="settingStore.get('phone') ? `tel:${settingStore.get('phone')}` : ''"><template #icon><el-icon><Phone /></el-icon></template></ContactCard></el-col>
      <el-col :xs="24" :md="8"><ContactCard label="Email" :value="settingStore.get('email')" :href="settingStore.get('email') ? `mailto:${settingStore.get('email')}` : ''"><template #icon><el-icon><Message /></el-icon></template></ContactCard></el-col>
      <el-col :xs="24" :md="8"><ContactCard label="Address" :value="settingStore.get('address')"><template #icon><el-icon><Location /></el-icon></template></ContactCard></el-col>
    </el-row>
  </section>
</template>

<style scoped>
.contact-grid :deep(.el-col) { margin-bottom: 20px; }
</style>
