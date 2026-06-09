const arr = [1, 2, 4, 5];

function main(arr) {
  const len = arr.length + 1;
  const originalSum = (len * (len + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return originalSum - actualSum;
}

console.log(main(arr));
