/** 使用
 *
 */

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function fullPermutation(arr) {
  console.log(arr.join("->"));

  arr.forEach((num, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      swap(arr, index, i);
    }
  });
}
