<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";
import RedIcon from "~/components/app/RedIcon.vue";
import ColorIcon from "~/components/app/ColorIcon.vue";

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
					<ValidityIcon :valid="farmer.admin || farmer.moderator" :icon="farmer.admin?'i-ri-admin-line':(farmer.moderator?'i-tabler-user-cog':'i-tabler-user')"
								  :tooltip="farmer.admin?'Admin':(farmer.moderator?'Moderator':'User')"/>

					<RedIcon icon="i-ci-stop-sign" tooltip="Banned" v-if="farmer.banned"/>
					<ColorIcon icon="i-ic-round-color-lens" :tooltip="farmer.color" :color="farmer.color.toLowerCase()"/>
				</Row>
				<Row>
                    <ItemBadge item="Register date" icon="i-material-symbols-add-to-queue-outline" :amount="farmer.register_date.toString()"/>
                    <ItemBadge item="Last connection" icon="i-mdi-login-variant" :amount="farmer.last_connection.toString()"/>

					<ItemBadge item="Country" icon="i-mi-flag" :amount="farmer.country"/>
				</Row>
			</Column>
		</Row>
	</Column>

</template>
