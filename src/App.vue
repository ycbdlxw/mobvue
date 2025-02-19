<script setup lang="ts">
import Layout from "@/layout/index.vue"
import { useUserStore } from "@/pinia/stores/user"

const userStore = useUserStore()

watch(
  () => userStore.token,
  (newVal) => {
    newVal && userStore.getInfo()
  },
  {
    immediate: true
  }
)
</script>

<template>
  <Layout v-if="userStore.username" />
  <div v-else un-h-full un-flex-center>
    <van-loading>加载中...</van-loading>
  </div>
</template>
