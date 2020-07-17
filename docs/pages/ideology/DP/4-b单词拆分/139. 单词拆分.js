/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	// dp[i]表示0-i之间的字符串是否可以被拆分并满足题设条件存在于wordDict中
	let dp = new Array(s.length).fill(false);
	let set = new Set(wordDict);
	for (let i = 0; i < s.length; i++) {
		// 只要有一个为true 直接看下一个单词，等同于 case1 || case2 || case3...
		if (set.has(s.substring(0, i + 1))) {
			dp[i] = true;
			continue;
		}
		// 左大段和右小段
		// 左大段表示历史上还可以再分，并且是最优解的那个答案
		// 右小段表示直接可以从数据中获取处理结果的，不能cute，单成一派        
		for (let j = 0; j < i; j++) {
			if (dp[j] && set.has(s.substring(j + 1, i + 1))) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length - 1];
}    