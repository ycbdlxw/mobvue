import "vue-router"

export {}

declare module "vue-router" {
  interface RouteMeta {
    /**
     * @description 页面标题
     */
    title?: string
    /**
     * @description 布局配置
     */
    layout?: {
      /**
       * @description NavBar 配置
       */
      navBar?: {
        /**
         * @description 是否显示 NavBar
         * @default false
         */
        showNavBar?: boolean
        /**
         * @description 是否显示左侧箭头
         * @default false
         */
        showLeftArrow?: boolean
      }
      tabbar?: {
        /**
         * @description 是否显示 Tabbar
         * @default false
         */
        showTabbar?: boolean
        /**
         * @description 图标
         */
        icon?: string
      }
    }
  }
}
