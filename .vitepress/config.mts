import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "卡灵时代资料站",
  description: "卡灵时代资料站",
  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/logo/KLSD.png" }]
  ],

  base: "/KLSD-Documents/", // GitHub

  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  },

  ignoreDeadLinks: true,

  srcExclude: ["README.md", "LICENSE", "LICENSE-CODE"],

  // 实验性功能
  metaChunk: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/logo/KLSD.png",
      dark: "/logo/KLSD.png"
    },

    nav: [
      { text: "主页", link: "/" },
      { text: "关于我们", link: "/about" }
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
          { text: "辉翼极光龙", link: "/cards/辉翼极光龙" },
          { text: "电光断碎者", link: "/cards/电光断碎者" },
          { text: "光法师 青辉", link: "/cards/光法师 青辉" },
          { text: "电光魔法师", link: "/cards/电光魔法师" },
          { text: "圣赫利尔", link: "/cards/圣赫利尔" },
          { text: "小丑星法师", link: "/cards/小丑星法师" },
          { text: "Dream Maker", link: "/cards/Dream Maker" },
          { text: "心天使", link: "/cards/心天使" },
          { text: "流电刀士", link: "/cards/流电刀士" },
          { text: "电子宝宝", link: "/cards/电子宝宝" },
          { text: "云电仔", link: "/cards/云电仔" },
          { text: "迅雷翼守宫", link: "/cards/迅雷翼守宫" },
          { text: "希望灵光", link: "/cards/希望灵光" },
          { text: "星光盾", link: "/cards/星光盾" },
          { text: "星之愿", link: "/cards/星之愿" },
          { text: "深渊之光", link: "/cards/深渊之光" },
          { text: "电闪抽牌", link: "/cards/电闪抽牌" },
          { text: "电光石火", link: "/cards/电光石火" },
          { text: "心灵之眼", link: "/cards/心灵之眼" },
          { text: "充能MAX", link: "/cards/充能MAX" },
          { text: "光能量", link: "/cards/光能量" },
          { text: "电能量", link: "/cards/电能量" },

          { text: "梦魇邪牙龙", link: "/cards/梦魇邪牙龙" },
          { text: "战争领主", link: "/cards/战争领主" },
          { text: "影刃丸", link: "/cards/影刃丸" },
          { text: "炎角凶兽", link: "/cards/炎角凶兽" },
          { text: "影球忍者", link: "/cards/影球忍者" },
          { text: "恶啸", link: "/cards/恶啸" },
          { text: "手雷蟑螂", link: "/cards/手雷蟑螂" },
          { text: "棘刺毒鼠", link: "/cards/棘刺毒鼠" },
          { text: "焦炭虾", link: "/cards/焦炭虾" },
          { text: "炎头小鬼", link: "/cards/炎头小鬼" },
          { text: "阳耀子", link: "/cards/阳耀子" },
          { text: "熔岩精灵", link: "/cards/熔岩精灵" },
          { text: "死灵复生", link: "/cards/死灵复生" },
          { text: "交换位置", link: "/cards/交换位置" },
          { text: "血凝光", link: "/cards/血凝光" },
          { text: "幻影", link: "/cards/幻影" },
          { text: "陨石坠击", link: "/cards/陨石坠击" },
          { text: "死亡爆弹", link: "/cards/死亡爆弹" },
          { text: "热能涌动", link: "/cards/热能涌动" },
          { text: "燃烧之魂", link: "/cards/燃烧之魂" },
          { text: "暗能量", link: "/cards/暗能量" },
          { text: "火能量", link: "/cards/火能量" }

        ]
      },
      {
        text: "卡包",
        collapsed: true,
        link: "/packs/index",
        items: [
          { text: "SP01", link: "/packs/SP01" },
          { text: "SP02", link: "/packs/SP02" },
          { text: "SP03", link: "/packs/SP03" },
          { text: "SP04", link: "/packs/SP04" },
          { text: "SP05", link: "/packs/SP05" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],

    search: {
      provider: "local"
    },

    lastUpdated: {
      text: "更新于"
    }
  }
})
