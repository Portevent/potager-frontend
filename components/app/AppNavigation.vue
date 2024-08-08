<script setup lang="ts">

const commons_links = [
	{
		label: 'Accounts',
		badge: 3,
		icon: 'i-carbon-document',
		to: '/accounts'
	},
	{
		label: 'Farmer',
		badge: 3,
		icon: 'i-carbon-person',
		to: '/farmers'
	},
	{
		label: 'Leeks',
		badge: 6,
		icon: 'i-mdi-leek',
		to: '/leeks'
	}
]
const tools_link = [
	{
		label: 'Charts',
		to: '/charts',
		icon: 'i-carbon-analytics'
	},
	{
		label: 'Dashboard',
		icon: 'i-carbon-chart-treemap',
		to: '/dashboard'
	}
];

const links = [commons_links, tools_link];
const open = useState('open', () => true);
</script>

<template>
	<div class="app-navigation bg-gray-100 dark:bg-gray-900 flex flex-col items-start">
		<UButton size="sm"
				 icon="i-carbon-list"
				 color="gray"
				 square
				 variant="ghost"
				 @click="open = !open"
				 class="m-2"/>
		<UVerticalNavigation :links="links" class="transition-[max-width] overflow-hidden" :class="open?'max-w-96':'max-w-10'"/>
	</div>
</template>

<style>
.app-navigation{
	animation: ;
}
</style>