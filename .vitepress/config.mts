import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KLSD Documents",
  description: "卡灵时代资料站",
  lang: 'zh-CN',

  head: [
    ["link", {rel: "icon", href: "public/logo/KLSD.png"}]
  ],

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
    logo: {
      light: "/public/logo/KLSD.png",
      dark: "/public/logo/KLSD.png"
    },
    
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/about' }
    ],

    footer: {
      message: "KLSD资料站",
      copyright: ""
    },

    sidebar: [
      {
        text: "卡片",
        collapsed: true,
        items: [
          {text: "手雷蟑螂", link: '/cards/手雷蟑螂'}
        ]
      },
      {
        text: '卡包',
        collapsed: true,
        link: "/packs/index",
        items: [
          { text: 'SP01', link: '/packs/SP01' },
          { text: 'SP02', link: '/packs/SP02' },
          { text: 'SP03', link: '/packs/SP03' },
          { text: 'SP04', link: '/packs/SP04' },
          { text: 'SP05', link: '/packs/SP05' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: "更新于："
    }
  }
})
