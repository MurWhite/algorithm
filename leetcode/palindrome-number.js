/**
 * #9@https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = `${x}`;
  let r = true;
  const offset = s.length % 2 === 0 ? 1 : 0;
  const mid = Math.floor(s.length / 2);
  for (let j = 1; j <= mid; j++) {
    let left = mid - j;
    let right = mid + j - offset;
    if (s[left] !== s[right]) {
      r = false;
      break;
    }
  }
  return r;
};
