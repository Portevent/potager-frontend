<script setup lang="ts">
import {Farmer} from '#imports';

defineProps({
	farmer: {type: Farmer, required: true}
})
</script>

<template>
    <UTooltip :text="farmer.id + ' - ' + farmer.login">
        <h1>{{farmer.name}}</h1>
    </UTooltip>

</template>
