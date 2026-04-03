<script setup lang="ts">
const mode = computed(() => {
  return isDark.value ? 'dark' : 'light'
})
</script>

<template>
  <van-config-provider :theme="mode">
    <section class="auth-wrapper">
      <router-view />
    </section>
  </van-config-provider>
</template>

<style scoped>
.auth-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 16px;
}
</style>
