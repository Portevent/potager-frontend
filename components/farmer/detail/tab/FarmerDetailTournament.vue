<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";
import ThreeColorIcon from "~/components/app/ThreeColorIcon.vue";

const props = defineProps({
    farmer: {type: Farmer, required: true}
})

</script>

<template>
    <Column>
        <Row>
            <!-- <img class="w-14 h-14" src=""/> -->
            <Column>
                <Row>
                    <UTooltip :text="farmer.id + ' - ' + farmer.login">
                        {{ farmer.name }} <br/>
                    </UTooltip>
                    <ThreeColorIcon :color="farmer.tournament_registered?1:(farmer.tournaments_enabled?-1:0)"
                                    icon="i-mdi-tournament"
                                    :tooltip="farmer.tournament_registered?('Tournament ' + farmer.tournament_current):(farmer.tournaments_enabled?'Not subscribed':'Can\'t access tournaments')"/>
                <ValidityIcon :valid="farmer.br_enabled"
                                    icon="i-mdi-crown"
                                    :tooltip="farmer.br_enabled?(farmer.won_battle_royale + ' won battle royal'):'Can\'t access br'"/>
                </Row>
                <Row>
                    <ItemBadge item="Battle royal won" icon="i-mdi-crown" :amount="farmer.won_battle_royale"/>
                    <ItemBadge item="Solo tournament won" icon="i-mdi-tournament" :amount="farmer.won_solo_tournaments"/>
                    <ItemBadge item="Farmer tournament won" icon="i-mdi-tournament" :amount="farmer.won_farmer_tournaments"/>
                    <ItemBadge item="Team tournament won" icon="i-mdi-tournament" :amount="farmer.won_team_tournaments"/>

                </Row>
            </Column>
        </Row>
    </Column>

</template>
