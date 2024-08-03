<template>
    <div>
        <AppHeader />
        <div class="page-content">
            <h1 class="page-title">{{title}}</h1>
            <slot />
        </div>
        <AppFooter />
    </div>
</template>