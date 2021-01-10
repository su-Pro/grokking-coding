/**
 * @param {number[]} height
 * @return {number}
 */


var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    area = 0,
    curArea = 0;
  //   相邻退出
  while (j - i >= 1) {
    //     右边需要向里挪动
    if (height[i] > height[j]) {
      //       当前的面积一定是由低的一侧决定
      curArea = height[j] * (j - i);
      j--
    } else {
      //       左侧需要向里挪动
      curArea = height[i] * (j - i);
      i++
    }
    //     flash max Area
    area = Math.max(area, curArea)
  }
  return area
};

console.log(maxArea([1, 1]));
