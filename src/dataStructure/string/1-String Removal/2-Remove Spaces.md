## Remove Spaces

[Remove Spaces](https://app.laicode.io/app/problem/281)

### 描述

Description
Given a string, remove all leading/trailing/duplicated empty spaces.

Assumptions:

The given string is not null.
Examples:

"__a" --> "a"
"__I__love_MTV__ " --> "I love MTV"

### 思路

和上一道题类似，可以将问题抽象成`(xxx)(_xxx1)(_xxx2)(_xxx3)`这样。

1. 让快指针skip掉所有空格
2. 第一个词组不加空格，后续词组前面统一加上空格
3. 快指针不为空格时，copy 到slow指针上

![20200706080932]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200706080932.png)

### 代码

```js
function removeSpaces(str) {
  let slow = 0,
    fast = 0,
    count = 0; // 通过count标识当前是否是第一个词组
  // 同样通过一个数组来保存字符串，否则无法操作字符串的某个char
  let resString = [];
  for(let i = 0;i < str.length;i++) {
    resString.push(str[i]);
  }  
  while (1) {
    // 1. skip
    while (fast < resString.length && resString[fast] == ' ') {
      fast++
    }
    if (fast == resString.length) break;
    // 2. check is first word group ?
    if (count > 0) {
      resString[slow++] = ' ';
    }
    // 3. copy
    while (fast < resString.length && resString[fast] !== ' ' ) {
      resString[slow++] = resString[fast++]
    }
    count++
  }
  return new String(resString.slice(0,slow))
}



let str = ' abc  bcd ef '
console.log(removeSpaces(str) )
```

#### 复杂度

Time: O（n）

Space: O(n)

> 这就是JavaScript字符串不好的一面：无法直接操作每个Char，如果是在c++或者Java中就不需要**临时数组**，in-place就能做。
