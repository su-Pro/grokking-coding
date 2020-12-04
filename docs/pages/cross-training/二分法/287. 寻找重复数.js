/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 不能改变原数组，不能使用额外空间，那么排序是pass掉了。
 *
 * 由于题目给定了范围区间，1  ~ n 那么假设长度8的数组中，1 ~ 7 肯定有重复的元素
 *
 * 现在取中间元素4 统计 小于等于 4的元素出现个数，如果刚好等于4个，说明没有重复，那么右侧一定是存在重复元素。
 *
 *
 * 总结：
 * 首先获取 中间元素
 * 判断所有小等于 中间元素的个数
 *  如果小于等于mid 说明不会有重复元素（左区间 舍弃）
 *  否则说明左侧有重复元素（右区间 舍弃）并将当前mid 的值设置为结果（这样做是因为退出循环时说明找到结果，那么结果就是上一次mid的值）
 */
var findDuplicate = function (nums) {
  let lBaf = 0,
    rBaf = nums.length - 1,
    median = 0;
  let res, count;

  while (lBaf <= rBaf) {
    median = Math.floor((lBaf + rBaf) / 2);
    // 数数
    count = 0;
    for (let i = 0; i < nums.length; i++) {
      // 发生隐式转换
      count += nums[i] <= median;
    }
    if (count <= median) {
      // 左侧不会有重复，把lBaf移动到median + 1
      lBaf = median + 1;
    } else {
      rBaf = median - 1;
      res = median; // 可能是一个重复的元素
    }
  }
  return res;
};

const testArr = [1, 10, 10, 3, 4, 2, 2];
findDuplicate(testArr);
