/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
1. debugger 条件能分清，不错。
2. 但是判断有序无序这里，存在逻辑问题。
3. 判断是否在范围内的条件太简单。
 */

var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    m = -1;

  // debug 条件
  // [1] => 1
  while (l <= r) {
    // 找到有序区间，在有序区间内进行二分查找
    m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m; // common Conditions

    if (nums[m] >= nums[l]) {
      // debug 条件是否可以等于 // [0,1] => 1
      // 左边有序
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // 右边有序
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};
