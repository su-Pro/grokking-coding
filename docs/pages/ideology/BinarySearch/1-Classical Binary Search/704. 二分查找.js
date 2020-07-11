/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // leftBaf rightBaf 
  let leftBaf = 0,
    rightBaf = nums.length - 1,
    mid = 0;
  // 相邻退出？
  while (leftBaf < rightBaf - 1) {
    mid = Math.floor((leftBaf + rightBaf) / 2);
    // 找到目标结果
    if (nums[mid] === target) return mid;
    // 如果mid V > target  需要将范围缩小到左边
    // 已经确定mid位上不是target，因此可以跳过
    if (nums[mid] > target) {
      rightBaf = mid - 1;
    } else {
      leftBaf = mid + 1;
    }
  }
  // post process 
  // left or right is target?
  // 先判断left 或 right 都可以，没有顺序要求
  if (nums[leftBaf] === target) {
    return leftBaf;
  } else if (nums[rightBaf] === target) {
    return rightBaf;
  } else {
    return -1
  }
};