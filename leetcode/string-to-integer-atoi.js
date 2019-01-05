/**
 * #8@https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} str
 * @return {number}
 */
var isNumChar = function(c) {
  let char = c.charCodeAt();
  return char >= 48 && char <= 57;
};
var getNum = function(c) {
  let char = c.charCodeAt();
  return char - 48;
};
var myAtoi = function(str) {
  let num = [];
  let sign;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (sign === undefined) continue;
      else break;
    }
    if (str[i] === "+" || str[i] === "-") {
      if (sign === undefined) {
        sign = str[i] === "+";
        continue;
      } else {
        break;
      }
    }
    if (!isNumChar(str[i])) break;
    if (sign === undefined) {
      sign = true;
    }
    if (num.length === 0 && str[i] === "0") {
      continue;
    }
    num.push(str[i]);
  }
  num = num.join("");
  const max = "2147483647";
  const min = "2147483648";
  if (num.length > 9) {
    let m = sign ? max : min;
    if (num.length > 10) {
      num = m;
    } else {
      num = m < num ? m : num;
    }
  }
  num = num.split("").reduce((sum, cur) => {
    return (sum = sum * 10 + getNum(cur));
  }, 0);
  return sign ? num : -1 * num;
};
