import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KLSD Documents",
  description: "卡灵时代资料站",
  lang: 'zh-CN',

  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  },

  srcExclude: ['README.md', 'LICENSE', 'LICENSE-CODE'],

  // 实验性功能
  metaChunk: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})
