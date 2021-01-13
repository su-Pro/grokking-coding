/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = run = 0,
        j = nums.length - 1;
    //  Debug fail: 没有搞清楚j指针的真正物理意义，导致认为 run < j 也可以。
    while(run <= j) {
        if(nums[run] === 2) {
            swap(nums,j--,run);           
        }else if(nums[run] === 1) {
            run++
        }else {
            // 假设一定是0
            swap(nums,i++,run++);            
        }
    }
    function swap(arr,idx1,idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return nums;
};
// @lc code=end

