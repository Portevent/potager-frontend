<script setup lang="ts">
import {Farmer} from '#imports';

defineProps({
	farmer: {type: Farmer, required: true},
	mode: {type: String, required: true}
})
</script>

<template>
	<Card>
		<div class="contents" v-if="mode==='Account'">
			<FarmerDetailAccount :farmer="farmer" />
		</div>
		<div class="contents" v-if="mode==='Fight'">
			<FarmerDetailFight :farmer="farmer" />
		</div>
	</Card>
</template>
