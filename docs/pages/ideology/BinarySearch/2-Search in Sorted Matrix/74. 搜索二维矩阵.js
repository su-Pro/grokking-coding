/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 矩阵的行
  let _mRow = matrix.length;
  // 矩阵的列
  let _mCol = matrix[0].length;

  // 定义左右指针
  let left = 0,
    right = _mCol * _mRow - 1,
    mid = 0;
  // 错位退出
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    // map回 Martix
    let r, c;
    r = Math.floor(mid / _mCol);
    c = mid % _mCol;
    if (matrix[r][c] === target) {
      return true
    } else if (matrix[r][c] < target) {
      // leftBaf ++
      left = mid + 1;
    } else {
      // rightBaf --
      right = mid - 1;
    }
  }
  return false;
};


searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)