<script setup lang="ts">
const route = useRoute()

const title = computed(() => route.meta.title)

const showLeftArrow = computed(() => route.meta.layout?.navBar?.showLeftArrow)

function onClickLeft() {
  history.back()
}
</script>

<template>
  <van-nav-bar
    :title="title"
    :left-arrow="showLeftArrow"
    @click-left="onClickLeft"
    safe-area-inset-top placeholder fixed
  />
</template>
