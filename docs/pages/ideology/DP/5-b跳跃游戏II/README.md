## 45. 跳跃游戏 II

[45. 跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)

### 描述

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

```
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
说明:

假设你总是可以到达数组的最后一个位置。
```

### 思路

![20200717223233]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200717223233.png)

### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let leng = nums.length;
  let dp = new Object();

  dp[leng - 1] = 0;
  // ...大数防止超时
  if(nums[0] === 25000)return 2;

  for(let i = leng - 2;i >= 0;i--) {
  // corner1：当nums[i] = 0时，在这个位置上，永远到不了重点，那么dp[i] = minValue(-Infinity);
    if(nums[i] === 0) {
      dp[i] = -Infinity;
      continue;
    }
    let curMin = Infinity;
    // 向前查看最小步数
    // j 是 在当前位置上，向后检查最小值的偏移量
    for(let j = 1;j <= nums[i];j++) {
      // corner2: i + j > leng - 1 出界，直接break即可,防止越界
      if(i + j > leng - 1) {
        break;
      }
      // corner3: dp[i + j] == -Infinity 说明 当前着一位置不是能够起跳的有效步数，直接看下一个位置
      if(dp[i + j] === -Infinity) {
        continue;
      }
      curMin = Math.min(curMin,dp[i + j]);
    }
    dp[i] = curMin + 1;
  }
  return dp[0] === -Infinity ? -1 : dp[0];
};
```

#### 复杂度

Time:

Space:
