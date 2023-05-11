<script setup lang="ts">
import type { UserContent } from '@/models/user-model'

const props = defineProps<{
  data: Pick<UserContent, object>
}>()
</script>

<template>
  <div class="v-input">
    <span>{{ data.name }}</span>
    <input type="text" />
  </div>
</template>

<style scoped></style>
