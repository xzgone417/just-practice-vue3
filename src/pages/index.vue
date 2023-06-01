<template>
    <div class="index">
        <a href="/me" class="text-5xl">me</a>
        <!-- <router-link to="/me">me</router-link> -->
        |
        <n-button @click="goHome()" class="a-button"> home</n-button>
    </div>
</template>

<script setup lang="ts">
import { useTypedI18n } from '~/service/i18n';
import { useLanguage } from '~/store/language';

const router = useRouter()
const route = useRoute()

console.log(import.meta.env)
console.log(import.meta.env.VITE_PORT)
console.log(import.meta.env.VITE_ENV)
const language = useLanguage();
console.log("🚀LOG ~  language.locale:", language.locale);
// language.changeLanguage('zh-CN');
const { t, locale } = useTypedI18n();
locale.value = language.locale;

const splite ='/'
console.log("qwq");

console.log(splite.split('/').at(-1));


function goHome() {
    router.push({
        name: 'home',
    })
}
</script>

<style scoped lang="scss"></style>

<route lang="yaml">
    meta:
        layout: home
 </route>