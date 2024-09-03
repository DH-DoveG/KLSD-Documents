<script setup lang="ts">
import CardNumber from './CardNumber.vue';

defineProps<{
    list: { title: string, url: string, src: string }[]
}>();

</script>

<template>
    <div class="card-number-box">
        <CardNumber v-for="item, index of list" :key="index" 
            :title="item.title" 
            :url="item.url" 
            :src="item.src" 
        />
    </div>
</template>

<style lang="css">
.card-number-box {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

}
</style>
