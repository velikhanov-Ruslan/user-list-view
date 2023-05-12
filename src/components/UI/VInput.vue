<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'input', value: string, name: string): void
}>()
defineProps<{
  modelValue: string
  label: string
  name: string
}>()

function on_input(value: string, name: string): void {
  emit('input', value, name)
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="v-input">
    <span>{{ label }}</span>
    <input
      :name="name"
      type="text"
      placeholder="Введите"
      @input="on_input($event.target.value, name)"
      :value="modelValue"
    />
  </div>
</template>

<style scoped lang="sass">
.v-input
  display: flex
  flex-direction: column
  gap: 7px
  color: #696969
  margin-bottom: 10px

  span
    font-size: 12px
    line-height: 14px

  input
    padding: 10px 17px
    font-size: 14px
    line-height: 16px
    border: 1px solid #D9DBDA
</style>
