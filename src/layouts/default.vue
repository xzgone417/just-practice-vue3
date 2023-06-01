<template>
    <div id="default">
        <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
                海淀桥
            </n-layout-sider>
            <n-layout>
                <n-layout-header>颐和园路</n-layout-header>
                <n-layout-content content-style="padding: 24px;">
                    <router-view v-slot="{ Component, route }">
                        <component :is="Component" :key="route" />
                    </router-view>
                </n-layout-content>
                <n-layout-footer>成府路</n-layout-footer>
            </n-layout>
        </n-layout>
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