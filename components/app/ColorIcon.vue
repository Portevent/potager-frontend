<script setup lang="ts">
defineProps({
	tooltip: {type: String, required: false, default: ""},
	icon: {type: String, required: true},
    color: {type: String, required: true}
})

</script>

<template>
	<UTooltip :text="tooltip">
            <UIcon :name="icon" class="w-5 h-5 ml-2" :style="'background-color: ' + color"/>
	</UTooltip>
</template>
