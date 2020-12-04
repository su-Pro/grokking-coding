/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];
  dfs(root, sum, res, []);
  function dfs(root, sum, res, path) {
    if (root === null) return; // 防止下面dfs没有校验，对null节点获取left会报错
    if (root.val === sum && root.left === null && root.right === null) {
      res.push(path.slice().concat(root.val)); // 之所以concat是为了当叶子节点满足条件时，把当前节点的值加入进来
      // TODO
      return null;
    }
    path = [...path, root.val]; // 保证每一层保存一个path 这样在backTack时不需要删除元素
    dfs(root.left, sum - root.val, res, path);
    dfs(root.right, sum - root.val, res, path);
  }
  return res;
};
