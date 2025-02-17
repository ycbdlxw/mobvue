<script setup lang="ts">
defineOptions({
  name: "KeepAlive"
})

const value = ref<string>("")
</script>

<template>
  <div un-p-20px>
    <van-cell-group inset>
      <van-field v-model="value" placeholder="请输入" />
    </van-cell-group>
  </div>
</template>
