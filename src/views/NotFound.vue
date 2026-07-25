<script setup></script>

<template>
  <div class="not-found container section">
    <el-result icon="info" title="404" sub-title="This page doesn't exist.">
      <template #extra>
        <router-link to="/">
          <el-button type="primary" round>Back to Home</el-button>
        </router-link>
      </template>
    </el-result>
  </div>
</template>
