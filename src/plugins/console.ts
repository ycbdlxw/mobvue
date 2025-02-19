import VConsole from "vconsole"

export function installConsole() {
  import.meta.env.VITE_CONSOLE && new VConsole()
}
