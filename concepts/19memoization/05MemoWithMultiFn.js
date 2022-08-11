const squareFn = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      count++;
    }
  }
  return count;
};

const cubeFn = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        count++;
      }
    }
  }
  return count;
};

const isPrimeFn = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return i;
    }
  }
  return true;
};

const multipleFn = (...n) => {
  console.log(n.toString());
  let res = 1;
  for (let i = 0; i < n.length; i++) {
    res *= n[i];
  }
  return res;
};

const memoizationFn = (callback) => {
  const memoizedObj = {};
  return (...args) => {
    let n = args.toString();
    if (!memoizedObj[n]) {
      memoizedObj[n] = callback(...args);
    }
    return memoizedObj[n];
  };
};

const square = memoizationFn(squareFn);
const cube = memoizationFn(cubeFn);
const isPrime = memoizationFn(isPrimeFn);
const multiple = memoizationFn(multipleFn)

// console.log(multipleFn(1, 3, 4, 9));

console.time()
console.log('900',square(900))
console.timeEnd()

console.time()
console.log('900',cube(900))
console.timeEnd()

console.time()
console.log('900',cube(900))
console.timeEnd()

console.time()
console.log('800',square(800))
console.timeEnd()

console.time()
console.log('900',isPrimeFn(900))
console.timeEnd()

console.time()
console.log('800',square(800))
console.timeEnd()

console.time()
console.log('800',cube(800))
console.timeEnd()

console.time()
console.log('900',isPrimeFn(900))
console.timeEnd()

console.time()
console.log('mult',multiple(9,5,7,3,8,2,5))
console.timeEnd()

console.time()
console.log('900',square(900))
console.timeEnd()

console.time()
console.log('900',isPrimeFn(900))
console.timeEnd()

console.time()
console.log('800',cube(800))
console.timeEnd()

console.time()
console.log('1007',isPrimeFn(1007))
console.timeEnd()

console.time()
console.log('1007',isPrimeFn(1007))
console.timeEnd()

console.time()
console.log('mult',multiple(9,5,7,3,8,2,5))
console.timeEnd()

console.time()
console.log('mult',multiple(9,5,7,3,8,2,5))
console.timeEnd()

console.time()
console.log('mult',multiple(9,5,7,3,8,2,5))
console.timeEnd()