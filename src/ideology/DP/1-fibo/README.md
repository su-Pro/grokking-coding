## 509. 斐波那契数

[509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)

### 描述

斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。

### 思路

![20200713202403]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200713202403.png)

### 代码

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
	let dp = new Object();
	dp[0] = 0
	dp[1] = 1
	for (let i = 2; i <= N; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[N];
};
```

#### 复杂度

Time: O(n)

Space: O(n)
