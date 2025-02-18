import type { Router } from "vue-router"
import { isWhiteList } from "@/router/whitelist"
import { useTitle } from "@@/composables/useTitle"
import { getToken } from "@@/utils/cache/cookies"
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false })

const { setTitle } = useTitle()

export function registerNavigationGuard(router: Router) {
  // 全局前置守卫
  router.beforeEach((to, _from) => {
    NProgress.start()
    // 如果没有登录
    if (!getToken()) {
      // 如果在免登录的白名单中，则直接进入
      if (isWhiteList(to)) return true
      // 其他没有访问权限的页面将被重定向到登录页面
      return "/login"
    }
    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    if (to.path === "/login") return "/"
    // 无限制访问
    return true
  })
  // 全局后置钩子
  router.afterEach((to) => {
    setTitle(to.meta.title)
    NProgress.done()
  })
}
