import { pinia } from "@/pinia"

export const useDemoStore = defineStore("demo", () => {
  const text = ref<string>("")

  return { text }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useUserStoreOutside() {
  return useDemoStore(pinia)
}
