<script setup lang="ts">

import { Farmer, FarmerTests, Fetcher } from '#imports';

const modes = [
	{
		'label': 'Account',
		'icon': 'i-carbon-person',
	},
	{
		'label': 'Fight',
		'icon': 'i-lucide-sword',
	},
	{
		'label': 'Tournaments',
		'icon': 'i-lucide-swords',
	},
	{
		'label': 'Detail',
		'icon': 'i-lucide-square-gantt-chart',
	},
	{
		'label': 'Leeks',
		'icon': 'i-mdi-leek',
	},
	{
		'label': 'Social',
		'icon': 'i-carbon-link',
	},
	{
		'label': 'Misc',
		'icon': 'i-carbon-settings',
	}
]
const mode = ref("");

function changeMode(index: number){
	mode.value = modes[index].label;
}

changeMode(0)

const {status, data: farmers, error, clear, refresh} = Fetcher.get_farmers()

function toggleLoading(){
    if (!loading.value){
        status.value = "pending"
    }else{
        status.value = "done"
    }
}

function loadTest(){
    clear()
    farmers.value = FarmerTests
}

async function addFake() {
    await Fetcher.add_fake_farmer()
    refresh()
}

const loading = computed(() => status.value === 'pending');
</script>

<template>
    <h1>Farmers</h1>
    <div class="flex items-center space-x-4">
        <UButton color="primary" variant="solid" @click="refresh()" :loading="loading" label="Refresh"/>
        <UButton color="primary" variant="outline" @click="toggleLoading()" :label="loading?'Stop loading':'Loading'"/>
        <UButton color="primary" variant="outline" @click="loadTest()" label="Test"/>
        <UButton color="primary" icon="i-carbon-add" variant="solid" @click=""/>
        <UButton color="gray" icon="i-carbon-add" variant="solid" @click="addFake()" label="Add fake"/>
    </div>
	{{error}}
	<UTabs :items="modes" @change="changeMode" class="m-4"/>
	<ResultBox>
		<div class="contents" v-if="loading">
			<FarmerDetailLoading />
			<FarmerDetailLoading />
			<FarmerDetailLoading />
		</div>
		<div class="contents" v-else>
			<FarmerDetail v-for="farmer in farmers" :farmer="farmer" :mode="mode"/>
		</div>
	</ResultBox>
</template>

