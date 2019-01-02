/** 全排列
 * 不能生成全排列树，那样内存占用过大，会造成内存溢出
 * 只能用生成全排列树的方式，去遍历
 */
const root = {
  val: null,
  childs: []
};
// 全排列树的方式来遍历访问
const tempStack = [];
function deepChilds(list) {
  if (list.length === 0) {
    console.log(tempStack.join("->"));
    return null;
  }
  return list.map((val, index) => {
    let tList = [...list];
    tList.splice(index, 1);
    tempStack.push(val);
    deepChilds(tList);
    tempStack.pop();
    tList = null;
  });
}

function fullPermutation(arr) {
  root.childs = deepChilds(arr);
}

// fullPermutation("abc".split(""));
// fullPermutation("abcde".split(""));
fullPermutation("abcdefghijkl".split(""));
