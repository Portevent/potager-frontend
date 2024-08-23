<script setup lang="ts">
import {Account} from '#imports';

defineProps({
	account: {type: Account, required: true}
})
</script>

<template>
	<Card>
		Compte {{ account.login }}<br/>
        {{account.mail}}
	</Card>
</template>