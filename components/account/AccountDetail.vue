<script setup lang="ts">
import {Account} from '#imports';

defineProps({
	account: {type: Account, required: true}
})
</script>

<template>
	<Card>
		<img class="w-14 h-14" src=""/>
		Compte {{ account.name }}
	</Card>
</template>