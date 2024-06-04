import { defineConfig } from '@umijs/max';

const pxtorem = require('postcss-pxtorem')

// umi项目的配置文件
export default defineConfig({
  // alias别名，Umi 内置了以下别名：
  // 1. @ 表示 项目 src 目录
  // 2. @@ 表示 临时目录，通常是 src/.umi 目录
  // 3. umi 表示 当前所运行的 umi 仓库目录
  alias: {
  },
  // 开启文件hash后缀
  hash: true,
  // 启用 history 路由
  history: {
    type: 'browser'
  },
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: { '@primary-color': '#1DA57A' },
  // 指定react-router的base，部署到根目录时需要配置
  base: '/',
  // 指定webpack的publicPath，指向静态资源文件所在的路径
  publicPath: '/',
  // DefinePlugin 全局常量定义
  define: { FOO: 'bar' },
  // 配置图片文件是否走 base64 编译的阈值
  inlineLimit: 10000,
  // 配置额外的 meta 标签
  metas: [
  ],
  // 代理配置
  proxy: {
    '/fm2': {
      'target': 'http://bapi.xinli001.com/',
      'changeOrigin': true,
      // 'pathRewrite': { '^/fm2': '' },
    },
    '/fm': {
      'target': 'http://yiapi.xinli001.com',
      'changeOrigin': true,
      // 'pathRewrite': { '^/fm': '' },
    }
 
  },

  routes: [
    {
      path: "/",
      component: '@/layouts/index2',
      routes: [
        {path: "/", component: "home", title: "首页" },
        {path: "/search", component: "search", title: "搜索" },
        {path: "/FMplayer/:id", component: "FMplayer", title: "FM播放器" },   
        {path:"/my",component:"my",title:"我的"},
        {path:"/zhubo/:id",component:"zhubo",title:"主播详情"},
        {path:"/mycare",component:"mycare",title:"我关注的电台"},
        {path:"/myCollection",component:"myCollection",title:"我收藏的播单"},
        {path:"/myTopic",component:"myTopic",title:"我的话题"},
        {path:"/myInform",component:"myInform",title:"我的通知"},
        {path:"/myTopicReply",component:"myTopicReply",title:"话题回复"},
        {path: "/find", component: "find", title: "发现" },
        {path: "/category", component: 'category', title: "分类" },
        { path: "/more_ke", component: "more_ke", title: "更多心理课" },
        { path: "/more_fm", component: "more_fm", title: "更多FM" },
        { path: "/more_dt", component: "more_dt", title: "更多电台" },
        { path: "/more_zb", component: "more_zb", title: "更多主播" },
        { path: "/community", component: "community", title: "社区"},
        { path: "/FMComment", component: "FMComment", title: "FM评论"},
        {path:"/community/:id/comment",component: "comment", title: "评论"},
        { path: "/login", component: "login", title: "登录"},
        { path: "/wangjimima", component: "wangjimima", title: "忘记密码"},
        {path:"/jingwai",component: "jingwai", title: "境外用户"}
      ]
    },
    { path: "*", redirect: "/" },
  ],

  // 开启ant design插件
  antd: {},
  // 开启model插件
  model: {},
  // 开启initialState插件
  initialState: {},
  // 开启locale插件
  locale: {
    default: 'zh-CN',    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    baseSeparator: '-'
  },
  // 开启request插件
  request: {
    // 从接口只拿data词条数据
    dataField: 'data'
  },
  // 开启dva
  dva: {},
  npmClient: 'pnpm',

  // extraPostCSSPlugins: [ //配置额外的 postcss 插件。
  //   pxtorem({
  //     // viewportWidth: 375,
  //     // viewportHeight: 667,
  //     rootValue: 10, // 指定转换倍率，我现在设置这个表示1rem=10px;
  //     propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
  //     selectorBalckList: ['.am-'], // 匹配不被转换为rem的选择器，例如UI框架antd-mobile
  //     exclude: /node_modules/i,
  //   }),
  // ]
});

