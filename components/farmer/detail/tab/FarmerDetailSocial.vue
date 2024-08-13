<script setup lang="ts">
import {Farmer} from '#imports';
import ValidityIcon from "~/components/app/ValidityIcon.vue";

const props = defineProps({
    farmer: {type: Farmer, required: true}
})

const hasGithub = props.farmer.github !== null;
const hasWebsite = props.farmer.website !== null;
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
                    <ValidityIcon :valid="hasGithub" icon="i-mdi-github"
                                  :tooltip="farmer.github"/>
                    <ValidityIcon :valid="hasWebsite" icon="i-ph-globe-simple"
                                  :tooltip="farmer.website"/>
                    <ValidityIcon :valid="farmer.contributor" icon="i-ooui-user-contributions-rtl" tooltip="Contributor"
                                  v-if="farmer.contributor"/>
                </Row>
                <Row>
                    <ItemBadge item="Forum messages" icon="i-material-symbols-android-messages"
                               :amount="farmer.forum_messages.toString()"/>
                    <ItemBadge item="Language" icon="i-tabler-language" :amount="farmer.language"/>
                    <ItemBadge item="Trophies" icon="i-tabler-trophy" :amount="farmer.trophies.toString()"/>
                    <ItemBadge item="Points" icon="i-tabler-grip-horizontal" :amount="farmer.points.toString()"/>
                </Row>
            </Column>
        </Row>
    </Column>

</template>
