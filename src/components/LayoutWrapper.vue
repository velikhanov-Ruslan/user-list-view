<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Users</h1>
    </div>
  </header>
  <div class="container">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.header
  border-bottom: 1px solid #727270
  margin-bottom: 30px

  &__title
    padding: 24px 0 30px 0
    font-size: 20px
    line-height: 23px
    font-weight: 500
    text-transform: uppercase
</style>
