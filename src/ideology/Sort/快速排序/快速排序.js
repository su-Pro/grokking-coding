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