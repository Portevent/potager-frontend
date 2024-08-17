<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";

const props = defineProps({
	farmer: {type: Farmer, required: true}
})
const hasGodfather = props.farmer?.godfather_id !== null;
</script>

<template>
    <Card>
        <Row class="farmer-header">
            <img :src="'https://leekwars.com/avatar/' + farmer.id + '.png?' + farmer.avatar_changed"/>
            <UTooltip :text="farmer.id + ' - ' + farmer.login">
                <h1>{{farmer.name}}</h1>
            </UTooltip>
            <ValidityIcon :valid="hasGodfather" icon="i-carbon-collaborate"
                          :tooltip="hasGodfather?('Godfather '+farmer.godfather_id):'No godfather'"/>
        </Row>
    </Card>

</template>
