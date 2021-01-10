/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */


var findClosestElements = function (arr, k, x) {
  let leftBaf = 0,
    rightBaf = arr.length - 1,
    mid = 0,
    result = new Array(k),
    n = 0,
    leng = arr.length;
  // 1.
  while (leftBaf < rightBaf - 1) {
    mid = Math.floor((leftBaf + rightBaf) / 2);
    // 只需要确定左右边界即可，所以不需要判断mid,并且要保留mid，不能跳过
    if (arr[mid] < x) {
      leftBaf = mid;
    } else {
      rightBaf = mid;
    }
  }
  // 2.
  while (n < k && leftBaf >= 0 && rightBaf < leng) {
    if (Math.abs(arr[leftBaf] - x) <= Math.abs(arr[rightBaf] - x)) {
      result[n++] = arr[leftBaf--]
    } else {
      result[n++] = arr[rightBaf++]
    }
  }
  // 边界处理
  while (n < k && leftBaf >= 0) {
    result[n++] = arr[leftBaf--];
  }
  while (n < k && rightBaf < leng) {
    result[n++] = arr[rightBaf++];
  }
  return result.sort((a, b) => a - b);
};