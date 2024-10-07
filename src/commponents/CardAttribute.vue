<script setup lang="ts">

import { ref } from "vue";

const props = defineProps<{
    text: string
}>();

let style = ref("background-color: ");

switch (props.text) {
    case "光":
        style.value += "#FA9320";
        break;
    case "电":
        style.value += "#FFC107";
        break;
    case "暗":
        style.value += "#212121";
        break;
    case "火":
        style.value += "#F44336";
        break;
    case "木":
        style.value += "#388E3C";
        break;
    case "风":
        style.value += "#009688";
        break;
    case "土":
        style.value += "#FF9800";
        break;
    case "金":
        style.value += "#EECB3B";
        break;
    case "冰":
        style.value += "#C5CAE9";
        break;
    case "水":
        style.value += "#B2DFDB";
        break;
    case "空":
        style.value += "#009688";
        break;
}
style.value += ";";

</script>

<template>
    <ClientOnly>
        <span :style="style">{{ text }}</span>
    </ClientOnly>
</template>

<style lang="scss" scoped>
span {
    border-radius: 1em;
    text-align: center;
    padding: 0 10px 0 10px;
    color: #F1F1F1;
}
</style>