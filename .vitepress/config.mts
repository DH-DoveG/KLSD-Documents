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

  ignoreDeadLinks: true,

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
          {text: "辉翼极光龙", link: '/cards/辉翼极光龙'},
          {text: "电光断碎者", link: '/cards/电光断碎者'},
          {text: "光法师 青辉", link: '/cards/光法师 青辉'},
          {text: "电光魔法师", link: '/cards/电光魔法师'},
          {text: "圣赫利尔", link: '/cards/圣赫利尔'},
          {text: "小丑星法师", link: '/cards/小丑星法师'},
          {text: "Dream Maker", link: '/cards/Dream Maker'},
          {text: "心天使", link: '/cards/心天使'},
          {text: "流电刀士", link: '/cards/流电刀士'},
          {text: "云电仔", link: '/cards/云电仔'},
          {text: "迅雷翼守宫", link: '/cards/迅雷翼守宫'},
          {text: "希望灵光", link: '/cards/希望灵光'},
          {text: "星光盾", link: '/cards/星光盾'},
          {text: "星之愿", link: '/cards/星之愿'},
          {text: "深渊之光", link: '/cards/深渊之光'},
          {text: "电闪抽牌", link: '/cards/电闪抽牌'},
          {text: "电光石火", link: '/cards/电光石火'},
          {text: "心灵之眼", link: '/cards/心灵之眼'},
          {text: "充能MAX", link: '/cards/充能MAX'},
          {text: "光能量", link: '/cards/光能量'},
          {text: "电能量", link: '/cards/电能量'},
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
      text: "更新于"
    }
  }
})
