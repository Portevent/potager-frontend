<script setup lang="ts">
defineProps({
	tooltip: {type: String, required: true},
	icon: {type: String, required: true},
	valid: {type: Boolean, required: true}
})
</script>

<template>
	<UTooltip :text="tooltip">
		<UIcon :name="icon" class="w-5 h-5 ml-2"
			   :class="'text-' + (valid ? 'green-400' : 'gray-400')"/>
	</UTooltip>
</template>
