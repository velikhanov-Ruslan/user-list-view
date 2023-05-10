<script setup lang="ts">
import '@/assets/reset.css'
import '@/assets/common.sass'
import HomeView from '@/views/HomeView.vue'
import LayoutWrapper from '@/components/LayoutWrapper.vue'
</script>

<template>
  <LayoutWrapper>
    <template #content>
      <HomeView />
    </template>
  </LayoutWrapper>
</template>

<style scoped></style>
