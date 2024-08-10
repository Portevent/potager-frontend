<script setup lang="ts">
defineProps({
	amount: {type: String, required: true},
	item: {type: String, required: true},
	icon: {type: String, required: true}
})
</script>

<template>
	<UTooltip :text="item">
		<UBadge color="white" variant="solid">
			<UIcon :name="icon" class="w-5 h-5 m--2 overflow-hidden"/>
			{{ amount }}
		</UBadge>
	</UTooltip>
</template>
