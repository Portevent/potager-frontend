<script setup lang="ts">

import { Farmer, FarmerTests, Fetcher } from '#imports';

// let {status, data: accounts, error, clear, refresh} = Fetcher.get_farmers()
function loadTestValues(){
//	clear()
	status.value = "done"
}
function setLoading(){
//	clear()
	status.value = "pending"
}
const error: string = ""
const status = ref("done")
const loading = computed(() => status.value === 'pending');
const farmers: Farmer[] = FarmerTests;
const mode = "presentation";
</script>

<template>
	<h1>Farmers</h1>
	<div class="flex items-center space-x-4">
		<UButton color="primary" variant="solid" @click="setLoading()" :loading="loading" label="Refresh"/>
		<UButton color="primary" variant="outline" @click="loadTestValues()" label="Test"/>
		<UButton color="primary" variant="outline" @click="setLoading()" label="Loading"/>
		<UButton color="primary" icon="i-carbon-add" variant="solid" @click=""/>
	</div>
	{{error}}
	<List>
		<div class="contents" v-if="loading">
			<FarmerDetailLoading />
			<FarmerDetailLoading />
			<FarmerDetailLoading />
		</div>
		<div class="contents" v-else>
			<FarmerDetail v-for="farmer in farmers" :farmer="farmer" :mode="mode"/>
		</div>
	</List>
</template>

