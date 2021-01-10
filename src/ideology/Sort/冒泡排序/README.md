## 冒泡排序

### 思路

外层循环物理意义：check所有元素是否都已经到最大的位置上。

内层循环物理意义：保证当前序列中最后一个元素是最大的！这个序列是根据i的变化而递减的。

### 代码

```js
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
```

#### 复杂度

Time: O(n ^ 2)

Space: O(1)
