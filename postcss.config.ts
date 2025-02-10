export default {
  plugins: {
    "postcss-mobile-forever": {
      // UI 设计稿宽度
      viewportWidth: (file: string) => file.includes("vant") ? 375 : 750,
      // 限制视图的最大宽度
      maxDisplayWidth: 600,
      // 页面最外层选择器
      appSelector: "#app",
      // 是否对「页面最外层选择器」对应的元素进行描边
      border: true
    }
  }
}
