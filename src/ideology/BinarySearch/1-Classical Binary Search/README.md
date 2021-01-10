## 704. 二分查找

[704. 二分查找](https://leetcode-cn.com/problems/binary-search/)

### 描述

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

### 思路

经典二分法,不过我选择的是进行后续处理的写法。

> 这样思路更清晰

- 定义left 、 right 指针，卡在数组的两端
- 定义mid指针，位于left 和 right 的中央
- 如果left、right没有相邻，且没有找到target，需要将范围不断缩小
  - 当nums[mid] > target 时，说明最终结果一定在nums的左边，将right指针向小范围缩减
  - 当nums[mid] < target 时，说明最终结果一定在nums的右边，将left指针向大范围缩减
- 如果left 和 right 相邻时，说明target一定是：left和right其中一个 或者 不存在
  - 无先后顺序，cover到条件即可

### 代码

```js
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
```

#### 复杂度

Time: 最坏情况下需要遍历 1 / 2 num 的元素，所以总时间为 => O(logn)

Space: O(1)
