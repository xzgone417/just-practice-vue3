import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import path from 'node:path';
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import VueI18n from '@intlify/unplugin-vue-i18n/vite';
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const envDir = `${process.cwd()}/config`;
  // 第三个参数prefixes默认为'VITE_',说明只能取'VITE_'开头的，如果取''，则全部环境变量都能读取
  const envConfig = loadEnv(mode, envDir);
  return defineConfig({
    envDir,
    clearScreen: true,

    plugins: [
      vue(),
      //默认为文件夹为pages时，不需要配置
      Pages({
        dirs: [{ dir: "src/pages", baseRoute: "" }],
        importMode: "async"
      }),
      Layouts({
        // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          },
          {
            'xe-utils': ['toArrayTree', 'clone', 'toTreeArray', 'filterTree'],
          },
          {
            navuelidate: ['useFormCreator', 'formItemMap', 'maybeNull', 'syncData'],
          },
        ],
        //存放的位置
        dts: "src/auto-import.d.ts",
        // 
        // dirs: ['src/service','src/utils',],
      }),
      Components({
        // 引入组件的,包括自定义组件
        // 存放的位置
        dts: "src/components.d.ts",
        resolvers: [NaiveUiResolver()]
      }),
      UnoCSS({ configFile: './config/uno.config.ts' }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [path.resolve(__dirname, 'locales/**')],
      }),
    ],
    server: {
      // host: 'localhost',
      proxy: {
        '/api': { // 匹配请求路径，
          target: envConfig.VITE_API_URL, // 代理的目标地址
          // 开发模式，默认的127.0.0.1,开启后代理服务会把origin修改为目标地址
          changeOrigin: true,
          // secure: true, // 是否https接口
          // ws: true, // 是否代理websockets
          // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
          //简单来说，就是是否改路径 加某些东西,自动给你塞一个api进去
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      port: Number(envConfig.VITE_PORT),
      open: envConfig.VITE_OPEN
    },
    resolve: {
      // ↓路径别名
      alias: {
        "~": path.resolve(__dirname, "src")
      }
    }
  })
}


