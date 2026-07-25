<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <el-card v-if="value" shadow="never" class="contact-card">
    <div class="contact-card__inner">
      <div class="contact-card__icon">
        <slot name="icon">{{ icon }}</slot>
      </div>
      <div class="contact-card__text">
        <p class="contact-card__label">{{ label }}</p>
        <a v-if="href" :href="href" target="_blank" rel="noopener" class="contact-card__value">
          {{ value }}
        </a>
        <span v-else class="contact-card__value">{{ value }}</span>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.contact-card {
  height: 100%;
}

.contact-card__inner {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-card__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(64, 158, 255, 0.12);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
}

.contact-card__label {
  margin: 0 0 4px;
  font-size: 13px;
  color: var(--color-text-muted);
}

.contact-card__value {
  font-size: 15px;
  font-weight: 600;
  word-break: break-word;

  &:hover {
    color: var(--color-primary);
  }
}
</style>
