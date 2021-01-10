/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 * 思路：
 *   - 确立特殊值，左下角（垂直y轴方向最大，水平x轴最小）
 *   - 以特殊值和target进行比较，分别在小于和大于时进行移动，直到找到相等元素返回。
 *   - 如果超出边界，则返回不存在
 * 
 * 
 * 实现：
 *   1. 定义特殊值
 *     - curX：物理意义标识当前x轴的游标
 *     - curY：物理意义标识当前y轴的游标
 *   2. 遍历满足要求的curX & curY
 *     - 当 matrix[curX][curY] < target,  curY ++
 *     - 当 matrix[curX][curY] > target,  curX --
 *     - 当 matrix[curX][curY] = target, 返回 true
 * 
 *   3. 没有找到目标元素则返回false
 * @param {*} matrix 
 * @param {*} target 
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix === null || matrix.length === 0) { return false }
  let curX = matrix.length - 1,
    curY = 0;
  while (curX >= 0 && curY <= matrix[0].length) {
    if (matrix[curX][curY] === target) {
      return true
    } else if (matrix[curX][curY] < target) {
      curY++
    } else {
      curX--
    }
  }
  return false;
};