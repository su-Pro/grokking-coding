function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var sorted = true;
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      sorted = false;
    }
    if (sorted) {
      break;
    }
  }
  return arr;
}
var arr = [123, 122, 12, 4, 135, 4, 1];
console.log(bubbleSort(arr));