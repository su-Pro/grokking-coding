## Remove Certain Characters

[Remove Certain Characters](https://app.laicode.io/app/problem/395)

### 描述

Remove given characters in input string, the relative order of other characters should be remained. Return the new string after deletion.

Assumptions

The given input string is not null.
The characters to be removed is given by another string, it is guaranteed to be not null.
Examples

input = "abcd", t = "ab", delete all instances of 'a' and 'b', the result is "cd".

### 思路

示例：

```

s = "stuuent" t = "un" output = "stet"

```

方法1 ：

  - 遍历s，找到 u 和 n
  - 调API删除找到u和n
  - 最后返回经过删除的s

> 在JavaScript中，没有API能够删除指定的char，因此也不写了

重点在于：删除元素的时间复杂度是O(n),一层遍历还是O(n),那么整个时间复杂度还是很高的O(n^2)

方法2 ：快慢指针 + swap思想

快指针物理意义：嗖嗖向前跑，遍历整个字符串。
慢指针物理意义：所有不包含指定char(u、n)的字符串，是最终的返回结果。

总结为如下四步，如果还不是很理解的，可以看我画的图，以及标注好顺序

- 快、慢指针一起从头出发，当遇到u或者n时，慢指针停下。
- 快指针接着向前走，当遇到不为u或者n的元素时，将快慢指针对应的char进行swap。
- 交换完成后，快、慢指针一起向前走一步。（快指针本来就要向前走一步）
- 当快指针走到空时，此时慢指针以左时处理好的字符串，可以作为结果返回。

![20200706075855]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200706075855.png)

todo: 同类型的题：移动0

### 代码

```js
let str = 'stuuent';
t = ['u', 'n'];

function removeChar(str, t) {
  let slow = 0, fast = 0;
  let resArray = [];
  // 边界处理
  if (str === null || str.length === 0 || t === null) {
    return str;
  }
  // 为了方便处理，将str保存至数组中进行赋值操作
  // 字符串通过[]访问时，不可写，不可删。
  for (let i = 0; i < str.length; i++) {
    resArray[i] = str[i];
  }  
  // 快指针只要没有出界，就持续做
  while (fast < resArray.length) {
    // 当遇到t中元素时，slow指针需要停下；
    // 只有t不是指定元素时才继续走；
    if (!t.includes(resArray[fast])) {
      resArray[slow++] = resArray[fast]
    }
    fast++
  }  
  return new String(resArray.slice(0, slow))
}
console.log(removeChar(str, t));
```

#### 复杂度

Time: O（n）

Space: O(n)
