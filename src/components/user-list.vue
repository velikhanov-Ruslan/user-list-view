<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { get_user_list } from '@/services/users/users'
import type { User } from '@/models/User'
import UserItem from '@/components/UserItem.vue'
import type { UserTitle } from '@/models/user-model'

const db_user_list = ref([])
const titles = ref<UserTitle[]>([
  { value: 'name', text: 'Name' },
  { value: 'email', text: 'Email' },
  { value: 'phone', text: 'Phone' },
  { value: 'website', text: 'Website' }
])
onBeforeMount(async () => {
  try {
    const response = await get_user_list<User[]>('/users')
    db_user_list.value = response.data || []
  } catch (e) {
    console.log(e)
  }
})

function on_click_user(id: number): void {
  console.log(id)
}
</script>

<template>
  <div class="user-list">
    <div v-for="(item, idx) in titles" :key="idx" class="user-list__content">
      {{ item.text }}
    </div>
  </div>
  <div class="user-list__items">
    <UserItem
      v-for="user in db_user_list"
      :key="user.id"
      :data="user"
      :title_list="titles"
      @on_click_user="on_click_user"
    />
  </div>
</template>

<style scoped lang="sass">
.user-list
  display: flex
  align-items: center
  font-size: 14px
  line-height: 16px
  padding: 12px 51px

  &__content
    flex: 1 1 100%

  &__items
    display: flex
    flex-direction: column
    gap: 10px
</style>
