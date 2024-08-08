<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})
</script>
<template>
	<header class="bg-gray-200 dark:bg-gray-800
	fixed top-0 w-full shadow-md z-10 h-10
	flex flex-row justify-between items-stretch">
		<div class="p-1 flex items-center">
			<UButton label="🌱 Potager" color="primary" to="/" variant="link" size="xl"/>
		</div>
		<div class="p-1 flex items-center">
			<UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
					 color="gray" variant="outline" aria-label="Theme"
					 @click="isDark = !isDark"/>
		</div>
	</header>
</template>