<template>
    <div id="home">
        <router-view v-slot="{ Component, route }">
                <component :is="Component" :key="route" />
        </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}
</style>