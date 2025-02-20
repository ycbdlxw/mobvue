<script setup lang="ts">
import Layout from "@/layout/index.vue"
import { useUserStore } from "@/pinia/stores/user"
import { useDark } from "@@/composables/useDark"

const userStore = useUserStore()

const { initDark } = useDark()

const isLoading = computed(() => userStore.token && !userStore.username)

watch(
  () => userStore.token,
  (newVal) => {
    newVal && userStore.getInfo()
  },
  {
    immediate: true
  }
)

initDark()
</script>

<template>
  <div v-if="isLoading" un-h-full un-flex-center>
    <van-loading>加载中...</van-loading>
  </div>
  <Layout v-else />
</template>
