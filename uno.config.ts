import presetRemToPx from "@unocss/preset-rem-to-px"
import { defineConfig, presetAttributify, presetUno } from "unocss"

export default defineConfig({
  // 预设
  presets: [
    // 属性化模式 & 无值的属性模式
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true
    }),
    // 默认预设
    presetUno({
      important: "#app"
    }),
    // 将 unocss 默认采用的 rem 单位转为 px 单位
    presetRemToPx()
  ],
  // 自定义规则
  rules: [
    // use class="after-clearfix"
    ["clearfix", { content: "''", display: "table", clear: "both" }],
    // use class="no-select"
    ["no-select", { "user-select": "none", "touch-action": "none" }],
    // use class="ellipsis"
    ["ellipsis", { "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }],
    // use class="multi-ellipsis-2"
    [/^multi-ellipsis-(\d+)$/, ([, d]) => ({ "display": "-webkit-box", "-webkit-line-clamp": d, "-webkit-box-orient": "vertical", "overflow": "hidden", "text-overflow": "ellipsis" })]
  ],
  // 自定义快捷方式
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-center": "flex justify-center items-center",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center"
  }
})
