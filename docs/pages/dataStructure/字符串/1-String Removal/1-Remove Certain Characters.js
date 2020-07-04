let str = 'stuuent';
t = ['u', 'n'];
console.log(typeof new String(t));

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


