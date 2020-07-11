## 217. 存在重复元素

[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

### 描述

给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。


示例 1:

```
输入: [1,2,3,1]
输出: true
```

示例 2:

```
输入: [1,2,3,4]
输出: false
```

### 思路

排序即可解决该问题

1. 首先对整个数组排序
2. 从头遍历数组，如果发现相邻元素相同，则返回false


### 代码

```js
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    for(let i = 1;i < nums.length;i++) {
        if(nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};
```

#### 复杂度

Time: 排序需要O(log(n))，遍历需要O(n) 所以总的时间复杂度 => O(log(n) + n)

Space:O(1)
