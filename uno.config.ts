import presetRemToPx from "@unocss/preset-rem-to-px"
import { defineConfig, presetAttributify, presetUno } from "unocss"

export default defineConfig({
  // 预设
  presets: [
    // 属性化模式 & 无值的属性模式
    presetAttributify(),
    // 默认预设
    presetUno({
      important: "#app"
    }),
    // 将 unocss 默认采用的 rem 单位转为 px 单位
    presetRemToPx()
  ],
  // 自定义规则
  rules: [
    ["uno-padding-20", { padding: "20px" }]
  ],
  // 自定义快捷方式
  shortcuts: {
    "uno-wh-full": "w-full h-full",
    "uno-flex-center": "flex justify-center items-center",
    "uno-flex-x-center": "flex justify-center",
    "uno-flex-y-center": "flex items-center"
  }
})
