/**
 * #113@https://leetcode.com/problems/path-sum-ii/
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
let stack = [];
let result = [];
var isLeaf = n => n.left === null && n.right === null;
var deep = function(node, sum) {
  const { val, left, right } = node;
  stack.push(val);
  left && deep(left, sum - val);
  right && deep(right, sum - val);
  if (isLeaf(node)) {
    val === sum && result.push([...stack]);
  }
  stack.pop();
  return;
};
var pathSum = function(root, sum) {
  stack = [];
  result = [];
  root && deep(root, sum);
  return result;
};
