import { getIsDark, setIsDark } from "@@/utils/cache/local-storage"
import { setCssVar } from "@@/utils/css"

const isDark = ref<boolean>(getIsDark() === "true")

function changeDark({ clientX, clientY }: MouseEvent) {
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  )
  const documentElement = document.documentElement
  setCssVar("--mobvue-dark-x", `${clientX}px`, documentElement)
  setCssVar("--mobvue-dark-y", `${clientY}px`, documentElement)
  setCssVar("--mobvue-dark-r", `${maxRadius}px`, documentElement)
  const handler = () => {
    isDark.value = !isDark.value
  }
  document.startViewTransition ? document.startViewTransition(handler) : handler()
}

/** 初始化 */
function initDark() {
  // watchEffect 来收集副作用
  watchEffect(() => {
    document.documentElement.classList.toggle("dark", isDark.value)
    setIsDark(isDark.value)
  })
}

/** 黑暗模式 Composable */
export function useDark() {
  return { isDark, changeDark, initDark }
}
