## 300. 最长上升子序列

[300. 最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

### 描述

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

```
输入: [10,9,2,5,3,7,101,18]
输出: 4
```

解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:
可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

TODO: O（nlogn）解法

### 思路

![20200713202302]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200713202302.png)

### 代码

```js
var lengthOfLIS = function (nums) {
	let len = nums.length;
	let dp = new Array(len).fill(1);
	let max = 0;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				// 刷新当前最大值，因为是从0遍历的子序列，要保证能够找到最大值
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
		// 更新max结果
		max = Math.max(dp[i], max)
	}
	return max;
};
```

#### 复杂度

Time: O(n ^ 2)

Space: O(n)
