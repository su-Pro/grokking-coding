## 快速排序

### 思路

method1（阮一峰老师版本）

method2 (挡板快排)

### 代码

```js
/**
 * 不是原地算法...借用了O(n)的内存
 * @param {*} arr
 */
function _q(arr) {
  // base case
  if (arr.length <= 1) return arr;
  let len = arr.length;
  let pivotIndex = Math.floor(len / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [], right = [];

  for (let i = 0; i < len; i++) {
    arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
  }
  return _q(left).concat([pivot], _q(right));
}
```

method2:

```js
/***
 * 改进版:双挡板思想
 * 1.找到pivot
 * 2.i挡板物理意义：所有比pivot小的item  右挡板物理意义：所有比pivot大或相等的item
 *
 * 两个挡板 三个区域
 *
 * 空间复杂度logn 
 *  */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums === null || nums.length <= 0) {
        return nums;
    }
    quickSort(nums,0,nums.length - 1);
    return nums;
};
function quickSort (nums,left,right) {
    if(left >= right) {
        return;
    }
    let pivot = left + Math.floor((right - left) / 2);
    pivot = partition(nums,pivot,left,right);
    quickSort(nums,left,pivot - 1);
    quickSort(nums,pivot + 1,right);
}
function partition (nums,pivot,left,right) {
    let pivotVal = nums[pivot],
        leftBaff = left,
        rightBaff = right - 1;
    swap(nums,pivot,right);
    while(leftBaff <= rightBaff) {
        if(nums[leftBaff] <= pivotVal) {
            leftBaff++
        }else if(nums[rightBaff] >= pivotVal) {
            rightBaff--
        }else {
            swap(nums,leftBaff++,rightBaff--)
        }
    }
    swap(nums,leftBaff,right);
    return leftBaff;
}
function swap (nums,x,y) {
    return [nums[x],nums[y]] = [nums[y],nums[x]]
}
```

#### 复杂度

Time:

Space:
