/**
 * #724@https://leetcode.com/problems/find-pivot-index/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let len = nums.length;
  let sum = 0;

  const rightStack = [0];
  sum = 0;
  for (let i = len - 1; i > 0; i--) {
    sum += nums[i];
    rightStack.push(sum);
  }
  let tarIndex = -1;

  sum = 0;
  for (let i = 0; i < len; i++) {
    const right = rightStack[len - i - 1];
    if (sum === right) {
      tarIndex = i;
      break;
    }
    sum += nums[i];
  }

  return tarIndex;
};
