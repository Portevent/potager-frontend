<script setup lang="ts">

import { Account, AccountTests, Fetcher } from '#imports';

const {status, data: accounts, error, clear, refresh} = Fetcher.get_accounts()

function toggleLoading(){
    if (!loading.value){
        status.value = "pending"
    }else{
        status.value = "done"
    }
}

function loadTest(){
    clear()
    accounts.value = AccountTests
}

async function addFake() {
    await Fetcher.add_fake_account()
    refresh()
}

const loading = computed(() => status.value === 'pending');
</script>

<template>
	<h1>Accounts</h1>
	<div class="flex items-center space-x-4">
		<UButton color="primary" variant="solid" @click="refresh()" :loading="loading" label="Refresh"/>
		<UButton color="primary" variant="outline" @click="toggleLoading()" :label="loading?'Stop loading':'Loading'"/>
		<UButton color="primary" variant="outline" @click="loadTest()" label="Test"/>
        <UButton color="primary" icon="i-carbon-add" variant="solid" @click=""/>
        <UButton color="gray" icon="i-carbon-add" variant="solid" @click="addFake()" label="Add fake"/>
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

