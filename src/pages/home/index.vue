<script setup lang="ts">
import { demoRoutes } from "@/router"
import Description from "@@/components/Description.vue"
import Cell from "./components/Cell.vue"
</script>

<template>
  <div un-px-20px un-py-26px un-select-none>
    <Description un-pl-16px />
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
      <van-divider>🔥 更多优秀示例，期待你的 PR 👏🏻</van-divider>
    </div>
  </div>
</template>
