<script setup lang="ts">
defineProps({
	tooltip: {type: String, required: true},
	icon: {type: String, required: true},
    color: {type: Number, required: true} // -1 for red, 0 for gray, 1 for green
})
</script>

<template>
	<UTooltip :text="tooltip">
		<UIcon :name="icon" class="w-5 h-5 ml-2"
			   :class="'text-' + (color==1 ? 'green-400' : (color==-1 ? 'red-400' : 'gray-400'))"/>
	</UTooltip>
</template>
