//memoization

const add = (a, b) => {
  return a + b;
};

const memo = (callback) => {
  let cache = {};
  return (a, b) => {
    const key = String([a, b]);
    if (!cache[key]) {
      console.log("coming inside");
      cache[key] = callback(a, b);
    }
    return cache[key];
  };
};

const addFn = memo(add);

console.log(addFn(1, 2));
console.log(addFn(1, 2));
console.log(addFn(1, 2));
