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
var levelOrder = function(root) {
  if(root === null) return [];
  let curNode = null,
      pQueue = [root],
      curPQueueLen = -1,
      curLayerElms = null,
      res = [];
  while(pQueue.length > 0) {
    curPQueueLen = pQueue.length;
    curLayerElms = [];
    for(let i = 0;i < curPQueueLen;i++) {
      curNode = pQueue.shift();
      curLayerElms.push(curNode.val);
      if(curNode.left) { pQueue.push(curNode.left) };
      if(curNode.right) { pQueue.push(curNode.right) };    
    }
    res.push(curLayerElms);
  }
  return res;
};