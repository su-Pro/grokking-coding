/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [],
    i = 0;
  while (i < s.length) {
    let char = s[i];
    // 如果s[i] == stack.top元素，那么需要让i skep掉所有相同的元素，之后stack弹出栈顶元素
    if (stack.length > 0 && s[i] === stack[stack.length - 1]) {
      while (i < s.length && s[i] === char) {
        i++
      }
      stack.pop()
    } else {
      // 否则将s[i] 入栈，并让i++
      stack.push(s[i])
      i++;
    }
  }
  // 此时stack保存了所有去重后的元素，只需要将s清空，并将所有元素依次移入s中即可
  s = '';
  while (stack.length) {
    s += stack.shift();
  }
  return s;
};

let str = 'aaa';

removeDuplicates(str);