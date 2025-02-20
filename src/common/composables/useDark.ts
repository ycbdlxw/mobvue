import { getIsDark, setIsDark } from "@@/utils/cache/local-storage"

const isDark = ref<boolean>(getIsDark() === "true")

/** 初始化 */
function initDark() {
  // watchEffect 来收集副作用
  watchEffect(() => {
    document.documentElement.classList.toggle("dark", isDark.value)
    setIsDark(isDark.value)
  })
}

export function useDark() {
  return { isDark, initDark }
}
