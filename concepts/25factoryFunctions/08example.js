const factoryFn = (() => {
  const sum = (args) => {
    return args.reduce((curr, acc) => curr + acc, 0);
  };
  const multiple = (args) => {
    return args.reduce((curr, acc) => curr * acc, 1);
  };
  const max = (args) => {
    return Math.max(...args);
  };
  const decorator = (callback) => {
    return (args) => {
      const isValidate = args.some((item) => Number.isInteger(item));
      if (!isValidate) {
        throw new TypeError("arguments cannot be non-integer");
      }
      return callback(args);
    };
  };
  const passingFn = (fn, params) => {
    const newFn = decorator(fn);
    return newFn(params);
  };
  return {
    sum(...params) {
      return passingFn(sum, params);
    },
    multiple(...params) {
      return passingFn(multiple, params);
    },
    max(...params) {
      return passingFn(max, params);
    },
  };
})();

console.log(factoryFn.sum(1, 2, 3, 4));
console.log(factoryFn.multiple(1, 2, 3, 4));
console.log(factoryFn.max(1, 2, 3, 4));
