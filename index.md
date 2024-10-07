---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "KLSD Documents"
  text: "卡灵时代资料站"
  tagline: 此站旨在收集《卡灵时代》相关公开资料
  image:
    src: /logo/KLSD.png
    alt: KLSD Logo
  actions:
    - theme: brand
      text: 卡片
      link: /cards/手雷蟑螂
    - theme: alt
      text: 卡包
      link: /packs/index

features:
  - title: 卡包
    details: 收集有卡包，可以查看各卡包都收集了哪些卡。
  - title: 规则（待）
    details: 收集有规则，可以查看游戏规则。
  - title: 限分表（待）
    details: 收集有限分表，可以查看历史限分表情况。
  - title: 细则（待）
    details: 卡片详细资料下方有相关处理细则。
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 需要使用外部图片链接
  let meta = document.createElement("meta");
  meta.setAttribute("name", "referrer");
  meta.setAttribute("content", "no-referrer");
  document.head.appendChild(meta);
})
</script>
