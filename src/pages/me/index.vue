<template>
  <div un-text="rose-300" un-p="y-2 x-4" id="me">
    me{{ $t('user.xzg') }}
  </div>
  <div class="h-9 w-md bg-red-600">
    {{ hello }}
  </div>
</template>

<script setup lang="ts">
import { render } from "vue";
import { useTypedI18n } from "~/service/i18n";
import { useLanguage } from "~/store/language";
import { helloRequest ,hellosRequest } from "./axios-request";
const hello = ref('')
// 在setup标签里调用函数，也会在setup阶段自动调用，也就是近似Create阶段自动调用
helloRequest().then((res) => {
  hello.value = res as string
})
hellosRequest()
const language = useLanguage();
// language.changeLanguage('zh-CN');
const { t, locale } = useTypedI18n();
locale.value = language.locale;

// onBeforeMount(async () => {
//   hello.value = await helloRequest() as string
// })
// const world = h('span', 'world')
// const me = document.getElementById('me')
// !VNode不能直接赋值给Node节点
// me?.appendChild(world)
const renderData = () => {
  // 创建虚拟节点
  const vNode = h('span', 'world')
  // 创建外层容器，存放虚拟DOM vNode
  const dom = document.createElement('span');
  document.querySelector('#me')?.appendChild(dom);
  // 调用render函数渲染到页面
  render(vNode, dom);
}
// 只有mounted阶段才会渲染模板
onMounted(() => {
  renderData()
})
</script>

<style lang="scss" scoped></style>