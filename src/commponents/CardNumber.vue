<!-- 
    卡片的卡图 + 编号跳转的组件
-->

<script setup lang="ts">

import { getCardImage } from "../utils/tools";

defineProps<{
    url: string,
    number: string
}>();

</script>

<template>
    <div class="card-number">
        <img :src="getCardImage(number)" />
        <a :href="url">{{ number }}</a>
    </div>
</template>

<style lang="scss">
.card-number {
    position: relative;
    text-align: center;
    padding: 2.5%;
    border-radius: 3px;

    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.card-number img {
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
}
</style>
