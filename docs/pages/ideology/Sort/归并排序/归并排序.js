function mergeSort(arr) {
  if (arr === null || arr.length === 0) {
    return arr;
  }
  // 用来移动指针时能够正确访问元素
  let temp = arr.slice();
  console.log(temp)
  helper(arr, temp, 0, arr.length - 1);
  return arr;
  /**
 * 向下递归拆分
 * @param arr
 * @param temp
 * @param start
 * @param end
 */
  function helper(arr, temp, start, end) {
    //base case
    if (start >= end) {
      return;
    }
    let mid = start + (end - start) / 2;
    helper(arr, temp, start, mid);
    helper(arr, temp, mid + 1, end);
    // 在当前层谁小移动谁,最后进行合并
    merge(arr, temp, start, mid, end);
  }
  function merge(arr, temp, start, mid, end) {
    //  定义左右移动指针 + 标识排序数组的当前索引index
    let left = start, right = end, index = start;
    // 持续移动的情况，左：没有超过mid 右：没有超出end
    while (left <= mid && right <= end) {
      if (temp[left] <= temp[right]) {
        arr[index++] = temp[left++]
      } else {
        arr[index++] = temp[right++]
      }
    }
    //  处理最后有剩余情况，由于一刀两半，mid划分到左边，因此右边一定不会剩余
    while (left <= mid) {
      arr[index++] = temp[left++]
    }
  }

}

let arr = [1, 3, 2];

console.log(mergeSort(arr));

