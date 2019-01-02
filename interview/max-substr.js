/** 求最长公共子序列
 *
 */

const resolved = [];
function maxSubStr(arrX, arrY) {
  let lenX = arrX.length;
  let lenY = arrX.length;
  if (resolved[lenX - 1] && resolved[lenX - 1][lenY - 1]) {
  }
  if (arrX[lenX - 1] === arrY[lenY - 1]) {
    let tY = resolved[lenX - 1] || [];
    tY[lenY - 1] = true;
    resolved[lenX - 1] = tY;
  } else {
    maxSubStr(arrX);
  }
}
