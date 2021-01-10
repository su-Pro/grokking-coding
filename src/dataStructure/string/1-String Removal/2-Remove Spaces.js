function removeSpaces(str) {
  let slow = 0,
    fast = 0,
    count = 0;
  // 通过count标识当前是否是第一个词组

  // 同样通过一个数组来保存字符串，否则无法操作字符串的某个char
  let resString = [];
  for (let i = 0; i < str.length; i++) {
    resString.push(str[i]);
  }
  console.log(resString)
  while (1) {
    // 1. skip
    while (fast < resString.length && resString[fast] == ' ') {
      fast++
    }
    if (fast == resString.length) break;
    // 2. check is count?
    if (count > 0) {
      resString[slow++] = ' ';
    }
    // 3. copy
    while (fast < resString.length && resString[fast] !== ' ') {
      resString[slow++] = resString[fast++]
    }
    count++
  }
  return new String(resString.slice(0, slow))
}
let str = ' abc  bcd ef '
console.log(removeSpaces(str))