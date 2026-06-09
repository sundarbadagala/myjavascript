function throttle(fn, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      fn(...args);
      setTimeout(() => (flag = true), delay);
    }
  };
}
// ---------------------------------------------------
function throttle2(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
