# 颜色排序

挡板思想，明确三个挡板四个区间。

### 思路

1. 明确三根指针i,j,run的物理意义
2. 跑一遍demo，注意循环结束条件

### 代码

```js
var sortColors = function(nums) {
    let i = 0,
        y = nums.length - 1,
        r = 0;
    while(r <= y) {
        if(nums[r] === 2) {
            swap(nums,r,y--)
        }else if(nums[r] === 0) {
            swap(nums,r++,i++)
        }else {
            r++
        }
    }
    return nums;
};
function swap (nums,x,y) {
    let temp = nums[y];
    nums[y] = nums[x];
    nums[x] = temp
}
```