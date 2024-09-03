<!-- 
    卡片的卡图 + 编号跳转的组件
-->

<script setup lang="ts">

defineProps<{
    src: string,
    title: string,
    url: string
}>();

</script>

<template>
    <div class="card-number">
        <img :src="src" />
        <a :href="url">{{ title }}</a>
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
