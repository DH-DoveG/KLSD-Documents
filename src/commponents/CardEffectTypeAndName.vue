<script setup lang="ts">

import { ref } from "vue";

const props = defineProps<{
    type: string,
    name: string
}>();

let type_img = ref("/KLSD-Documents/" + props.type + ".svg");

console.log(type_img);

</script>

<template>
        <img :src="type_img" />
        &nbsp;
        <span>
            {{ props.name }}
        </span>
</template>

<style lang="css" scoped>
span {
    position: relative;
    height: 100%;

    border-bottom: 2px rgb(151, 151, 151) solid;
}

img {
    position: relative;
    display: inline;

    top: 8px;
    height: 30px;
}
</style>