/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  function swap (nums,element1,element2) {
      let temp = nums[element1];
      nums[element1] = nums[element2];
      nums[element2] = temp;
  }
  for(let i = 0; i < nums.length; i++) {
      for(let j = 0;j < nums.length - i;j++) {
          if(nums[j] > nums[j + 1]) {
              swap(nums,j,j + 1);
          }
      }
  }
  return nums;
};