<script setup lang="ts">
import {Farmer} from '#imports';

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
					<ValidityIcon :valid="farmer.can_create_leek" icon="i-material-symbols-add"
								  :tooltip="farmer.can_create_leek?'Can create leek':'Can\'t create more leek'"/>
				</Row>
				<Row>
                    <ItemBadge item="Leeks count" icon="i-mdi-leek" :amount="farmer.leek_count.toString()"/>
                    <ItemBadge item="Leeks level" icon="i-tabler-sum" :amount="farmer.total_level.toString()"/>

					<ItemBadge item="Fight (Team Fight)" icon="i-lucide-swords" :amount="farmer.fights + '(' + farmer.team_fights + ')'"/>
				</Row>
			</Column>
		</Row>
	</Column>

</template>
