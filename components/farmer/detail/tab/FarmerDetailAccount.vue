<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";

const props = defineProps({
	farmer: {type: Farmer, required: true}
})

const inTeam = props.farmer.team !== undefined;
const hasGodson = props.farmer.godsons_level !== 0;
const hasGodfather = props.farmer?.godfather_id !== undefined;
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
					<ValidityIcon :valid="inTeam" icon="i-carbon-group"
								  :tooltip="inTeam?('Team '+farmer.team?.name):'No team'"/>

					<ValidityIcon :valid="hasGodfather" icon="i-carbon-collaborate"
								  :tooltip="hasGodfather?('Godfather '+farmer.godfather_id):'No godfather'"/>
				</Row>
				<Row>
					<ItemBadge color="orange" variant="subtle" badge_class="ring-gray-900" item="Habs" icon="i-carbon-contour-finding" :amount="farmer.habs"/>
					<ItemBadge color="purple" variant="subtle" badge_class="ring-gray-900" item="Crystals" icon="i-carbon-assembly" :amount="farmer.crystals"/>

					<ItemBadge item="Godsons Levels" icon="i-carbon-container-services" :amount="farmer.godsons_level"/>
				</Row>
			</Column>
		</Row>
	</Column>

</template>
