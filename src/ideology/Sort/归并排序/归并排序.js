/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
  function mergeSort(nums, left, right) {
    if (left >= right) {
      return;
    }
    let mid = left + Math.floor((right - left) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    mergeArray(nums, left, mid, right);
  }
  function mergeArray(nums, start, mid, end) {
    let arrTemp = nums.slice(),
      left = start,
      right = mid + 1, // 两段数据集都要从最左端开始比较
      idx = start;
    while (left <= mid && right <= end) {
      // 谁小移谁
      if (arrTemp[left] < arrTemp[right]) {
        // 注意这里需要使用原数据集进行比较，why？
        nums[idx++] = arrTemp[left++];
      } else {
        nums[idx++] = arrTemp[right++];
      }
    }
    // 1. 都为空
    // 2. right 为空，left有剩余
    while (left <= mid) {
      nums[idx++] = arrTemp[left++];
    }
  }
};
