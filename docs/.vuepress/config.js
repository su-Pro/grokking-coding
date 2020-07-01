module.exports = {
  // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  title: '算法基础',
  // 注入到当前页面的 HTML <head> 中的标签
  // meta 中的描述文字，用于SEO
  description: '前端面试算法 Leecode js解题',

  head: [
    // ['link',
    //   { rel: 'icon', href: '/egg.png' }
    //   //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    // ],
  ],
  themeConfig: {
    // logo: '/egg.png',  //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },
      { text: '指南', link: '/pages/map/' },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类',  //默认显示        
        ariaLabel: '分类',   //用于识别的label
        items: [
          { text: '数据结构', link: '/pages/dataStructure/' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: '算法', link: '/pages/ideology/' },
        ]
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/dwanda' },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
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
      "/pages/dataStructure/": [
        {
          title: 'DS-tree',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 0,
        }
      ]

      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}