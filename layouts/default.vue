<template>
    <div class="flex flex-row overflow-hidden h-full w-[100vw] content-stretch">
            <AppNavigation class="pt-14"/>
        <div class="flex-1 shrink p-4">
            <div class="pt-14"/>
            <slot/>
        </div>
    </div>
    <AppHeader/>
</template>