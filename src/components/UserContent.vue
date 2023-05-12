<script setup lang="ts">
import UserForm from '@/components/UserForm.vue'
import { sections } from '@/common'
import type { User } from '@/models/User'
import VButton from '@/components/UI/VButton.vue'
import { ref } from 'vue'

const props = defineProps<{
  info: User
}>()

const form_data = ref(props.info)
function create_data(data, name): void {
  switch (name) {
    case 'street':
      form_data.value.address[name] = data
      break

    case 'suite':
      form_data.value.address[name] = data
      break

    case 'city':
      form_data.value.address[name] = data
      break

    case 'zipcode':
      form_data.value.address[name] = data
      break

    case 'name':
      form_data.value.company[name] = data
      break

    case 'catchPhrase':
      form_data.value.company[name] = data
      break

    case 'bs':
      form_data.value.company[name] = data
      break

    case 'person':
      form_data.value.name = data
      break

    case 'username':
      form_data.value[name] = data
      break

    case 'email':
      form_data.value[name] = data
      break

    case 'phone':
      form_data.value[name] = data
      break

    case 'website':
      form_data.value[name] = data
      break
  }
}
function handle_submit_data() {
  alert(JSON.stringify(form_data.value, null, 4))
}
</script>

<template>
  <div class="user-content">
    <div class="user-content__section" v-for="section in sections" :key="section.title">
      <div class="user-content__title">{{ section.title }}</div>
      <UserForm
        :values="section.items"
        :info="info"
        @on_input="(data, name) => create_data(data, name)"
      />
    </div>
    <VButton class="user-content__btn" @on_click="handle_submit_data" />
  </div>
</template>

<style scoped lang="sass">
.user-content
  display: flex
  align-items: flex-start
  border: 1px solid #D9DBDA
  color: #696969
  width: 90%
  margin: 0 auto
  position: relative

  &__section
    flex: 1 1 100%
    align-self: stretch

    &:not(:last-child)
      border-right: 1px solid #D9DBDA

  &__title
    padding: 11px 32px
    font-size: 16px
    line-height: 19px
    text-transform: uppercase
    border-bottom: 1px solid #D9DBDA

  &__btn
    position: absolute
    right: -50px
</style>
