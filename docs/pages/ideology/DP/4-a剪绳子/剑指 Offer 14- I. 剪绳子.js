/**
 * @param {number} n
 * @return {number}
 */
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