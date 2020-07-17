## Longest Ascending SubArray

[Longest Ascending SubArray](https://app.laicode.io/app/problem/86)

### 描述

Description
Given an unsorted array, find the length of the longest subarray in which the numbers are in ascending order.

Assumptions

The given array is not null
Examples

{7, 2, 3, 1, 5, 8, 9, 6}, longest ascending subarray is {1, 5, 8, 9}, length is 4.
{1, 2, 3, 3, 4, 4, 5}, longest ascending subarray is {1, 2, 3}, length is 3.

### 思路

![20200713203722]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200713203722.png)

### 代码

```js
function longest(arr) {
	let dp = new Object();
	dp[0] = 1;
	let maxLength = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			dp[i] = dp[i - 1] + 1;
		} else {
			// 相等时也会认为不满足要求
			dp[i] = 1;
		}
		maxLength = Math.max(maxLength, dp[i]);
	}
	return maxLength;
}
```
#### 复杂度

Time: O(n)

Space: O(1)
