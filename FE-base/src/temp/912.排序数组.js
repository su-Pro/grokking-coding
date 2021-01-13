/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(arr) {
    if (arr === null || arr.length === 0) {
      return arr;
    }    
    helper(arr, 0, arr.length - 1);
    return arr;
    function helper(arr, start, end) {      
      if (start >= end) {
        return;
      }
      let mid = Math.floor(start + (end - start) / 2)
      helper(arr,  start, mid);
      helper(arr,  mid + 1, end);      
      merge(arr,  start, mid, end);
    }
    function merge(arr,  start, mid, end) { 
        let temp = arr.slice();// 在比较大小往回merge 的时候，需要做参考    
      let left = start, right = mid + 1, index = start;      
      while (left <= mid && right <= end) {
        if (temp[left] < temp[right]) {
          arr[index++] = temp[left++]
        } else {
          arr[index++] = temp[right++]
        }
      }
      //  处理最后有剩余情况，由于一刀两半，mid划分到左边，因此右边一定不会剩余
      while (left <= mid) {
        arr[index++] = temp[left++]
      }
    }

  }
// @lc code=end

