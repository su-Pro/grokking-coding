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