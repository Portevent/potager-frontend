<script setup>
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIn(array){
	return array[getRandomInt(0, array.length-1)]
}

function getRandomSize() {
	return getRandomIn(['w-16', 'w-20', 'w-24'])
}
</script>

<template>
	<Card>
		<USkeleton class="h-14 w-14 bg-gray-200 dark:bg-gray-700"/>
		<div class="space-y-2">
			<USkeleton :class="getRandomSize()" class="h-4 bg-gray-200 dark:bg-gray-700"/>
			<USkeleton :class="getRandomSize()" class="h-4 bg-gray-200 dark:bg-gray-700"/>
		</div>
	</Card>
</template>
