var removeDuplicates = function (str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let stackTop = stack[stack.length - 1] ? stack[stack.length - 1] : '';
    if (str[i] == stackTop) {
      stack.pop();
    } else
      stack.push(str[i]);
  }
  return stack.join('')
};
