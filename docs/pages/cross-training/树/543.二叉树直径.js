/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ansMaxDiameter = 1;
  getHeightMax(root);
  function getHeightMax(root) {
    if (root === null) {
      return 0;
    }
    let leftHight = getHeightMax(root.left);
    let rightHight = getHeightMax(root.right);
    ansMaxDiameter = Math.max(ansMaxDiameter, leftHight + rightHight + 1); // + 1代表算上当前root节点
    return Math.max(leftHight, rightHight) + 1;
  }
  return ansMaxDiameter - 1;
};
