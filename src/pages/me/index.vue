<script setup lang="ts">
import { useUserStore } from "@/pinia/stores/user"

const router = useRouter()

const userStore = useUserStore()

function onClick() {
  showToast("更多功能，敬请期待 ~")
}

function onLogout() {
  userStore.resetToken()
  router.push("/login")
}
</script>

<template>
  <div un-py-16px>
    <van-cell-group un-mb-8px>
      <van-cell size="large" is-link center @click="onClick">
        <template #title>
          <div un-flex-y-center un-gap-16px>
            <van-image src="/favicon.png" un-w-44px un-h-44px />
            <div un-flex un-flex-col>
              <span un-fw-600>{{ userStore.username }}</span>
              <span un-text-14px un-color-hex-969799>个人资料</span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group un-mb-8px>
      <van-cell title="📚 中文文档" is-link url="https://juejin.cn/column/7472609448201666599" />
      <van-cell title="📦️ 代码仓库" is-link url="https://github.com/un-pany/mobvue" />
      <van-cell title="☕ Donate 捐赠" is-link url="https://github.com/un-pany/mobvue/issues/1" />
      <van-cell title="💰 付费服务" is-link url="https://github.com/un-pany/mobvue/issues/2" />
    </van-cell-group>
    <van-button block @click="onLogout" un-b-0px un-rounded-0px>
      退出登录
    </van-button>
  </div>
</template>
