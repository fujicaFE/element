// 所有组件的集合
import FsKeyboard from './FsKeyboard'

import './index.css'

const components = [FsKeyboard]

const install = function (Vue, opts = {}) {
  if (!Vue.prototype.$ELEMENT) {
    console.warn('未在 Vue 中检测到 element-ui 的安装，组件注册失败！建议安装 @2.6.10+ 版本。')
    return
  }
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  FsKeyboard
}