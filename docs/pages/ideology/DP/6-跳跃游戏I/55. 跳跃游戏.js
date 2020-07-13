/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let len = nums.length;
	let target = len - 1;
	for (let i = len - 2; i >= 0; i--) {
		if (nums[i] + i >= target) {
			target = i;
		}
	}
	return target === 0;
};