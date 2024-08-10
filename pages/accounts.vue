<script setup lang="ts">

import { Account, AccountTests, Fetcher } from '#imports';

// let {status, data: accounts, error, clear, refresh} = Fetcher.get_accounts()
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
const accounts: Account[] = AccountTests;
</script>

<template>
	<h1>Accounts</h1>
	<div class="flex items-center space-x-4">
		<UButton color="primary" variant="solid" @click="setLoading()" :loading="loading" label="Refresh"/>
		<UButton color="primary" variant="outline" @click="loadTestValues()" label="Test"/>
		<UButton color="primary" variant="outline" @click="setLoading()" label="Loading"/>
		<UButton color="primary" icon="i-carbon-add" variant="solid" @click=""/>
	</div>
	{{error}}
	<ResultBox>
		<div class="contents" v-if="loading">
			<AccountDetailLoading />
			<AccountDetailLoading />
			<AccountDetailLoading />
			<AccountDetailLoading />
		</div>
		<div class="contents" v-else>
			<AccountDetail v-for="account in accounts" :account="account"/>
		</div>
	</ResultBox>
</template>

