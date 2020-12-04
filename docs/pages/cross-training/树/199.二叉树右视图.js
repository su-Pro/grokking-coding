/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(root === null) {return []}
  let pQueue = [root],
      res = [],
      pQueueCurlen = -1,
      curRoot = null;
  
  while(pQueue.length > 0) {        
    pQueueCurlen = pQueue.length;
    for(var i = 0; i < pQueueCurlen;i ++) {
      curRoot = pQueue.shift();
      if(curRoot.left) { pQueue.push(curRoot.left) }
      if(curRoot.right) { pQueue.push(curRoot.right) }      
      if(i === pQueueCurlen - 1) res.push(curRoot.val);
    }    
  }
  return res;
};