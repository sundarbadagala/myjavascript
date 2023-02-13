const arr = [1,3,2,1,3,4,6,7,4,1,2,3]

const newArr = Array.from( new Set(arr))

const newArr2 = [...new Set(arr)]

console.log(newArr);
console.log(newArr2);

