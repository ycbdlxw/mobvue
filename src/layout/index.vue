<script setup lang="ts">
import { isString } from "@/common/utils/validate"
import NavBar from "./components/NavBar.vue"
import Tabbar from "./components/Tabbar.vue"

const route = useRoute()

const keepAliveList = ref<string[]>([])

const showNavBar = computed(() => route.meta.layout?.navBar?.showNavBar)

const showTabbar = computed(() => route.meta.layout?.tabbar?.showTabbar)

watch(
  () => route.path,
  () => {
    const keepAlive = route.meta.keepAlive
    const name = route.name
    if (keepAlive && name && isString(name) && !keepAliveList.value.includes(name)) {
      keepAliveList.value.push(name)
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div un-h-full un-flex un-flex-col>
    <NavBar v-if="showNavBar" />
    <div un-flex-1 un-overflow-y-auto>
      <!-- key 采用 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用 -->
      <router-view v-slot="{ Component }">
        <transition name="van-fade" mode="out-in" appear>
          <keep-alive :include="keepAliveList">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <Tabbar v-if="showTabbar" />
  </div>
</template>
