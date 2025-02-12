<script lang="ts" setup></script>

<template>
  <div h-full flex select-none text-center uno-padding-20 all:transition-400>
    <div ma>
      <div animate-bounce-alt animate-duration-1s animate-count-infinite text-5xl fw100>
        UnoCSS
      </div>
      <div m1 text-lg fw300 op30 dark:op60>
        该页面是一个 UnoCSS 的使用案例
      </div>
      <div m2 uno-flex-x-center text-lg op30 hover="op80" dark:op60 dark:hover="op80">
        <a href="https://antfu.me/posts/reimagine-atomic-css-zh" target="_blank">
          推荐阅读：重新构想原子化 CSS
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
