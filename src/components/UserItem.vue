<script setup lang="ts">
import type { User } from '@/models/User'
import type { UserTitle } from '@/models/user-model'
import { ref } from 'vue'
import UserContent from '@/components/UserContent.vue'

const is_active_visible = ref<boolean>(false)

const props = defineProps<{
  data: User
  title_list: UserTitle[]
}>()

const db_data = ref(props.data)

function handle_click_user() {
  is_active_visible.value = !is_active_visible.value
}
</script>

<template>
  <div
    @click="handle_click_user"
    class="user-item"
    :class="{ active: is_active_visible }"
  >
    <div class="user-item__head">
      <template v-for="title in title_list" :key="title.value">
        <div class="user-item__text">
          {{ data[title.value] }}
        </div>
      </template>
    </div>
  </div>
  <UserContent v-if="is_active_visible" :info="db_data" />
</template>

<style scoped lang="sass">
.user-item
  font-size: 14px
  line-height: 16px
  padding: 12px 51px
  border: 1px solid #FFD200
  cursor: pointer
  position: relative
  color: #696969

  &__head
    display: flex
    align-items: center


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
