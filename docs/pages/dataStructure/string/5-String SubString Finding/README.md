## Determine if One String is Another's Substring

[Determine if One String is Another's Substring](https://app.laicode.io/app/problem/85)

### Description

Determine if a small string is a substring of another large string.

Return the index of the first occurrence of the small string in the large string.

Return -1 if the small string is not a substring of the large string.

Assumptions

Both large and small are not null
If small is empty string, return 0
Examples

"ab" is a substring of "bcabc", return 2
"bcd" is not a substring of "bcabc", return -1
"" is substring of "abc", return 0

### 思路

方法1： 暴力对比

todo: 方法2： Robin-Karp

### 代码

暴力对比

```js
function findSubString(large,small) {
  if(large === null || small === null) {
    return -1;
  }
  if(large.length < small.length) {
    return -1;
  }
  if(small.length === 0) {
    return -1;
  }
  // 1个元素debug： large => 's'  small => 's' 需要进循环的
  for(let i = 0;i <= large.length - small.length;i++) {
    for(let j = 0;i < small.length;j++) {
      if(small.charAt(j) !== large.charAt(i + j) ){
        break;
      }
      // 一直命中相等，并且small已经走完
      // 返回此时开始“相同逻辑”的起始索引i
      if(j === small.length - 1) {
        return i;
      }
    }
  }
  return -1;
}
```

#### 复杂度

Time: large的字符串中，我们需要从每一个位置都判断一次是否为小字符串的索引，并尝试走完小字符串。 所以  => o(n * m ) => O(n ^ 2)

Space:o(1)
