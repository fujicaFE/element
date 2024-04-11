# 简介
富士通用组件库（PC端）

# 安装
```npm install @fujica/element -D```

# 使用
## 全局引入
```js
// main.js
import Vue from 'vue'
import fujiElement from '@fujica/element'
Vue.use(fujiElement)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

## 按需引入（推荐）
```vue
<template>
  <fs-keyboard @carplate="func"></fs-keyboard>
</template>
<script>
import { FsKeyboard } from '@fujica/element'
export default {
  // ...
  components: [FsKeyboard]
}
</script>
```

注：按需引入需要在项目中安装babel插件并配置才能实现，流程如下

1. 安装插件`npm i babel-plugin-import`
2. 配置babel
```js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: '@fujica/element',
        style: (name) => {
          return `${name}/index.css`;
        },
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false // 是否需要驼峰转下划线
      }
    ]
  ]
};
```
> 配置完成后，删除main.js中的引入，直接在组件中按需引入
