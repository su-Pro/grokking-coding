/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
    if (nums === null || nums.length < 0) {
      return [-1, -1];
    }
    let leftBaf = 0, rightBaf = nums.length - 1, mid = 0;
    // 需要精准找到元素，所以条件是left<=right
    while (leftBaf <= rightBaf) {
      mid = Math.floor((leftBaf + rightBaf) / 2)
  
      if (target === nums[mid]) break;
      else if (nums[mid] < target) leftBaf = mid + 1;
      else rightBaf = mid - 1;
    }
    // 后续处理：case1:
    //case2:找到mid
    // leftBaf > rightBaf 说明已经出界
    if (leftBaf > rightBaf) return [-1, -1];
    // i 和 j 指针同时指向target 
    let i = j = mid;
    // 如果i左边也等于target,那么i-- 
    while (nums[i - 1] === nums[i]) i--;
    // 如果j右边也等于target 那么j++
    while (nums[j + 1] === nums[j]) j++;
    return [i, j]
    // 最后返回[i,j]
  };
// @lc code=end

