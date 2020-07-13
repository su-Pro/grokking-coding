var maxSubArray = function (nums) {
	let map = new Map();
	map[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		//     对最终结果有大用处
		if (map[i - 1] >= 0) {
			map[i] = nums[i] + map[i - 1];
		} else {
			//       加一个负数只会越小      
			map[i] = nums[i];
		}
	}
	//   最后求出最大值
	let maxSum = map[0];
	for (let i = 1; i < nums.length; i++) {
		maxSum = Math.max(maxSum, map[i]);
	}
	return maxSum
};