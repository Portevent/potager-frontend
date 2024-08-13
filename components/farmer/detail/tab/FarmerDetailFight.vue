<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";

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
                    <UTooltip :text="farmer.ratio + ' (W/D/L)'">
                        <UBadge color="gray" variant="soft">{{farmer.victories}} / {{ farmer.draws }} / {{ farmer.defeats }}</UBadge>
                    </UTooltip>
                </Row>
                <Row>
                    <ItemBadge item="Rank" icon="i-carbon-hashtag" :amount="farmer.ranking.toString()"/>
                    <ItemBadge :item="(farmer.talent_more>0?'+':'') + farmer.talent_more"
                               icon="i-carbon-chart-line-smooth" :amount="farmer.talent.toString()"/>
                    <ValidityIcon :valid="farmer.in_garden" icon="i-mdi-magnify"
                                  :tooltip="farmer.in_garden?'In garden':'Not in garden'"/>

                </Row>
            </Column>
        </Row>
    </Column>

</template>
