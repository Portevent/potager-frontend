<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";
import DarkCard from "~/components/app/DarkCard.vue";

const props = defineProps({
    farmer: {type: Farmer, required: true}
})
const hasGodfather = props.farmer?.godfather_id !== undefined;

const avatar = computed(() => props.farmer?.avatar_changed == 0 ? 'https://leekwars.com/image/no_avatar.png' : ('https://leekwars.com/avatar/' + props.farmer.id + '.png?' + props.farmer.avatar_changed))
const talent = computed(() => props.farmer.talent + (props.farmer?.talent_more == 0 ? '' : ' (' + (props.farmer?.talent_more > 0 ? '+' : '') + props.farmer.talent_more + ')'))
</script>

<template>
    <Card>
        <Column class="items-stretch">
            <DarkCard>
                <img :src="avatar" class="w-20"/>
                <Column>
                    <Row>
                        <UTooltip :text="farmer.id + ' - ' + farmer.login">
                            <h1 class="text-xl m-1">{{ farmer.name }}</h1>
                        </UTooltip>
                        <ValidityIcon :valid="hasGodfather" icon="i-carbon-collaborate"
                                      :tooltip="hasGodfather?('Godfather '+farmer.godfather_id):'No godfather'"/>
                    </Row>
                    <Row>
                        <ItemBadge color="orange" variant="subtle" badge_class="ring-gray-900" item="Habs"
                                   icon="i-carbon-contour-finding" :amount="farmer.habs.toString()"/>
                        <ItemBadge color="purple" variant="subtle" badge_class="ring-gray-900" item="Crystals"
                                   icon="i-carbon-assembly" :amount="farmer.crystals.toString()"/>
                    </Row>
                </Column>
            </DarkCard>
            <DarkCard>
                <ItemBadge item="Talent" icon="i-carbon-chart-line" :amount="talent"/>
                <ItemBadge item="Rank" icon="i-carbon-hashtag" :amount="farmer.ranking.toString()"/>
                <UTooltip :text="farmer.ratio + ' (W/D/L)'">
                    <UBadge color="gray" variant="soft">{{farmer.victories}} / {{ farmer.draws }} / {{ farmer.defeats }}</UBadge>
                </UTooltip>
                <ValidityIcon :valid="farmer.in_garden" icon="i-mdi-magnify"
                              :tooltip="farmer.in_garden?'In garden':'Not in garden'"/>
            </DarkCard>
            <DarkCard>
                <Row>
                    <ItemBadge item="Leeks count" icon="i-mdi-leek" :amount="farmer.leek_count.toString()"/>
                    <ItemBadge item="Leeks level" icon="i-tabler-sum" :amount="farmer.total_level.toString()"/>

                    <ItemBadge item="Fight (Team Fight)" icon="i-lucide-swords" :amount="farmer.fights + '(' + farmer.team_fights + ')'"/>
                </Row>
            </DarkCard>
            <DarkCard>

                <Row>
                    <ItemBadge item="Battle royal won" icon="i-mdi-crown" :amount="farmer.won_battle_royale"/>
                    <ItemBadge item="Solo tournament won" icon="i-mdi-tournament" :amount="farmer.won_solo_tournaments"/>
                    <ItemBadge item="Farmer tournament won" icon="i-mdi-tournament" :amount="farmer.won_farmer_tournaments"/>
                    <ItemBadge item="Team tournament won" icon="i-mdi-tournament" :amount="farmer.won_team_tournaments"/>

                </Row>
            </DarkCard>
        </Column>
    </Card>

</template>
