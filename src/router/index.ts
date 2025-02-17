import type { RouteRecordRaw } from "vue-router"
import { registerNavigationGuard } from "@/router/guard"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH

const VITE_ROUTER_HISTORY = import.meta.env.VITE_ROUTER_HISTORY

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    name: "Home",
    meta: {
      title: "首页",
      layout: {
        navBar: {
          showNavBar: false,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "home-o"
        }
      }
    }
  },
  {
    path: "/me",
    component: () => import("@/pages/me/index.vue"),
    name: "Me",
    meta: {
      title: "我的",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "user-o"
        }
      }
    }
  }
]

export const demoRoutes: RouteRecordRaw[] = [
  {
    path: "/keep-alive",
    component: () => import("@/pages/demo/keep-alive.vue"),
    name: "KeepAlive",
    meta: {
      title: "路由缓存",
      keepAlive: true,
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/watermark",
    component: () => import("@/pages/demo/watermark.vue"),
    name: "Watermark",
    meta: {
      title: "带防御的水印",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  }
]

/** 路由实例 */
export const router = createRouter({
  history: VITE_ROUTER_HISTORY === "hash" ? createWebHashHistory(VITE_PUBLIC_PATH) : createWebHistory(VITE_PUBLIC_PATH),
  routes: [...routes, ...demoRoutes]
})

// 注册路由导航守卫
registerNavigationGuard(router)
