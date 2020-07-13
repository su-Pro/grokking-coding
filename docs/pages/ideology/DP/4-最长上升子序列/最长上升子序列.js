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