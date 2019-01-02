/**
 * #102@https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
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
  if (!root) return [];
  const result = [];
  var queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelNodeCounts = queue.length;
    const levelResult = [];
    for (let i = 0; i < levelNodeCounts; i++) {
      const { val, left, right } = queue.shift();
      levelResult.push(val);
      left && queue.push(left);
      right && queue.push(right);
    }
    result.push(levelResult);
  }
  return result;
};
