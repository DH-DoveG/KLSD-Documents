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
    border: 2px saddlebrown solid;
    text-align: center;
    padding: 2.5%;
}

.card-number img {
    width: 100%;
    object-fit: cover;
}
</style>
