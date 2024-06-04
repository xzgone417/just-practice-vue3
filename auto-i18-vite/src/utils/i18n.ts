import { createI18n } from 'vue-i18n';
import type { Ref } from 'vue';

import zhCN from '../../locales/zh-CN';
import enUS from '../../locales/en-US';

import type { Locales } from '~/service/i18n';
import { useLanguage } from "~/store/language";
// import { createGlobalState, useStorage } from '@vueuse/core';
// import { setDayjsLocale } from '~/composables/useDayjs';
// import { commonRequests } from '~/requests/common/common.request';
// import { resHandler } from '~/utils/http/handler';
// import { useCommonStore } from '~/stores/common';

// export const useStorageLocale = createGlobalState(() => {
//     const defaultLocale = useStorage('locale', ref<Locales>('en-US'), localStorage, {
//         deep: true,
//         writeDefaults: true,
//         listenToStorageChanges: true,
//     }) as Ref<Locales>;

//     return {
//         defaultLocale,
//     };
// });

export const i18n = createI18n({
    legacy: false,
    messages: {
        'zh-CN': zhCN,
        'en-US': enUS,
    },
    allowComposition: true,
});

export const { global: i18nGlobal } = i18n;

const i18nScope = effectScope();

export const initI18nScope = () => {
    i18nScope.run(() => {
        // const { defaultLocale: locale } = useStorageLocale();
        // const store = useCommonStore();
        const language = useLanguage()
        i18nGlobal.locale.value = language.locale;
        // i18nGlobal.locale.value = locale.value;

        // setDayjsLocale(locale.value);

        watch(() => language.locale, (val) => {
            console.log(language.locale,"xxxxxxxxx");
        });
        // watch(locale, async (val) => {
        //     store.locale = val;
        //     setDayjsLocale(val);
        //     if (store.authToken) {
        //         const res = await commonRequests.switchLang();
        //         await resHandler(res);
        //         await store.reFetchRoutes();
        //     }
        // });
    });
};
