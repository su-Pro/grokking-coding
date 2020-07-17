## 139. 单词拆分

[139. 单词拆分](https://leetcode-cn.com/problems/word-break/)

### 描述

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
```

示例 2：

```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
```

示例 3：

```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

### 思路

![20200715091408]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200715091408.png)

### 代码

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // dp[i]表示0-i之间的字符串是否可以被拆分并满足题设条件存在于wordDict中
  let dp = new Array(s.length).fill(false);
  let set = new Set(wordDict);
  for(let i = 0;i < s.length;i++) {        
    // 只要有一个为true 直接看下一个单词，等同于 case1 || case2 || case3...
    if(set.has(s.substring(0,i+1))){
      dp[i] = true;
      continue;
    }
    // 左大段和右小段
    // 左大段表示历史上还可以再分，并且是最优解的那个答案
    // 右小段表示直接可以从数据中获取处理结果的，不能cute，单成一派        
    for(let j =0;j < i;j++) {
      if(dp[j] && set.has(s.substring(j+1,i + 1))){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length - 1];        
}
```

#### 复杂度

Time:

Space:
