<script setup lang="ts">
defineProps({
    amount: {type: String, required: true},
    item: {type: String, required: true},
    icon: {type: String, required: true},
    variant: {type: String, required: false, default: 'solid'},
    color: {type: String, required: false, default: 'white'},
    badge_class: {type: String, required: false, default: ''}
})
</script>

<template>
    <UTooltip :text="item">
        <UBadge :color="color" :class="badge_class" :variant="variant">
            <UIcon :name="icon" class="w-5 h-5 m--2 overflow-hidden"/>
            {{ amount }}
        </UBadge>
    </UTooltip>
</template>
