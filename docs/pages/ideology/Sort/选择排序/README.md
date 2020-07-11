## 选择排序

[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

### 描述

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 
提示：

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000

### 思路

典型挡板思想

i挡板的物理意义：遍历整个数组，保证0 ~ i的元素是有序的；i指针指向的元素时依次递增的；最后返回从0 ~ i的元素即可。

内层循环：找到当前范围内最小元素的索引

- swap 当前循环确定的最小元素和i指针指向的元素，保证i的物理意义。
- 缩小排序范围重复上述工作
- 当i指针到达尾部时，整个排序结束
 
### 代码

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // globalIndex标识当前最小元素的索引
    let globalIndex = 0;
    let len = nums.length;
    // 只做n -1 次即可
    for(let i = 0; i < len.length - 1;i++) {
      /**
       * - 找到当前范围内最小的元素索引     
       * 
       * - 每次都要确定一下最后一个元素是否是最小的，所以不能省略最后元素
       *  */             
      globalIndex = i;
      for(let j = i + 1;j < len.length;j++) {
        if(nums[j] < nums[globalIndex]) {
          globalIndex = j
        }
      }
      // swap 首个元素和最小元素
      [nums[i],nums[globalIndex]] = [nums[globalIndex],nums[i]];
    }
    return nums;
};
```

#### 复杂度

Time: O(n ^ 2)

Space: O (1)
