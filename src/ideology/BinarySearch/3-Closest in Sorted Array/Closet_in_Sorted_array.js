function binarySearch(arr, target) {
  if (arr === null || arr.length === 0) {
    return -1;
  }
  let left = 0,
    right = arr.length - 1,
    mid;
  // 夹单
  while (left + 1 < right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
      // 重点：不能略过mid元素
      // 如果mid元素刚好是最接近的就会失去正确答案
    } else if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  // 找到abs最小的元素返回
  // 如果两个差值相同，则返回了后面的元素
  if (Math.abs(arr[left] - target)
    < Math.abs(arr[right] - target)) {
    return left;
  } else {
    return right;
  }
}


let arr = [1, 2, 4, 7, 8]
console.log(binarySearch(arr, 3))