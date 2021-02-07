## 283. 移动零

[283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

### 描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

### 思路

典型挡板思想：

需要定义：i 挡板 和 j指针

- i 挡板的物理意义：从0 ~ i 是最终要返回的结果，不包含0的元素
- j 指针的物理意义：扫描整个nums，当遇到0时，让i原地不动。遇到非0元素时将其余i元素进行交换。


特殊情况：如果i j 错位（i < j），说明i是有指向0的元素的，所以需要swap

### 代码

```js
var moveZeroes = function(nums) {
  let i = 0,
      j = 0;
  for(;j < nums.length;j++){
    if(nums[j] !== 0) {
      if(i < j) {
        // swap
        nums[i] = nums[j];
        nums[j] = 0;
      }
      i++
    }
  }
};
```

#### 复杂度

Time: j指针需要遍历整个数组，当遍历结束后整个函数结束。 共需要 => O(n)

Space: O(1)
