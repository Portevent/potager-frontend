<script setup lang="ts">
defineProps({
	tooltip: {type: String, required: true},
	icon: {type: String, required: true},
    valid: {type: Boolean, required: true}
})
</script>

<template>
	<ValidityIcon :icon="icon" :tooltip="tooltip + ' ' + (valid?'enabled':'disabled')" :valid="valid" />
</template>
