import FsKeyboard from './src'

FsKeyboard.install = function (Vue) {
  Vue.component(FsKeyboard.name, FsKeyboard)
}

export default FsKeyboard