<script setup lang="ts">
import CardNumber from './CardNumber.vue';

defineProps<{
    list: { number: string, url: string }[]
}>();

</script>

<template>
    <div class="card-number-box">
        <ClientOnly>
            <CardNumber v-for="item, index of list" :key="index" :number="item.number" :url="item.url" />
        </ClientOnly>
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
