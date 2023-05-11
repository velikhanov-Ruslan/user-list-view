<template>
  <form>
    <VInput v-for="value in values" :key="value.name" :data="value" />
  </form>
</template>

<script setup lang="ts">
import VInput from '@/components/UI/VInput.vue'
import type { User } from '@/models/User'

const props = defineProps<{
  values: object[]
  info: User
}>()
</script>

<style scoped lang="sass"></style>
