<template>
  <div id="app">
    <n-config-provider :locale="localeObj[localeStr].lang" :date-locale="localeObj[localeStr].date">
      <router-view />
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import {
  NThemeEditor,
  dateDeDE,
  dateEnUS,
  dateFrFR,
  dateNlNL,
  dateZhCN,
  deDE,
  enUS,
  frFR,
  nlNL,
  zhCN,
} from 'naive-ui';
import { useTypedI18n } from './service/i18n';
type Locales = 'zh-CN' | 'en-US';
const { locale } = useTypedI18n();
const localeStr = locale as Ref<Locales>;
const localeObj = shallowRef({
  'zh-CN': {
    lang: zhCN,
    date: dateZhCN,
  },
  'en-US': {
    lang: enUS,
    date: dateEnUS,
  },
});
</script>


<style></style>