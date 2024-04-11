// 所有组件的集合
import FsKeyboard from "./FsKeyboard/src";

import "./index.css";

const components = [
  FsKeyboard
];

const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return;
  // 判断Element是否存在
  if (!Vue.prototype.$ELEMENT) {
    console.warn(
      "未在 Vue 中检测到 element-ui 的安装，组件注册失败！建议安装 @2.6.10+ 版本。"
    );
    return;
  }
  // 遍历注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;

export {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 组件列表
  FsKeyboard,
};
