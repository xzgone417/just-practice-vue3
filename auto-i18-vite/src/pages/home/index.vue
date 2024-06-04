<template>
    <div class="h-20 w-40 p-10 m-6 bg-emerald-50 leading-20">
        home {{ $t('user.xzg') }}
    </div>
    <n-button @click="changeL()">改变语言</n-button>
    <router-link to="/home/homepage">{{ hello }}来到home</router-link>
</template>

<script lang="ts" name="home">
import { useTypedI18n } from "~/service/i18n";
import { useLanguage } from "~/store/language";
import { helloRequest } from "./axios-request";
export default {
    setup(props: any) {
        const language = useLanguage();
        const { t, locale } = useTypedI18n();
        // const state = useStorage('language', { 'men': 'cai' }, localStorage, { mergeDefaults: true })
        // console.log("🚀LOG ~ setup ~ state:", state.value);
        locale.value = language.locale;
        const hello = ref('')

        const deNormalizePath = (path: string) => {
            const arr = path.split('/');
            if (path[0] === '/') arr.shift()  
            return arr.join('/');
        };
        console.log(deNormalizePath('///my///wo'));
        // 在setup标签里调用函数，也会在setup阶段自动调用，也就是近似Create阶段自动调用
        // helloRequest().then((res) => {
        //     hello.value = res as string;
        //     console.log(hello, 1);
        // })
        const changeL = () => {
            if (locale.value === 'en-US') {
                locale.value = 'zh-CN';
                language.changeLanguage('zh-CN');
            } else {
                locale.value = 'en-US';
                language.changeLanguage('en-US');
                console.log("🚀LOG ~  language.locale:", language.locale);
            }
        }
        console.log(hello, 2);
        return {
            hello,
            changeL
        }
    },

}
</script>

<style></style>