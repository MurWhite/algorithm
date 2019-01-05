/**
 * #640@https://leetcode.com/problems/solve-the-equation/
 * @param {string} exp
 * @return { coefficient:number, num:number }
 */
var struct = function(exp) {
  let pattern = /([\+-]?\d*)(x*)/g;
  let num = 0;
  let coefficient = 0;
  let r = pattern.exec(exp);
  while (r[0]) {
    if (r[2] && r[2] === "x") {
      let n = r[1];
      if (n === "+") {
        n = 1;
      } else if (n === "-") {
        n = -1;
      } else if (n === "") {
        n = 1;
      }
      coefficient += Number(n);
    } else {
      num += Number(r[1]);
    }
    r = pattern.exec(exp);
  }
  return { coefficient, num };
};

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  let es = equation.split("=");
  let left = es[0];
  let right = es[1];
  let { num: lN, coefficient: lC } = struct(left);
  let { num: rN, coefficient: rC } = struct(right);
  lC = lC - rC;
  rN = rN - lN;
  if (lC === 0) {
    if (rN === 0) {
      return "Infinite solutions";
    }
    return "No solution";
  }
  return `x=${rN / lC}`;
};
