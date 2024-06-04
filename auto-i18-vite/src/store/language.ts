import { defineStore } from 'pinia'
export type Locales = 'en-US' | 'zh-CN';
// useMain  可以是 useUser、useCart 之类的名字 
// defineStore('main',{..}) 在devtools 就使用 main 这个名
export const useLanguage = defineStore('language', {
    // 相当于data
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
            locale: 'zh-CN' as Locales
        } 
    },
    // 相当于计算属性
    getters: {

    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
        changeLanguage(key: Locales) {
            this.locale = key
        }
    },
    persist: true,
})