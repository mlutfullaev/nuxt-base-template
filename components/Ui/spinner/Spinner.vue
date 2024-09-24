<script lang="ts" setup="">
import { cn } from '~/lib/utils.lib'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="cn('animate-spin', props.class)"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
</template>

<style lang="scss" scoped>

</style>