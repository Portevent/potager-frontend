<script setup lang="ts">
import {Farmer} from '#imports';

defineProps({
	farmer: {type: Farmer, required: true},
	mode: {type: String, required: true}
})
</script>

<template>
    <ULink :to="'/farmers/' + farmer.id">
        <Card>
            <div class="contents" v-if="mode==='Account'">
                <FarmerDetailAccount :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Fight'">
                <FarmerDetailFight :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Tournaments'">
                <FarmerDetailTournament :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Detail'">
                <FarmerDetailDetail :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Leeks'">
                <FarmerDetailLeeks :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Social'">
                <FarmerDetailSocial :farmer="farmer" />
            </div>
            <div class="contents" v-if="mode==='Misc'">
                <FarmerDetailMisc :farmer="farmer" />
            </div>
        </Card>
    </ULink>
</template>
