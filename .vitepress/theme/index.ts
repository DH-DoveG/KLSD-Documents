// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import CardNumberBox from "../../src/commponents/CardNumberBox.vue"
import CardAttribute from "../../src/commponents/CardAttribute.vue"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    // ...
    // 注册自定义全局组件
    app.component("CardNumberBox", CardNumberBox)
    app.component("CardAttribute", CardAttribute)
  }
} satisfies Theme
