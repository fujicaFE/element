import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //引入UI
import 'element-ui/lib/theme-chalk/index.css'
import fsUI from '../lib/index' // build后测试引入是否有效
import '../lib/index/index.css'
import '../packages/index.css'  // 如果有全局样式的话需要引入

// 需要手动挂载 $ELEMENT 到原型上
Vue.prototype.$ELEMENT = {
  version: '1.4.2'
}

Vue
  .use(ElementUI)
  .use(fsUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
