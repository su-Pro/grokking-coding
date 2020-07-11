
## 34. 在排序数组中查找元素的第一个和最后一个位置

[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### 描述

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

```

### 思路

二分法的变种

- 因为数组有序，既可通过二分法找到target所在的索引，但并不确定：左边以及右边是否还存在相同的元素

- 因此需要 i 和 j 指针(初始位置同样在nums位置上)，分别去探寻lowerBound 和 upperBound

### 代码

```js

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
```

#### 复杂度

Time: O(logn(n))

Space:
