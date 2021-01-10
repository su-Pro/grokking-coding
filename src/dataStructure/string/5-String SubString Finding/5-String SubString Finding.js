function findSubString(large, small) {
  if (large === null || small === null) {
    return -1;
  }
  if (large.length < small.length) {
    return -1;
  }
  if (small.length === 0) {
    return -1;
  }
  // 1个元素debug： large => 's'  small => 's' 需要进循环的
  for (let i = 0; i <= large.length - small.length; i++) {
    for (let j = 0; i < small.length; j++) {
      if (small.charAt(j) !== large.charAt(i + j)) {
        break;
      }
      // 一直命中相等，并且small已经走完
      // 返回此时开始“相同逻辑”的起始索引i
      if (j === small.length - 1) {
        return i;
      }
    }
  }
  return -1;
}