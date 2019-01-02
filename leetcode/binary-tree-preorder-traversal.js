/**
 * #144@https://leetcode.com/problems/binary-tree-preorder-traversal/
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
var recursive = function(node) {
  if (!node) {
    return [];
  }
  const { val, left, right } = node;
  return [val].concat(recursive(left).concat(recursive(right)));
};
var iteratively = function(root) {
  if (!root) return [];
  let stack = [];
  let result = [];
  stack.push(root);
  while (stack.length !== 0) {
    const { val, left, right } = stack.pop();
    result.push(val);
    right && stack.push(right);
    left && stack.push(left);
  }
  return result;
};
var preorderTraversal = function(root) {
  return iteratively(root);
};
