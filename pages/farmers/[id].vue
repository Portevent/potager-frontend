<script setup lang="ts">

const route = useRoute();
import {Fetcher} from "~/server/utils/fetching";

const {status, data: farmer, error, clear, refresh} = Fetcher.get_farmer(route.params.id.toString())

function toggleLoading(){
    if (!loading.value){
        status.value = "pending"
    }else{
        status.value = "done"
    }
}

const loading = computed(() => status.value === 'pending');
</script>
<template>
    <div class="flex items-center space-x-4">
        <UButton color="primary" variant="solid" @click="refresh()" :loading="loading" label="Refresh"/>
        <UButton color="primary" variant="outline" @click="toggleLoading()" :label="loading?'Stop loading':'Loading'"/>
    </div>
    <FarmerPageLoading v-if="loading"/>
    <FarmerPage v-else-if="status == 'success'" :farmer="farmer"/>
    {{status}}
    {{error}}
</template>