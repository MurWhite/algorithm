function customDebounce(fn, delay) {
  let interval;
  return function() {
    if (interval) {
      clearTimeout(interval);
    }
    let args = arguments;
    interval = setTimeout(() => {
      interval = null;
      fn && fn(...args);
    }, delay);
  };
}

function customThrottle(fn, delay) {
  let interval;
  let start;
  return function() {
    let gap = 0;
    if (!interval) {
      start = +new Date();
      gap = 0;
    } else {
      clearTimeout(interval);
      gap = +new Date() - start;
    }
    let args = arguments;
    interval = setTimeout(() => {
      interval = null;
      fn && fn(...args);
    }, delay - gap);
  };
}
let go = customThrottle(function() {
  console.log(...arguments);
}, 1000);
go(1);
go(2);
go(3);
setTimeout(() => {
  go("again 1");
}, 1000);
