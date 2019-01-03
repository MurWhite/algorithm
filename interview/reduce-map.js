function reduceMap(arr, cb) {
  return arr.reduce((prev, ...argus) => {
    prev.push(cb(...argus));
    return prev;
  }, []);
}

console.log(reduceMap([1, 2, 3], v => v * 2));
