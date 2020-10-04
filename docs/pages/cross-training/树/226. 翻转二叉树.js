/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * 思路：
 *  - 递归到叶子节点
 *  - 交换当前节点的左右子树
 */
var invertTree = function (root) {
  if (root === null) return root;
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right;
  root.right = left;
  return root;
};