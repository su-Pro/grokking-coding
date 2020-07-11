## Closest in Sorted Array

[Closest in Sorted Array](https://app.laicode.io/app/problem/17)

### Description

Given a target integer T and an integer array A sorted in ascending order, find the index i in A such that A[i] is closest to T.

Assumptions

There can be duplicate elements in the array, and we can return any of the indices with same value.

Examples

```js

A = {1, 2, 3}, T = 2, return 1
A = {1, 4, 6}, T = 3, return 1
A = {1, 4, 6}, T = 5, return 1 or 2
A = {1, 3, 3, 4}, T = 2, return 0 or 1 or 2

```

Corner Cases

What if A is null or A is of zero length? We should return -1 in this case.
Medium

Array

Binary Search

### 思路

经典二分法的变种，由于题目说的是找到最接近target的元素，所以我们只需要夹单即可。

如果进入了后续处理中啊，需要返回他们的abs做差最小的元素。

看代码即可。

### 代码


```js
function binarySearch(arr, target) {
  if (arr === null || arr.length === 0) {
    return -1;
  }
  let left = 0,
    right = arr.length - 1,
    mid;
  // 夹单
  while (left + 1 < right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
      // 重点：不能略过mid元素
      // 如果mid元素刚好是最接近的就会失去正确答案
    } else if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  // 找到abs最小的元素返回
  // 如果两个差值相同，则返回了后面的元素
  if (Math.abs(arr[left] - target)
    < Math.abs(arr[right] - target)) {
    return left;
  } else {
    return right;
  }
}


let arr = [1, 2, 4, 7, 8]
console.log(binarySearch(arr, 3))
```


#### 复杂度

Time: O(logn)

Space: O(n)
