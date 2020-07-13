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