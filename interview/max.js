/**
 * 给定一个数组序列, 需要求选出一个区间, 使得该区间是所有区间中经过如下计算的值最大的一个：
 * 区间中的最小数 * 区间所有数的和最后程序输出经过计算后的最大值即可，不需要输出具体的区间。如给定序列  [6 2 1]则根据上述公式, 可得到所有可以选定各个区间的计算值:
 * [6] = 6 * 6 = 36;
 * [2] = 2 * 2 = 4;
 * [1] = 1 * 1 = 1;
 * [6,2] = 2 * 8 = 16;
 * [2,1] = 1 * 3 = 3;
 * [6, 2, 1] = 1 * 9 = 9;
 * 从上述计算可见选定区间 [6] ，计算值为 36， 则程序输出为 36。
 * 区间内的所有数字都在[0, 100]的范围内;
 */
function calcVal(arr) {
  const o = arr.reduce(
    ({ min, sum }, c) => {
      return {
        min: Math.min(min, c),
        sum: sum + c
      };
    },
    { min: 101, sum: 0 }
  );
  return o.min * o.sum;
}
function maxRange(arr) {
  let maxLen = arr.length;
  let max = 0;
  for (let i = 0; i < maxLen; i++) {
    for (let j = i; j < maxLen; j++) {
      let subArr = arr.slice(i, j + 1);
      max = Math.max(max, calcVal(subArr));
    }
  }
  console.log(max);
}
// 以每个数为最小值，获取这种情况下的最大值。
function maxRange2(arr) {
  let max = 0;
  arr.forEach((n, idx) => {
    let sum = n;
    // 往左侧扩展
    for (let i = idx - 1; i >= 0; i--) {
      if (arr[i] >= n) {
        sum += arr[i];
      } else {
        break;
      }
    }
    // 往右侧扩展
    for (let i = idx + 1; i < arr.length; i++) {
      if (arr[i] >= n) {
        sum += arr[i];
      } else {
        break;
      }
    }
    max = Math.max(sum * n, max);
  });
  console.log(max);
}

maxRange2([4, 6, 5, 1]);
