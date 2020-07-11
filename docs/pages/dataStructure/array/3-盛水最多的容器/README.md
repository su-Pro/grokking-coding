## 11. 盛最多水的容器

[11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

### 描述

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

![20200711163602]( https://supyyy-1259673491.cos.ap-beijing.myqcloud.com/2020/pictures20200711163602.png)

说明：你不能倾斜容器，且 n 的值至少为 2。

示例：

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

### 思路

双指针夹逼法

- i 和 j 指针顶在两头，此时横轴一定最大，只需要确定纵轴相对初始位置最高即可

- 循环比较i 和 j 当前的高度，谁小移动谁（里面有可能存在大的，因此是i++,j--）
- 当 i 和 j 相遇说明处理完毕，退出即可

### 代码

```js
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
```

#### 复杂度

Time: 需要遍历整个数组， => O(n)

Space: O(1)
