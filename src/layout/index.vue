<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import Tabbar from "./components/Tabbar.vue"

const route = useRoute()

const showNavBar = computed(() => route.meta.layout?.navBar?.showNavBar)

const showTabbar = computed(() => route.meta.layout?.tabbar?.showTabbar)
</script>

<template>
  <div un-h-full un-flex un-flex-col>
    <NavBar v-if="showNavBar" />
    <div un-flex-1 un-overflow-y-auto>
      <router-view />
    </div>
    <Tabbar v-if="showTabbar" />
  </div>
</template>
