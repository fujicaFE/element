const { defineConfig } = require('@vue/cli-service')
const { getEntries } = require('./build')

const devConfig = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
})

const buildConfig = defineConfig({
  outputDir: 'lib',
  productionSourceMap: false,
  chainWebpack: config => { // vue-loader配置（vue和js文件转译）
    config.module
      .rule('babel_package')
      .test(/\.(js)|(vue)$/)
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('vue_transfer')
      .test(/\.vue$/)
      .include
      .add('/packages')
      .end()
      .use('eslint-loader')
      .loader('eslint-loader')
      .end()
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: {
    entry: { // 自动引入所有组件入口
      ...getEntries('packages')
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2' // cjs
    }
  },
  css: { // 所有css分别打到lib/style目录
    sourceMap: true,
    extract: {
      filename: 'style/[name].css'
    }
  },
})

const config = process.env.NODE_ENV === 'development' ? devConfig : buildConfig

// 去除 @vue/cli 自带的一些功能
// config.optimization.delete('splitChunks') // 组件单独打包，不需要公共 chunk
// config.plugins.delete('copy') // public/ 的内容不要复制到 lib/
// config.plugins.delete('html')  // 不需要生成 html 文件
// config.plugins.delete('preload')  // 与 html 文件相关的
// config.plugins.delete('prefetch')  // 与 html 文件相关的
// config.plugins.delete('hmr')  // 去除热更新
// config.entryPoints.delete('app') // 不需要自动加上入口

module.exports = config