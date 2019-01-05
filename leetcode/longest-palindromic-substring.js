/**
 * #5@https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let arr = `,${s.split("").join(",")},`.split("");
  let maxStrRange = 0;
  let maxStrIndex;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j <= i && j + i < arr.length; j++) {
      let range = j * 2 + 1;
      if (arr[i - j] === arr[i + j]) {
        if (range > maxStrRange) {
          maxStrRange = range;
          maxStrIndex = i - j;
        }
      } else {
        j = i + 1;
      }
    }
  }
  if (maxStrIndex !== undefined) {
    return arr
      .splice(maxStrIndex, maxStrRange)
      .join("")
      .replace(/,/g, "");
  }
  return s;
};
