<script setup lang="ts">
import UserForm from '@/components/UserForm.vue'
import { sections } from '@/common'
import type { User } from '@/models/User'

const props = defineProps<{
  info: User
}>()
</script>

<template>
  <div class="user-content container">
    <div class="user-content__section" v-for="section in sections" :key="section">
      <div class="user-content__title">{{ section.title }}</div>
      <UserForm :values="section.items" :info="info" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.user-content
  display: flex
  align-items: flex-start
  border: 1px solid #D9DBDA
  color: #696969

  &__section
    flex: 1 1 100%

  &__title
    padding: 11px 0
    font-size: 16px
    line-height: 19px
    text-transform: uppercase
</style>
