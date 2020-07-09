/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 处理输入，存入到一个数组中好操作
  let sArr = s.split('');
  // i love yahoo => ["i", " ", "l", "o", "v", "e", " ", "y", "a", "h", "o", "o"]
  let lowerBound = 0,
    upperBound = 1,
    count = 0;
  // 1 整体翻转  
  revese(sArr, 0, s.length - 1);

  for (; upperBound < sArr.length; upperBound++) {
    // 找到第一个单词组
    if (sArr[upperBound] === ' ') {
      revese(sArr, lowerBound, upperBound - 1);
      count++;
      while (sArr[upperBound + 1] === ' ') {
        upperBound++;
      }
      lowerBound = upperBound + 1;
    } else if (upperBound === sArr.length - 1) {
      // 找到最后一个单词组
      revese(sArr, lowerBound, upperBound)
    }
  }
  return sArr.join('')
  // 将数组转化成字符串返回  
  // todo：边界条件处理：
  // 1. 头部空格
  // 2. 中间连续空格
  function revese(s, lower, upper) {
    while (lower <= upper) {
      [s[lower], s[upper]] = [s[upper], s[lower]];
      lower++;
      upper--
    }
  }
};