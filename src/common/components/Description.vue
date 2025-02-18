<script setup lang="ts">
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <h1 un-flex-y-center>
      <img src="/favicon.png" un-w-38px un-h-38px>
      <span un-ml-16px un-text-32px un-fw400>MobVue</span>
    </h1>
    <h2 un-color-hex-969799 un-text-14px un-fw400>
      {{ props.text }}
    </h2>
  </div>
</template>
