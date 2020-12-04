/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function buildBST(nums,left,right) {
    if(left > right) {
      return null;
    }
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums,left,mid - 1)
    root.right = buildBST(nums,mid + 1,right);
    return root;
  }
  return buildBST(nums,0,nums.length - 1);
};