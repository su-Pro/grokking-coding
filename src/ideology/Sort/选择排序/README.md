## 选择排序

[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

### 思路

典型挡板思想

1. 确定挡板的物理意义：保证0 ~ i（挡板）的元素是有序的，最后返回从0 ~ i的元素即可。

2. 根据特点明确内外层循环的物理意义
 
### 代码

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  function swap (nums,x,y) {
      return [nums[x],nums[y]] = [nums[y],nums[x]]
  }
  for(let i = 0;i < nums.length;i++) {
      let minIdx = i;
      for(let j = i + 1;j < nums.length;j++) {
          if(nums[j] < nums[minIdx]) { // 命中更新最小idx逻辑
              minIdx = j
          }
      }
      if(minIdx !== i) swap(nums,i,minIdx);
  }
  return nums;
};
```

#### 复杂度

Time: O(n ^ 2)

Space: O (1)
