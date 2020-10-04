/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums == null || nums.length <= 1) {
    return [-1, -1]
  }
  /**
   * 思路：
   *  使用Map，其物理意义：key -> 当前索引对应的“目标值”； value:当前的索引
   * 
   * 1. 创建Map
   * 2. 遍历当前数组，将当前值存入到set中，进入目标值检查算法：
   * 
   *  - 检查Map中是否存在 nums[i],如果存在，说明找到目标对，返回当前i 和 map中的值
   *  - 如果Map中不存在，则设置当前“目标值”，和 索引值
   * 
   * 3. 如果没有找到（循环结束），返回[-1,-1];
   */
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      return [hashMap.get(nums[i]), i]
    } else {
      hashMap.set(target - nums[i], i);
    }
  }
  return [-1, -1];
};