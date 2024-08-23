<script setup lang="ts">

import {Leek} from "~/models/leek";

const sizes = [20,40,60,80]
const getLeekSize = (level: number) => {
    let i = 0;
    while (i < sizes.length) {
        if(sizes[i] > level) {
            return i
        }else{
            i++
        }
    }
}

const props = defineProps({
    leek: {type: Leek, required: true}
})

const link = computed(() => "https://leekwars.com/image/leek/svg/leek_" + getLeekSize(props.leek.level) + "_front_green_angry.svg")
</script>

<template>
    <svg
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
        <img :src="link" alt=""/>
    </svg>
</template>