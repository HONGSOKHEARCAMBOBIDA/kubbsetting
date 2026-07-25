<script setup>
import { useSettingStore } from '@/stores/setting'
import ContactCard from '@/components/ContactCard.vue'

const settingStore = useSettingStore()
</script>

<template>
  <div class="contact section container">
    <h1 class="section-title">Get In Touch</h1>
    <p class="section-subtitle">
      Reach out to {{ settingStore.get('app_name', 'us') }} through any of the channels below.
    </p>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" style="margin-bottom: 20px">
        <ContactCard
          icon="📞"
          label="Phone"
          :value="settingStore.settings.phone"
          :href="settingStore.settings.phone ? `tel:${settingStore.settings.phone}` : ''"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" style="margin-bottom: 20px">
        <ContactCard
          icon="✉️"
          label="Email"
          :value="settingStore.settings.email"
          :href="settingStore.settings.email ? `mailto:${settingStore.settings.email}` : ''"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" style="margin-bottom: 20px">
        <ContactCard icon="📍" label="Address" :value="settingStore.settings.address" />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" style="margin-bottom: 20px">
        <ContactCard
          icon="💬"
          label="Telegram"
          :value="settingStore.settings.telegram"
          :href="settingStore.settings.telegram"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" style="margin-bottom: 20px">
        <ContactCard
          icon="📘"
          label="Facebook"
          :value="settingStore.settings.facebook"
          :href="settingStore.settings.facebook"
        />
      </el-col>
    </el-row>
  </div>
</template>
