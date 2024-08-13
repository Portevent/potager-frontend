<script setup lang="ts">

import {usePotagerStore} from "~/store/potager";

// access the `store` variable anywhere in the component ✨
const store = usePotagerStore()
const { accountsCount, farmersCount, leeksCount } = storeToRefs(store)
</script>

<template>
Account {{accountsCount}} <br/>
Farmers {{farmersCount}} <br/>
Leeks {{leeksCount}} <br/>
</template>