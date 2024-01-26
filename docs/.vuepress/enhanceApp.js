import 'element-ui/lib/theme-chalk/index.css';
import FsKeyboard from '../../packages/FsKeyboard/src/index.vue'

export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  if (!isServer) {
    await import('element-ui').then(ElementUI => {
      Vue
        .use(ElementUI)
        .use(FsKeyboard)
    })
  }
}