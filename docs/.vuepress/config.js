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
				// DP
				{
					title: 'ALG-DP',   // 一级菜单名称
					collapsable: true, // false为默认展开菜单, 默认值true是折叠,
					sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
					children: [
						['/pages/ideology/DP/1-fibo/', '1 - 斐波那契额'],
						['/pages/ideology/DP/2-a最大子序和/', '2-a 最大子序和'],
						['/pages/ideology/DP/2-b最长subarray/', '2-b 最长subarray'],
						['/pages/ideology/DP/3-a最长上升子序列/', '3-a 最长上升子序列'],
						// ['/pages/ideology/DP/3-b最大subarray和/', '3-b 最大subarray和'],
						// ['/pages/ideology/DP/3-b-follow-up优化空间/', '3-b-follow-up: 优化空间'],
						// ['/pages/ideology/DP/3-b-follow-up返回索引/', '3-b-follow-up: 返回索引'],
						['/pages/ideology/DP/4-a剪绳子/', '4-a 剪绳子'],
						['/pages/ideology/DP/4-b单词拆分/', '4-b 单词拆分'],
						['/pages/ideology/DP/5-a跳跃游戏I/', '5-a 跳跃游戏I'],
						['/pages/ideology/DP/5-b跳跃游戏II/', '5-b 跳跃游戏II'],
					]
				},
				// DFS
				{
					title: 'ALG-DFS',   // 一级菜单名称
					collapsable: true, // false为默认展开菜单, 默认值true是折叠,
					sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
					children: [
						['/pages/ideology/DFS/1-子集/', '1 - 子集'],
						['/pages/ideology/DFS/2-括号生成/', '2 - 括号生成'],
						['/pages/ideology/DFS/3-硬币/', '3 - 硬币'],
						['/pages/ideology/DFS/4-全排列/', '4 - 全排列'],
					]
				},
				{
					title: 'ALG-BinarySearch',   // 一级菜单名称
					collapsable: true, // false为默认展开菜单, 默认值true是折叠,
					sidebarDepth: 0,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
					children: [
						['/pages/ideology/BinarySearch/1-Classical Binary Search/', '1 - Classical Binary Search'],
						['/pages/ideology/BinarySearch/2-Search in Sorted Matrix/', '2 - Search in Sorted Matrix'],
						['/pages/ideology/BinarySearch/3-Closest in Sorted Array/', '3 - Closest in Sorted Array'],
						['/pages/ideology/BinarySearch/4-Fisrt|Last Occurrence/', '4 - Fisrt|Last Occurrence'],
						['/pages/ideology/BinarySearch/5-K Closest in Sorted Array/', '5 - K Closest in Sorted Array'],
					]
				},
				{
					title: 'ALG-Sort',
					collapsable: true,
					sidebarDepth: 0,
					children: [
						['/pages/ideology/Sort/归并排序/', '1 - 归并排序'],
						['/pages/ideology/Sort/快速排序/', '2 - 快速排序'],
						['/pages/ideology/Sort/选择排序/', '3 - 选择排序'],
						['/pages/ideology/Sort/插入排序/', '4 - 插入排序'],
						['/pages/ideology/Sort/冒泡排序/', '5 - 冒泡排序'],
					]
				},
			],
			// 数据结构
			"/pages/dataStructure/": [
				{
					title: 'DS-Array',
					collapsable: true,
					sidebarDepth: 0,
					children: [
						['/pages/dataStructure/array/1-移动零/', '1 - 移动零'],
						['/pages/dataStructure/array/2-存在重复元素/', '2 - 存在重复元素'],
						['/pages/dataStructure/array/3-盛水最多的容器/', '3 - 盛水最多的容器'],
					]
				},
				{
					title: 'DS-String',
					collapsable: true,
					sidebarDepth: 0,
					children: [
						['/pages/dataStructure/string/1-String Removal/1-Remove Certain Characters.md', '1-a String Removal'],
						['/pages/dataStructure/string/1-String Removal/2-Remove Spaces', '1-b Remove Spaces'],
						['/pages/dataStructure/string/2-String De-duplication/1047. 删除字符串中的所有相邻重复项', '2 - String De-duplication'],
						['/pages/dataStructure/string/3-String Replace/', '3 - String Replace'],
						['/pages/dataStructure/string/4-String Reversal/344. 反转字符串.md', '4-a String Reversal'],
						['/pages/dataStructure/string/5-String SubString Finding/', '5- String SubString Finding'],
					]
				},
				{
					title: 'DS-LinkList',
					collapsable: true,
					sidebarDepth: 0,
					children: [
						['/pages/dataStructure/linkList/1-翻转链表/', '1 - 翻转链表'],
						['/pages/dataStructure/linkList/2-链表的中点/', '2 - 链表的中点'],
						['/pages/dataStructure/linkList/3-环形链表/', '3 - 环形链表'],
						['/pages/dataStructure/linkList/4-合并两个有序链表/', '4 - 合并两个有序链表'],
						['/pages/dataStructure/linkList/5-分隔链表/', '5 - 分隔链表'],
						['/pages/dataStructure/linkList/6-重排链表/', '6 - 重排链表'],
						['/pages/dataStructure/linkList/7-两数相加/', '7 - 两数相加'],
					]
				},
				{
					title: 'DS-tree',
					collapsable: true,
					sidebarDepth: 0,
					children: [
						['/pages/dataStructure/tree/1-前中后/in-order', '1-a in-order'],
						['/pages/dataStructure/tree/1-前中后/pre-order.md', '1-b pre-order'],
						['/pages/dataStructure/tree/1-前中后/post-order.md', '1-c post-order'],
						['/pages/dataStructure/tree/2-平衡二叉树/', '2 - 平衡二叉树'],
						['/pages/dataStructure/tree/3-对称二叉树/', '3 - 对称二叉树'],
						['/pages/dataStructure/tree/4-BST/', '4 - BST'],
						['/pages/dataStructure/tree/5-完全二叉树/', '5 - 完全二叉树'],
					]
				},

			]
			// 交叉训练
			// 剑指offer
			//...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
		}
	}
}