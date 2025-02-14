<script setup lang="ts">
import { demoRoutes } from "@/router"
import Cell from "./components/Cell.vue"
</script>

<template>
  <div un-px-20px un-py-26px un-select-none>
    <div un-pl-16px>
      <h1 un-flex-y-center>
        <img src="/favicon.png" un-w-38px un-h-38px>
        <span un-ml-16px un-text-32px un-fw400>MobVue</span>
      </h1>
      <h2 un-color-hex-969799 un-text-14px un-fw400>
        一个精心制作的移动端 H5 模板
      </h2>
    </div>
    <div un-mt-40px>
      <span un-pl-16px un-color-hex-969799 un-text-14px un-fw400>
        示例集合
      </span>
      <Cell
        v-for="route in demoRoutes"
        :key="route.path"
        :title="route.meta?.title || ''"
        :path="route.path"
        un-mt-12px
      />
    </div>
  </div>
</template>
