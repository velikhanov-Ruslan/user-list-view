<script setup lang="ts">
import type { User } from '@/models/User'
import type { UserTitle } from '@/models/user-model'
import { ref } from 'vue'

const is_active_visible = ref<boolean>(false)

const props = defineProps<{
  data: User
  title_list: UserTitle[]
}>()
const emit = defineEmits<{
  (e: 'on_click_user', id: number): void
}>()

function handle_click_user() {
  is_active_visible.value = !is_active_visible.value
  emit('on_click_user', props.data.id)
}
</script>

<template>
  <div
    @click="handle_click_user"
    class="user-item"
    :class="{ active: is_active_visible }"
  >
    <template v-for="title in title_list" :key="title.value">
      <div class="user-item__text">
        {{ data[title.value] }}
      </div>
    </template>
  </div>
</template>

<style scoped lang="sass">
.user-item
  display: flex
  align-items: center
  font-size: 14px
  line-height: 16px
  padding: 12px 51px
  border: 1px solid #FFD200
  cursor: pointer
  position: relative

  &:after,
  &:before
    content: ''
    position: absolute
    display: block
    background: #FFD300
    transition: transform .2s ease

  &:after
    width: 12px
    height: 2px
    top: 50%
    transform: translateY(-50%) rotate(45deg)
    left: 10px


  &:before
    width: 12px
    height: 2px
    top: 50%
    transform: translateY(-50%) rotate(-45deg)
    left: 17px

  &__text
    flex: 1 1 100%

  &.active
    &:before
      transform: rotate(45deg)

    &:after
      transform: rotate(-45deg)
</style>
