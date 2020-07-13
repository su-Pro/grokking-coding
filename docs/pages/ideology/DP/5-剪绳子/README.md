## 剑指 Offer 14- I. 剪绳子

[剑指 Offer 14- I. 剪绳子](https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

### 描述

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

示例 2:

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

### 思路

![20200713202218]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200713202218.png)
![20200713202237]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200713202237.png)


### 代码

```js
/**
-  -> 1
-- -> 1

-- - -> 2

---- -> 3 ? 4 

- ---- ->  
 */
var cuttingRope = function (n) {
	// 左大段 右小段 
	let dp = new Array(n + 1).fill(1);
	dp[1] = 1;
	dp[2] = 1;
	// 外层循环是每个左大段
	for (let i = 3; i <= n; i++) {
		// 内层循环是每个右小段
		for (let j = 1; j < i; j++) {
			// 右小段的每个值eg:3 m => 2 / 1;
			let curMax = Math.max(dp[i - j], i - j) * j;
			dp[i] = Math.max(curMax, dp[i]);
		}
	}
	return dp[n];
};
```

#### 复杂度

Time: O(n ^ 2)

Space:O(n)

TODO: dfs做法
