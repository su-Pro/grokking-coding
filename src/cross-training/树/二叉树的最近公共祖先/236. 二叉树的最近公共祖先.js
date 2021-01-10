/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/**
 * 思路ok，但是判断逻辑比较冗余
 */
var lowestCommonAncestor = function (root, p, q) {
  // if(root === null) { return null }
  // // 后续遍历
  // if(root == p) return p;
  // if(root == q) return q;
  // 合并上述条件
  if (root === null || root == p || root == q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 进行判断
  // if(left && right) return root;
  // if(left || right) return left || right;
  // if(!left && !right) return null;
  // 合并上述条件
  if (left === null && right === null) return null;
  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
  return root; // 一定是最近公共祖先
};
