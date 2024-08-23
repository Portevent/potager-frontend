<script setup lang="ts">
import {usePotagerStore} from "~/store/potager";

// access the `store` variable anywhere in the component ✨
const store = usePotagerStore()
const { accountsCount, farmersCount, leeksCount } = storeToRefs(store)

Fetcher.store = usePotagerStore();

// Dummy call to ensure the client has some data about accounts count
Fetcher.get_counts()

const commons_links = computed(() => [
	{
		label: 'Accounts',
		badge: accountsCount.value,
		icon: 'i-carbon-document',
		to: '/accounts'
	},
	{
		label: 'Farmers',
		badge: farmersCount.value,
		icon: 'i-carbon-person',
		to: '/farmers'
	},
	{
		label: 'Leeks',
		badge: leeksCount.value,
		icon: 'i-mdi-leek',
		to: '/leeks'
	}
])
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
const debug_links = [
	{
		label: 'Potager Stats',
		to: '/debug/potager-stats',
		icon: 'i-carbon-gear'
	}
];

const links = computed(() => [
    commons_links.value, tools_link, debug_links
]);

const open = useState('open', () => true);
</script>

<template>
	<div class="bg-gray-100 dark:bg-gray-900 flex flex-col items-start">
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