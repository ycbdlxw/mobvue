<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import Tabbar from "./components/Tabbar.vue"

const route = useRoute()

const showNavBar = computed(() => route.meta.layout?.navBar?.showNavBar)

const showTabbar = computed(() => route.meta.layout?.tabbar?.showTabbar)
</script>

<template>
  <NavBar v-if="showNavBar" />
  <router-view overflow-y-auto />
  <Tabbar v-if="showTabbar" />
</template>

<style scoped></style>
