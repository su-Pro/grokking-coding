
// 1.排序写法 时间复杂度：O(nlogn) 空间复杂度:O(1)

/**
 * 1. 对输入的数组进行排序
 * 2. one by one 的比较元素，是否相等，如果相等即刻返回其中一个元素
 * @param {*} nums 
 */
var findRepeatNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) return nums[i];
  }
  return -1;
};


// 2.哈希写法 时间复杂度： O(n) 空间复杂度：O （n)

/**
 * 1. 创建hash表，将每个元素依次加入到hash表中
 * 2. 每加入元素前，需要检查是否存在该元素，如果存在则说明有重复元素，即刻返回
 * @param {*} nums 
 */
var findRepeatNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return map.get(nums[i]);
    map.set(nums[i], nums[i])
  }
  return -1;
};

// 3.利用数组的“哈希特性” 时间复杂度： O(n) 空间复杂度：O （1)

/**
 * 思路：
 * - 数组的索引充当hash中的key，因此一定是唯一的
 * - 遍历数组，保证每个元素对应一个key值，当有多个元素对应一个key时，即找到重复元素
 * 
 * 实现：
 * 
 * -  遍历数组，判断当前item 对应的value 是否等于 idx
 *    - 如果等于，则移动到下一个item继续判断
 *    - 如果不等于
 *      - 先判断当前值和目标位的值是否相等，如果相等说明找到了重复元素
 *      - 如果不相等，则将两个元素进行swap
 * -  遍历结束，没有找到重复元素，返回-1 
 * @param {*} nums 
 */
var findRepeatNumber = function (nums) {
  let swapElement = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let curIdx = -1;
  for (let idx = 0; idx < nums.length; idx++) {
    curIdx = nums[idx];
    if (curIdx !== idx) {
      if (curIdx === nums[curIdx]) return nums[curIdx];
      swapElement(nums, idx, curIdx);
    }
  }
  return -1;
};