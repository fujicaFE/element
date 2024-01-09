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

## 按需引入（Recommend）
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