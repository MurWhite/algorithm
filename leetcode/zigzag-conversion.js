/**
 * #6@https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  let sLen = s.length;
  let result = [];
  let oneZigCounts = Math.max(2 * numRows - 2, 1);
  let zigCounts = Math.ceil(sLen / oneZigCounts);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < zigCounts; j++) {
      if (i === 0) {
        result.push(s[j * oneZigCounts]);
      } else if (i === numRows - 1) {
        if (s[j * oneZigCounts + numRows - 1]) {
          result.push(s[j * oneZigCounts + numRows - 1]);
        }
      } else {
        result.push(s[j * oneZigCounts + i] || "");
        result.push(s[(j + 1) * oneZigCounts - i] || "");
      }
    }
  }
  return result.join("");
};
