// import { recoTheme } from 'vuepress-theme-reco'

module.exports = {
  title: '@fujica/element',
  description: 'PC组件库文档。',
  base: '/fsdocs/element/',
  themeConfig: {
    sidebar: [
      {
        title: '介绍',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/',
        ]
      },
      {
        title: '组件',   // 必要的
        path: '/comp/Input',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '/comp/Input.md',
        ]
      }
    ],
    nav: [
      // 一级导航
      { text: 'Github', link: '/guide/' },
      // 下拉列表导航
      {
        text: '了解更多',
        items: [
          { text: 'github', link: 'https://github.com/fujicaFe', target: '_blank' }
        ]
      }
    ],
    lastUpdated: 'Last Updated', // string | boolean
    // 禁用导航，与上面的配置是互斥行为。
    // navbar: false
  }
}
