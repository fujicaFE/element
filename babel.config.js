module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
     ['import', {
       libraryName: '@fujica/element',
       libraryDirectory: 'lib',
       camel2DashComponentName: false,
       camel2UnderlineComponentName: false
     }, '@fujica/element']
  ]
}
