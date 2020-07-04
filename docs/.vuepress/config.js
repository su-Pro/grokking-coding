// TODO: logo
// TODO: 可以放大的图片组件？？？

module.exports = {
  title: 'FE-basal', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '前端编码基础',// 注入到当前页面的 HTML <head> 中的标签    meta 中的描述文字，用于SEO  
  themeConfig: {
    // logo: '/egg.png',  //网页顶端导航栏左上角的图标

    //顶部导航栏    
    nav: [
      { text: '地图速览', link: '/pages/map/' },
      { text: '数据结构', link: '/pages/dataStructure/' },
      { text: '经典算法', link: '/pages/ideology/' },
      { text: '交叉训练', link: '' },
      { text: '剑指offer', link: '' },
      { text: "番外-正则", link: '' },
      { text: 'Github', link: 'https://github.com/dwanda' },
    ],
    sidebar: {//侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
      // 算法
      '/pages/ideology/': [
        {
          title: 'ALG-DFS',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['/pages/ideology/DFS/1-子集/', '1-子集'],
          ]
        }
      ],
      // 数据结构
      "/pages/dataStructure/": [
        {
          title: 'DS-tree',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 0,
        }
      ]
      // 交叉训练
      // 剑指offer
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}