/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(root === null) return [];
  // 需要用一个变量来维护何时需要翻转结果，可以使用变量来表示 如果为true 说明需要翻转
  let curNode = null,
      pQueue = [root],
      res = [],
      curLayerRoots = [],
      curpQueueLen = -1,
      isEven = false; // 第一次为奇数层
  while( pQueue.length > 0 ) {
    curpQueueLen = pQueue.length;
    curLayerRoots = [];
    for(let i = 0;i < curpQueueLen;i++) {
      curNode = pQueue.shift();
      curLayerRoots.push(curNode.val);
      if(curNode.left) { pQueue.push(curNode.left) }
      if(curNode.right) { pQueue.push(curNode.right) }
    }
    // 进行判断并修改标志位
    if(isEven) { 
      res.push(curLayerRoots.reverse())
     } else {
       res.push(curLayerRoots)
     }
    isEven = !isEven
  }
  return res;
};