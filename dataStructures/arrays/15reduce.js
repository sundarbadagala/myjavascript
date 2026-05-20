const arr = [1, 2, 3, 4];

const arr2 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(arr2)

const arr3 = arr.reduce((curr, acc) => curr + acc);
console.log(arr3)

const arr4 = arr.reduce((curr, acc) => curr * acc);
console.log(arr4)
