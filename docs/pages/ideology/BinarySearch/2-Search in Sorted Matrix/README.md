## 74. 搜索二维矩阵

[74. 搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)

### 描述

编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

示例 1:

```
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
示例 2:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false
```

### 思路

是经典二分法的变形：

- 在移动mid时，需要将二维数组 拉成 一维数组。

- 在判断 一维数组中mid 是否等于target时，需要 map 回 二维数组，这样才能拿到正确的值。

- map 回 公式：
  
  - row = mid / col;
  - col = mid % col;

> 练习一下错过才退出的写法，并且这道题这样写更简单
> !注意map回去的时候 / 操作要向下取证，debugger了2分钟...才反应过来！！！

### 代码

```js
var searchMatrix = function (matrix, target) {
  if(matrix === null || matrix.length === 0) {
    return false
  }
  // 矩阵的行
  let _mRow = matrix.length;
  // 矩阵的列
  let _mCol = matrix[0].length;

  // 定义左右指针
  let left = 0,
    right = _mCol * _mRow - 1,
    mid = 0;
  // 错位退出
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    // map回 Martix
    let r, c;
    // here 需要取整
    r = Math.floor(mid / _mCol);
    c = mid % _mCol;
    if (matrix[r][c] === target) {
      return true
    } else if (matrix[r][c] < target) {
      // leftBaf ++
      left = mid + 1;
    } else {
      // rightBaf --
      right = mid - 1;
    }
  }
  return false;
};
```

#### 复杂度

Time: O(logn)

Space: O(1)
