<script setup lang="ts">
import VInput from '@/components/UI/VInput.vue'
import type { User } from '@/models/User'
import { onBeforeMount, ref } from 'vue'
import recursive_traversal from '@/helpers/recursive_traversal'

const props = defineProps<{
  values: object[]
  info: User
}>()

const emit = defineEmits<{
  (e: 'on_input', data: string | number, name: string): void
}>()

const input_values = ref({})

onBeforeMount(() => {
  input_values.value = recursive_traversal(props.info)
})
</script>

<template>
  <form class="user-form">
    <template v-for="value in values" :key="value.name">
      <VInput
        :name="value.value"
        :label="value.name"
        v-model="input_values[value.value]"
        @input="(data, name) => emit('on_input', data, name)"
      />
    </template>
  </form>
</template>

<style scoped lang="sass">
.user-form
  padding: 18px 32px
</style>
