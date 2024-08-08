<template>
	<div class="flex flex-row overflow-hidden h-full content-stretch">
		<AppScroll>
			<AppNavigation class="pt-14"/>
		</AppScroll>
		<AppScroll class="flex-auto p-4">
			<div class="pt-14"/>
			<slot/>
		</AppScroll>
	</div>
	<AppHeader/>

</template>
<script setup lang="ts">
</script>