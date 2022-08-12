//All common array methods Higher Order Functions are Pure functions

const arr=[1,2,3,4]

const filterArr = arr.filter(item => item % 2 === 0)

console.log(filterArr)
console.log(arr)

const mapArr= arr.map(item => item*2)

console.log(mapArr)
console.log(arr)


