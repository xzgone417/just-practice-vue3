// import { useI18n } from 'vue-i18n';
import type enUS from '../../locales/en-US';
import type zhCn from '../../locales/zh-CN'
export type MessageSchema = typeof enUS;
export type Locales = 'en-US' | 'zh-CN';
import { useLanguage } from '~/store/language'


export const useTypedI18n = () => {
    return useI18n<[MessageSchema], Locales>();
};
