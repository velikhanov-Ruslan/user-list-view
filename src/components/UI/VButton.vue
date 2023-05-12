<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

const emit = defineEmits<{
  (e: 'on_click'): void
}>()
</script>

<template>
  <button @click="emit('on_click')" class="v-button">
    <SvgIcon name="submit" />
  </button>
</template>

<style scoped lang="sass">
.v-button
  width: 40px
  height: 40px
  background: #FFD300
  display: flex
  align-items: center
  justify-content: center
</style>
