import { createApp } from 'vue'
import App from '~/App.vue'
// import './style.css'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
//自动读取pages目录下的页面，不需要自己再写routes
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from "virtual:generated-layouts"
import 'virtual:uno.css'
// import { createI18n } from 'vue-i18n'
import { i18n, initI18nScope } from '~/utils/i18n';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import messages from '@intlify/unplugin-vue-i18n/messages'
// const i18n = createI18n({
//     locale: 'en-US',
//     messages
//   })

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(generatedRoutes),
})

const app = createApp(App)

app.use(router).use(pinia).use(i18n)
app.mount('#app')
initI18nScope();